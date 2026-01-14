"use client";

import { useEffect } from "react";

/**
 * Component that signals the parent iframe to resize based on content height
 * Helps Canvas LMS and other platforms auto-resize iframes
 */
export function IframeHeightSync() {
  useEffect(() => {
    const sendHeight = () => {
      // Send message to parent window with current scroll height
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          {
            type: 'setHeight',
            height: document.body.scrollHeight
          },
          '*'
        );
      }
    };

    // Send initial height
    sendHeight();

    // Send height on window resize
    window.addEventListener('resize', sendHeight);

    // Optional: Use ResizeObserver for more accurate height tracking
    const resizeObserver = new ResizeObserver(sendHeight);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('resize', sendHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
