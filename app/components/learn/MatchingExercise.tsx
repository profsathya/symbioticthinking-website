"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, RotateCcw, ArrowRight } from "lucide-react";

interface MatchPair {
    id: string;
    left: string;
    right: string;
}

interface MatchingExerciseProps {
    title: string;
    instruction: string;
    pairs: MatchPair[];
    leftHeader?: string;
    rightHeader?: string;
    successMessage?: string;
    context?: string; // Real-world framing
}

export function MatchingExercise({
    title,
    instruction,
    pairs,
    leftHeader = "Scenario",
    rightHeader = "Best Response",
    successMessage = "You've correctly matched all items!",
    context
}: MatchingExerciseProps) {
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matches, setMatches] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    // Shuffle right side items for the exercise
    const [shuffledRight] = useState(() =>
        [...pairs].sort(() => Math.random() - 0.5).map(p => ({ id: p.id, text: p.right }))
    );

    const handleLeftClick = (id: string) => {
        if (showResults) return;
        if (matches[id]) {
            // Unselect if already matched
            const newMatches = { ...matches };
            delete newMatches[id];
            setMatches(newMatches);
        } else {
            setSelectedLeft(id);
        }
    };

    const handleRightClick = (rightId: string) => {
        if (showResults || !selectedLeft) return;

        // Check if this right item is already matched
        const existingMatch = Object.entries(matches).find(([, r]) => r === rightId);
        if (existingMatch) {
            // Remove the existing match
            const newMatches = { ...matches };
            delete newMatches[existingMatch[0]];
            setMatches(newMatches);
        }

        // Create new match
        setMatches({ ...matches, [selectedLeft]: rightId });
        setSelectedLeft(null);
    };

    const handleCheck = () => {
        setShowResults(true);
    };

    const handleReset = () => {
        setMatches({});
        setSelectedLeft(null);
        setShowResults(false);
    };

    const allMatched = Object.keys(matches).length === pairs.length;

    const correctCount = pairs.filter(p => matches[p.id] === p.id).length;
    const allCorrect = correctCount === pairs.length;

    const getMatchColor = (leftId: string) => {
        if (!showResults) return "";
        const matchedRightId = matches[leftId];
        if (!matchedRightId) return "";
        return matchedRightId === leftId ? "bg-emerald-100 border-emerald-300" : "bg-red-100 border-red-300";
    };

    const getRightMatchColor = (rightId: string) => {
        if (!showResults) return "";
        const matchEntry = Object.entries(matches).find(([, r]) => r === rightId);
        if (!matchEntry) return "";
        return matchEntry[0] === rightId ? "bg-emerald-100 border-emerald-300" : "bg-red-100 border-red-300";
    };

    return (
        <div className="my-8 not-prose">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 border-b border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                    {context && (
                        <p className="text-sm text-purple-800 mb-2">{context}</p>
                    )}
                    <p className="text-sm text-gray-600">{instruction}</p>
                </div>

                <div className="p-5">
                    {/* Column Headers */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {leftHeader}
                        </div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {rightHeader}
                        </div>
                    </div>

                    {/* Matching Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Left Column */}
                        <div className="space-y-2">
                            {pairs.map((pair) => {
                                const isSelected = selectedLeft === pair.id;
                                const isMatched = !!matches[pair.id];
                                const matchColor = getMatchColor(pair.id);

                                return (
                                    <button
                                        key={pair.id}
                                        onClick={() => handleLeftClick(pair.id)}
                                        disabled={showResults}
                                        className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm ${
                                            matchColor || (
                                                isSelected
                                                    ? "border-purple-500 bg-purple-50"
                                                    : isMatched
                                                        ? "border-blue-400 bg-blue-50"
                                                        : "border-gray-200 hover:border-gray-300"
                                            )
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {showResults && matches[pair.id] && (
                                                matches[pair.id] === pair.id
                                                    ? <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                    : <X className="w-4 h-4 text-red-600 flex-shrink-0" />
                                            )}
                                            <span>{pair.left}</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-2">
                            {shuffledRight.map((item) => {
                                const isMatched = Object.values(matches).includes(item.id);
                                const matchColor = getRightMatchColor(item.id);

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleRightClick(item.id)}
                                        disabled={showResults || !selectedLeft}
                                        className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm ${
                                            matchColor || (
                                                isMatched
                                                    ? "border-blue-400 bg-blue-50"
                                                    : selectedLeft
                                                        ? "border-gray-200 hover:border-purple-300 hover:bg-purple-50 cursor-pointer"
                                                        : "border-gray-200 opacity-70"
                                            )
                                        }`}
                                    >
                                        {item.text}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Match Lines Indicator */}
                    {Object.keys(matches).length > 0 && !showResults && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {Object.entries(matches).map(([leftId, rightId]) => {
                                const leftItem = pairs.find(p => p.id === leftId);
                                const rightItem = shuffledRight.find(r => r.id === rightId);
                                return (
                                    <span key={leftId} className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                        <span className="max-w-[100px] truncate">{leftItem?.left}</span>
                                        <ArrowRight className="w-3 h-3" />
                                        <span className="max-w-[100px] truncate">{rightItem?.text}</span>
                                    </span>
                                );
                            })}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="mt-5 flex gap-3">
                        {!showResults ? (
                            <button
                                onClick={handleCheck}
                                disabled={!allMatched}
                                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                                    allMatched
                                        ? "bg-gray-900 text-white hover:bg-gray-800"
                                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                }`}
                            >
                                Check Matches ({Object.keys(matches).length}/{pairs.length})
                            </button>
                        ) : (
                            <button
                                onClick={handleReset}
                                className="flex-1 py-3 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Try Again
                            </button>
                        )}
                    </div>

                    {/* Results */}
                    <AnimatePresence>
                        {showResults && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-4 p-4 rounded-lg ${
                                    allCorrect
                                        ? "bg-emerald-50 border border-emerald-200"
                                        : "bg-amber-50 border border-amber-200"
                                }`}
                            >
                                <p className={`text-sm font-medium ${
                                    allCorrect ? "text-emerald-800" : "text-amber-800"
                                }`}>
                                    {allCorrect
                                        ? successMessage
                                        : `${correctCount} of ${pairs.length} correct. Review the mismatches and try again to solidify your understanding.`}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
