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
              Take the Symbiotic Thinking experience anywhere — Claude Projects, ChatGPT, Gemini, or any AI that supports custom instructions. Just one PDF to get started.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What You Get</h2>

          <div className="max-w-2xl">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">One PDF — Everything Included</h3>
              <p className="text-gray-600 mb-4">
                A single instruction document that contains everything your AI needs to become your Symbiotic Thinking partner — the Sensei role, Sparring Partners, frameworks, and customization options.
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>System prompt with Sensei configuration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>All Sparring Partner personas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>UMPIRE cycle and 3Cs framework</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Customization entry point for adjusting style</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Works With Your Favorite AI</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Any AI chatbot that supports file attachments or custom instructions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Claude Projects",
                description: "Create a Project and attach the PDF to Project Knowledge",
                icon: "🟣"
              },
              {
                name: "ChatGPT",
                description: "Upload the PDF and start chatting",
                icon: "🟢"
              },
              {
                name: "Google Gemini",
                description: "Create a Gem and attach the PDF as context",
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Download the PDF</h3>
                <p className="text-gray-600 mb-4">
                  Get the Symbiotic Thinking Dojo Instructions PDF from GitHub.
                </p>
                <a
                  href="https://github.com/profsathya/Symbiotic_Thinking_Dojo/blob/claude/ai-chatbot-thinking-dojo-01FWRCmKE96jbwesC5n4cvfP/docs/Symbiotic%20Thinking%20Dojo%20Instructions.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Instructions PDF
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Attach to Your AI</h3>
                <p className="text-gray-600 mb-4">
                  Upload or attach the PDF to your AI project. The AI will read the instructions and configure itself as your Dojo Sensei.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Platform-specific tips:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Claude:</strong> Create a Project → Add PDF to Project Knowledge</li>
                    <li><strong>ChatGPT:</strong> Start a chat → Upload the PDF</li>
                    <li><strong>Gemini:</strong> Create a Gem → Attach the PDF</li>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Chatting</h3>
                <p className="text-gray-600 mb-4">
                  Begin a conversation and the AI will greet you with the Dojo welcome message. Bring a real challenge and use @mentions to invoke Sparring Partners.
                </p>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <p className="text-sm text-emerald-800">
                    <strong>Tip:</strong> Say &quot;refine&quot; anytime to adjust the Sensei&apos;s communication style, response length, or framework emphasis.
                  </p>
                </div>
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

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            The Portable Dojo follows the same philosophy as the full Dojo.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Concise Responses</h3>
              <p className="text-gray-600 text-sm">
                Outputs stay under fifty words, prioritizing guiding questions over long explanations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Develop Your Thinking</h3>
              <p className="text-gray-600 text-sm">
                The Sensei builds your capability rather than providing immediate solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fully Customizable</h3>
              <p className="text-gray-600 text-sm">
                Say &quot;refine&quot; to adjust style, response length, and framework emphasis.
              </p>
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
            Download the PDF and start using Symbiotic Thinking with your preferred AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/profsathya/Symbiotic_Thinking_Dojo/blob/claude/ai-chatbot-thinking-dojo-01FWRCmKE96jbwesC5n4cvfP/docs/Symbiotic%20Thinking%20Dojo%20Instructions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Instructions PDF
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
