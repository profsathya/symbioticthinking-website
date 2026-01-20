import { Metadata } from "next";
import Link from "next/link";
import {
  TierSelector,
  ReflectionPrompt,
  InteractiveReflection,
  KeyInsight,
  Collapsible,
  ConversationTranscript,
  ScenarioBlock,
  ComparisonCard,
  FeatureList,
  MultipleChoice,
  MatchingExercise,
  CompleteTheSentence,
} from "@/app/components/learn";
import { User, MessageCircle, GitBranch, Target, CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Activity 1: The Hiring Decision | Learn Symbiotic Thinking",
  description: "Evaluate two job candidates who both used AI. Discover what separates effective AI collaboration from passive consumption.",
};

export default function Activity1Page() {
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
            <span className="text-3xl">📋</span>
            <span className="text-sm text-gray-500 font-medium">Activity 1</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Hiring Decision
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            You&apos;re the hiring manager. Two candidates completed the same AI-assisted work sample.
            Both are qualified. You can only hire one. What do you look for?
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
              <Link
                href="/learn/activity-0"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous: Your First Direct Report
              </Link>
              <Link
                href="/learn/activity-2"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Next: The Investment Decision
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
          You&apos;re hiring for a marketing role. Both candidates completed the same work sample:
          &quot;Create a social media campaign for HydroSync, a smart water bottle.&quot; Both used AI.
        </p>
      </ScenarioBlock>

      <ComparisonCard
        title="Candidate A vs Candidate B"
        itemA={{
          title: "Candidate A",
          color: "amber",
          points: [
            "2 prompts total",
            "First: 'Write a campaign...'",
            "Second: 'Make it more engaging'",
            "Submitted AI output with minor edits"
          ]
        }}
        itemB={{
          title: "Candidate B",
          color: "emerald",
          points: [
            "6+ exchanges with AI",
            "Asked about competitors & audience",
            "Proposed strategy & asked for holes",
            "Submitted strategy + 'Risks' section"
          ]
        }}
      />

      <InteractiveReflection
        id="activity-1-simple-quick-decision"
        title="Quick Decision"
        placeholder="Who would you hire: A or B? Why? Write your answer before continuing..."
      >
        <p>Who would you hire? Write down your answer before continuing.</p>
      </InteractiveReflection>

      <KeyInsight title="The Pattern">
        <p>
          Count the questions each candidate asked:
        </p>
        <ul className="mt-2">
          <li><strong>Candidate A:</strong> 0 real questions</li>
          <li><strong>Candidate B:</strong> Multiple substantive questions throughout</li>
        </ul>
        <p className="mt-2">
          <strong>Questions are the engine of value creation.</strong> They show understanding,
          critical thinking, and engagement. The quality of your questions often matters more
          than the quality of AI&apos;s answers.
        </p>
      </KeyInsight>

      <h2>The Framework: 3Cs</h2>
      <p>What did Candidate B do that Candidate A didn&apos;t?</p>
      <FeatureList
        variant="list"
        items={[
          "Context: Gathered information about competitors, audience, positioning",
          "Choices: Made deliberate decisions about strategy and asked AI to challenge them",
          "Confirmation: Identified risks and open questions—ways to verify the approach works"
        ]}
      />

      <MultipleChoice
        scenario="You're writing a cover letter for your dream internship. You ask AI: 'Write me a cover letter for a marketing internship at Nike.'"
        question="What's missing from this prompt?"
        mode="knowledge"
        choices={[
          {
            id: "a",
            text: "Nothing - AI has enough to work with",
            feedback: "AI will produce something, but it'll be generic. Without context about YOU, it's writing a template, not your letter.",
            isCorrect: false
          },
          {
            id: "b",
            text: "Context about your specific experience and what makes you unique",
            feedback: "Exactly. AI doesn't know your background, your relevant projects, or why you specifically want Nike. Without this, it's guessing.",
            isCorrect: true
          },
          {
            id: "c",
            text: "A request to make it more creative",
            feedback: "'More creative' is vague. The real issue is AI doesn't know anything about YOU that would make the letter genuinely personal.",
            isCorrect: false
          },
          {
            id: "d",
            text: "The job description",
            feedback: "The job description helps, but even with it, AI still doesn't know about YOUR experience to match against it.",
            isCorrect: false
          }
        ]}
        followUp="The first C is Context. Before asking AI to create, give it the information it needs to create something actually useful."
      />

      <InteractiveReflection
        id="activity-1-simple-final"
        title="Final Reflection"
        placeholder="Think of a recent AI interaction. Which Cs did you use? Which did you skip?"
      >
        <p>Think about your recent AI interactions. Did you provide Context, make Choices, and plan for Confirmation?</p>
      </InteractiveReflection>
    </div>
  );
}

