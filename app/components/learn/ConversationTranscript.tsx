interface Message {
  speaker: "user" | "ai";
  name?: string;
  content: string;
}

interface ConversationTranscriptProps {
  messages: Message[];
  title?: string;
}

export default function ConversationTranscript({ messages, title }: ConversationTranscriptProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <span>💬</span> {title}
        </h4>
      )}
      <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200 space-y-4">
        {messages.map((message, i) => (
          <div key={i} className="flex gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                message.speaker === "user"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {message.speaker === "user" ? "You" : "AI"}
            </div>
            <div className="flex-1 min-w-0">
              {message.name && (
                <div
                  className={`text-sm font-medium mb-1 ${
                    message.speaker === "user" ? "text-blue-700" : "text-emerald-700"
                  }`}
                >
                  {message.name}
                </div>
              )}
              <div
                className={`rounded-xl p-3 ${
                  message.speaker === "user"
                    ? "bg-blue-50 border border-blue-100"
                    : "bg-white border border-gray-200"
                }`}
              >
                <p className="text-gray-700 whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
