"use client";

import React, { useState } from "react";
import { Send, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "ai";
    content: string;
}

interface ScaffoldedChatInterfaceProps {
    onSendMessage: (message: string) => void;
    messages: Message[];
    placeholder?: string;
}

export function ScaffoldedChatInterface({
    onSendMessage,
    messages,
    placeholder = "Ask AI...",
}: ScaffoldedChatInterfaceProps) {
    const [input, setInput] = useState("");
    const [showInterceptor, setShowInterceptor] = useState(false);
    const [threeCs, setThreeCs] = useState({
        context: "",
        choices: "",
        confirmation: "",
    });

    const handleSendClick = () => {
        if (!input.trim()) return;
        // Intercept!
        setShowInterceptor(true);
    };

    const handleConfirmedSend = () => {
        // The 3Cs are a "Pre-Flight Check" - the thinking is what matters,
        // not necessarily including it in the prompt.
        onSendMessage(input);
        setInput("");
        setShowInterceptor(false);
        setThreeCs({ context: "", choices: "", confirmation: "" });
    };

    // Validate that input has meaningful content (not just repeated chars or single words)
    const hasMeaningfulContent = (text: string): boolean => {
        const trimmed = text.trim();
        if (trimmed.length < 5) return false;

        // Check for repeated characters (e.g., "aaaaaaa")
        const uniqueChars = new Set(trimmed.toLowerCase().replace(/\s/g, '')).size;
        if (uniqueChars < 3) return false;

        // Require at least 2 words
        const words = trimmed.split(/\s+/).filter(w => w.length > 1);
        return words.length >= 2;
    };

    const isFormValid =
        hasMeaningfulContent(threeCs.context) &&
        hasMeaningfulContent(threeCs.choices) &&
        hasMeaningfulContent(threeCs.confirmation);

    return (
        <div className="flex flex-col h-[500px] border border-gray-200 rounded-xl bg-gray-50 overflow-hidden relative">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        <p>Ready to collaborate.</p>
                        <p className="text-sm">Type your prompt below.</p>
                    </div>
                )}
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-white border border-gray-200 text-gray-800 shadow-sm"
                                }`}
                        >
                            <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendClick()}
                        placeholder={placeholder}
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <button
                        onClick={handleSendClick}
                        disabled={!input.trim()}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Interceptor Modal */}
            <AnimatePresence>
                {showInterceptor && (
                    <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-sm flex flex-col p-6 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="max-w-lg mx-auto w-full space-y-6"
                        >
                            <div className="flex items-center gap-2 text-amber-600 mb-2">
                                <AlertCircle className="w-5 h-5" />
                                <span className="font-semibold text-sm uppercase tracking-wide">
                                    Pre-Flight Check
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                Wait. Don&apos;t just delegate.
                            </h3>
                            <p className="text-gray-600">
                                Before sending this to AI, apply the <strong>3Cs</strong> to ensure you&apos;re leading, not just watching.
                            </p>

                            <div className="space-y-4">
                                {/* Context */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        1. Context
                                    </label>
                                    <p className="text-xs text-gray-500">
                                        What tacit knowledge does the AI lack about this specific problem?
                                    </p>
                                    <textarea
                                        value={threeCs.context}
                                        onChange={(e) => setThreeCs({ ...threeCs, context: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="e.g., 'The audience is skeptical...' or 'This connects to...'"
                                        rows={2}
                                    />
                                </div>

                                {/* Choices */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        2. Choices
                                    </label>
                                    <p className="text-xs text-gray-500">
                                        What strategic choice are you making here?
                                    </p>
                                    <textarea
                                        value={threeCs.choices}
                                        onChange={(e) => setThreeCs({ ...threeCs, choices: e.target.value })}
                                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="e.g., 'I chose to focus on X instead of Y because...'"
                                        rows={2}
                                    />
                                </div>

                                {/* Confirmation */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        3. Confirmation
                                    </label>
                                    <p className="text-xs text-gray-500">
                                        How will you verify if the output is good?
                                    </p>
                                    <textarea
                                        value={threeCs.confirmation}
                                        onChange={(e) =>
                                            setThreeCs({ ...threeCs, confirmation: e.target.value })
                                        }
                                        className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="e.g., 'I will check the citations...' or 'I will run the code...'"
                                        rows={2}
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    onClick={() => setShowInterceptor(false)}
                                    className="flex-1 py-3 px-4 rounded-lg bg-gray-100 text-gray-600 font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmedSend}
                                    disabled={!isFormValid}
                                    className={`flex-1 py-3 px-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${isFormValid
                                        ? "bg-gray-900 hover:bg-black shadow-lg"
                                        : "bg-gray-300 cursor-not-allowed"
                                        }`}
                                >
                                    {isFormValid ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            Send Prompt
                                        </>
                                    ) : (
                                        <>
                                            <HelpCircle className="w-5 h-5" />
                                            Complete Checks
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
