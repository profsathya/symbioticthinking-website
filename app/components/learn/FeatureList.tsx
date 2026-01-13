import React from "react";
import { Check, Star, HelpCircle, ArrowRight, LucideIcon } from "lucide-react";

interface FeatureListProps {
  items: (string | { text: string; icon?: LucideIcon })[];
  title?: string;
  columns?: 1 | 2;
  defaultIcon?: LucideIcon;
  variant?: "check" | "list" | "question";
}

export function FeatureList({
  items,
  title,
  columns = 1,
  defaultIcon = Check,
  variant = "check"
}: FeatureListProps) {

  const getIcon = (itemIcon?: LucideIcon) => {
    if (itemIcon) return itemIcon;
    if (variant === "question") return HelpCircle;
    if (variant === "list") return ArrowRight;
    return defaultIcon;
  };

  const colors = {
    check: "bg-emerald-100 text-emerald-600 border-emerald-200",
    question: "bg-blue-100 text-blue-600 border-blue-200",
    list: "bg-amber-100 text-amber-600 border-amber-200",
  };

  return (
    <div className="my-8 not-prose">
      {title && (
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
          {title}
        </h3>
      )}
      <div className={`grid gap-4 ${columns === 2 ? 'md:grid-cols-2' : ''}`}>
        {items.map((item, index) => {
          const text = typeof item === 'string' ? item : item.text;
          const Icon = getIcon(typeof item === 'object' ? item.icon : undefined);

          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${colors[variant]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-gray-700 font-medium leading-tight">
                {text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
