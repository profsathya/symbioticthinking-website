"use client";

import React, { useState, useRef } from "react";
import { Camera, Upload, Check, Loader2 } from "lucide-react";

export function EvidenceUploader({ onComplete }: { onComplete: () => void }) {
    const [image, setImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (event) => {
                if (event.target?.result) {
                    setImage(event.target.result as string);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        // In a real app, we'd upload to a server/bucket.
        // Here we simulate a local "save" (persisting to indexedDB/localStorage would happen here)
        setIsUploading(true);

        // Simulate network delay for "weight"
        setTimeout(() => {
            setIsUploading(false);
            onComplete();
        }, 1500);
    };

    return (
        <div className="mt-6 border-t border-gray-200 pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 block">
                Evidence (Optional but Recommended)
            </h4>

            {!image ? (
                <div className="flex gap-3">
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
                    >
                        <Camera className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 mb-2" />
                        <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-700">
                            Take Photo
                        </span>
                    </button>

                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 h-48 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image}
                            alt="Evidence preview"
                            className="max-h-full max-w-full object-contain"
                        />
                        <button
                            onClick={() => setImage(null)}
                            className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-gray-500 hover:text-red-500 transition-colors shadow-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Syncing...
                            </>
                        ) : (
                            <>
                                <Upload className="w-4 h-4" />
                                Attach Evidence & Complete
                            </>
                        )}
                    </button>
                </div>
            )}

            <p className="text-xs text-gray-500 mt-3 text-center">
                Photos stay on your device/browser session.
            </p>
        </div>
    );
}
