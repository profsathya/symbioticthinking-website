"use client";

import { useState } from "react";

export type Tier = "simple" | "deep" | "deeper";

interface TierSelectorProps {
  children: {
    simple: React.ReactNode;
    deep: React.ReactNode;
    deeper: React.ReactNode;
  };
  defaultTier?: Tier;
}

const tierConfig = {
  simple: {
    label: "Simple",
    subtitle: "Quick Discovery",
    time: "10-15 min",
    icon: "⚡",
    color: "blue",
    description: "Condensed scenarios, multiple choice + 1 reflection",
  },
  deep: {
    label: "Deep",
    subtitle: "Guided Discovery",
    time: "25-35 min",
    icon: "📚",
    color: "emerald",
    description: "Full scenarios, detailed reflection questions",
  },
  deeper: {
    label: "Deeper",
    subtitle: "Dojo Exploration",
    time: "30+ min",
    icon: "🥋",
    color: "purple",
    description: "Self-guided AI dialogue using the Dojo",
  },
};

export default function TierSelector({ children, defaultTier = "deep" }: TierSelectorProps) {
  const [activeTier, setActiveTier] = useState<Tier>(defaultTier);

  return (
    <div>
      {/* Tier Selection Tabs */}
      <div className="bg-gray-100 rounded-xl p-2 mb-8">
        <div className="grid grid-cols-3 gap-2">
          {(Object.keys(tierConfig) as Tier[]).map((tier) => {
            const config = tierConfig[tier];
            const isActive = activeTier === tier;

            return (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`relative rounded-lg p-4 text-left transition-all ${
                  isActive
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{config.icon}</span>
                  <span className={`font-semibold ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                    {config.label}
                  </span>
                </div>
                <div className="text-xs text-gray-500 hidden sm:block">
                  {config.time}
                </div>
                {isActive && (
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-${config.color}-500`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tier Description */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{tierConfig[activeTier].icon}</span>
          <div>
            <div className="font-semibold text-gray-900">
              {tierConfig[activeTier].subtitle}
            </div>
            <div className="text-sm text-gray-600">
              {tierConfig[activeTier].description} • {tierConfig[activeTier].time}
            </div>
          </div>
        </div>
      </div>

      {/* Tier Content */}
      <div>
        {children[activeTier]}
      </div>
    </div>
  );
}