function DeepTier() {
  return (
    <div className="prose prose-gray max-w-none">
      <ScenarioBlock title="The Challenge" icon={Target} variant="neutral">
        <p>
          You&apos;re the hiring manager for a marketing coordinator position. As part of the interview process,
          you asked candidates to complete a work sample:
        </p>

        <blockquote className="mt-4 border-l-4 border-blue-200 pl-4 italic bg-white/50 py-2">
          Create a social media campaign concept for HydroSync, a smart water bottle that tracks hydration
          and syncs with fitness apps. Include positioning, target audience, and 3-5 sample posts.
        </blockquote>

        <p className="mt-4">
          Two candidates made the final round. Both submitted strong work. Both disclosed that they used
          AI assistance. <strong>You have access to their AI conversation logs.</strong>
        </p>
      </ScenarioBlock>

      <InteractiveReflection
        id="activity-1-deep-before-look"
        title="Before You Look"
        placeholder="What would impress you in an AI conversation? What would concern you?"
      >
        <p>What will you look for in the AI conversation logs? What would impress you? What would concern you?</p>
      </InteractiveReflection>

      <h2>Candidate A&apos;s AI Conversation</h2>

      <Collapsible title="View Candidate A's full conversation" defaultOpen={false}>
        <ConversationTranscript
          messages={[
            {
              speaker: "user",
              content: "Write a social media campaign for HydroSync, a smart water bottle that tracks hydration and syncs with fitness apps."
            },
            {
              speaker: "ai",
              content: `Here's a social media campaign concept for HydroSync:

**Campaign: "Stay Synced, Stay Hydrated"**

Target Audience: Health-conscious millennials and Gen Z, fitness enthusiasts, busy professionals

**Sample Posts:**

1. "Your workout doesn't end at the gym. 💧 HydroSync tracks every sip so you can crush your hydration goals. Link in bio! #HydroSync #FitnessGoals"

2. "Did you know 75% of Americans are chronically dehydrated? 😱 Don't be a statistic. HydroSync reminds you to drink up! #StayHydrated #HealthTech"

3. "Sync your sips with your steps. 🏃‍♀️💧 HydroSync connects to your favorite fitness apps for the complete picture of your health. #HydroSync #FitnessTech"

Would you like me to expand on any of these?`
            },
            {
              speaker: "user",
              content: "Make it more engaging"
            },
            {
              speaker: "ai",
              content: `Here's a more engaging version:

**Campaign: "Hydration Has Entered the Chat"**

**Sample Posts:**

1. "POV: You finally remember to drink water because your bottle literally told you to 😂💧 #HydroSync #HydrationCheck"

2. "Me: I drink plenty of water
HydroSync: 👀 *shows I've had 2 cups by 3pm*
Me: ...okay fine

Get yours and see the truth! Link in bio"

3. "That post-workout glow hits different when you're actually hydrated 💅✨ HydroSync + your fitness app = chef's kiss #GymTok #HydroSync"

These use more trending formats and casual language that performs well on social media!`
            }
          ]}
        />
        <p className="text-sm text-gray-600 mt-4">
          <strong>Summary:</strong> 2 total exchanges. Candidate submitted the second version with minor formatting edits.
        </p>
      </Collapsible>

      <h2>Candidate B&apos;s AI Conversation</h2>

      <Collapsible title="View Candidate B's full conversation" defaultOpen={false}>
        <ConversationTranscript
          messages={[
            {
              speaker: "user",
              content: "I'm working on a social media campaign for HydroSync, a smart water bottle. Before I start creating content, I want to understand the landscape. What are the main competitors in the smart water bottle space, and how do they position themselves?"
            },
            {
              speaker: "ai",
              content: `Great approach to start with competitive analysis. Key competitors include:

**HidrateSpark** - Market leader, positions on "making hydration a habit" with glow reminders
**Thermos Connected** - Focuses on temperature + hydration, targets outdoor enthusiasts
**LifeFuze** - Budget option, emphasizes simplicity and value

Most competitors focus on the tracking/reminder functionality. There might be an opportunity in positioning around a specific use case or audience segment that's underserved.

What angle are you considering for HydroSync?`
            },
            {
              speaker: "user",
              content: "Interesting. The fitness app integration seems like a differentiator. Who would care most about that - what specific audience segment?"
            },
            {
              speaker: "ai",
              content: `The fitness app integration would resonate most with:

**Primary:** People already tracking workouts who want a complete picture - they're frustrated by fragmented data across apps

**Specific segments:**
- CrossFit/F45/Orange Theory members (data-obsessed, community-oriented)
- Marathon/triathlon trainers (hydration directly impacts performance)
- "Quantified self" enthusiasts (track everything)

**Secondary opportunity:** People who've TRIED to build hydration habits before and failed. The fitness app connection gives them a "why" beyond just drinking water.

Which direction interests you?`
            },
            {
              speaker: "user",
              content: "I like the \"tried before and failed\" angle - it's more emotional than just targeting fitness people. Let me think about positioning... What if the campaign was about HydroSync being for people who know they should drink more water but haven't been able to make it stick? The fitness app integration isn't the point - it's the PROOF that the habit is actually forming."
            },
            {
              speaker: "ai",
              content: `This is a strong insight. You're reframing from:
- Feature: "Syncs with fitness apps"
- Benefit: "See your hydration habit forming alongside your other health wins"

The emotional core becomes: "You're not bad at drinking water. You just didn't have the right system."

This could work well because:
1. Reduces shame (it's not your fault)
2. Offers hope (a system can fix it)
3. The fitness app sync becomes EVIDENCE of change, not a feature

Potential risk: Might feel too focused on "failure" and turn off people who don't identify that way. Want me to pressure test this positioning or explore alternatives?`
            },
            {
              speaker: "user",
              content: "Yes, push back on it. What are the holes in this positioning?"
            },
            {
              speaker: "ai",
              content: `Pressure testing the "failed before" positioning:

**Hole 1: Limited audience**
Not everyone identifies as having "failed" at hydration. Health-optimizers who already drink water won't connect. You might be shrinking your addressable market.

**Hole 2: Negative emotional anchor**
Starting from failure requires pulling people OUT of a negative feeling. Harder than starting from aspiration. "Be your best self" often outperforms "fix what's broken."

**Hole 3: Competitive vulnerability**
Any smart bottle could claim this positioning. What makes HydroSync specifically better for habit formation?

**Hole 4: Measurement question**
How does the customer know the habit "stuck"? What's the proof point? The fitness app integration needs a clearer connection to "success."

**Strongest counter-positioning:** Focus on "habit-building for people who are already crushing their fitness goals but know hydration is their weak link." Aspirational, specific, defensible.

What's your reaction?`
            },
            {
              speaker: "user",
              content: "Those are good challenges. I think hole #2 is real - maybe the angle is \"you're already crushing it, this is the missing piece\" rather than \"you've failed.\" Let me draft some posts with this adjusted positioning and a tone that's confident but not preachy."
            },
            {
              speaker: "ai",
              content: `Great refinement. "Missing piece for people already trying" is stronger than "fix for people who failed."

For tone guidance - confident but not preachy usually means:
- Show, don't lecture (demonstrate the benefit, don't explain why they should care)
- Use "you" language, not "we" or "our brand"
- Acknowledge they're smart ("you already know...")
- Light humor > earnest inspiration for this demo

Want me to draft options, or do you want to take first pass and I'll react?`
            },
            {
              speaker: "user",
              content: "I'll draft first. Give me feedback on these:\n\n1. \"You track your workouts. You track your sleep. You track your macros. ...You have no idea how much water you drank yesterday. 💧 Fill the gap: HydroSync\"\n\n2. \"The hardest part of building a hydration habit isn't drinking water. It's remembering that you forgot. HydroSync connects to [Strava/Apple Health/etc] so your water shows up where you're already looking.\"\n\n3. \"Every fitness tracker tells you to drink more water. Finally, something that actually helps you do it. HydroSync syncs with your favorite apps so hydration isn't an afterthought.\""
            },
            {
              speaker: "ai",
              content: `Feedback on each:

**Post 1:** ✓ Strong
- Good rhythm with the repetition
- "No idea" creates recognition moment
- "Fill the gap" is clever double meaning
- Only note: might add a visual cue for the contrast (checkmarks vs question mark?)

**Post 2:** ✓ Strongest
- "Remembering that you forgot" is a genuine insight
- Directly addresses the actual problem
- Integration benefit is clear and practical
- Consider: slightly long for some platforms, but substance is worth it

**Post 3:** ⚠️ Weakest
- "Every fitness tracker tells you" is slightly negative/complaining
- "Finally" can feel cliché
- Less distinctive - could be any smart bottle

Recommendation: Lead with #2 as hero post, #1 as support. Rework or drop #3.

Any other directions you want to explore?`
            }
          ]}
        />
        <p className="text-sm text-gray-600 mt-4">
          <strong>What Candidate B submitted:</strong> A strategy document including positioning rationale,
          target audience justification, 3 refined posts with platform recommendations, AND a section
          titled &quot;Risks and Open Questions&quot; noting what they&apos;d want to test.
        </p>
      </Collapsible>

      <h2>Make Your Decision</h2>

      <InteractiveReflection
        id="activity-1-deep-hiring-decision"
        title="Hiring Decision"
        placeholder="Who would you hire? What does each conversation reveal about how they think?"
      >
        <p className="mb-2">Based on these conversations, who would you hire and why?</p>
        <p className="text-sm">Consider: What does each conversation reveal about how the candidate thinks and works?</p>
      </InteractiveReflection>

      <KeyInsight title="Observation: Count the Questions">
        <p>Go back and count the questions each candidate asked:</p>
        <ul className="mt-2">
          <li><strong>Candidate A:</strong> 0 questions (2 commands: &quot;write&quot; and &quot;make it more engaging&quot;)</li>
          <li><strong>Candidate B:</strong> 6+ substantive questions throughout the conversation</li>
        </ul>
        <p className="mt-3">
          <strong>Questions are the engine of value creation.</strong> They show the candidate is
          thinking, not just delegating. The quality of questions often matters more than the
          quality of AI&apos;s answers.
        </p>
      </KeyInsight>

      <h2>The Pattern: 3Cs</h2>
      <p>
        Look at what Candidate B did that Candidate A didn&apos;t. Three things stand out:
      </p>

      <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold mb-4">
            <span className="text-xl">C</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Context</h4>
          <p className="text-sm text-gray-600">
            Gathering info before creating. Competitors, positioning, audience. Building understanding first.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold mb-4">
            <span className="text-xl">C</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Choices</h4>
          <p className="text-sm text-gray-600">
            Making deliberate decisions. Choosing angles, challenging AI. Owning the strategy.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold mb-4">
            <span className="text-xl">C</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Confirmation</h4>
          <p className="text-sm text-gray-600">
            Verifying the work. Identifying risks, asking "how will we know this worked?"
          </p>
        </div>
      </div>

      <MatchingExercise
        title="Identify the 3Cs"
        context="Each quote below comes from Candidate B's conversation. Match each to the C it represents."
        instruction="Click a quote, then click the matching principle."
        leftHeader="What Candidate B Said"
        rightHeader="Which C?"
        pairs={[
          {
            id: "1",
            left: "What are the main competitors and how do they position themselves?",
            right: "Context: Gathering information first"
          },
          {
            id: "2",
            left: "What if the campaign was about people who know they should drink more water but haven't been able to make it stick?",
            right: "Choices: Making strategic decisions"
          },
          {
            id: "3",
            left: "Push back on it. What are the holes in this positioning?",
            right: "Confirmation: Testing and verifying"
          },
          {
            id: "4",
            left: "The fitness app integration isn't the point—it's the PROOF that the habit is forming.",
            right: "Choices: Reframing the value proposition"
          }
        ]}
        successMessage="You can spot the 3Cs in action. Now practice using them yourself."
      />

      <MultipleChoice
        scenario="You're preparing for a job interview tomorrow. You want AI to help you practice answering 'Tell me about yourself.'"
        question="Which approach best applies the 3Cs?"
        mode="knowledge"
        choices={[
          {
            id: "a",
            text: "\"Give me a good answer to 'tell me about yourself' for a software engineer role.\"",
            feedback: "This skips Context (your actual background) and Choices (what angle to emphasize). You'll get a generic answer that isn't yours.",
            isCorrect: false
          },
          {
            id: "b",
            text: "\"Here's my resume [paste]. The role is [details]. Help me craft an answer that emphasizes X because I think it's most relevant. Then challenge me—what weaknesses might an interviewer see?\"",
            feedback: "This nails all 3Cs: Context (resume + role), Choices (emphasizing X), and Confirmation (asking for potential weaknesses to address).",
            isCorrect: true
          },
          {
            id: "c",
            text: "\"Act as an interviewer and ask me questions. I'll practice answering.\"",
            feedback: "Better than nothing, but you're skipping Context. Without knowing your background and the role, AI's questions won't be targeted.",
            isCorrect: false
          },
          {
            id: "d",
            text: "\"What are the best answers to common interview questions?\"",
            feedback: "You're asking for general templates, not YOUR answers. This completely bypasses all 3Cs.",
            isCorrect: false
          }
        ]}
        followUp="Notice how option B front-loads the thinking. You're leading the collaboration, not just receiving output."
      />

      <h2>Why This Matters</h2>
      <p>
        In six months, the AI outputs might be indistinguishable. Both candidates will have access to
        the same tools producing the same quality content.
      </p>
      <p>
        The difference is the human. Candidate B knows how to:
      </p>
      <FeatureList
        variant="check"
        items={[
          "Understand problems before solving them",
          "Make decisions and defend them",
          "Identify what could go wrong",
          "Use AI as a thinking partner, not a replacement for thinking"
        ]}
      />
      <p>
        These skills compound. Candidate A will need more and more AI capability to stay relevant.
        Candidate B will get more valuable as AI gets more capable.
      </p>

      <CompleteTheSentence
        context="Lock in the 3Cs framework before you move on."
        sentenceParts={[
          "Before asking AI to create, I should provide ",
          ". While working with AI, I should make deliberate ",
          ". After getting output, I should plan for ",
          "."
        ]}
        blanks={[
          [
            { id: "questions", text: "questions", isCorrect: false, feedback: "Questions are good, but what you need to provide is information and background." },
            { id: "context", text: "Context", isCorrect: true, feedback: "Correct! Context is the background information AI needs to give you useful output." },
            { id: "examples", text: "examples", isCorrect: false, feedback: "Examples can help, but the broader principle is providing context about your situation." }
          ],
          [
            { id: "choices", text: "Choices", isCorrect: true, feedback: "Correct! You should own the strategic decisions, not outsource them to AI." },
            { id: "edits", text: "edits", isCorrect: false, feedback: "Editing output is reactive. The 3Cs are about proactive engagement—making choices during the process." },
            { id: "requests", text: "requests", isCorrect: false, feedback: "Making requests is just delegation. The key is making deliberate choices about direction." }
          ],
          [
            { id: "revisions", text: "revisions", isCorrect: false, feedback: "Revisions are about improving output. Confirmation is about verifying it's actually right." },
            { id: "confirmation", text: "Confirmation", isCorrect: true, feedback: "Correct! How will you know the output is actually good? That's Confirmation." },
            { id: "feedback", text: "feedback", isCorrect: false, feedback: "Feedback is part of it, but Confirmation is specifically about verifying the work meets your actual needs." }
          ]
        ]}
        successMessage="You've got the framework. Context → Choices → Confirmation. Use it in your next AI interaction."
      />

      <InteractiveReflection
        id="activity-1-deep-final"
        title="Final Reflection"
        placeholder="Think of a specific recent AI interaction. Walk through each C: what context did you give? What choices did you make? How did you verify?"
        minRows={4}
      >
        <p>Think about your recent AI interactions:</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Did you provide Context before asking for output?</li>
          <li>Did you make deliberate Choices, or accept the first thing AI suggested?</li>
          <li>Did you plan for Confirmation—how you&apos;d know if the output was right?</li>
        </ul>
      </InteractiveReflection>
    </div>
  );
}

