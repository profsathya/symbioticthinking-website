import Link from "next/link";

export interface NavLinksProps {
  backLink: { href: string; label: string } | null;
  nextLink: { href: string; label: string } | null;
}

export function ActivityNavigationLinks({ backLink, nextLink }: NavLinksProps) {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          {backLink && (
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {backLink.label}
            </Link>
          )}
        </div>
        {nextLink && (
          <Link
            href={nextLink.href}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            {nextLink.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
