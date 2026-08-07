"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Brain, RefreshCw, Target, Lightbulb } from "lucide-react";
import {
  ABILITIES,
  ABILITY_COLORS,
  SYMBIOTIC_THINKING_DEFINITION,
  type Ability,
} from "../content/abilities";

function AbilityCard({ ability }: { ability: Ability }) {
  const colors = ABILITY_COLORS[ability.color];

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} overflow-hidden`}>
      {/* Header */}
      <div className="p-6 md:p-8 pb-0">
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
          >
            {ability.icon}
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${colors.heading}`}>{ability.name}</h3>
            <p className={`${colors.text} font-medium mt-1`}>{ability.tagline}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-5 leading-relaxed">{ability.definition}</p>
      </div>

      {/* Body: why AI changes it, and where you practice it */}
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 rounded-xl p-5 border border-white">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
            Why AI raises the stakes
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">{ability.withAI}</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-700">{ability.evidence.stat}</p>
            <p className="text-xs text-gray-500 mt-1 italic">{ability.evidence.source}</p>
          </div>
        </div>

        <div className="bg-white/70 rounded-xl p-5 border border-white">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
            Where you practice it
          </h4>
          <ul className="space-y-2">
            {ability.dojo.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className={`${colors.text} flex-shrink-0`}>→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface ExpandableCardProps {
  icon: React.ReactNode;
  layer: string;
  title: string;
  subtitle: string;
  question: string;
  isExpanded: boolean;
  onToggle: () => void;
  color: "amber" | "emerald" | "purple";
  children: React.ReactNode;
}

function ExpandableCard({
  icon,
  layer,
  title,
  subtitle,
  question,
  isExpanded,
  onToggle,
  color,
  children,
}: ExpandableCardProps) {
  const colorClasses = {
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      hover: "hover:border-amber-300",
      iconBg: "bg-amber-100",
      iconText: "text-amber-700",
      layerText: "text-amber-600",
      expandedBg: "bg-amber-50/50",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      hover: "hover:border-emerald-300",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-700",
      layerText: "text-emerald-600",
      expandedBg: "bg-emerald-50/50",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      hover: "hover:border-purple-300",
      iconBg: "bg-purple-100",
      iconText: "text-purple-700",
      layerText: "text-purple-600",
      expandedBg: "bg-purple-50/50",
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 overflow-hidden`}
    >
      <button
        onClick={onToggle}
        className={`w-full p-6 text-left ${colors.bg} flex items-start gap-4 transition-colors`}
      >
        <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <span className={colors.iconText}>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-medium ${colors.layerText} mb-1`}>{layer}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
          <p className="text-sm text-gray-500 mt-2 italic">&quot;{question}&quot;</p>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`p-6 pt-0 ${colors.expandedBg}`}>
          <div className="border-t border-gray-200 pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function FrameworkPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (card: string) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-purple-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What is Symbiotic Thinking?
          </h1>
          <p className="mt-6 text-2xl text-gray-800 max-w-3xl mx-auto font-medium leading-snug">
            {SYMBIOTIC_THINKING_DEFINITION}
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Three abilities that stay valuable when AI can execute — and a method for
            building them that works in any subject.
          </p>
        </div>
      </section>

      {/* The Three Abilities */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              What you build
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The Three Abilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Durable, subject-neutral, and legible to the people who will hire you.
              They reinforce each other — you can&apos;t think critically about an idea
              you can&apos;t articulate, and you can&apos;t explore one deeply with a
              partner you can&apos;t reach.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {ABILITIES.map((ability) => (
              <AbilityCard key={ability.id} ability={ability} />
            ))}
          </div>

          {/* Why three, not four */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🎨</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Why three, and not the familiar four?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The widely taught &quot;four Cs&quot; add <strong>creativity</strong> to this list.
                  We name three deliberately. Creativity isn&apos;t a fourth ability you practice on
                  its own — it&apos;s what tends to emerge when critical thinking, communication, and
                  collaboration operate together on a problem you actually care about. Treating it as
                  a separate skill to drill has never worked well; treating it as an outcome gives you
                  something you can actually practice.
                </p>
              </div>
            </div>
          </div>

          {/* Naming clarification */}
          <div className="mt-4 bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">📌</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">One naming note</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  These are <strong>the Three Abilities</strong>. Further down this page
                  you&apos;ll meet <strong>the 3Cs</strong> — Context, Choices, Confirmation.
                  They are a different thing: a technique inside the method, not the abilities
                  themselves. We keep the two names distinct on purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Evidence link */}
          <div className="mt-8 text-center">
            <Link
              href="/evidence"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
            >
              See the data behind these three
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* The Personal Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-gray-200">
              How you build them
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The Personal Stack</h2>
            <p className="text-gray-600">
              The abilities are the goal. This is the method that develops them — three
              interdependent layers, like a three-legged stool that finds its stability only
              when all three are present. Click each layer to explore it.
            </p>
          </div>

          {/* Vertical Stack of Cards */}
          <div className="space-y-4">
            {/* Layer 1: Mindset */}
            <ExpandableCard
              icon={<Brain className="w-6 h-6" />}
              layer="Layer 1"
              title="Mindset (The WHAT)"
              subtitle="Creating vs. Consuming"
              question="What am I actually doing when I work with AI?"
              isExpanded={expandedCard === "mindset"}
              onToggle={() => toggleCard("mindset")}
              color="amber"
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  The foundational layer defines <strong>what you&apos;re doing</strong>: integrating the active
                  habits of creating with the act of consuming information, instead of passively consuming.
                </p>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">The Spectrum of Engagement</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                      <div className="font-medium text-red-800 mb-1">Pure Consuming</div>
                      <p className="text-sm text-red-700">
                        Passive acceptance of information without critical evaluation or personal input.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="font-medium text-green-800 mb-1">Creating</div>
                      <p className="text-sm text-green-700">
                        Actively engaging: questioning assumptions, providing context, making deliberate choices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">The Key Insight</h4>
                      <p className="text-sm text-gray-700">
                        The goal is not to create <em>instead of</em> consuming, but to <strong>infuse the act
                        of consuming with the habits of creating</strong>. Transform from a passive recipient
                        of information into an active partner in your own learning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <strong>Try this reflection:</strong> Is watching a TV show creating or consuming? What about
                  writing a letter by hand? Reading a book? The answer isn&apos;t binary — it&apos;s a spectrum
                  based on your level of engagement.
                </div>
              </div>
            </ExpandableCard>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gradient-to-b from-amber-300 to-emerald-300"></div>
            </div>

            {/* Layer 2: Metacognition */}
            <ExpandableCard
              icon={<RefreshCw className="w-6 h-6" />}
              layer="Layer 2"
              title="Metacognition (The HOW)"
              subtitle="The 3Cs: Context, Choices, Confirming"
              question="How do I inject human value into my work with AI?"
              isExpanded={expandedCard === "metacognition"}
              onToggle={() => toggleCard("metacognition")}
              color="emerald"
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  This layer provides <strong>how to think about your own thinking</strong> and infuse human
                  value into any task. It&apos;s a structured technique distilled into three core actions.
                </p>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">The 3Cs Framework</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                        C
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Context</div>
                        <p className="text-sm text-gray-600">
                          Provide the specific, personal details, memories, and background that the AI lacks.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                        C
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Choices</div>
                        <p className="text-sm text-gray-600">
                          Make deliberate decisions about the AI&apos;s output — select the right tone, reject
                          certain phrases, guide the direction.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm flex-shrink-0">
                        C
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Confirming</div>
                        <p className="text-sm text-gray-600">
                          Evaluate the final outcome against your original intent. Does it truly reflect you
                          and convey your intended message?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Example: Writing a Birthday Note</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    A generic AI-generated birthday note would be an impersonal message — lacking real value.
                    But when you iterate through the 3Cs:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                    <li><strong>Context:</strong> Share specific memories, inside jokes, what this person means to you</li>
                    <li><strong>Choices:</strong> Select the tone, keep certain phrases, reject others that don&apos;t sound like you</li>
                    <li><strong>Confirming:</strong> Read it and ask: &quot;Does this sound like me? Would they know I wrote this?&quot;</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">
                    The result becomes a message <em>from you</em>, articulated with help from a tool, but
                    fundamentally a product of your own context and choices.
                  </p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Connection to Problem-Solving</h4>
                      <p className="text-sm text-gray-700">
                        The 3Cs map directly to the UMPIRE problem-solving framework, making them applicable
                        to tackling any new problem — from coding interviews to professional projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ExpandableCard>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-gradient-to-b from-emerald-300 to-purple-300"></div>
            </div>

            {/* Layer 3: Motivation */}
            <ExpandableCard
              icon={<Target className="w-6 h-6" />}
              layer="Layer 3"
              title="Motivation (The WHY)"
              subtitle="The DIKW Pyramid"
              question="Why should I learn this way? What am I building toward?"
              isExpanded={expandedCard === "motivation"}
              onToggle={() => toggleCard("motivation")}
              color="purple"
            >
              <div className="space-y-4">
                <p className="text-gray-700">
                  This layer establishes <strong>why you&apos;re learning this way</strong> — a framework to
                  pursue progressively deeper learning by moving from collecting data to building information,
                  knowledge, and ultimately wisdom.
                </p>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">The DIKW Pyramid</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A model for tracking your learning progress and understanding that true learning,
                    like building muscle at the gym, takes time and focused effort.
                  </p>

                  {/* Visual Pyramid */}
                  <div className="space-y-2">
                    <div className="bg-purple-100 rounded-lg p-3 text-center mx-auto max-w-[60%]">
                      <div className="font-semibold text-purple-800">Wisdom</div>
                      <p className="text-xs text-purple-600">Apply to new situations</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center mx-auto max-w-[75%]">
                      <div className="font-semibold text-purple-700">Knowledge</div>
                      <p className="text-xs text-purple-600">Understand deeply</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-center mx-auto max-w-[90%]">
                      <div className="font-semibold text-gray-700">Information</div>
                      <p className="text-xs text-gray-600">Know the steps</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-gray-600">Data</div>
                      <p className="text-xs text-gray-500">Get the answer</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Example: A Physics Homework Problem</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-500 w-24 flex-shrink-0">Data:</span>
                      <span className="text-gray-700">&quot;Solve this problem for me.&quot;</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-500 w-24 flex-shrink-0">Information:</span>
                      <span className="text-gray-700">&quot;Show me the steps to solve this problem.&quot;</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-500 w-24 flex-shrink-0">Knowledge:</span>
                      <span className="text-gray-700">&quot;Explain why this formula works, what the assumptions are, and test me on similar problems.&quot;</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium text-gray-500 w-24 flex-shrink-0">Wisdom:</span>
                      <span className="text-gray-700">&quot;Create a more complex, real-world version where the original approach is insufficient. Then test me on scenarios where I have to figure out the adjustments.&quot;</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">The Key Insight</h4>
                      <p className="text-sm text-gray-700">
                        Reframe your goal from &quot;getting the assignment done&quot; to <strong>building
                        knowledge that is durable and applicable</strong> to your future. The ability to
                        abstract and synthesize is emerging as a critical skill in a world where AI can
                        provide answers, but human value comes from abstracting insights from those answers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ExpandableCard>
          </div>

          {/* Integration Note */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex gap-4">
              <div className="text-2xl">🔗</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">An Integrated System</h3>
                <p className="text-gray-600">
                  These three layers are not a menu of options — they form a single, integrated system.
                  The <strong>Mindset</strong> gives you clarity on what you&apos;re doing.
                  The <strong>Metacognition</strong> gives you a technique for how to do it.
                  The <strong>Motivation</strong> gives you a reason why and a way to measure progress.
                </p>
              </div>
            </div>
          </div>

          {/* How the two levels connect */}
          <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">
              How the method builds the abilities
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-56 flex-shrink-0 font-medium text-amber-800">
                  Mindset — Creating vs. Consuming
                </div>
                <div className="hidden sm:block text-gray-300">→</div>
                <div className="text-gray-600">
                  Refusing passive acceptance is where <strong>critical thinking</strong> starts.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-56 flex-shrink-0 font-medium text-emerald-800">
                  Metacognition — the 3Cs
                </div>
                <div className="hidden sm:block text-gray-300">→</div>
                <div className="text-gray-600">
                  Context is <strong>communication</strong>; Choices and Confirmation are{" "}
                  <strong>critical thinking</strong>; running the loop with a partner is{" "}
                  <strong>collaboration</strong>.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="sm:w-56 flex-shrink-0 font-medium text-purple-800">
                  Motivation — the DIKW Pyramid
                </div>
                <div className="hidden sm:block text-gray-300">→</div>
                <div className="text-gray-600">
                  Gives you a reason to keep climbing, and a way to see all three improving.
                </div>
              </div>
            </div>
          </div>

          {/* Portable Edition Link */}
          <div className="mt-6 bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Prefer your own AI tool?</h3>
                  <p className="text-gray-600 text-sm">
                    Take the Symbiotic Thinking framework to ChatGPT, Claude, or any AI chatbot with our portable system prompt.
                  </p>
                </div>
              </div>
              <Link
                href="/portable"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors flex-shrink-0"
              >
                View Portable Edition
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to practice Symbiotic Thinking?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            The Dojo is a free AI-powered practice environment where you can develop these skills
            with guided support.
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
            <Link
              href="/learners"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
