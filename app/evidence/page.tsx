import { Metadata } from "next";
import Link from "next/link";
import { ABILITIES, ABILITY_COLORS } from "../content/abilities";

export const metadata: Metadata = {
  title: "The Evidence | Symbiotic Thinking",
  description:
    "Why critical thinking, communication, and collaboration — the labor-market and cognitive-science data behind the three abilities at the core of Symbiotic Thinking.",
};

/** Month/year this page's figures were last checked against their sources. */
const LAST_REVIEWED = "August 2026";

interface DataPoint {
  finding: string;
  detail: string;
  source: string;
  year: string;
  link: string;
  kind: "demand" | "gap" | "risk" | "shift";
}

const EVIDENCE: Record<string, DataPoint[]> = {
  "critical-thinking": [
    {
      finding: "The #1 core skill employers name",
      detail:
        "Analytical thinking is the most sought-after core skill, with roughly seven in ten employers calling it essential. The same survey expects 39% of key job skills to change by 2030.",
      source: "World Economic Forum, Future of Jobs Report",
      year: "2025",
      link: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/",
      kind: "demand",
    },
    {
      finding: "~90% of employers look for problem-solving evidence",
      detail:
        "When reviewing a graduate's résumé, problem-solving is the single highest-rated attribute employers say they look for — ahead of teamwork, communication, and technical skills.",
      source: "NACE, Job Outlook",
      year: "2025",
      link: "https://www.naceweb.org/talent-acquisition/candidate-selection/what-are-employers-looking-for-when-reviewing-college-students-resumes",
      kind: "demand",
    },
    {
      finding: "The more people trust AI, the less they think critically",
      detail:
        "A survey of 319 knowledge workers covering 936 real AI use cases found that higher confidence in generative AI is associated with less critical thinking, while higher confidence in oneself is associated with more. Workers reported skipping critical evaluation precisely when they lacked the skill to inspect and guide the model's output.",
      source: "Lee et al., Microsoft Research & Carnegie Mellon, CHI",
      year: "2025",
      link: "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/",
      kind: "risk",
    },
    {
      finding: "The work shifts, it doesn't disappear",
      detail:
        "The same study found generative AI moves critical thinking away from producing an answer and toward verifying information, integrating responses, and stewarding the task. Different work — not less of it.",
      source: "Lee et al., Microsoft Research & Carnegie Mellon, CHI",
      year: "2025",
      link: "https://dl.acm.org/doi/10.1145/3706598.3713778",
      kind: "shift",
    },
  ],
  communication: [
    {
      finding: "Rated important by more than 75% of employers",
      detail:
        "Communication sits just behind teamwork among the competencies employers rate most important in new graduates.",
      source: "NACE, Job Outlook",
      year: "2026",
      link: "https://www.naceweb.org/career-readiness/trends-and-predictions/employers-say-new-grads-are-largely-prepared-for-work-with-room-to-improve",
      kind: "demand",
    },
    {
      finding: "Students think they have it. Employers disagree.",
      detail:
        "Employers rate new graduates well below how graduates rate themselves on communication — a gap of roughly 25 percentage points, with a similar gap on critical thinking. This is the clearest signal that these abilities need deliberate practice rather than assumed competence.",
      source: "NACE, Job Outlook",
      year: "2026",
      link: "https://www.naceweb.org/career-readiness/trends-and-predictions/employers-say-new-grads-are-largely-prepared-for-work-with-room-to-improve",
      kind: "gap",
    },
    {
      finding: "Written and verbal both clear the two-thirds bar",
      detail:
        "More than two-thirds of employers look for verbal communication skills on a résumé; written communication matters to at least 70%.",
      source: "NACE, Job Outlook",
      year: "2025",
      link: "https://www.naceweb.org/research/reports/job-outlook/2025",
      kind: "demand",
    },
    {
      finding: "Durable skills are rising, not falling, as AI spreads",
      detail:
        "76% of job postings now request at least one durable skill and 47% request three or more — up 13 points since 2021. Eight of the ten most-requested skills are durable ones like communication, leadership, and problem-solving.",
      source: "Lightcast",
      year: "2025",
      link: "https://lightcast.io/resources/blog/growing-demand-for-durable-skills",
      kind: "demand",
    },
  ],
  collaboration: [
    {
      finding: "The top-rated competency of all",
      detail:
        "Teamwork is rated important by more than 80% of employers — the highest of any career-readiness competency — and around 80% look for evidence of it on a résumé.",
      source: "NACE, Job Outlook",
      year: "2025 & 2026",
      link: "https://www.naceweb.org/career-readiness/trends-and-predictions/employers-say-new-grads-are-largely-prepared-for-work-with-room-to-improve",
      kind: "demand",
    },
    {
      finding: "One person with AI matched a team of two without it",
      detail:
        "A pre-registered field experiment with 776 professionals at Procter & Gamble found individuals working with AI matched the performance of two-person teams working without it. Read carefully, this is not a case for working alone — what AI reproduced was the idea-improvement benefit of having a thinking partner, which is exactly the half of collaboration we train.",
      source: "The Cybernetic Teammate — Dell'Acqua, Mollick, Lakhani et al., NBER Working Paper 33641",
      year: "2025",
      link: "https://www.nber.org/papers/w33641",
      kind: "shift",
    },
    {
      finding: "AI dissolved the functional silos",
      detail:
        "In the same experiment, R&D specialists normally proposed technical solutions and commercial specialists proposed commercial ones. Working with AI, both groups produced balanced proposals — the model pulled each of them into territory they would not have explored alone.",
      source: "The Cybernetic Teammate — Dell'Acqua, Mollick, Lakhani et al., NBER Working Paper 33641",
      year: "2025",
      link: "https://www.nber.org/papers/w33641",
      kind: "shift",
    },
    {
      finding: "\"Working with others\" is one of five core skill domains",
      detail:
        "The WEF groups the skills of 2030 into technology, cognitive skills, self-efficacy, management, and working with others — with collaboration among the fastest-growing human skills of the next five years.",
      source: "World Economic Forum, Future of Jobs Report",
      year: "2025",
      link: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/",
      kind: "demand",
    },
  ],
};

