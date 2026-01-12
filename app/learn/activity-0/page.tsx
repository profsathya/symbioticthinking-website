import { Metadata } from "next";
import Link from "next/link";
import {
  TierSelector,
  ReflectionPrompt,
  KeyInsight,
  Collapsible,
} from "@/app/components/learn";

export const metadata: Metadata = {
  title: "Activity 0: Your First Direct Report | Learn Symbiotic Thinking",
  description: "Discover that AI makes you a manager of intelligence resources. Learn the foundational skill of delegation.",
};

export default function Activity0Page() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Learn
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">👔</span>
            <span className="text-sm text-gray-500 font-medium">Activity 0</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your First Direct Report
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            What does it mean to manage intelligence resources? In this activity,
            you&apos;ll discover that AI has fundamentally changed what it means to do knowledge work.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <TierSelector defaultTier="deep">
            {{
              simple: <SimpleTier />,
              deep: <DeepTier />,
              deeper: <DeeperTier />,
            }}
          </TierSelector>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div></div>
              <Link
                href="/learn/activity-1"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Next: The Hiring Decision
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SimpleTier() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2>The Scenario</h2>
      <p>
        It&apos;s your first day at a new job. Your manager tells you: &quot;Congratulations! You&apos;ve been
        assigned a direct report. They&apos;re eager to help and can work on almost anything you need.&quot;
      </p>

      <ReflectionPrompt title="Quick Reflection">
        <p>What&apos;s the first thing you&apos;d want to know about your new direct report?</p>
      </ReflectionPrompt>

      <h2>The Escalation</h2>
      <p>
        A week later, your manager returns: &quot;Great news! You now have FIVE direct reports. Each has
        different capabilities, but they&apos;re all ready to work.&quot;
      </p>

      <h2>The Reveal</h2>
      <p>
        <strong>Plot twist:</strong> Your &quot;direct reports&quot; are AI systems. And their capabilities are staggering:
      </p>

      <ul>
        <li>Solve International Math Olympiad problems</li>
        <li>Write functional code in seconds</li>
        <li>Analyze thousands of documents instantly</li>
        <li>Generate professional-quality writing</li>
        <li>Trained on essentially all publicly available human knowledge</li>
        <li>Never tired, never forget, available 24/7</li>
        <li>Getting dramatically better every few months</li>
      </ul>

      <KeyInsight>
        <p>
          <strong>You are now a manager of intelligence resources.</strong> This is true regardless of
          your job title, experience level, or field. The question isn&apos;t whether you&apos;ll work with AI—it&apos;s
          what kind of manager you&apos;ll be.
        </p>
      </KeyInsight>

      <h2>Two Types of Managers</h2>

      <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-semibold text-red-800 mb-3">Manager A</h3>
          <ul className="space-y-2 text-red-900 text-sm">
            <li>• Asks AI to &quot;do the task&quot;</li>
            <li>• Accepts whatever output comes back</li>
            <li>• Doesn&apos;t evaluate quality</li>
            <li>• Becomes dependent on AI</li>
            <li>• Stagnates over time</li>
          </ul>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <h3 className="font-semibold text-emerald-800 mb-3">Manager B</h3>
          <ul className="space-y-2 text-emerald-900 text-sm">
            <li>• Understands problem before delegating</li>
            <li>• Provides clear context for good work</li>
            <li>• Makes deliberate choices about approach</li>
            <li>• Evaluates output against own judgment</li>
            <li>• Builds expertise that grows WITH AI</li>
          </ul>
        </div>
      </div>

      <ReflectionPrompt title="Final Reflection">
        <p>Which manager are you right now? Which do you want to become?</p>
      </ReflectionPrompt>

      <h2>Key Takeaway</h2>
      <p>
        <strong>Delegation is a skill.</strong> The managers who thrive aren&apos;t those who delegate
        everything or nothing—they&apos;re those who delegate deliberately, with judgment about what
        context to provide, what choices to make, and how to verify the results.
      </p>
    </div>
  );
}

