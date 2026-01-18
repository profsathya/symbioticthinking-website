import { Metadata } from "next";
import Link from "next/link";
import {
  TierSelector,
  ReflectionPrompt,
  InteractiveReflection,
  KeyInsight,
  Collapsible,
  AnalogTrigger,
  SimulatorWrapper,
  ScenarioBlock,
  ComparisonCard,
  FeatureList,
  TakeawayBox,
  MultipleChoice,
  MatchingExercise,
  CompleteTheSentence,
} from "@/app/components/learn";
import { User, TrendingUp, Zap } from "lucide-react";

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
      <ScenarioBlock title="The Scenario" icon={User} variant="neutral">
        <p>
          It&apos;s your first day at a new job. Your manager tells you: &quot;Congratulations! You&apos;ve been
          assigned a direct report. They&apos;re eager to help and can work on almost anything you need.&quot;
        </p>
      </ScenarioBlock>

      <ScenarioBlock title="The Escalation" icon={TrendingUp} variant="escalation">
        <p>
          A week later, your manager returns: &quot;Great news! You now have FIVE direct reports. Each has
          different capabilities, but they&apos;re all ready to work.&quot;
        </p>
      </ScenarioBlock>

      <ScenarioBlock title="The Reveal" icon={Zap} variant="reveal">
        <p>
          <strong>Plot twist:</strong> Your &quot;direct reports&quot; are AI systems. And their capabilities are staggering:
        </p>
      </ScenarioBlock>

      <FeatureList
        title="AI Capabilities"
        columns={2}
        items={[
          "Solve International Math Olympiad problems",
          "Write functional code in seconds",
          "Analyze thousands of documents instantly",
          "Generate professional-quality writing",
          "Trained on essentially all public knowledge",
          "Never tired, never forget, available 24/7",
          "Getting dramatically better every few months"
        ]}
      />

      <KeyInsight>
        <p>
          <strong>You are now a manager of intelligence resources.</strong> This is true regardless of
          your job title, experience level, or field. The question isn&apos;t whether you&apos;ll work with AI—it&apos;s
          what kind of manager you&apos;ll be.
        </p>
      </KeyInsight>

      <h2>Two Types of Managers</h2>

      <ComparisonCard
        itemA={{
          title: "Manager A",
          color: "red",
          points: [
            "Asks AI to 'do the task'",
            "Accepts whatever output comes back",
            "Doesn't evaluate quality",
            "Becomes dependent on AI",
            "Stagnates over time"
          ]
        }}
        itemB={{
          title: "Manager B",
          color: "emerald",
          points: [
            "Understands problem before delegating",
            "Provides clear context for good work",
            "Makes deliberate choices about approach",
            "Evaluates output against own judgment",
            "Builds expertise that grows WITH AI"
          ]
        }}
      />

      <MultipleChoice
        scenario="It's 11pm. You have a 2,000-word essay due tomorrow on a topic you find boring. You're exhausted and just want it done."
        question="What do you do?"
        mode="reflection"
        choices={[
          {
            id: "a",
            text: "Ask AI to write the essay. Copy-paste it. Go to bed.",
            feedback: "This is pure Manager A behavior. You'll submit something, but you'll learn nothing—and you're training yourself to avoid thinking when things get hard.",
            insight: "Notice the short-term relief vs. long-term cost tradeoff you're making."
          },
          {
            id: "b",
            text: "Ask AI to write it, then read through and make some edits so it sounds like you.",
            feedback: "This feels like a middle ground, but it's mostly Manager A with extra steps. Editing AI output isn't the same as understanding the material.",
            insight: "Ask yourself: could you explain the essay's argument without looking at it?"
          },
          {
            id: "c",
            text: "Spend 20 minutes outlining your own argument. Then use AI to help expand sections while you verify each point.",
            feedback: "This is Manager B territory. The outline forces you to think first. Using AI to expand means you're directing, not just receiving.",
            insight: "Even when tired, the outline step keeps you in control."
          },
          {
            id: "d",
            text: "Skip AI entirely. Struggle through it yourself, even if the quality suffers.",
            feedback: "There's integrity here, but refusing to use available tools isn't always wise. The goal isn't to avoid AI—it's to use it without losing yourself.",
            insight: "Stubbornness and skill-building aren't the same thing."
          }
        ]}
        followUp="There's no single 'right' answer—but notice which choice builds your capabilities vs. which just gets the task done."
      />

      <AnalogTrigger
        task={{
          title: "Manager A vs Manager B",
          description: "Sketch a quick diagram (venn diagram, T-chart, etc.) showing the difference between these two manager types. Seeing it visually helps lock in the concept.",
          activityId: "activity-0-simple"
        }}
        buttonText="Sketch the Difference"
      />

      <TakeawayBox title="Key Takeaway">
        <p>
          <strong>Delegation is a skill.</strong> The managers who thrive aren&apos;t those who delegate
          everything or nothing—they&apos;re those who delegate deliberately, with judgment about what
          context to provide, what choices to make, and how to verify the results.
        </p>
      </TakeawayBox>
    </div >
  );
}

