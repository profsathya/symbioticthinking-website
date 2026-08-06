/**
 * The Three Abilities — the core of Symbiotic Thinking.
 *
 * Single source of truth for the triad so the home page, Framework, Learners,
 * and Evidence pages never drift apart. Icons are emoji (not JSX) so this
 * module stays importable from both server and client components.
 *
 * Naming note: these are "the Three Abilities," never "the 3Cs." The 3Cs are
 * Context, Choices, Confirmation — a different thing, one level down in the
 * Personal Stack. Keep the two names distinct in all copy.
 */

export type AbilityId = "critical-thinking" | "communication" | "collaboration";
export type AbilityColor = "blue" | "amber" | "emerald";

export interface Ability {
  id: AbilityId;
  name: string;
  icon: string;
  color: AbilityColor;
  /** One line. Used on compact cards. */
  tagline: string;
  /** What the ability actually is, in plain language. */
  definition: string;
  /** Why AI changes the stakes on this particular ability. */
  withAI: string;
  /** Headline number for compact use. Full citations live on /evidence. */
  evidence: { stat: string; source: string };
  /** Where this is practiced in the Dojo today. */
  dojo: string[];
}

export const ABILITIES: Ability[] = [
  {
    id: "critical-thinking",
    name: "Critical Thinking",
    icon: "🔍",
    color: "blue",
    tagline: "Judging what's true, and what's worth doing.",
    definition:
      "Deciding whether a claim holds up, whether a problem is the right problem, and whether an answer is good enough — before you act on it.",
    withAI:
      "AI produces fluent, confident output faster than anyone can review it by instinct. Critical thinking is the difference between using that output and being used by it.",
    evidence: {
      stat: "~90% of employers look for evidence of problem-solving — the highest-rated attribute on a résumé.",
      source: "NACE Job Outlook 2025",
    },
    dojo: [
      "The Challenger pressure-tests your reasoning and plays devil's advocate",
      "The Auditor holds you to Context, Choices, and Confirmation before a decision",
      "Bug-hunt katas: plausible-but-wrong code, and you find which test breaks and why",
      "Problem Stake Defense: sharpen your framing, then interrogate a peer's",
    ],
  },
  {
    id: "communication",
    name: "Communication",
    icon: "💬",
    color: "amber",
    tagline: "Making your thinking legible — to a person or to a model.",
    definition:
      "Getting what's in your head into words precise enough that someone else can act on it, push back on it, or build from it.",
    withAI:
      "Language is the entire interface. The context you supply determines the quality of what comes back — which makes communication a technical skill, not a soft one.",
    evidence: {
      stat: "Communication is rated important by more than 75% of employers — who score new graduates well below how graduates score themselves.",
      source: "NACE Job Outlook 2026",
    },
    dojo: [
      "Context — the first C you supply is itself an act of communication",
      "Career Intelligence: draft a Value Statement and defend it against a real posting",
      "Project Interview: explain what you built and why, in your own words, to a person",
      "Design katas: make a design call and defend it against a rubric",
    ],
  },
  {
    id: "collaboration",
    name: "Collaboration",
    icon: "🤝",
    color: "emerald",
    tagline: "Exploring an idea deeply with a thinking partner.",
    definition:
      "Working an idea further through conversation than you could have alone — with a person or with an AI. Not dividing up tasks; converging on something better than either of you started with.",
    withAI:
      "Teamwork's coordinating half — dividing work, tracking it, handing it off — is increasingly tooled. What doesn't commoditize is two minds arriving somewhere neither would have reached alone. That half is now something you can practice every day.",
    evidence: {
      stat: "In a field experiment with 776 professionals, individuals working with AI matched the performance of two-person teams working without it.",
      source: "The Cybernetic Teammate, NBER 2025",
    },
    dojo: [
      "The Sensei explores with you by asking, never by answering",
      "Architect Studio: the same decisions worked Solo, then Delegated, then in Partnership",
      "Project Interview: pairs swap devices and interview each other on their projects",
      "Five Sparring Partners — each a different kind of interlocutor to think against",
    ],
  },
];

export function getAbility(id: AbilityId): Ability {
  const ability = ABILITIES.find((a) => a.id === id);
  if (!ability) throw new Error(`Unknown ability: ${id}`);
  return ability;
}

/** Tailwind class sets per ability colour, kept together so cards stay consistent. */
export const ABILITY_COLORS: Record<
  AbilityColor,
  {
    bg: string;
    border: string;
    text: string;
    heading: string;
    iconBg: string;
    accent: string;
  }
> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    heading: "text-blue-900",
    iconBg: "bg-blue-100",
    accent: "bg-blue-600",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    heading: "text-amber-900",
    iconBg: "bg-amber-100",
    accent: "bg-amber-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    heading: "text-emerald-900",
    iconBg: "bg-emerald-100",
    accent: "bg-emerald-600",
  },
};

/**
 * The one-sentence definition. Repeated verbatim in the hero, the Framework
 * page, and the Dojo's own materials — consistency is the point.
 */
export const SYMBIOTIC_THINKING_DEFINITION =
  "Symbiotic Thinking is critical thinking, communication, and collaboration — practiced with AI in the room.";
