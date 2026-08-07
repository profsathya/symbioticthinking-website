import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Symbiotic Thinking? | The Framework",
  description:
    "Symbiotic Thinking is critical thinking, communication, and collaboration — practiced with AI in the room. Three durable abilities, and the method that builds them.",
};

export default function FrameworkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
