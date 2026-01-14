import { Metadata } from "next";
import { Activity1Content } from "@/app/components/learn/activities";

export const metadata: Metadata = {
  title: "Activity 1: The Hiring Decision | Learn Symbiotic Thinking",
  description: "Evaluate two job candidates who both used AI. Discover what separates effective AI collaboration from passive consumption.",
};

export default function Activity1Page() {
  return (
    <Activity1Content
      navigation={{
        backLink: { href: "/learn/activity-0", label: "Previous: Your First Direct Report" },
        nextLink: { href: "/learn/activity-2", label: "Next: The Investment Decision" }
      }}
      showShareButton={true}
    />
  );
}
