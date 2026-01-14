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
  idleTimeoutMs: number;
  startAnalogTask: (task: AnalogTask) => void;
  completeAnalogTask: () => void;
  requestAttention: () => void; // Triggers "Wake Up" or similar
}

const FocusModeContext = createContext<FocusModeContextType | undefined>(undefined);

// Default idle timeout: 5 minutes
const DEFAULT_IDLE_TIMEOUT_MS = 300_000;

interface FocusModeProviderProps {
  children: ReactNode;
  /** Idle timeout in milliseconds before "Wake Up" prompt appears. Default: 5 minutes (300000ms) */
  idleTimeoutMs?: number;
}

export function FocusModeProvider({ children, idleTimeoutMs = DEFAULT_IDLE_TIMEOUT_MS }: FocusModeProviderProps) {
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
        idleTimeoutMs,
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
