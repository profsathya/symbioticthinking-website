import React from "react";
import { Sparkles, ArrowUpRight, AlertCircle, LucideIcon } from "lucide-react";

interface ScenarioBlockProps {
    title: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    variant?: "neutral" | "escalation" | "reveal";
}

export function ScenarioBlock({
    title,
    icon: Icon,
    children,
    variant = "neutral"
}: ScenarioBlockProps) {

    const styles = {
        neutral: "bg-white border-l-4 border-blue-500 shadow-sm",
        escalation: "bg-amber-50 border-l-4 border-amber-500",
        reveal: "bg-gray-900 border-l-4 border-emerald-500 text-white",
    };

    const textStyles = {
        neutral: "text-gray-700",
        escalation: "text-amber-900",
        reveal: "text-gray-100",
    };

    const titleStyles = {
        neutral: "text-blue-900",
        escalation: "text-amber-900",
        reveal: "text-emerald-400",
    };

    return (
        <div className={`my-8 p-6 rounded-r-xl ${styles[variant]} not-prose`}>
            <div className="flex items-start gap-4">
                {Icon && (
                    <div className={`mt-1 p-2 rounded-lg ${variant === 'reveal' ? 'bg-gray-800 text-emerald-400' : 'bg-white/50'}`}>
                        <Icon className={`w-6 h-6 ${titleStyles[variant]}`} />
                    </div>
                )}
                <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 uppercase tracking-wide text-xs ${titleStyles[variant]}`}>
                        {title}
                    </h3>
                    <div className={`text-lg leading-relaxed ${textStyles[variant]}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
