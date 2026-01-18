"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Check, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface InteractiveReflectionProps {
    id: string; // Unique ID for localStorage key
    title?: string;
    children: React.ReactNode;
    placeholder?: string;
    minRows?: number;
}

// Debounce helper
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export function InteractiveReflection({
    id,
    title = "Reflection",
    children,
    placeholder = "Write your thoughts here...",
    minRows = 3
}: InteractiveReflectionProps) {
    const storageKey = `symbiotic-reflection-${id}`;

    const [value, setValue] = useState("");
    const [savedValue, setSavedValue] = useState("");
    const [showSaved, setShowSaved] = useState(false);
    const [showWhyReflect, setShowWhyReflect] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            setValue(stored);
            setSavedValue(stored);
        }
        setIsHydrated(true);
    }, [storageKey]);

    // Debounce the value for saving
    const debouncedValue = useDebounce(value, 1000);

    // Save to localStorage when debounced value changes
    useEffect(() => {
        if (!isHydrated) return;
        if (debouncedValue === savedValue) return;

        localStorage.setItem(storageKey, debouncedValue);
        setSavedValue(debouncedValue);

        // Show "Saved" indicator
        setShowSaved(true);
        const timer = setTimeout(() => setShowSaved(false), 2000);
        return () => clearTimeout(timer);
    }, [debouncedValue, savedValue, storageKey, isHydrated]);

    const handleClear = useCallback(() => {
        setValue("");
        localStorage.removeItem(storageKey);
        setSavedValue("");
    }, [storageKey]);

    return (
        <div className="my-8 bg-amber-50 border border-amber-200 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🤔</span>
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-amber-800">{title}</h4>
                            <button
                                onClick={() => setShowWhyReflect(!showWhyReflect)}
                                className="flex items-center gap-1 text-xs text-amber-600 hover:text-amber-800 transition-colors"
                            >
                                <HelpCircle className="w-3 h-3" />
                                <span>Why reflect?</span>
                                {showWhyReflect ? (
                                    <ChevronUp className="w-3 h-3" />
                                ) : (
                                    <ChevronDown className="w-3 h-3" />
                                )}
                            </button>
                        </div>

                        {/* Why Reflect Tooltip */}
                        {showWhyReflect && (
                            <div className="mb-3 p-3 bg-amber-100/50 rounded-lg text-xs text-amber-700 border border-amber-200">
                                <p>
                                    <strong>Writing forces thinking.</strong> When you put your thoughts into words,
                                    you move from vague impressions to concrete understanding. This reflection is
                                    saved locally—only you can see it. Take 30 seconds to actually write something.
                                </p>
                            </div>
                        )}

                        <div className="text-amber-900 space-y-2">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            {/* Textarea Section */}
            <div className="px-6 pb-6">
                <div className="relative">
                    <textarea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={placeholder}
                        rows={minRows}
                        className="w-full p-4 rounded-lg border border-amber-200 bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-y min-h-[80px] text-sm leading-relaxed"
                    />

                    {/* Status Bar */}
                    <div className="flex items-center justify-between mt-2 text-xs">
                        <div className="flex items-center gap-2">
                            {showSaved && (
                                <span className="flex items-center gap-1 text-emerald-600 animate-fade-in">
                                    <Check className="w-3 h-3" />
                                    Saved locally
                                </span>
                            )}
                            {!showSaved && value && value === savedValue && (
                                <span className="text-gray-400">
                                    Your response is saved
                                </span>
                            )}
                        </div>

                        {value && (
                            <button
                                onClick={handleClear}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Character count hint for empty state */}
                {!value && (
                    <p className="mt-2 text-xs text-amber-600 italic">
                        Even a few sentences help lock in your thinking.
                    </p>
                )}
            </div>
        </div>
    );
}
