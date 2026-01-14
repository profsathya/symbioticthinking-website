"use client";

import React from "react";
import { ScaffoldedChatInterface } from "./ScaffoldedChatInterface";

export function SimulatorWrapper() {
    const [messages, setMessages] = React.useState<{ role: 'ai' | 'user'; content: string }[]>([
        { role: 'ai', content: "I am ready to help. How can I assist you with your management tasks today?" }
    ]);

    const handleSendMessage = (content: string) => {
        // Add user message
        setMessages(prev => [...prev, { role: 'user', content }]);

        // Simulate thinking and response (for demo purposes)
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                content: "That's a great start. In a real scenario, I would now help you refine that thought further based on the context you provided."
            }]);
        }, 1000);
    };

    return (
        <ScaffoldedChatInterface
            placeholder="Ask the simulated AI..."
            messages={messages}
            onSendMessage={handleSendMessage}
        />
    );
}
