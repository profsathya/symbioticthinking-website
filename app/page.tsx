import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-purple-50" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Learn to think <span className="text-emerald-600">with</span> AI,
                <br />not <span className="text-gray-400">let it</span> think for you
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              The Symbiotic Thinking Dojo is an AI-powered practice environment that builds your
              judgment, metacognition, and problem-solving skills. AI becomes your thinking partner,
              not your replacement.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://dojo.symbioticthinking.ai"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Enter the Dojo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg border border-gray-300 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Dojo? Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why a Dojo?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-medium">道場</span> (dōjō) means &quot;place of the way&quot;—a space for disciplined
            practice toward mastery. We chose this name deliberately, aspiring for this tool to have the
            same transformative impact on learners that a traditional dojo has on its students. True to
            this spirit, the Dojo asks you to slow down when everything else accelerates, to struggle
            productively when shortcuts beckon, to develop capability when dependency is easier.
            This isn&apos;t about speed. It&apos;s about becoming someone who thinks well.
          </p>
        </div>
      </section>

      {/* Challenge & Opportunity Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">The Challenge and Opportunity</h2>
            <p className="mt-4 text-lg text-gray-600">
              AI&apos;s rapid advancement creates a choice: let it replace your thinking, or use it to amplify your capabilities.
            </p>
          </div>

          {/* Human Agency Equation */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">Human Agency in the Age of AI</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                {/* Super Agency */}
                <div className="bg-blue-50 rounded-xl p-4 text-center flex-1 w-full">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-semibold text-blue-800">Super Agency</div>
                  <div className="text-sm text-blue-600 mt-1">Ability to do more<br />because AI is available</div>
                </div>

                {/* Plus sign */}
                <div className="text-3xl font-bold text-gray-400">+</div>

                {/* Human Value Proposition */}
                <div className="bg-purple-50 rounded-xl p-4 text-center flex-1 w-full">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="font-semibold text-purple-800">Human Value Proposition</div>
                  <div className="text-sm text-purple-600 mt-1">Knowing where and why<br />human judgment matters</div>
                </div>
              </div>

              {/* Equals */}
              <div className="flex items-center justify-center my-4">
                <div className="text-2xl font-bold text-gray-400">=</div>
              </div>

              {/* Result */}
              <div className="bg-emerald-100 rounded-xl p-4 text-center border-2 border-emerald-300">
                <div className="font-bold text-emerald-800 text-lg">True Human Agency</div>
                <div className="text-sm text-emerald-700 mt-1">The ability to create better outcomes than either humans or AI could achieve alone</div>
              </div>
            </div>
          </div>

          {/* Two approaches contrast */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* AI-Focused Learning */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">AI-Focused Learning Tools</h3>
              <p className="text-sm text-gray-500 mb-6">Making the tool a better tutor</p>
              <ul className="space-y-4">
                {[
                  { icon: "🤖", text: "Improve AI's ability to explain concepts" },
                  { icon: "📚", text: "Optimize AI responses for learning" },
                  { icon: "🎯", text: "Personalize AI tutoring to your level" },
                  { icon: "⚡", text: "Deliver answers more effectively" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">Focus: Making AI smarter at teaching you</p>
              </div>
            </div>

            {/* Symbiotic Thinking */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">Symbiotic Thinking</h3>
              <p className="text-sm text-emerald-600 mb-6">Developing your judgment and agency</p>
              <ul className="space-y-4">
                {[
                  { icon: "🧠", text: "Build your ability to evaluate AI outputs" },
                  { icon: "⚖️", text: "Develop judgment about when AI helps vs. hinders" },
                  { icon: "🔍", text: "Know where human intervention improves solutions" },
                  { icon: "🎓", text: "Create transferable skills that grow with you" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-emerald-700">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <p className="text-sm text-emerald-700 font-medium">Focus: Making you more capable with AI</p>
              </div>
            </div>
          </div>

          {/* Key insight */}
          <div className="mt-8 max-w-2xl mx-auto text-center">
            <p className="text-gray-600">
              Both approaches have value. But only one develops the <strong>human skills</strong> that
              let you leverage AI&apos;s power while knowing when your judgment makes the difference.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">How the Dojo Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Practice with AI that challenges you to think better, not just get answers faster.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {/* Sensei */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                🥋
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Sensei</h3>
              <p className="text-gray-600">
                Your metacognitive coach guides through questions, not answers.
                Helps you stay aware of your thinking process without doing the thinking for you.
              </p>
            </div>

            {/* Sparring Partners */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                ⚔️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sparring Partners</h3>
              <p className="text-gray-600">
                Five AI personas that challenge different aspects of your thinking:
                The Framer, Auditor, Connector, Challenger, and Reflector.
              </p>
            </div>

            {/* Frameworks */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Visual feedback on your engagement: DIKW Pyramid, UMPIRE Cycle,
                and Creating-Consuming Balance help you see your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">See It In Action</h2>
            <p className="mt-4 text-lg text-gray-600">
              Here&apos;s what a typical Dojo session looks like — guided thinking, not instant answers.
            </p>
          </div>

          {/* Sample Dialogue */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="space-y-6">
                {/* User message */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-700 flex-shrink-0">
                    You
                  </div>
                  <div className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-gray-700">I need to build a mobile app for my startup. Should I use React Native or Flutter?</p>
                  </div>
                </div>

                {/* Sensei response */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    🥋
                  </div>
                  <div className="flex-1 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <p className="text-sm text-emerald-700 font-medium mb-2">The Sensei</p>
                    <p className="text-gray-700">Before we compare frameworks, let&apos;s step back. What problem is this app solving for your users? And what&apos;s driving the urgency to decide on the technology now?</p>
                  </div>
                </div>

                {/* User response */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-700 flex-shrink-0">
                    You
                  </div>
                  <div className="flex-1 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-gray-700">It&apos;s a fitness tracking app. I want to launch in 3 months and I&apos;m the only developer.</p>
                  </div>
                </div>

                {/* Framer prompt */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    🖼️
                  </div>
                  <div className="flex-1 bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <p className="text-sm text-purple-700 font-medium mb-2">The Framer</p>
                    <p className="text-gray-700">I notice you&apos;re framing this as a technology choice. But is the core question really &quot;which framework?&quot; or is it &quot;how do I validate my fitness app idea with limited resources?&quot; What would success look like in 3 months?</p>
                  </div>
                </div>

                {/* Thinking indicator */}
                <div className="flex items-center justify-center gap-2 text-gray-400 py-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="text-sm italic">The conversation continues, guided by your thinking...</span>
                </div>
              </div>
            </div>

            {/* Key insight callout */}
            <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex gap-4">
                <div className="text-2xl">💡</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Notice the Difference</h4>
                  <p className="text-gray-600 text-sm">
                    ChatGPT would compare React Native vs Flutter immediately. The Dojo helps you realize the real question might be about validation strategy, not technology choice. This reframing could save months of building the wrong thing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Get Started in 3 Easy Steps</h2>
            <p className="mt-4 text-lg text-gray-600">
              The Dojo is free to use. You just need a free API key to power the AI.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get your free API key</h3>
                  <p className="text-gray-600 mb-4">
                    Choose either provider — both are free and work great with the Dojo:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Groq Option */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">⚡</span>
                        <span className="font-semibold text-gray-900">Groq</span>
                        <span className="text-xs text-gray-400">(not Grok from xAI)</span>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Recommended</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Uses Llama 3.3 70B model. ~14,400 free requests/day — great for longer practice sessions.
                      </p>
                      <a
                        href="https://console.groq.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium"
                      >
                        Get Groq API Key
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>

                    {/* Google Option */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔵</span>
                        <span className="font-semibold text-gray-900">Google Gemini</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Uses Gemini 2.5 Flash model. ~20 free requests/day — good for quick sessions.
                      </p>
                      <a
                        href="https://aistudio.google.com/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Get Google API Key
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter the Dojo and add your key</h3>
                  <p className="text-gray-600 mb-4">
                    Open the Dojo, click Settings, choose your provider (Groq or Gemini), and paste your API key.
                    Your key stays in your browser — we never see it.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose your path</h3>
                  <p className="text-gray-600 mb-4">
                    There are two ways to start practicing:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Practice Dojo Option */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🎯</span>
                        <span className="font-semibold text-gray-900">Practice Dojo</span>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">New users</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Click &quot;Practice Dojo&quot; in the sidebar for structured, guided experiences. Learn Symbiotic Thinking fundamentals and explore curated topics with scaffolded challenges.
                      </p>
                    </div>

                    {/* Free Exploration Option */}
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🧭</span>
                        <span className="font-semibold text-gray-900">Free Exploration</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Bring your own challenge — an assignment, project decision, or question you&apos;re exploring. The Sensei and Sparring Partners will meet you where you are.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost callout */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex gap-4">
                <div className="text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">What does it cost?</h4>
                  <p className="text-gray-600 text-sm">
                    Both providers offer generous free tiers. <strong>Groq</strong> gives ~14,400 requests/day (enough for hours of practice).
                    <strong> Google Gemini</strong> gives ~20 requests/day for quick sessions. You control your own usage and billing directly with your chosen provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "Is the Dojo really free?",
                  a: "Yes. The Dojo itself is completely free and open source. You bring your own API key from either Groq or Google — both have generous free tiers. Most users never pay anything for API usage."
                },
                {
                  q: "What AI models does it use?",
                  a: "You choose your provider: Groq uses Llama 3.3 70B with ~14,400 free requests/day (recommended for extended practice). Google Gemini uses Gemini 2.5 Flash with ~20 free requests/day. You can switch providers anytime in Settings."
                },
                {
                  q: "Is my data private?",
                  a: "From us, yes — the Dojo runs entirely in your browser and nothing passes through our servers. However, your conversations are sent to your chosen provider's API (Groq or Google), so their respective privacy policies apply. Conversations are not saved between sessions — when you close or refresh the page, your conversation is gone."
                },
                {
                  q: "Can I use it offline?",
                  a: "No, you need an internet connection since the AI processing happens through your chosen provider's API. However, since it's a web app, you can use it on any device with a browser."
                },
                {
                  q: "How is this different from ChatGPT or Claude?",
                  a: "Standard AI chats optimize for giving you answers quickly. The Dojo optimizes for developing your thinking ability. It uses structured frameworks, metacognitive coaching, and Sparring Partners to challenge your reasoning rather than just providing solutions."
                },
                {
                  q: "Who made this and why?",
                  a: "The Dojo was created by Dr. Sathya Narayanan and the Computing Talent Initiative at CSU Monterey Bay, with development done entirely using Claude Code (Anthropic's AI coding assistant). It's part of research into how AI can enhance rather than replace human cognitive development. There's no hidden business model — it's an educational tool."
                },
                {
                  q: "Can I use this for my class?",
                  a: "Educators can have students get their own API keys and use the Dojo for assignments. Students can generate session summaries using @reflector to share their thinking process without exposing raw conversations. See our Educators page for implementation ideas."
                },
                {
                  q: "How long is a typical session?",
                  a: "Sessions typically run 15-30 minutes, though you can go shorter or longer. The Dojo works well for focused thinking on a specific problem rather than extended conversations."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portable Edition */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  New: Portable Edition
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Use the Dojo with any AI chatbot
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  Prefer Claude, ChatGPT, or Gemini? Take the Symbiotic Thinking experience anywhere with our portable system prompt and knowledge base.
                </p>
                <a
                  href="/portable"
                  className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-500/30">
                  <div className="space-y-3 text-blue-100 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🟣</span>
                      <span>Claude Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🟢</span>
                      <span>ChatGPT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🔵</span>
                      <span>Google Gemini</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💬</span>
                      <span>Any AI with custom instructions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Privacy First
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Your conversations stay private from us
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                The Dojo uses a client-side architecture. Your API key and conversations
                never pass through our servers — they go directly from your browser to your chosen provider (Groq or Google).
                Your provider&apos;s privacy policy applies to your conversations.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  API key stored only in your browser
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zero data storage on our servers
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conversations not saved between sessions
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Open source — verify it yourself
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to train your thinking?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            The Dojo is free to use. Bring your own API key and start practicing.
          </p>
          <a
            href="https://dojo.symbioticthinking.ai"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Enter the Dojo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
