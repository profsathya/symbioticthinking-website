"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, BookOpen, Users, Mic, FileText, Compass, Library } from "lucide-react";

interface ResourceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  resources: Resource[];
}

interface Resource {
  title: string;
  author?: string;
  description: string;
  insight: string;
  link: string;
  linkText: string;
  type?: "optimistic" | "cautionary" | "balanced";
}

const resourceCategories: ResourceCategory[] = [
  {
    id: "understand",
    title: "Understand AI",
    icon: <BookOpen className="w-5 h-5" />,
    color: "blue",
    description: "Foundational perspectives on what AI is and how it works",
    resources: [
      {
        title: "Co-Intelligence: Living and Working with AI",
        author: "Ethan Mollick",
        description: "Practical guide on working WITH AI rather than being replaced BY AI. Mollick explores how AI can amplify human capabilities across education, creativity, and work.",
        insight: "AI as \"co-intelligence\" — a collaborative partner that makes us more capable when used thoughtfully.",
        link: "https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/",
        linkText: "View on Publisher's Site",
        type: "optimistic"
      },
      {
        title: "How Machines Learn: The Math Behind AI",
        author: "Sanjeev Arora",
        description: "Accessible explanation of machine learning fundamentals without requiring advanced math background.",
        insight: "Understanding how AI actually works helps you use it more effectively and recognize its limitations.",
        link: "https://anilananthaswamy.com/why-machines-learn",
        linkText: "View Book Details",
        type: "balanced"
      },
      {
        title: "How To Think About AI: A Guide For The Perplexed",
        author: "Richard E. Susskind",
        description: "Practical framework for understanding AI's impact on work and society. Written for non-technical readers, it cuts through hype to focus on what AI actually means for professionals and individuals.",
        insight: "AI is not just another technology upgrade — it fundamentally changes how we should think about knowledge work, expertise, and professional judgment.",
        link: "https://academic.oup.com/book/59718",
        linkText: "View on Oxford University Press",
        type: "balanced"
      }
    ]
  },
  {
    id: "evaluate",
    title: "Evaluate Perspectives",
    icon: <Compass className="w-5 h-5" />,
    color: "purple",
    description: "Optimistic and cautionary voices — exploring both helps you form informed views",
    resources: [
      {
        title: "Superagency: What Could Possibly Go Right with Our AI Future",
        author: "Reid Hoffman and Greg Beato",
        description: "LinkedIn co-founder makes the optimistic case for AI's potential to unlock unprecedented human capability. Uses a \"techno-humanist compass\" to show how AI can increase individual agency.",
        insight: "\"Superagency\" means amplifying human potential through AI partnership — where technology enhances rather than replaces human judgment, creativity, and purpose.",
        link: "https://www.superagency.ai/",
        linkText: "View Book Website",
        type: "optimistic"
      },
      {
        title: "AI Snake Oil: What AI Can Do, What It Can't, and How to Tell the Difference",
        author: "Arvind Narayanan & Sayash Kapoor",
        description: "Critical perspective on AI hype. Helps distinguish genuine AI capabilities from marketing claims and overpromises.",
        insight: "Not all AI applications are equally valuable or trustworthy. Learn to evaluate AI claims critically.",
        link: "https://press.princeton.edu/books/hardcover/9780691249131/ai-snake-oil",
        linkText: "Visit Book Website",
        type: "cautionary"
      },
      {
        title: "The Coming Wave: Technology, Power, and the Twenty-first Century's Greatest Dilemma",
        author: "Mustafa Suleyman",
        description: "DeepMind co-founder provides an insider's view of AI development. Argues we face an unprecedented \"wave\" of powerful technologies that will be impossible to contain.",
        insight: "The central dilemma: these technologies are too powerful to control yet too dangerous to ignore. We must learn to \"contain the uncontainable.\"",
        link: "https://www.the-coming-wave.com/",
        linkText: "View Book Website",
        type: "cautionary"
      },
      {
        title: "21 Lessons for the 21st Century",
        author: "Yuval Noah Harari",
        description: "Examines the most urgent questions facing humanity in the age of AI. Focuses on the present and near future — addressing technological disruption, education reform, and what skills matter.",
        insight: "Focus on the \"four Cs\" — critical thinking, communication, collaboration, and creativity — while maintaining mental flexibility to continuously reinvent ourselves.",
        link: "https://www.ynharari.com/book/21-lessons-book/",
        linkText: "View on Author's Website",
        type: "balanced"
      },
      {
        title: "Nexus: A Brief History of Information Networks from the Stone Age to AI",
        author: "Yuval Noah Harari",
        description: "Examines how information networks have shaped human civilization. AI represents a fundamentally different kind of information technology — one that creates information, potentially beyond human control.",
        insight: "AI is the first information technology that may not need humans to operate it. How do we ensure AI-powered networks serve humanity rather than manipulate or replace us?",
        link: "https://www.ynharari.com/book/nexus/",
        linkText: "View on Author's Website",
        type: "cautionary"
      },
      {
        title: "Empire of AI: Dreams and Nightmares in Sam Altman's OpenAI",
        author: "Karen Hao",
        description: "Award-winning journalist with intimate insider access to OpenAI provides a deeply researched account of the AI frenzy — told from inside the company driving it.",
        insight: "Focus less on AI's hypothetical \"sentience\" and more on its immediate implications for labor and environment. The present incarnation is already fraught with problems.",
        link: "https://www.penguinrandomhouse.com/books/743569/empire-of-ai-by-karen-hao/",
        linkText: "View on Publisher's Site",
        type: "cautionary"
      }
    ]
  },
  {
    id: "apply",
    title: "Apply to Practice",
    icon: <Library className="w-5 h-5" />,
    color: "emerald",
    description: "Frameworks and practical guides for educators and learners",
    resources: [
      {
        title: "Teaching with AI: A Practical Guide",
        author: "Matt Miller",
        description: "Concrete strategies for integrating AI into teaching practice. Addresses both opportunities and ethical considerations in educational contexts.",
        insight: "How to design assignments that leverage AI while developing critical thinking rather than encouraging shortcuts.",
        link: "https://www.press.jhu.edu/books/title/54122/teaching-ai",
        linkText: "View Book Details",
        type: "balanced"
      },
      {
        title: "Brave New Words: How AI Will Revolutionize Education",
        author: "Sal Khan",
        description: "Khan Academy founder's optimistic vision of AI's potential to transform learning. AI can finally deliver on the promise of personalized education at scale.",
        insight: "AI tutors work best when they guide students to think through problems themselves rather than simply providing answers.",
        link: "https://www.penguinrandomhouse.com/books/740806/brave-new-words-by-salman-khan/",
        linkText: "View on Publisher's Site",
        type: "optimistic"
      },
      {
        title: "AI Literacy Framework",
        author: "AI Literacy Framework",
        description: "Comprehensive framework for understanding what it means to be AI literate. Covers fundamental concepts, capabilities, limitations, and ethical considerations.",
        insight: "Structured approach to AI education with assessment tools and learning pathways.",
        link: "https://ailiteracyframework.org/",
        linkText: "Explore Framework",
        type: "balanced"
      },
      {
        title: "Student Guide to AI",
        author: "Student Guide to AI",
        description: "Student-focused resource for understanding AI's role in education and careers. Practical guidance on using AI tools ethically and effectively.",
        insight: "Written specifically for college and university students navigating academic and professional AI use.",
        link: "https://studentguidetoai.org/",
        linkText: "View Student Guide",
        type: "balanced"
      },
      {
        title: "The AI-Ready Graduate",
        author: "Jeff Selingo",
        description: "Framework for what colleges should teach to prepare AI-ready graduates. Focuses on skills that remain valuable when AI handles routine cognitive work.",
        insight: "Judgment, creativity, collaboration, and continuous learning — the skills that remain valuable when AI handles routine cognitive work.",
        link: "https://jeffselingo.com/resources/the-ai-ready-graduate",
        linkText: "Read Framework",
        type: "balanced"
      }
    ]
  },
  {
    id: "current",
    title: "Stay Current",
    icon: <Mic className="w-5 h-5" />,
    color: "orange",
    description: "Podcasts and people to follow for ongoing learning",
    resources: [
      {
        title: "Hard Fork (Podcast)",
        author: "New York Times — Kevin Roose & Casey Newton",
        description: "Weekly technology podcast covering the latest in AI, tech policy, and digital culture. Episodes feature interviews with industry leaders, researchers, and critics.",
        insight: "Keeps you informed on breaking AI news without requiring deep technical background. Hosts ask critical questions and challenge hype.",
        link: "https://www.nytimes.com/column/hard-fork",
        linkText: "Listen to Hard Fork",
        type: "balanced"
      },
      {
        title: "The Last Invention (Podcast)",
        author: "Various hosts",
        description: "Deep conversations about AI safety, alignment, and whether AI could be humanity's final technological innovation. Features leading researchers and thinkers.",
        insight: "Balances technical depth with accessibility. Explores long-term implications beyond current hype.",
        link: "https://www.youtube.com/playlist?list=PLH92J2PwyK2fmjIK6mXRLtWnDuB_glGCq",
        linkText: "Listen on YouTube",
        type: "balanced"
      },
      {
        title: "Ethan Mollick",
        author: "Wharton Professor | Author of Co-Intelligence",
        description: "Posts daily insights on AI in education and work. His \"One Useful Thing\" newsletter is essential reading for practical AI applications.",
        insight: "Follow for practical, research-informed perspectives on AI's real-world impact.",
        link: "https://www.linkedin.com/in/emollick/",
        linkText: "Follow on LinkedIn",
        type: "balanced"
      },
      {
        title: "Arvind Narayanan & Sayash Kapoor",
        author: "Princeton Researchers | Authors of AI Snake Oil",
        description: "Critical voices on AI hype and misinformation. Help cut through marketing claims to understand real capabilities and limitations.",
        insight: "Essential for developing a critical eye toward AI claims and research.",
        link: "https://www.linkedin.com/in/randomwalker/",
        linkText: "Follow on LinkedIn",
        type: "cautionary"
      },
      {
        title: "Tristan Harris",
        author: "Co-Founder, Center for Humane Technology",
        description: "Focuses on AI's societal impact and alignment with human values. Known for \"The Social Dilemma\" and warnings about AI race dynamics.",
        insight: "Important voice on ensuring AI development serves humanity's interests.",
        link: "https://www.linkedin.com/in/tristanharris/",
        linkText: "Follow on LinkedIn",
        type: "cautionary"
      }
    ]
  },
  {
    id: "evidence",
    title: "Explore the Evidence",
    icon: <FileText className="w-5 h-5" />,
    color: "red",
    description: "Research papers and reports on AI's measured impact",
    resources: [
      {
        title: "AI Tutoring Outperforms Active Learning (RCT Study)",
        author: "Kestin, Miller, Klales, et al. | 2024-2025",
        description: "Randomized controlled trial found that students using research-based AI tutoring systems outperformed students in traditional active learning instruction.",
        insight: "The question isn't \"AI vs. human teaching\" but \"how do we design AI systems that embody effective teaching practices?\"",
        link: "https://www.nature.com/articles/s41598-025-97652-6",
        linkText: "Read Paper (Nature)",
        type: "optimistic"
      },
      {
        title: "Your Brain on ChatGPT: Cognitive Debt Study",
        author: "Kosmyna & Hauptmann | MIT Media Lab | 2025",
        description: "Explores how brain activity differs when writing with versus without AI assistance. One of the first attempts to measure neurological correlates of AI-assisted work.",
        insight: "This does NOT mean AI \"makes you dumber.\" The researchers explicitly caution against oversimplification — this is about understanding trade-offs, not making blanket judgments.",
        link: "https://www.media.mit.edu/projects/your-brain-on-chatgpt/overview/",
        linkText: "View Project Page (MIT)",
        type: "cautionary"
      },
      {
        title: "Technical Disruption in the Labor Market",
        author: "Deming, Summers, Ong | Harvard Kennedy School | 2025",
        description: "Documents end of \"job polarization\" pattern. STEM jobs grew from 6.5% (2010) to 10% (2024). Investment in AI is already changing job distribution.",
        insight: "AI is already reshaping labor markets in measurable ways — not just a theoretical future concern.",
        link: "https://news.harvard.edu/gazette/story/2025/02/is-ai-already-shaking-up-labor-market-a-i-artificial-intelligence/",
        linkText: "Read Paper (Harvard Gazette)",
        type: "balanced"
      },
      {
        title: "Stanford Human-Centered AI Institute (HAI)",
        author: "Stanford University",
        description: "Leading interdisciplinary research institute studying AI's societal impact. Provides accessible research reports, policy briefs, and educational resources.",
        insight: "Essential resource for understanding both technical capabilities and human implications of AI systems.",
        link: "https://hai.stanford.edu/",
        linkText: "Visit Stanford HAI",
        type: "balanced"
      },
      {
        title: "16 Charts That Explain the AI Boom",
        author: "Timothy B. Lee | Understanding AI",
        description: "Visual data-driven exploration of AI's rapid growth. Charts cover AI compute scaling, investment trends, corporate adoption rates, and model capabilities over time.",
        insight: "Excellent resource for understanding the scope and pace of AI advancement through clear visualizations.",
        link: "https://www.understandingai.org/p/16-charts-that-explain-the-ai-boom",
        linkText: "View Interactive Charts",
        type: "balanced"
      }
    ]
  }
];

