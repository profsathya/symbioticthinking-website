interface ReflectionPromptProps {
  children: React.ReactNode;
  title?: string;
}

export default function ReflectionPrompt({ children, title = "Reflection" }: ReflectionPromptProps) {
  return (
    <div className="my-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
      <div className="flex gap-3">
        <span className="text-2xl flex-shrink-0">🤔</span>
        <div>
          <h4 className="font-semibold text-amber-800 mb-2">{title}</h4>
          <div className="text-amber-900 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
