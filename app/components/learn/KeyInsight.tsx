interface KeyInsightProps {
  children: React.ReactNode;
  title?: string;
  icon?: string;
}

export default function KeyInsight({ children, title = "Key Insight", icon = "💡" }: KeyInsightProps) {
  return (
    <div className="my-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">{icon}</span>
        <div>
          <h4 className="font-semibold text-emerald-800 mb-2">{title}</h4>
          <div className="text-emerald-900">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
