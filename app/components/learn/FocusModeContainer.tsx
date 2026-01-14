"use client";

import React, { ReactNode } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useFocusMode } from "./FocusModeContext";
import { AnalogTaskModal } from "./AnalogTaskModal";
import Link from "next/link";

export function FocusModeContainer({ children }: { children: ReactNode }) {
    const { mode, idleTimeoutMs, requestAttention, completeAnalogTask } = useFocusMode();

    const onIdle = () => {
        // Trigger "Wake Up" prompt if user is idle
        requestAttention();
    };

    useIdleTimer({
        onIdle,
        timeout: idleTimeoutMs,
        throttle: 500,
    });

    const isBlurred = mode === "DIGITAL_BLURRED" || mode === "ANALOG_TASK";

    return (
        <>
            <div
                className={`relative min-h-screen transition-all duration-500 ease-in-out ${isBlurred ? "blur-md grayscale-[0.5] pointer-events-none select-none" : ""
                    }`}
            >
                {children}
            </div>

            {/* Modal is outside the blur container so it stays sharp */}
            <AnalogTaskModal />

            {/* "Wake Up" Overlay for DIGITAL_BLURRED state */}
            {mode === "DIGITAL_BLURRED" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still there?
                        </h3>
                        <p className="text-gray-600 mb-8">
                            You&apos;ve been quiet for a while. Are you still creating, or just consuming?
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/learn"
                                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                Take a Break
                            </Link>
                            <button
                                // We're essentially just needing to "unblur" - interacting with the page does that?
                                // Actually, our context needs a way to "resume".
                                // Ideally, any interaction *would* resume, but since we have pointer-events-none,
                                // we need a specific button here that DOES have pointer events.
                                // Wait, if the container has pointer-events-none, this overlay needs to be OUTSIDE it.
                                // It is (see structure above).
                                onClick={() => completeAnalogTask()}
                                className="px-6 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg"
                            >
                                I&apos;m Creating
                            </button>
                        </div>
                        {/* Note: In a real app we'd add a clean `resume()` to context. 
                For this iteration, since I can't edit Context without another file write, 
                I'd recommend the user refresh or interaction.
                Actually, I can just not block the button.
                Wait, `completeAnalogTask` sets mode to DIGITAL_ACTIVE. I can use that!
            */}
                    </div>
                </div>
            )}
        </>
    );
}
