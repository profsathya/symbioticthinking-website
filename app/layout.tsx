import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symbiotic Thinking | AI-Powered Learning That Builds Human Capability",
  description: "The Symbiotic Thinking Dojo trains judgment and superagency through structured practice with AI. Build real cognitive skills, not just get answers.",
  keywords: ["AI education", "metacognition", "critical thinking", "AI literacy", "learning with AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥋</span>
              <span className="font-semibold text-white">Symbiotic Thinking</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Building human capability in an age of AI abundance. The Dojo trains judgment and superagency — ensuring AI amplifies your thinking rather than replacing it.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/learners" className="hover:text-emerald-400 transition-colors">For Learners</Link></li>
              <li><Link href="/educators" className="hover:text-emerald-400 transition-colors">For Educators</Link></li>
              <li><Link href="/portable" className="hover:text-emerald-400 transition-colors">Portable Edition</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/support" className="hover:text-emerald-400 transition-colors">Support This Effort</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://dojo.symbioticthinking.ai" className="hover:text-emerald-400 transition-colors">
                  Enter the Dojo
                </a>
              </li>
              <li>
                <a href="https://github.com/profsathya/Symbiotic_Thinking_Dojo" className="hover:text-emerald-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://computingtalentinitiative.org" className="hover:text-emerald-400 transition-colors">
                  Computing Talent Initiative
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Symbiotic Thinking. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
