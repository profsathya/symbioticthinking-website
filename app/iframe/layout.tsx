"use client";

import { FocusModeProvider, FocusModeContainer } from "@/app/components/learn";

export default function IframeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FocusModeProvider>
            <FocusModeContainer>
                <div className="min-h-screen bg-white">
                    {/* No Navigation, No Footer - just content for iframe embedding */}
                    {children}
                </div>
            </FocusModeContainer>
        </FocusModeProvider>
    );
}