function DeepTier() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2>Part 1: The Scenario</h2>
      <p>
        It&apos;s your first day at a new job. You&apos;re still figuring out where the coffee machine is
        when your manager pulls you aside.
      </p>

      <blockquote>
        &quot;Congratulations! You&apos;ve been assigned a direct report. They&apos;re eager to help and can
        work on almost anything you need. They&apos;re waiting to hear from you.&quot;
      </blockquote>

      <p>
        You weren&apos;t expecting to manage anyone. You just started. But here you are.
      </p>

      <ReflectionPrompt title="Reflection 1">
        <p className="mb-2">Think about this situation. What would you want to know before you start delegating work?</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>What are their strengths and weaknesses?</li>
          <li>What kind of guidance do they need?</li>
          <li>How will you know if their work is good?</li>
          <li>What happens if they make mistakes?</li>
        </ul>
      </ReflectionPrompt>

      <Collapsible title="What makes a good manager?">
        <p>
          Good managers don&apos;t just hand off tasks. They:
        </p>
        <ul>
          <li><strong>Provide context</strong> so their reports can do good work</li>
          <li><strong>Make deliberate choices</strong> about what to delegate and how</li>
          <li><strong>Verify results</strong> against their own judgment</li>
          <li><strong>Develop their people</strong> over time</li>
        </ul>
        <p>
          Notice: these skills require the manager to actually understand the work. You can&apos;t
          provide good context for work you don&apos;t understand. You can&apos;t verify quality if you
          have no basis for judgment.
        </p>
      </Collapsible>

      <h2>Part 2: The Escalation</h2>
      <p>
        A week passes. You&apos;re just getting comfortable with having one direct report when your
        manager appears again, beaming.
      </p>

      <blockquote>
        &quot;Great news! Based on our growth, you now have FIVE direct reports. Each has different
        capabilities, but they&apos;re all ready to work. How you use them is up to you.&quot;
      </blockquote>

      <p>
        Five people. Each with different skills. All looking to you for direction.
      </p>

      <ReflectionPrompt title="Reflection 2">
        <p>How does having five direct reports change things? What new skills would you need?</p>
      </ReflectionPrompt>

      <h2>Part 3: The Reveal ⚡</h2>
      <p>
        Here&apos;s what we haven&apos;t told you yet:
      </p>

      <div className="bg-gray-900 text-white rounded-xl p-6 my-8 not-prose">
        <p className="text-emerald-400 font-semibold mb-4">Your &quot;direct reports&quot; are AI systems.</p>
        <p className="text-gray-300 mb-4">And their capabilities are staggering:</p>
        <ul className="space-y-2 text-gray-300">
          <li>✓ Solve International Math Olympiad problems</li>
          <li>✓ Write functional code in seconds</li>
          <li>✓ Analyze thousands of documents instantly</li>
          <li>✓ Generate professional-quality writing</li>
          <li>✓ Trained on essentially all publicly available human knowledge</li>
          <li>✓ Never tired, never forget, available 24/7</li>
          <li>✓ Getting dramatically better every few months</li>
        </ul>
      </div>

      <p>
        This isn&apos;t a hypothetical future. This is now. These capabilities exist today, and they&apos;re
        available to essentially everyone.
      </p>

      <KeyInsight title="The Core Realization">
        <p>
          <strong>You are now a manager of intelligence resources.</strong>
        </p>
        <p className="mt-2">
          This is true regardless of your job title, experience level, or field. Whether you&apos;re a
          student, a professional, or somewhere in between—you now have access to capabilities that
          would have seemed like science fiction a few years ago.
        </p>
        <p className="mt-2">
          The question isn&apos;t whether you&apos;ll work with AI. It&apos;s what kind of manager you&apos;ll be.
        </p>
      </KeyInsight>

      <h2>Part 4: Two Types of Managers</h2>
      <p>
        We&apos;ve observed two patterns in how people work with AI:
      </p>

      <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-semibold text-red-800 mb-4">Manager A: Passive Partnership</h3>
          <ul className="space-y-3 text-red-900">
            <li className="flex gap-2">
              <span className="text-red-500">→</span>
              <span>Asks AI to &quot;do the task&quot;</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">→</span>
              <span>Accepts whatever output comes back</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">→</span>
              <span>Doesn&apos;t evaluate quality critically</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">→</span>
              <span>Becomes dependent on AI over time</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">→</span>
              <span>Skills and judgment stagnate</span>
            </li>
          </ul>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <h3 className="font-semibold text-emerald-800 mb-4">Manager B: Active Partnership</h3>
          <ul className="space-y-3 text-emerald-900">
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Understands the problem before delegating</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Provides clear context for good work</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Makes deliberate choices about approach</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Evaluates output against own judgment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Builds expertise that grows WITH AI</span>
            </li>
          </ul>
        </div>
      </div>

      <p>
        Manager A treats AI like a vending machine: insert request, receive output.
        Manager B treats AI like a capable team member who needs direction, context, and oversight.
      </p>

      <ReflectionPrompt title="Reflection 3">
        <p>Be honest with yourself: In your current AI usage, are you more like Manager A or Manager B?</p>
        <p className="mt-2 text-sm">Think about specific recent examples. What did you actually do?</p>
      </ReflectionPrompt>

      <h2>Part 5: What This Means for You</h2>

      <h3>📌 Key Takeaways</h3>

      <div className="bg-gray-50 rounded-xl p-6 my-6 not-prose">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">1. Delegation is a skill</h4>
            <p className="text-gray-600 text-sm mt-1">
              It&apos;s not just &quot;handing off tasks.&quot; It requires understanding, context-setting, and verification.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">2. AI capabilities are staggering—and growing</h4>
            <p className="text-gray-600 text-sm mt-1">
              What&apos;s impossible today may be routine in months. Your approach needs to evolve too.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">3. Your value is in judgment, context, and orchestration</h4>
            <p className="text-gray-600 text-sm mt-1">
              AI can execute. But knowing WHAT to execute, WHY, and WHETHER it worked—that&apos;s human work.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">4. The choice between Manager A and B compounds over time</h4>
            <p className="text-gray-600 text-sm mt-1">
              Every interaction either builds your judgment or erodes it. Small choices matter.
            </p>
          </div>
        </div>
      </div>

      <h2>Looking Ahead</h2>
      <p>
        The next activities will help you develop the specific skills that separate Manager B from
        Manager A. You&apos;ll learn frameworks for:
      </p>
      <ul>
        <li>Providing effective context (the 3Cs)</li>
        <li>Building deep understanding (DIKW)</li>
        <li>Monitoring your own engagement (Creating vs. Consuming)</li>
      </ul>
      <p>
        Together, these form what we call <strong>Symbiotic Thinking</strong>—a way of working with
        AI that builds your capabilities rather than replacing them.
      </p>

      <ReflectionPrompt title="Final Reflection">
        <p>What&apos;s one thing you&apos;ll do differently in your next AI interaction based on this activity?</p>
        <p className="mt-2 text-sm">Be specific. &quot;Be better&quot; doesn&apos;t count.</p>
      </ReflectionPrompt>
    </div>
  );
}

