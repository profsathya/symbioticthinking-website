"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";

interface ComparisonItem {
    title: string;
    points: string[];
    color: "red" | "emerald" | "blue" | "amber";
    icon?: React.ReactNode;
}

interface ComparisonCardProps {
    itemA: ComparisonItem;
    itemB: ComparisonItem;
    title?: string;
}

export function ComparisonCard({ itemA, itemB, title }: ComparisonCardProps) {
    const [activeTab, setActiveTab] = useState<"A" | "B">("A");

    const colors = {
        red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-900", title: "text-red-800", icon: "text-red-500" },
        emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", title: "text-emerald-800", icon: "text-emerald-500" },
        blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", title: "text-blue-800", icon: "text-blue-500" },
        amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", title: "text-amber-800", icon: "text-amber-500" },
    };

    return (
        <div className="my-8 not-prose">
            {title && <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{title}</h3>}

            {/* Mobile / Narrow View: Tabs */}
            <div className="md:hidden">
                <div className="flex rounded-lg bg-gray-100 p-1 mb-4">
                    <button
                        onClick={() => setActiveTab("A")}
                        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "A" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        {itemA.title}
                    </button>
                    <button
                        onClick={() => setActiveTab("B")}
                        className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "B" ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        {itemB.title}
                    </button>
                </div>

                <div className={`rounded-xl border p-6 ${colors[activeTab === "A" ? itemA.color : itemB.color].bg} ${colors[activeTab === "A" ? itemA.color : itemB.color].border}`}>
                    <h4 className={`font-bold mb-4 ${colors[activeTab === "A" ? itemA.color : itemB.color].title}`}>
                        {activeTab === "A" ? itemA.title : itemB.title}
                    </h4>
                    <ul className="space-y-3">
                        {(activeTab === "A" ? itemA.points : itemB.points).map((point, i) => (
                            <li key={i} className={`flex gap-3 text-sm ${colors[activeTab === "A" ? itemA.color : itemB.color].text}`}>
                                <span className={colors[activeTab === "A" ? itemA.color : itemB.color].icon}>
                                    {activeTab === "A" ? (itemA.color === 'red' ? <X className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />) : (itemB.color === 'emerald' ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />)}
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Desktop View: Side-by-Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
                <div className={`rounded-xl border p-6 transition-transform hover:-translate-y-1 duration-300 ${colors[itemA.color].bg} ${colors[itemA.color].border}`}>
                    <h4 className={`font-bold mb-4 ${colors[itemA.color].title}`}>{itemA.title}</h4>
                    <ul className="space-y-3">
                        {itemA.points.map((point, i) => (
                            <li key={i} className={`flex gap-3 text-sm ${colors[itemA.color].text}`}>
                                <span className={colors[itemA.color].icon}>
                                    {itemA.color === 'red' ? <X className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`rounded-xl border p-6 transition-transform hover:-translate-y-1 duration-300 ${colors[itemB.color].bg} ${colors[itemB.color].border}`}>
                    <h4 className={`font-bold mb-4 ${colors[itemB.color].title}`}>{itemB.title}</h4>
                    <ul className="space-y-3">
                        {itemB.points.map((point, i) => (
                            <li key={i} className={`flex gap-3 text-sm ${colors[itemB.color].text}`}>
                                <span className={colors[itemB.color].icon}>
                                    {itemB.color === 'emerald' ? <Check className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                                </span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
