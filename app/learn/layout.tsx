"use client";

import { FocusModeProvider, FocusModeContainer } from "@/app/components/learn";

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <FocusModeProvider>
            <FocusModeContainer>
                {children}
            </FocusModeContainer>
        </FocusModeProvider>
    );
}
