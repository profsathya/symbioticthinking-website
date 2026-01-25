"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Brain, RefreshCw, Target, Lightbulb } from "lucide-react";

// Note: metadata export doesn't work with "use client", would need separate layout
// export const metadata: Metadata = {
//   title: "What is Symbiotic Thinking? | The Framework",
//   description: "A flexible recipe for learning in the age of AI, built on three interdependent layers: Mindset, Metacognition, and Motivation.",
// };

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
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A flexible recipe for learning in the age of AI, built on three interdependent layers
            that are durable, subject-neutral, and essential for developing real capability.
          </p>
          <p className="mt-4 text-gray-500">
            Think of it like a three-legged stool — it finds its stability when all three legs are present.
          </p>
        </div>
      </section>

      {/* The Personal Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">The Personal Stack</h2>
            <p className="text-gray-600">
              Click each layer to explore what it means and see examples.
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
          <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="flex gap-4">
              <div className="text-2xl">🔗</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">An Integrated System</h3>
                <p className="text-gray-600">
                  These three layers are not a menu of options — they form a single, integrated system.
                  The <strong>Mindset</strong> gives you clarity on what you&apos;re doing.
                  The <strong>Metacognition</strong> gives you a technique for how to do it.
                  The <strong>Motivation</strong> gives you a reason why and a way to measure progress.
                  Together, they create a durable, subject-neutral framework for learning anything in the age of AI.
                </p>
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