function ExpandableCategory({ category }: { category: ResourceCategory }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorClasses: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
    blue: { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700", iconBg: "bg-blue-100" },
    purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700", iconBg: "bg-purple-100" },
    emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700", iconBg: "bg-emerald-100" },
    orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700", iconBg: "bg-orange-100" },
    red: { border: "border-red-200", bg: "bg-red-50", text: "text-red-700", iconBg: "bg-red-100" }
  };

  const colors = colorClasses[category.color];

  const typeColors: Record<string, string> = {
    optimistic: "bg-green-100 text-green-700",
    cautionary: "bg-amber-100 text-amber-700",
    balanced: "bg-gray-100 text-gray-600"
  };

  return (
    <div className={`rounded-xl border-2 ${colors.border} overflow-hidden`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full p-5 ${colors.bg} flex items-center gap-4 text-left hover:opacity-90 transition-opacity`}
      >
        <div className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center ${colors.text}`}>
          {category.icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${colors.text}`}>{category.title}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="p-5 pt-0 space-y-4">
          {category.resources.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-medium text-gray-900">{resource.title}</h4>
                {resource.type && (
                  <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${typeColors[resource.type]}`}>
                    {resource.type}
                  </span>
                )}
              </div>
              {resource.author && (
                <p className="text-sm text-gray-500 mb-2">{resource.author}</p>
              )}
              <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Key insight:</strong> {resource.insight}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${colors.text} hover:underline inline-flex items-center gap-1`}
              >
                → {resource.linkText}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ApproachPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Approach
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            How we develop and refine Symbiotic Thinking through continuous iteration
          </p>
        </div>
      </section>

      {/* A Different Starting Question */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">A Different Starting Question</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Many efforts to integrate AI into education ask: <em>How do we add AI to what we already do?</em>
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <p className="text-purple-800 text-lg text-center font-medium mb-4">
                We start with a different question:
              </p>
              <p className="text-purple-900 text-xl text-center italic">
                When AI changes what work looks like, what should learning become?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">If execution can be delegated...</h3>
                <p className="text-gray-600 text-sm">
                  Does human value shift from <em>knowing how to do things</em> toward{" "}
                  <em>knowing whether something was done well and what purpose it serves</em>?
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">If AI handles the doing...</h3>
                <p className="text-gray-600 text-sm">
                  How do you develop judgment without the traditional runway of hands-on experience?
                  What new pathways to expertise emerge?
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex gap-4">
                <div className="text-2xl">🔬</div>
                <div>
                  <p className="text-amber-800 text-sm">
                    <strong>We don&apos;t claim to have answers.</strong> This is an experiment driven by curiosity
                    and a willingness to explore. The Dojo is designed for local experimentation — we build,
                    measure with real students, and learn. Our approach may need fundamental rethinking,
                    and that&apos;s exactly why we built tools that let us iterate quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build-Measure-Learn Loop */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">The Build-Measure-Learn Loop</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We develop content through continuous iteration — building, testing with students, learning from results and the field, then building better.
          </p>

          {/* Horizontal Loop Visualization */}
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Main horizontal flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              {/* BUILD */}
              <div className="w-full md:w-1/3 max-w-xs">
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-5 text-center h-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔨</span>
                  </div>
                  <h3 className="font-bold text-emerald-800 text-lg mb-2">BUILD</h3>
                  <p className="text-sm text-emerald-700">
                    Develop content that meets students where they are
                  </p>
                </div>
              </div>

              {/* Arrow: Build → Measure */}
              <div className="hidden md:flex items-center text-gray-400 text-2xl px-1">→</div>
              <div className="md:hidden text-gray-400 text-xl py-1">↓</div>

              {/* MEASURE */}
              <div className="w-full md:w-1/3 max-w-xs">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5 text-center h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-bold text-blue-800 text-lg mb-2">MEASURE</h3>
                  <p className="text-sm text-blue-700">
                    Test with real students, observe what resonates
                  </p>
                </div>
              </div>

              {/* Arrow: Measure → Learn */}
              <div className="hidden md:flex items-center text-gray-400 text-2xl px-1">→</div>
              <div className="md:hidden text-gray-400 text-xl py-1">↓</div>

              {/* LEARN */}
              <div className="w-full md:w-1/3 max-w-xs">
                <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-5 text-center h-full">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="font-bold text-purple-800 text-lg mb-2">LEARN</h3>
                  <p className="text-sm text-purple-700">
                    Synthesize insights from measurement and the field
                  </p>
                </div>
              </div>
            </div>

            {/* Loop back arrow (desktop) */}
            <div className="hidden md:block mt-6">
              <div className="flex justify-center">
                <div className="relative w-full max-w-2xl">
                  <div className="border-b-2 border-l-2 border-r-2 border-dashed border-emerald-400 rounded-b-3xl h-12 mx-8"></div>
                  <div className="absolute left-8 top-10 text-emerald-500 text-xl">↑</div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-white px-3">
                    <span className="text-emerald-600 text-sm font-medium">feeds back into Build</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Loop back arrow (mobile) */}
            <div className="md:hidden mt-4 text-center">
              <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium">
                <span>↻</span>
                <span>feeds back into Build</span>
              </div>
            </div>

            {/* Two learning sources */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-sm font-medium text-purple-800 mb-1">From what we measured</p>
                <p className="text-xs text-purple-600">Student feedback, what clicked, what confused</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-sm font-medium text-purple-800 mb-1">From the field</p>
                <p className="text-xs text-purple-600">Researchers, practitioners, diverse perspectives</p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="text-2xl">💬</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Example: Creating vs. Consuming</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We initially presented &quot;Creating vs. Consuming&quot; as a choice between two approaches.
                  Testing with students revealed they interpreted these as opposing options — you either
                  create or you consume. We refined the message to emphasize they&apos;re not opposing forces,
                  but a <strong>continuous spectrum to be balanced</strong> — the goal is to infuse the act
                  of consuming with the habits of creating. This insight came from measuring, and it changed
                  how we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing in Practice Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Testing in Practice</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Symbiotic Thinking is the core of these efforts. Each program builds additional layers of
              concepts and skills for different audiences — giving us opportunities to measure and learn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CSUMB Course */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="text-xs text-blue-600 font-medium mb-1">CSU Monterey Bay · Spring 2026</div>
                  <h3 className="font-semibold text-gray-900">CST395: AI-Native Solution Engineering</h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                A special topics course where students learn to solve authentic problems using AI as a
                cognitive partner. Building on Symbiotic Thinking, the course develops the capabilities
                required for Human Agency in the age of AI:
              </p>

              <div className="space-y-3 mb-4">
                {/* Self-Directed Learners */}
                <details className="group">
                  <summary className="flex items-start gap-3 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">🧭</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-blue-800 text-sm group-hover:underline">Self-Directed Learners</div>
                      <p className="text-xs text-gray-600 mt-1">
                        Build a meta-learning architecture—knowing what to learn versus what to strategically ignore,
                        using AI as learning infrastructure for just-in-time depth.
                      </p>
                    </div>
                  </summary>
                  <div className="ml-11 mt-2 p-3 bg-white/60 rounded-lg border border-blue-100">
                    <p className="text-xs text-gray-500 italic">
                      Example: When building patient communication tools, rapidly acquire expertise in medical
                      terminology, HIPAA regulations, clinical workflows, and patient psychology—in days, not semesters.
                    </p>
                  </div>
                </details>

                {/* Integrative Solvers */}
                <details className="group">
                  <summary className="flex items-start gap-3 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">🔗</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-blue-800 text-sm group-hover:underline">Integrative Solvers</div>
                      <p className="text-xs text-gray-600 mt-1">
                        Develop T-shaped expertise and operate at intersections between systems where human value
                        concentrates. Understand the forces and incentives operating in a space.
                      </p>
                    </div>
                  </summary>
                  <div className="ml-11 mt-2 p-3 bg-white/60 rounded-lg border border-blue-100">
                    <p className="text-xs text-gray-500 italic">
                      Example: When analyzing customer complaints, bridge from technical capability to human workflow—discovering
                      that simple frequency analysis creates more value than a sophisticated sentiment dashboard.
                    </p>
                  </div>
                </details>

                {/* Adaptive Builders */}
                <details className="group">
                  <summary className="flex items-start gap-3 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-base">🔄</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-blue-800 text-sm group-hover:underline">Adaptive Builders</div>
                      <p className="text-xs text-gray-600 mt-1">
                        Execute through cycles of building, testing, learning from failures, and adapting.
                        Exercise restraint in complexity—simple solutions executed well often deliver more value.
                      </p>
                    </div>
                  </summary>
                  <div className="ml-11 mt-2 p-3 bg-white/60 rounded-lg border border-blue-100">
                    <p className="text-xs text-gray-500 italic">
                      Example: Start with basic frequency analysis rather than ambitious sentiment analysis, testing
                      whether it solves the core problem. Iterate toward value, not complexity.
                    </p>
                  </div>
                </details>
              </div>

              <a
                href="https://profsathya.github.io/Common-Curriculum/CST395.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View Course
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* De Anza Partnership */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <div className="text-xs text-emerald-600 font-medium mb-1">Partnership with De Anza College · Planned Fall 2026</div>
                  <h3 className="font-semibold text-gray-900">Applying AI at Work: Build Solutions with a Human Touch</h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                A two-course certificate program helping working professionals develop human-AI
                collaboration skills. Building on Symbiotic Thinking, the program focuses on:
              </p>

              <div className="space-y-3 mb-4">
                {/* Problem Reframing */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-base">🔍</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-emerald-800 text-sm">Problem Reframing</div>
                    <p className="text-xs text-gray-600 mt-1">
                      Learn to identify the real problem worth solving before jumping to solutions—a critical
                      skill when AI can generate solutions faster than humans can evaluate them.
                    </p>
                  </div>
                </div>

                {/* Human-AI Workflow */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-base">⚖️</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-emerald-800 text-sm">Human-AI Workflow Design</div>
                    <p className="text-xs text-gray-600 mt-1">
                      Develop judgment about where human intervention adds value and where AI can be trusted
                      to handle tasks independently.
                    </p>
                  </div>
                </div>

                {/* Solution Delivery */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-base">🚀</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-emerald-800 text-sm">Solution Delivery</div>
                    <p className="text-xs text-gray-600 mt-1">
                      Move from concept to implementation, learning to iterate quickly and validate
                      solutions with real stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-sm text-emerald-600 font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                In development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources That Inform Our Thinking</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The AI landscape changes rapidly. These books, researchers, podcasts, and papers represent
              diverse perspectives — some optimistic, others cautionary. Exploring both helps form informed views.
            </p>
          </div>

          <div className="space-y-4">
            {resourceCategories.map((category) => (
              <ExpandableCategory key={category.id} category={category} />
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> The goal isn&apos;t to read everything, but to develop informed
              perspectives by exploring diverse viewpoints. Pick resources that challenge your current conceptions
              and respond to your current questions about AI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            See the framework in action
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Explore the three layers of Symbiotic Thinking and try the Dojo for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore the Framework
            </Link>
            <a
              href="https://dojo.symbioticthinking.ai"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Enter the Dojo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
