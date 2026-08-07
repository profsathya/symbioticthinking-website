import { Metadata } from "next";
import Link from "next/link";
import { ABILITIES, ABILITY_COLORS, type AbilityId } from "../content/abilities";

export const metadata: Metadata = {
  title: "For Learners | Symbiotic Thinking",
  description:
    "Build critical thinking, communication, and collaboration with AI as your practice partner. The Dojo develops judgment that compounds over time.",
};

/** The concrete sub-skills a learner practises under each ability. */
const LEARNER_SKILLS: Record<
  AbilityId,
  { icon: string; title: string; description: string }[]
> = {
  "critical-thinking": [
    {
      icon: "🎯",
      title: "Problem Framing",
      description:
        "Define the problem precisely before jumping to a solution. The Framer won't let you build until you can say what you're building and why.",
    },
    {
      icon: "🔍",
      title: "Critical Evaluation",
      description:
        "Question AI output as a habit. Know when to accept it, when to push back, and when the confident answer is the wrong one.",
    },
    {
      icon: "⚖️",
      title: "Decision Making",
      description:
        "Practice the 3Cs — Context, Choices, Confirmation — so you make decisions you can actually defend and verify.",
    },
  ],
  communication: [
    {
      icon: "✍️",
      title: "Supplying Context",
      description:
        "Learn to give a model what it can't know. The precision of your context is the ceiling on the quality of what comes back.",
    },
    {
      icon: "🛡️",
      title: "Defending Your Reasoning",
      description:
        "Say why you made a call and hold that line under questioning — to a rubric, to the Challenger, or to a person across the table.",
    },
    {
      icon: "📣",
      title: "Naming Your Value",
      description:
        "Turn what you can do into language an employer recognizes: a Value Statement built on evidence, tested against real postings.",
    },
  ],
  collaboration: [
    {
      icon: "💭",
      title: "Thinking Out Loud",
      description:
        "Work an idea further in conversation than you could alone. This is the core muscle — and the one most AI use never exercises.",
    },
    {
      icon: "🔗",
      title: "Cross-Domain Thinking",
      description:
        "Let a partner pull you out of your lane. The Connector bridges to other fields so you see patterns your own training would miss.",
    },
    {
      icon: "🔀",
      title: "Dividing the Work",
      description:
        "Judge what to hold, what to delegate, and what to genuinely think through together — with AI and with people.",
    },
  ],
};

export default function LearnersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              For Learners
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build skills that AI can&apos;t replace
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              The Dojo doesn&apos;t give you answers — it builds the three abilities that stay
              valuable when AI can execute: <strong className="text-gray-800">critical thinking</strong>,{" "}
              <strong className="text-gray-800">communication</strong>, and{" "}
              <strong className="text-gray-800">collaboration</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why This Matters for Your Future</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Old Value Proposition</h3>
              <p className="text-gray-600 mb-4">
                &quot;I can code / write / analyze / research.&quot;
              </p>
              <p className="text-gray-500">
                These execution skills are increasingly commoditized by AI. Anyone with access
                to the same tools can produce similar outputs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">The New Value Proposition</h3>
              <p className="text-gray-600 mb-4">
                &quot;I know which problems are worth solving, and I can lead the solution.&quot;
              </p>
              <p className="text-gray-500">
                Critical thinking, communication, and collaboration — the abilities that let
                you direct AI rather than be directed by it. Employers rate all three among
                the most important things a graduate can bring, and rate new graduates below
                where graduates rate themselves.{" "}
                <Link href="/evidence" className="text-emerald-600 hover:underline">
                  See the data →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Develop */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What You&apos;ll Develop</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Everything in the Dojo builds toward three abilities. Here&apos;s what practising
            each one actually looks like.
          </p>

          <div className="space-y-8">
            {ABILITIES.map((ability) => {
              const colors = ABILITY_COLORS[ability.color];
              const skills = LEARNER_SKILLS[ability.id];

              return (
                <div
                  key={ability.id}
                  className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 md:p-8`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                    >
                      {ability.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.heading}`}>{ability.name}</h3>
                      <p className={`${colors.text} font-medium text-sm mt-1`}>{ability.tagline}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {skills.map((skill, i) => (
                      <div key={i} className="bg-white rounded-xl p-5 border border-white">
                        <div className="text-2xl mb-3">{skill.icon}</div>
                        <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
                        <p className="text-gray-600 text-sm">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* The method underneath */}
          <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🧠</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Underneath all three: metacognition</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You build these abilities using a method — noticing whether you&apos;re
                  creating or consuming, running the 3Cs before a decision, and climbing the
                  DIKW pyramid from answers toward judgment. That&apos;s the machinery.{" "}
                  <Link href="/framework" className="text-emerald-600 hover:underline">
                    See how the method works →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How the Dojo Works</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Path</h3>
                <p className="text-gray-600 mb-4">
                  Two ways to practice:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🎯</span>
                      <span className="font-medium text-gray-900">Practice Dojo</span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Recommended</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Structured, guided experiences. Great for learning Symbiotic Thinking fundamentals.
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🧭</span>
                      <span className="font-medium text-gray-900">Free Exploration</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Bring your own challenge — a project, assignment, or question you&apos;re exploring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Engage the Sensei & Partners</h3>
                <p className="text-gray-600">
                  The Sensei guides your thinking with questions. Sparring Partners challenge
                  specific aspects — framing, reasoning, connections, assumptions, and reflection.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Growth</h3>
                <p className="text-gray-600">
                  Visual indicators show your engagement level, knowledge depth, and problem-solving
                  stage. Use The Reflector to generate summaries of your learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to start training?
          </h2>
          <p className="text-xl text-emerald-100 mb-6">
            The Dojo is free. You just need a free API key to power the AI.
          </p>
          <p className="text-emerald-200 text-sm mb-8">
            We recommend <strong>Llama 3.3 70B via Groq</strong> for extended practice sessions (~14,400 requests/day free).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://dojo.symbioticthinking.ai"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Enter the Dojo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://console.groq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <span className="flex items-center gap-2 text-lg">
                Get Groq API Key
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <span className="text-emerald-300 text-xs mt-1">Groq, not Grok from xAI</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
