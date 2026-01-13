"use client";

import React, { useState } from "react";
import FocusLock from "react-focus-lock";
import { motion, AnimatePresence } from "framer-motion";
import { EvidenceUploader } from "./EvidenceUploader";
import { useFocusMode } from "./FocusModeContext";

export function AnalogTaskModal() {
    const { mode, currentTask, completeAnalogTask } = useFocusMode();
    const [hasVerified, setHasVerified] = useState(false);

    // Only render if we are in ANALOG_TASK mode
    if (mode !== "ANALOG_TASK" || !currentTask) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/60 backdrop-blur-xl"
                />

                {/* Modal Content */}
                <FocusLock returnFocus>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 border border-gray-100 max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header Badge */}
                        <div className="flex justify-center mb-6">
                            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Analog Mode
                            </span>
                        </div>

                        {/* Title & Task */}
                        <div className="text-center space-y-4 mb-8">
                            <h2 className="text-3xl font-serif text-gray-900 leading-tight">
                                {currentTask.title}
                            </h2>
                            <p className="text-lg text-gray-600 font-serif italic">
                                {currentTask.description}
                            </p>
                        </div>

                        {/* Timer / Breathing Circle (Visual cue for "Slow Down") */}
                        <div className="flex justify-center mb-8">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-16 h-16 rounded-full bg-amber-200"
                            />
                        </div>

                        {/* Verification Section */}
                        <div className="space-y-4">
                            <label className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer">
                                <div className="flex items-center h-6">
                                    <input
                                        type="checkbox"
                                        checked={hasVerified}
                                        onChange={(e) => setHasVerified(e.target.checked)}
                                        className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                    />
                                </div>
                                <div className="text-sm">
                                    <span className="font-medium text-gray-900 block mb-1">
                                        Honor Code
                                    </span>
                                    <span className="text-gray-500">
                                        I certify that I have stepped away from the screen and drafted this solution by hand (or my preferred offline tool).
                                    </span>
                                </div>
                            </label>

                            {/* Evidence Uploader (Optional) */}
                            <EvidenceUploader onComplete={() => {
                                setHasVerified(true);
                                completeAnalogTask();
                            }} />

                            {/* Manual Completion Button (if not using uploader) */}
                            <button
                                onClick={completeAnalogTask}
                                disabled={!hasVerified}
                                className={`w-full py-3 px-4 rounded-lg font-semibold text-lg transition-all ${hasVerified
                                    ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Return to Digital
                            </button>
                        </div>
                    </motion.div>
                </FocusLock>
            </div>
        </AnimatePresence>
    );
}
