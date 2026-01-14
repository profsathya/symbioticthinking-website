import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Symbiotic Thinking Activities | For Embedding",
  description: "Interactive learning activities designed for embedding in Canvas LMS and other learning management systems.",
};

const activities = [
  {
    number: 0,
    icon: "👔",
    title: "Your First Direct Report",
    description: "Discover that AI makes you a manager of intelligence resources.",
    time: "15-35 min"
  },
  {
    number: 1,
    icon: "📋",
    title: "The Hiring Decision",
    description: "Learn what separates effective AI collaboration from passive consumption.",
    time: "15-35 min"
  }
];

export default function IframeHubPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Symbiotic Thinking Activities
      </h1>
      <p className="text-gray-600 mb-8">
        Interactive learning experiences exploring effective AI collaboration.
      </p>

      <div className="space-y-4">
        {activities.map((activity) => (
          <Link
            key={activity.number}
            href={`/iframe/activity-${activity.number}`}
            className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{activity.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-500 font-medium">Activity {activity.number}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {activity.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {activity.description}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">About These Activities</h3>
        <p className="text-sm text-gray-600">
          These activities are designed to help you develop effective AI collaboration skills through
          the Symbiotic Thinking framework. Each activity includes multiple tiers (Simple, Deep, Deeper)
          and interactive elements like focus mode tasks and reflection prompts.
        </p>
      </div>
    </div>
  );
}
