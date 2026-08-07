import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Symbiotic Thinking",
  description:
    "How we develop and refine Symbiotic Thinking through build-measure-learn, what we measure against, and the sources that inform our thinking.",
};

export default function ApproachLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