const KIND_LABELS: Record<DataPoint["kind"], { label: string; className: string }> = {
  demand: { label: "Demand", className: "bg-blue-100 text-blue-700" },
  gap: { label: "Gap", className: "bg-red-100 text-red-700" },
  risk: { label: "Risk", className: "bg-amber-100 text-amber-700" },
  shift: { label: "Shift", className: "bg-purple-100 text-purple-700" },
};

export default function EvidencePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why these three
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Critical thinking, communication, and collaboration aren&apos;t a slogan we
            picked because they alliterate. Here is the data we&apos;re reading — including
            what it doesn&apos;t say.
          </p>
        </div>
      </section>

      {/* How to read this page */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🔬</div>
              <div>
                <h2 className="font-semibold text-gray-900 mb-2">
                  What this evidence does — and does not — show
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Everything below establishes two things: that these three abilities are
                  in demand, and that AI puts them at risk rather than making them
                  unnecessary. That is the case for <em>why these three</em>.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>None of it is evidence that the Dojo builds them.</strong> That
                  is the open question, and it&apos;s what we are trying to measure with
                  real students. We would rather say so plainly than imply a result we
                  don&apos;t have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence by ability */}
      <section className="pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {ABILITIES.map((ability) => {
            const colors = ABILITY_COLORS[ability.color];
            const points = EVIDENCE[ability.id] ?? [];

            return (
              <div key={ability.id}>
                <div className={`rounded-t-2xl border-2 border-b-0 ${colors.border} ${colors.bg} p-6`}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                    >
                      {ability.icon}
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${colors.heading}`}>{ability.name}</h2>
                      <p className={`${colors.text} text-sm mt-1`}>{ability.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className={`rounded-b-2xl border-2 ${colors.border} bg-white divide-y divide-gray-100`}>
                  {points.map((point, i) => {
                    const kind = KIND_LABELS[point.kind];
                    return (
                      <div key={i} className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{point.finding}</h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${kind.className}`}
                          >
                            {kind.label}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{point.detail}</p>
                        <a
                          href={point.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm ${colors.text} hover:underline inline-flex items-center gap-1`}
                        >
                          → {point.source} ({point.year})
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Definition caveat */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Three honest qualifications
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              1. We define collaboration more narrowly than these surveys do
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              When employers rate &quot;teamwork&quot; at 80%, they mean something broad:
              coordinating with others, dividing work, handing it off, showing up. We train
              a narrower thing —{" "}
              <strong>exploring an idea deeply with a thinking partner through conversation</strong>.
              Our argument for the overlap is this: the coordinating half of teamwork is
              increasingly handled by tools, while the part that doesn&apos;t commoditize is
              two minds arriving somewhere neither would have alone. The Procter &amp; Gamble
              experiment is suggestive here — what AI reproduced was the idea-improvement
              benefit of a partner, not the logistics. But this is our reading of the
              evidence, not something the surveys themselves claim.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">
              2. Some of the strongest findings are self-reported
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Microsoft and Carnegie Mellon study is a survey of what knowledge workers
              said about their own thinking, not a controlled measurement of it. The
              association between trusting AI and thinking less critically is a
              correlation. It is consistent with what we see in classrooms, and it is not
              proof of cause.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">3. This data has a shelf life</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              These are surveys of a labor market that is changing quickly. Figures on this
              page were last checked against their sources in{" "}
              <strong>{LAST_REVIEWED}</strong>. If you are reading this much later, treat
              the numbers as a starting point and follow the links — which is, after all,
              the habit this whole project is trying to build.
            </p>
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            What we&apos;re measuring
          </h2>
          <p className="text-gray-600 text-center mb-8">
            If these three abilities are the claim, they&apos;re also what our
            build-measure-learn loop has to measure against.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-emerald-600 flex-shrink-0">✓</span>
                <span>
                  <strong>Session reflections.</strong> The Reflector walks students
                  through an honest self-assessment at the end of a session — what they
                  achieved, how much of the thinking was theirs, and where they took
                  shortcuts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 flex-shrink-0">✓</span>
                <span>
                  <strong>Depth of engagement.</strong> The DIKW level a student reaches
                  and their Creating-vs-Consuming balance are visible during the session
                  and summarized at the end.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 flex-shrink-0">✓</span>
                <span>
                  <strong>Classroom pilots.</strong> CST395 at CSU Monterey Bay, and a
                  planned certificate program with De Anza College, give us cohorts to
                  observe over a full term rather than a single session.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-600 flex-shrink-0">○</span>
                <span>
                  <strong>Still missing.</strong> We do not yet have a clean pre/post
                  measure of any of the three abilities, and we&apos;re not going to
                  pretend otherwise. Building one is the most important open item on this
                  project.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-center mt-8">
            <Link href="/approach" className="text-emerald-700 hover:text-emerald-800 font-medium">
              How our build-measure-learn loop works →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Practice the three</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Reading about an ability doesn&apos;t build it. The Dojo is free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://dojo.symbioticthinking.ai"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Enter the Dojo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
