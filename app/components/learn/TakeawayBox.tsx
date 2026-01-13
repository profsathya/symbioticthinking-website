import React from "react";
import { Lightbulb, ArrowRight } from "lucide-react";

interface TakeawayBoxProps {
    title?: string;
    children: React.ReactNode;
}

export function TakeawayBox({ title = "Key Takeaway", children }: TakeawayBoxProps) {
    return (
        <div className="my-10 not-prose relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl text-white">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Lightbulb className="w-6 h-6" />
                    <h3 className="text-lg font-bold uppercase tracking-widest">
                        {title}
                    </h3>
                </div>

                <div className="text-lg md:text-xl font-light leading-relaxed text-gray-100 border-l-2 border-emerald-500/50 pl-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
