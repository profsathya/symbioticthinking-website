import { Metadata } from "next";
import { Activity0Content } from "@/app/components/learn/activities";
import { IframeHeightSync } from "../components/IframeHeightSync";

export const metadata: Metadata = {
  title: "Activity 0: Your First Direct Report | Symbiotic Thinking",
  description: "Discover that AI makes you a manager of intelligence resources. Learn the foundational skill of delegation.",
};

export default function IframeActivity0Page() {
  return (
    <>
      <IframeHeightSync />
      <Activity0Content
        navigation={{
          backLink: { href: "/iframe", label: "Back to Activities" },
          nextLink: { href: "/iframe/activity-1", label: "Next: The Hiring Decision" }
        }}
      />
    </>
  );
}