function DeeperTier() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2>Dojo Exploration</h2>
      <p>
        For this tier, you&apos;ll explore the 3Cs framework through direct dialogue with an AI.
      </p>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-8 not-prose">
        <h3 className="font-semibold text-purple-800 mb-4">🥋 Your Exploration Mission</h3>
        <p className="text-purple-900 mb-4">
          You ARE Candidate B. Use the Dojo to work through the same HydroSync challenge, but with
          the Symbiotic Thinking approach:
        </p>
        <FeatureList
          variant="list"
          items={[
            "Start by engaging @framer to really understand the problem",
            "Use @challenger to pressure-test your positioning ideas",
            "Apply the 3Cs consciously: track when you're providing Context, making Choices, planning Confirmation",
            "End with @reflector to see how your process compares to Candidate B's"
          ]}
        />
      </div>

      <h3>Getting Started</h3>
      <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Option A: Use the Dojo</h4>
          <p className="text-gray-600 text-sm mb-4">
            Go to the Symbiotic Thinking Dojo with your API key (Groq or Google Gemini).
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

      <h3>Starting Prompt</h3>
      <div className="bg-gray-100 rounded-lg p-4 my-4 not-prose">
        <p className="text-sm text-gray-600 mb-2">Copy this to begin:</p>
        <code className="text-sm text-gray-800">
          I want to work through a marketing challenge using the 3Cs framework. The task: create a
          social media campaign for HydroSync, a smart water bottle that tracks hydration and syncs
          with fitness apps. @framer, help me understand this problem before I start solving it.
        </code>
      </div>

      <InteractiveReflection
        id="activity-1-deeper-exploration"
        title="After Your Exploration"
        placeholder="Compare your process to Candidate B's. Where were you similar? Different?"
        minRows={4}
      >
        <p>Compare your process to Candidate B&apos;s conversation:</p>
        <ul className="text-sm mt-2 list-disc list-inside">
          <li>Where did you provide more or less Context?</li>
          <li>What Choices did you make differently?</li>
          <li>How did you plan for Confirmation?</li>
        </ul>
      </InteractiveReflection>

      <KeyInsight icon="📌" title="Minimum Deliverable">
        <p>
          Work through the HydroSync challenge with the Dojo for at least 25 minutes. End with
          @reflector to generate a session summary comparing your approach to the 3Cs framework.
        </p>
      </KeyInsight>
    </div>
  );
}
