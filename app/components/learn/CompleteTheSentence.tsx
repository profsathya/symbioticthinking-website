"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Lightbulb, ChevronDown } from "lucide-react";

interface BlankOption {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
}

interface CompleteTheSentenceProps {
    context?: string;
    sentenceParts: string[]; // Array where blanks are represented by empty strings
    blanks: BlankOption[][]; // Array of option arrays, one for each blank
    successMessage?: string;
    hint?: string;
}

export function CompleteTheSentence({
    context,
    sentenceParts,
    blanks,
    successMessage = "You've completed the sentence correctly!",
    hint
}: CompleteTheSentenceProps) {
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
        new Array(blanks.length).fill(null)
    );
    const [submitted, setSubmitted] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const handleSelect = (blankIndex: number, optionId: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[blankIndex] = optionId;
        setSelectedAnswers(newAnswers);
        setActiveDropdown(null);
    };

    const handleSubmit = () => {
        if (selectedAnswers.every(a => a !== null)) {
            setSubmitted(true);
        }
    };

    const handleReset = () => {
        setSelectedAnswers(new Array(blanks.length).fill(null));
        setSubmitted(false);
    };

    const allCorrect = blanks.every((options, i) => {
        const selected = options.find(o => o.id === selectedAnswers[i]);
        return selected?.isCorrect;
    });

    const getSelectedOption = (blankIndex: number) => {
        return blanks[blankIndex].find(o => o.id === selectedAnswers[blankIndex]);
    };

    // Build the sentence with inline dropdowns
    const renderSentence = () => {
        const elements: React.ReactNode[] = [];
        let blankIndex = 0;

        sentenceParts.forEach((part, i) => {
            if (part) {
                elements.push(
                    <span key={`part-${i}`} className="text-gray-800">
                        {part}
                    </span>
                );
            }

            // Add blank after each part except the last
            if (i < sentenceParts.length - 1) {
                const currentBlankIndex = blankIndex;
                const selectedOption = getSelectedOption(currentBlankIndex);
                const isCorrect = submitted && selectedOption?.isCorrect;
                const isIncorrect = submitted && selectedOption && !selectedOption.isCorrect;

                elements.push(
                    <span key={`blank-${currentBlankIndex}`} className="inline-block relative mx-1">
                        <button
                            onClick={() => !submitted && setActiveDropdown(
                                activeDropdown === currentBlankIndex ? null : currentBlankIndex
                            )}
                            disabled={submitted}
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg border-2 transition-all min-w-[120px] justify-between ${
                                submitted
                                    ? isCorrect
                                        ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                                        : isIncorrect
                                            ? "border-red-500 bg-red-50 text-red-800"
                                            : "border-gray-300 bg-gray-50"
                                    : selectedOption
                                        ? "border-blue-500 bg-blue-50 text-blue-800"
                                        : "border-dashed border-gray-400 bg-gray-50 text-gray-500 hover:border-gray-500"
                            }`}
                        >
                            <span className="text-sm font-medium">
                                {selectedOption?.text || "Select..."}
                            </span>
                            {!submitted && <ChevronDown className="w-4 h-4" />}
                        </button>

                        {/* Dropdown */}
                        <AnimatePresence>
                            {activeDropdown === currentBlankIndex && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="absolute z-20 top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px]"
                                >
                                    {blanks[currentBlankIndex].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleSelect(currentBlankIndex, option.id)}
                                            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                                                selectedAnswers[currentBlankIndex] === option.id
                                                    ? "bg-blue-50 text-blue-800 font-medium"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {option.text}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </span>
                );

                blankIndex++;
            }
        });

        return elements;
    };

    return (
        <div className="my-8 not-prose">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {/* Context */}
                {context && (
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 border-b border-gray-100">
                        <p className="text-sm text-amber-900 leading-relaxed">
                            {context}
                        </p>
                    </div>
                )}

                <div className="p-5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Complete the sentence
                    </p>

                    {/* Sentence with blanks */}
                    <div className="text-lg leading-loose mb-6">
                        {renderSentence()}
                    </div>

                    {hint && !submitted && (
                        <p className="text-sm text-gray-500 italic mb-4">
                            💡 Hint: {hint}
                        </p>
                    )}

                    {/* Submit Button */}
                    {!submitted && (
                        <button
                            onClick={handleSubmit}
                            disabled={selectedAnswers.some(a => a === null)}
                            className={`w-full py-3 rounded-lg font-medium transition-all ${
                                selectedAnswers.every(a => a !== null)
                                    ? "bg-gray-900 text-white hover:bg-gray-800"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            Check Answer
                        </button>
                    )}

                    {/* Feedback */}
                    <AnimatePresence>
                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className={`p-4 rounded-lg mb-4 ${
                                    allCorrect
                                        ? "bg-emerald-50 border border-emerald-200"
                                        : "bg-amber-50 border border-amber-200"
                                }`}>
                                    <div className="flex items-start gap-3">
                                        {allCorrect ? (
                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                        )}
                                        <p className={`text-sm ${
                                            allCorrect ? "text-emerald-800" : "text-amber-800"
                                        }`}>
                                            {allCorrect ? successMessage : "Some answers need revision. Here's why each choice matters:"}
                                        </p>
                                    </div>
                                </div>

                                {/* Individual feedback for incorrect answers */}
                                {!allCorrect && (
                                    <div className="space-y-2 mb-4">
                                        {blanks.map((options, i) => {
                                            const selected = options.find(o => o.id === selectedAnswers[i]);
                                            if (!selected || selected.isCorrect) return null;

                                            const correct = options.find(o => o.isCorrect);
                                            return (
                                                <div key={i} className="bg-gray-50 p-3 rounded-lg text-sm">
                                                    <p className="text-gray-600">
                                                        <span className="line-through text-red-600">{selected.text}</span>
                                                        {" → "}
                                                        <span className="text-emerald-600 font-medium">{correct?.text}</span>
                                                    </p>
                                                    <p className="text-gray-500 mt-1">{selected.feedback}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                <button
                                    onClick={handleReset}
                                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                                >
                                    Try again
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
