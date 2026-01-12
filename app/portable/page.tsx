import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portable Edition | Symbiotic Thinking",
  description: "Use the Symbiotic Thinking Dojo experience with any AI chatbot — Claude, ChatGPT, Gemini, and more. No app required.",
};

export default function PortablePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Portable Edition
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Use the Dojo with any AI chatbot
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Take the Symbiotic Thinking experience anywhere — Claude Projects, ChatGPT, Gemini, or any AI that supports custom instructions. No app required.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What You Get</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Prompt</h3>
              <p className="text-gray-600">
                A carefully crafted prompt that tells any AI how to behave as your Symbiotic Thinking partner — complete with Sparring Partners, frameworks, and status tracking.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Base</h3>
              <p className="text-gray-600">
                A comprehensive document containing the full Symbiotic Thinking philosophy, all Sparring Partner personas, UMPIRE cycle, 3Cs framework, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Works With Your Favorite AI</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Any AI chatbot that supports custom instructions and file attachments.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Claude Projects",
                description: "Add to Project Instructions and attach the Knowledge Base",
                icon: "🟣"
              },
              {
                name: "ChatGPT",
                description: "Upload the Knowledge Base and paste the system prompt",
                icon: "🟢"
              },
              {
                name: "Google Gemini",
                description: "Create a Gem with the instructions and attached document",
                icon: "🔵"
              }
            ].map((platform, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Setup in 3 Steps</h2>

          <div className="max-w-3xl space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Download the Files</h3>
                <p className="text-gray-600 mb-4">
                  Get the System Prompt and Knowledge Base from our GitHub repository.
                </p>
                <a
                  href="https://github.com/profsathya/Symbiotic_Thinking_Dojo/tree/main/portable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Get Files on GitHub
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Configure Your AI</h3>
                <p className="text-gray-600 mb-4">
                  Paste the System Prompt into your AI&apos;s custom instructions, and attach the Knowledge Base document.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Platform-specific tips:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Claude:</strong> Create a Project, add to &quot;Project Instructions&quot;, upload Knowledge Base</li>
                    <li><strong>ChatGPT:</strong> Upload Knowledge Base first, then paste System Prompt</li>
                    <li><strong>Gemini:</strong> Create a Gem, add instructions, attach document</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Start a Session</h3>
                <p className="text-gray-600 mb-4">
                  Choose your mode (Learn, Learn+Solve, or Learn+Solve+Build) and bring a real challenge. Use @mentions to invoke Sparring Partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sparring Partners Quick Reference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sparring Partners</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Invoke these specialized personas by typing @ followed by their name.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "@framer",
                icon: "🖼️",
                description: "Blocks solutions until the problem is deeply understood"
              },
              {
                name: "@auditor",
                icon: "📋",
                description: "Enforces 3Cs (Context, Choices, Confirmation) before decisions"
              },
              {
                name: "@connector",
                icon: "🔗",
                description: "Finds patterns and analogies from other domains"
              },
              {
                name: "@challenger",
                icon: "⚔️",
                description: "Stress-tests ideas through devil's advocacy"
              },
              {
                name: "@reflector",
                icon: "🪞",
                description: "Guides self-assessment and generates session summaries"
              },
              {
                name: "@ikigai",
                icon: "🎯",
                description: "Starts a guided journey to discover your purpose"
              }
            ].map((partner, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{partner.icon}</span>
                  <code className="text-emerald-600 font-semibold">{partner.name}</code>
                </div>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Line Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Reading the Status Line</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Every response ends with a status line showing your progress.
          </p>

          <div className="max-w-3xl">
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <code className="text-emerald-400 text-lg">
                [STATUS] Partner: @framer | Balance: +2 | Level: K | Stage: U
              </code>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Partner</h4>
                  <p className="text-gray-600 text-sm">Which Sparring Partner is active (or &quot;sensei&quot; for the default guide)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Balance (-3 to +3)</h4>
                  <p className="text-gray-600 text-sm">Your Creating/Consuming tendency. Positive = you&apos;re doing the thinking. Negative = you&apos;re delegating to AI.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Level (D/I/K/W)</h4>
                  <p className="text-gray-600 text-sm">DIKW depth: Data → Information → Knowledge → Wisdom</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Stage (U/M/P/I/R/E)</h4>
                  <p className="text-gray-600 text-sm">UMPIRE cycle: Understand → Map → Plan → Implement → Review → Evaluate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to take the Dojo anywhere?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Download the files and start using Symbiotic Thinking with your preferred AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/profsathya/Symbiotic_Thinking_Dojo/tree/main/portable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Download from GitHub
            </a>
            <a
              href="https://dojo.symbioticthinking.ai"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Or Try the Full Dojo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
