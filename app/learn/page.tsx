import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn | Symbiotic Thinking",
  description: "Discover the Symbiotic Thinking framework through hands-on activities. Learn to be an effective manager of AI intelligence resources.",
};

const activities = [
  {
    number: 0,
    title: "Your First Direct Report",
    description: "Discover that AI makes you a manager of intelligence resources. Learn the difference between passive and active AI partnership.",
    icon: "👔",
    time: "15-35 min",
  },
  {
    number: 1,
    title: "The Hiring Decision",
    description: "Evaluate two job candidates who both used AI. Discover what separates effective AI collaboration from passive consumption.",
    icon: "📋",
    time: "15-35 min",
  },
  {
    number: 2,
    title: "The Investment Decision",
    description: "Choose between two founders. Learn to distinguish surface knowledge from deep understanding that creates future value.",
    icon: "💰",
    time: "15-35 min",
  },
  {
    number: 3,
    title: "The Mirror",
    description: "Turn your discovered criteria on yourself. Identify gaps between your standards for others and your own behavior.",
    icon: "🪞",
    time: "15-30 min",
  },
  {
    number: 4,
    title: "Naming What You Found",
    description: "Consolidate your discoveries into named frameworks: 3Cs, DIKW, and the Creating-Consuming spectrum.",
    icon: "🏷️",
    time: "15-25 min",
  },
  {
    number: 5,
    title: "Structured Practice",
    description: "Apply the frameworks to a real task from your work or studies. Conscious practice with scaffolded checkpoints.",
    icon: "🎯",
    time: "30+ min",
  },
];

export default function LearnPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Interactive Curriculum
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Learn Symbiotic Thinking
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              AI makes everyone a manager of intelligence resources. Through these activities,
              you&apos;ll discover the skills that transform AI from a crutch into a force multiplier.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">What You&apos;ll Discover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Delegation is a sophisticated skill—not just handing off tasks",
              "Your value is in judgment, context, and orchestration",
              "The 3Cs: Context, Choices, Confirmation",
              "DIKW: Moving from data to wisdom",
              "The Creating-Consuming spectrum",
              "How to build expertise that grows WITH AI",
            ].map((objective, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-emerald-500 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Each activity offers three paths to the same discovery. Choose based on your time and how you learn best.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ⚡ Simple
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Discovery</h3>
              <p className="text-gray-600 text-sm mb-3">10-15 minutes</p>
              <p className="text-gray-600 text-sm">
                Condensed scenarios with multiple choice questions and one reflection.
                Perfect when time is limited.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-emerald-200 ring-2 ring-emerald-100">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                📚 Deep
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guided Discovery</h3>
              <p className="text-gray-600 text-sm mb-3">25-35 minutes</p>
              <p className="text-gray-600 text-sm">
                Full scenarios with detailed reflection questions.
                The recommended path for most learners.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                🥋 Deeper
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dojo Exploration</h3>
              <p className="text-gray-600 text-sm mb-3">30+ minutes</p>
              <p className="text-gray-600 text-sm">
                Self-guided exploration using the Symbiotic Thinking Dojo.
                For those who want hands-on AI dialogue.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            There&apos;s no penalty for choosing Simple—it&apos;s a legitimate path to the same insights.
          </p>
        </div>
      </section>

      {/* Activity Sequence */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Activity Sequence</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Work through the activities in order for the best learning experience.
            Each builds on discoveries from the previous one.
          </p>

          <div className="space-y-4">
            {activities.map((activity) => (
              <Link
                key={activity.number}
                href={`/learn/activity-${activity.number}`}
                className="block group"
              >
                <div className="bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl p-6 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl border border-gray-200 group-hover:border-emerald-200 transition-colors flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm text-gray-500">Activity {activity.number}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {activity.description}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to begin?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Start with Activity 0 to discover what it means to be a manager of intelligence resources.
          </p>
          <Link
            href="/learn/activity-0"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Activity 0
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