function DeepTier() {
  return (
    <div className="prose prose-gray max-w-none">
      <ScenarioBlock title="The Scenario" icon={User} variant="neutral">
        <p>
          It&apos;s your first day at a new job. You&apos;re still figuring out where the coffee machine is
          when your manager pulls you aside.
        </p>

        <blockquote className="mt-4 border-l-4 border-blue-200 pl-4 italic bg-white/50 py-2">
          &quot;Congratulations! You&apos;ve been assigned a direct report. They&apos;re eager to help and can
          work on almost anything you need. They&apos;re waiting to hear from you.&quot;
        </blockquote>

        <p className="mt-4">
          You weren&apos;t expecting to manage anyone. You just started. But here you are.
        </p>
      </ScenarioBlock>

      <InteractiveReflection
        id="activity-0-deep-reflection-1"
        title="Reflection 1"
        placeholder="What would you want to know before delegating? Consider their strengths, weaknesses, the guidance they need..."
      >
        <p className="mb-2">Think about this situation. What would you want to know before you start delegating work?</p>
        <FeatureList
          variant="question"
          items={[
            "What are their strengths and weaknesses?",
            "What kind of guidance do they need?",
            "How will you know if their work is good?",
            "What happens if they make mistakes?"
          ]}
        />
      </InteractiveReflection>

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

      <ScenarioBlock title="The Escalation" icon={TrendingUp} variant="escalation">
        <p>
          A week passes. You&apos;re just getting comfortable with having one direct report when your
          manager appears again, beaming.
        </p>

        <blockquote className="mt-4 border-l-4 border-amber-300 pl-4 italic bg-white/50 py-2">
          &quot;Great news! Based on our growth, you now have FIVE direct reports. Each has different
          capabilities, but they&apos;re all ready to work. How you use them is up to you.&quot;
        </blockquote>

        <p className="mt-4">
          Five people. Each with different skills. All looking to you for direction.
        </p>
      </ScenarioBlock>

      <InteractiveReflection
        id="activity-0-deep-reflection-2"
        title="Reflection 2"
        placeholder="How does managing five change things? What new challenges arise?"
      >
        <p>How does having five direct reports change things? What new skills would you need?</p>
      </InteractiveReflection>

      <ScenarioBlock title="The Reveal" icon={Zap} variant="reveal">
        <p className="text-xl font-light mb-4">
          Here&apos;s what we haven&apos;t told you yet:
        </p>

        <div className="bg-gray-800/50 rounded-xl p-6 my-8 not-prose border border-gray-700">
          <p className="text-emerald-400 font-semibold mb-4">Your &quot;direct reports&quot; are AI systems.</p>
          <p className="text-gray-300 mb-4">And their capabilities are staggering:</p>
          <FeatureList
            columns={1}
            items={[
              "Solve International Math Olympiad problems",
              "Write functional code in seconds",
              "Analyze thousands of documents instantly",
              "Generate professional-quality writing",
              "Trained on essentially all public knowledge",
              "Never tired, never forget, available 24/7",
              "Getting dramatically better every few months"
            ]}
          />
        </div>

        <p>
          This isn&apos;t a hypothetical future. This is now. These capabilities exist today, and they&apos;re
          available to essentially everyone.
        </p>
      </ScenarioBlock>

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

      <ComparisonCard
        title="Passive vs Active Partnership"
        itemA={{
          title: "Manager A: Passive Partnership",
          color: "red",
          points: [
            "Asks AI to 'do the task'",
            "Accepts whatever output comes back",
            "Doesn't evaluate quality critically",
            "Becomes dependent on AI over time",
            "Skills and judgment stagnate"
          ]
        }}
        itemB={{
          title: "Manager B: Active Partnership",
          color: "emerald",
          points: [
            "Understands the problem before delegating",
            "Provides clear context for good work",
            "Makes deliberate choices about approach",
            "Evaluates output against own judgment",
            "Builds expertise that grows WITH AI"
          ]
        }}
      />

      <p>
        Manager A treats AI like a vending machine: insert request, receive output.
        Manager B treats AI like a capable team member who needs direction, context, and oversight.
      </p>

      <MatchingExercise
        title="Which Manager?"
        context="Real situations from student life. Match each scenario to the manager type it represents."
        instruction="Click a scenario on the left, then click the matching behavior on the right."
        leftHeader="What You Did"
        rightHeader="Manager Type"
        pairs={[
          {
            id: "1",
            left: "Pasted an error message into ChatGPT, copied the fix, moved on without understanding why it worked",
            right: "Manager A: Accepted output without evaluation"
          },
          {
            id: "2",
            left: "Asked AI to explain a concept three different ways until you could explain it to a friend",
            right: "Manager B: Built understanding through dialogue"
          },
          {
            id: "3",
            left: "Generated five cover letter versions and sent the one that 'felt right' without editing",
            right: "Manager A: Delegated judgment entirely to AI"
          },
          {
            id: "4",
            left: "Used AI to brainstorm angles, picked your favorite, then wrote the first draft yourself",
            right: "Manager B: Made deliberate choices about approach"
          }
        ]}
        successMessage="You can recognize the difference. Now apply it to your own behavior."
      />

      <MultipleChoice
        scenario="You're learning to code. You hit a bug you don't understand. You've been stuck for 30 minutes and you're frustrated."
        question="Which approach will serve you best in the long run?"
        mode="knowledge"
        choices={[
          {
            id: "a",
            text: "Ask AI to fix the bug. Once it works, move on to the next feature.",
            feedback: "The bug is fixed, but you missed a learning opportunity. Next time you hit a similar bug, you'll be just as stuck.",
            isCorrect: false
          },
          {
            id: "b",
            text: "Ask AI to explain what's causing the bug without giving you the fix. Try to fix it yourself first.",
            feedback: "Understanding the 'why' builds debugging intuition. Even if you eventually need the fix, you'll learn more by trying first.",
            isCorrect: true
          },
          {
            id: "c",
            text: "Refuse to use AI. Keep struggling until you figure it out yourself.",
            feedback: "Persistence has value, but 30 minutes of unproductive frustration might not be the best use of time. There's a middle ground.",
            isCorrect: false
          },
          {
            id: "d",
            text: "Copy the entire codebase into AI and ask it to find all the bugs.",
            feedback: "This outsources your entire debugging process. You learn nothing about YOUR code's specific issues.",
            isCorrect: false
          }
        ]}
        followUp="The key insight: asking for explanations instead of solutions keeps you in the driver's seat."
      />

      <InteractiveReflection
        id="activity-0-deep-reflection-3"
        title="Reflection 3"
        placeholder="Think of a specific recent AI interaction. What did you actually do? Which manager were you being?"
      >
        <p>Be honest with yourself: In your current AI usage, are you more like Manager A or Manager B?</p>
        <p className="mt-2 text-sm">Think about specific recent examples. What did you actually do?</p>
      </InteractiveReflection>

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
      <FeatureList
        variant="list"
        items={[
          "Providing effective context (the 3Cs)",
          "Building deep understanding (DIKW)",
          "Monitoring your own engagement (Creating vs. Consuming)"
        ]}
      />
      <p>
        Together, these form what we call <strong>Symbiotic Thinking</strong>—a way of working with
        AI that builds your capabilities rather than replacing them.
      </p>

      <CompleteTheSentence
        context="Before you move on, make sure you've internalized the core idea. Fill in the blanks to complete this key principle."
        sentenceParts={[
          "The goal isn't to ",
          " AI or to ",
          " it entirely. The goal is to use AI in ways that ",
          " your own capabilities over time."
        ]}
        blanks={[
          [
            { id: "avoid", text: "avoid", isCorrect: false, feedback: "Avoiding AI entirely means missing opportunities to amplify your work." },
            { id: "depend-on", text: "depend on", isCorrect: true, feedback: "Correct! Dependence means you can't function without it." },
            { id: "master", text: "master", isCorrect: false, feedback: "'Mastering' AI isn't the problem—the problem is when AI masters you." }
          ],
          [
            { id: "reject", text: "reject", isCorrect: true, feedback: "Correct! Total rejection isn't the answer either." },
            { id: "worship", text: "worship", isCorrect: false, feedback: "This isn't really about worship—it's about a specific failure mode." },
            { id: "understand", text: "understand", isCorrect: false, feedback: "Understanding AI is actually good. The issue is the extreme positions." }
          ],
          [
            { id: "replace", text: "replace", isCorrect: false, feedback: "If AI replaces your capabilities, you're losing, not gaining." },
            { id: "build", text: "build", isCorrect: true, feedback: "Correct! The goal is capability-building, not capability-replacement." },
            { id: "test", text: "test", isCorrect: false, feedback: "Testing isn't the primary goal—growth is." }
          ]
        ]}
        successMessage="You've got it. This is the essence of Symbiotic Thinking: using AI as a tool for growth, not a crutch for avoidance."
      />

      <InteractiveReflection
        id="activity-0-deep-final"
        title="Final Reflection"
        placeholder="Be specific: what exactly will you do differently? (e.g., 'I will outline my argument before asking AI to expand it')"
      >
        <p>What&apos;s one thing you&apos;ll do differently in your next AI interaction based on this activity?</p>
        <p className="mt-2 text-sm">Be specific. &quot;Be better&quot; doesn&apos;t count.</p>
      </InteractiveReflection>
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
        <ScenarioBlock title="The Question" icon={User} variant="neutral">
          &quot;What does it mean to be a good manager of AI capabilities? What skills separate someone
          who grows with AI from someone who becomes dependent on it?&quot;
        </ScenarioBlock>
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

      <div className="my-12 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <h4 className="font-semibold text-blue-900 mb-4">Option C: Use the Simulator (Right Here)</h4>
        <p className="text-blue-800 text-sm mb-4">
          Practice the &quot;Pre-Flight Check&quot; right now without leaving the page.
          Try asking the AI to &quot;explain how to manage intelligence.&quot;
        </p>
        <div className="not-prose bg-white rounded-xl shadow-sm">
          <SimulatorWrapper />
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-800 text-center">
              <strong>Demo Mode:</strong> This simulator shows the 3Cs &quot;Pre-Flight Check&quot; workflow.
              The AI responses are simulated—for real AI interaction, use the Dojo or Portable Edition above.
            </p>
          </div>
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

      <InteractiveReflection
        id="activity-0-deeper-exploration"
        title="After Your Exploration"
        placeholder="What surprised you? What's one insight you'll remember?"
      >
        <p>What surprised you in your exploration? What insight will you carry forward?</p>
      </InteractiveReflection>

      <KeyInsight icon="📌" title="Minimum Deliverable">
        <p>
          Spend at least 20 minutes in genuine exploration. At the end, use <code>@reflector</code> to
          generate a session summary. This summary captures your thinking process.
        </p>
      </KeyInsight>
    </div>
  );
}
