"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb, ChevronRight } from "lucide-react";

interface Choice {
    id: string;
    text: string;
    feedback: string;
    isCorrect?: boolean; // For knowledge checks
    insight?: string;    // For self-reflection (no right/wrong)
}

interface MultipleChoiceProps {
    scenario: string;
    question: string;
    choices: Choice[];
    mode?: "knowledge" | "reflection"; // knowledge = right/wrong, reflection = reveals tendencies
    followUp?: string;
}

export function MultipleChoice({
    scenario,
    question,
    choices,
    mode = "knowledge",
    followUp
}: MultipleChoiceProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const selectedChoice = choices.find(c => c.id === selectedId);
    const isCorrect = mode === "knowledge" && selectedChoice?.isCorrect;

    const handleSubmit = () => {
        if (selectedId) {
            setSubmitted(true);
        }
    };

    const handleReset = () => {
        setSelectedId(null);
        setSubmitted(false);
    };

    return (
        <div className="my-8 not-prose">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {/* Scenario Context */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 border-b border-gray-100">
                    <p className="text-sm text-blue-900 leading-relaxed font-medium">
                        {scenario}
                    </p>
                </div>

                {/* Question */}
                <div className="p-5">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {question}
                    </h4>

                    {/* Choices */}
                    <div className="space-y-3">
                        {choices.map((choice) => {
                            const isSelected = selectedId === choice.id;
                            const showResult = submitted && isSelected;

                            return (
                                <button
                                    key={choice.id}
                                    onClick={() => !submitted && setSelectedId(choice.id)}
                                    disabled={submitted}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                        submitted
                                            ? isSelected
                                                ? mode === "knowledge"
                                                    ? choice.isCorrect
                                                        ? "border-emerald-500 bg-emerald-50"
                                                        : "border-red-500 bg-red-50"
                                                    : "border-blue-500 bg-blue-50"
                                                : "border-gray-200 bg-gray-50 opacity-60"
                                            : isSelected
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                            isSelected
                                                ? submitted
                                                    ? mode === "knowledge"
                                                        ? choice.isCorrect
                                                            ? "border-emerald-500 bg-emerald-500"
                                                            : "border-red-500 bg-red-500"
                                                        : "border-blue-500 bg-blue-500"
                                                    : "border-blue-500 bg-blue-500"
                                                : "border-gray-300"
                                        }`}>
                                            {isSelected && (
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                            )}
                                        </div>
                                        <span className={`text-sm ${isSelected ? "font-medium" : ""} ${
                                            submitted && !isSelected ? "text-gray-500" : "text-gray-800"
                                        }`}>
                                            {choice.text}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Submit Button */}
                    {!submitted && (
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedId}
                            className={`mt-4 w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                                selectedId
                                    ? "bg-gray-900 text-white hover:bg-gray-800"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            <span>Check My Thinking</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}

                    {/* Feedback */}
                    <AnimatePresence>
                        {submitted && selectedChoice && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-5"
                            >
                                <div className={`p-4 rounded-lg ${
                                    mode === "knowledge"
                                        ? isCorrect
                                            ? "bg-emerald-50 border border-emerald-200"
                                            : "bg-amber-50 border border-amber-200"
                                        : "bg-blue-50 border border-blue-200"
                                }`}>
                                    <div className="flex items-start gap-3">
                                        {mode === "knowledge" ? (
                                            isCorrect ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                            )
                                        ) : (
                                            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        )}
                                        <div>
                                            <p className={`text-sm font-medium mb-1 ${
                                                mode === "knowledge"
                                                    ? isCorrect ? "text-emerald-800" : "text-amber-800"
                                                    : "text-blue-800"
                                            }`}>
                                                {mode === "knowledge"
                                                    ? isCorrect ? "Exactly right." : "Not quite—here's why this matters:"
                                                    : "What this reveals:"}
                                            </p>
                                            <p className={`text-sm ${
                                                mode === "knowledge"
                                                    ? isCorrect ? "text-emerald-700" : "text-amber-700"
                                                    : "text-blue-700"
                                            }`}>
                                                {selectedChoice.feedback}
                                            </p>
                                            {selectedChoice.insight && (
                                                <p className="text-sm text-gray-600 mt-2 italic">
                                                    {selectedChoice.insight}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {followUp && (
                                    <p className="mt-4 text-sm text-gray-600 italic">
                                        {followUp}
                                    </p>
                                )}

                                <button
                                    onClick={handleReset}
                                    className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
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
