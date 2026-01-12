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

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">The Problem with Most AI Tools</h2>
            <p className="mt-4 text-lg text-gray-600">
              When AI does the thinking for you, you lose the skills that matter most.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Problem side */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-semibold text-red-800 mb-6">The Dependency Trap</h3>
              <ul className="space-y-4">
                {[
                  "Accept AI outputs without critical evaluation",
                  "Skip the productive struggle that builds understanding",
                  "Develop dependency instead of capability",
                  "Lose metacognitive skills that make you valuable",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-red-700">
                    <svg className="w-6 h-6 flex-shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution side */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-semibold text-emerald-800 mb-6">The Symbiotic Approach</h3>
              <ul className="space-y-4">
                {[
                  "Build judgment — know which problems are worth solving",
                  "Develop metacognition — awareness of your thinking",
                  "Create transferable skills that compound",
                  "Maintain agency — you remain the decision-maker",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-emerald-700">
                    <svg className="w-6 h-6 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Why the Dojo vs ChatGPT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why the Dojo Instead of Just Using ChatGPT?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Both use AI, but with fundamentally different goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ChatGPT side */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Standard AI Chat</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { text: "Optimized to give you answers quickly", neutral: true },
                  { text: "You ask, AI responds, done", neutral: true },
                  { text: "No structure for developing your thinking", neutral: false },
                  { text: "Easy to become dependent on outputs", neutral: false },
                  { text: "Your reasoning skills may atrophy", neutral: false },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className={`flex-shrink-0 ${item.neutral ? 'text-gray-400' : 'text-amber-500'}`}>
                      {item.neutral ? '→' : '⚠️'}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dojo side */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-xl">
                  🥋
                </div>
                <h3 className="text-xl font-semibold text-emerald-800">The Dojo</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Optimized to develop your thinking ability",
                  "Structured dialogue with metacognitive coaching",
                  "Frameworks that build transferable skills",
                  "Challenges you to think before receiving help",
                  "Your capabilities grow with each session",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-emerald-700">
                    <svg className="w-5 h-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Think of it this way:</strong> ChatGPT is like having someone do your workout for you.
              The Dojo is a training partner who makes sure <em>you</em> do the reps.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Get Started in 2 Minutes</h2>
            <p className="mt-4 text-lg text-gray-600">
              The Dojo is free. You just need a Google AI API key (also free).
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
                    Visit Google AI Studio and create an API key. It takes about 30 seconds and requires only a Google account.
                  </p>
                  <a
                    href="https://aistudio.google.com/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Get API Key at Google AI Studio
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter the Dojo and paste your key</h3>
                  <p className="text-gray-600 mb-4">
                    Open the Dojo, paste your API key when prompted. The key stays in your browser — we never see it.
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Start with a real challenge</h3>
                  <p className="text-gray-600 mb-4">
                    Bring a problem you&apos;re actually working on — an assignment, project decision, or question you&apos;re exploring. The Dojo works best with authentic challenges.
                  </p>
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
                    Google provides a generous free tier — most users never pay anything. Heavy users might spend a few cents per session. You control your own usage and billing directly with Google.
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
                  a: "Yes. The Dojo itself is completely free and open source. You bring your own Google AI API key, which has a generous free tier. Most users never pay anything for API usage."
                },
                {
                  q: "What AI model does it use?",
                  a: "The Dojo uses Google's Gemini models through your API key. You get access to the latest Gemini capabilities, and Google continues to improve the models over time."
                },
                {
                  q: "Is my data private?",
                  a: "From us, yes — the Dojo runs entirely in your browser and nothing passes through our servers. However, your conversations are sent to Google's Gemini API, so Google's API privacy policy applies to that data. Also note: conversations are not saved between sessions. When you close or refresh the page, your conversation is gone."
                },
                {
                  q: "Can I use it offline?",
                  a: "No, you need an internet connection since the AI processing happens through Google's API. However, since it's a web app, you can use it on any device with a browser."
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
                never pass through our servers — they go directly from your browser to Google&apos;s Gemini API.
                Google&apos;s API privacy policy applies to your conversations.
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
