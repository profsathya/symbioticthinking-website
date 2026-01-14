import { Metadata } from "next";
import { Activity0Content } from "@/app/components/learn/activities";

export const metadata: Metadata = {
  title: "Activity 0: Your First Direct Report | Learn Symbiotic Thinking",
  description: "Discover that AI makes you a manager of intelligence resources. Learn the foundational skill of delegation.",
};

export default function Activity0Page() {
  return (
    <Activity0Content
      navigation={{
        backLink: { href: "/learn", label: "Back to Learn" },
        nextLink: { href: "/learn/activity-1", label: "Next: The Hiring Decision" }
      }}
      showShareButton={true}
    />
  );
}
