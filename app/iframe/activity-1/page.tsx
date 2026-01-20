import { Metadata } from "next";
import { Activity1Content } from "@/app/components/learn/activities";
import { IframeHeightSync } from "../components/IframeHeightSync";

export const metadata: Metadata = {
  title: "Activity 1: The Hiring Decision | Symbiotic Thinking",
  description: "Evaluate two job candidates who both used AI. Discover what separates effective AI collaboration from passive consumption.",
};

export default function IframeActivity1Page() {
  return (
    <>
      <IframeHeightSync />
      <Activity1Content
        navigation={{
          backLink: { href: "/iframe/activity-0", label: "Previous: Your First Direct Report" },
          nextLink: null // No activity-2 yet
        }}
      />
    </>
  );
}
