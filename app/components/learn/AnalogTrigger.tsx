"use client";

import React from "react";
import { useFocusMode, AnalogTask } from "./FocusModeContext";
import { PenTool } from "lucide-react";

export function AnalogTrigger({
    task,
    buttonText = "Start Analog Reflection"
}: {
    task: AnalogTask;
    buttonText?: string;
}) {
    const { startAnalogTask } = useFocusMode();

    return (
        <div className="my-8 p-6 bg-amber-50 border border-amber-200 rounded-xl flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex-1">
                <h4 className="flex items-center gap-2 text-amber-900 font-semibold mb-2">
                    <PenTool className="w-5 h-5" />
                    Offline Task
                </h4>
                <p className="text-amber-800 text-sm">
                    This reflection works best with pen and paper. We&apos;ll pause the digital interface while you think.
                </p>
            </div>
            <button
                onClick={() => startAnalogTask(task)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
                {buttonText}
            </button>
        </div>
    );
}
