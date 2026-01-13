"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type FocusModeState = "DIGITAL_ACTIVE" | "DIGITAL_BLURRED" | "ANALOG_TASK";

export interface AnalogTask {
  title: string;
  description: string;
  timeLimitSeconds?: number;
  activityId?: string;
}

interface FocusModeContextType {
  mode: FocusModeState;
  currentTask: AnalogTask | null;
  startAnalogTask: (task: AnalogTask) => void;
  completeAnalogTask: () => void;
  requestAttention: () => void; // Triggers "Wake Up" or similar
}

const FocusModeContext = createContext<FocusModeContextType | undefined>(undefined);

export function FocusModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<FocusModeState>("DIGITAL_ACTIVE");
  const [currentTask, setCurrentTask] = useState<AnalogTask | null>(null);

  const startAnalogTask = (task: AnalogTask) => {
    setCurrentTask(task);
    setMode("ANALOG_TASK");
  };

  const completeAnalogTask = () => {
    setMode("DIGITAL_ACTIVE");
    setCurrentTask(null);
  };

  const requestAttention = () => {
    // If not already in a task, blur to get attention
    if (mode === "DIGITAL_ACTIVE") {
      setMode("DIGITAL_BLURRED");
    }
  };

  return (
    <FocusModeContext.Provider
      value={{
        mode,
        currentTask,
        startAnalogTask,
        completeAnalogTask,
        requestAttention,
      }}
    >
      {children}
    </FocusModeContext.Provider>
  );
}

export function useFocusMode() {
  const context = useContext(FocusModeContext);
  if (context === undefined) {
    throw new Error("useFocusMode must be used within a FocusModeProvider");
  }
  return context;
}