function DeeperTier() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2>Dojo Exploration</h2>
      <p>
        For this tier, you&apos;ll explore the concepts through direct dialogue with an AI using the
        Symbiotic Thinking Dojo approach.
      </p>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8 not-prose">
        <h3 className="font-semibold text-purple-800 mb-4">🥋 Your Exploration Mission</h3>
        <p className="text-purple-900 mb-4">
          Use the Dojo (or any AI with the Portable Edition setup) to explore this question:
        </p>
        <blockquote className="border-l-4 border-purple-400 pl-4 italic text-purple-800">
          &quot;What does it mean to be a good manager of AI capabilities? What skills separate someone
          who grows with AI from someone who becomes dependent on it?&quot;
        </blockquote>
      </div>

      <h3>Getting Started</h3>
      <p>You have two options:</p>

      <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Option A: Use the Dojo</h4>
          <p className="text-gray-600 text-sm mb-4">
            Go to the Symbiotic Thinking Dojo with your Google AI API key.
          </p>
          <a
            href="https://dojo.symbioticthinking.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Enter the Dojo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Option B: Portable Edition</h4>
          <p className="text-gray-600 text-sm mb-4">
            Set up the Dojo experience in Claude, ChatGPT, or Gemini.
          </p>
          <Link
            href="/portable"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Portable Setup Guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <h3>Suggested Exploration Path</h3>
      <ol>
        <li>
          <strong>Start with @framer</strong> — Let it help you clarify what &quot;managing AI&quot; actually means.
          What assumptions are you making? What would success look like?
        </li>
        <li>
          <strong>Engage @challenger</strong> — Have it push back on your ideas. What are the failure
          modes of different approaches to AI collaboration?
        </li>
        <li>
          <strong>Use @connector</strong> — Ask it to draw parallels. How is managing AI similar to or
          different from managing people? What can we learn from other domains?
        </li>
        <li>
          <strong>End with @reflector</strong> — Generate a summary of your exploration and key insights.
        </li>
      </ol>

      <ReflectionPrompt title="After Your Exploration">
        <p>What surprised you in your exploration? What insight will you carry forward?</p>
      </ReflectionPrompt>

      <KeyInsight icon="📌" title="Minimum Deliverable">
        <p>
          Spend at least 20 minutes in genuine exploration. At the end, use <code>@reflector</code> to
          generate a session summary. This summary captures your thinking process.
        </p>
      </KeyInsight>
    </div>
  );
}
