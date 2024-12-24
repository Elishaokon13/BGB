/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const VideoBackground = ({
    videoSrc,
    children,
}: {
    videoSrc: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="fixed inset-0 bg-white overflow-hidden">
            {/* Snowflakes Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-gray-200 animate-[float_5s_ease-in-out_infinite]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${12 + Math.random() * 24}px`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    >
                        ❄
                    </div>
                ))}
            </div>

            {/* Gift Box Decorations */}
            <div className="fixed bottom-0 left-0 p-4">
                <img
                    src="/Framealt.png"
                    alt="Gift Box"
                    className="w-[150px] h-[150px] opacity-80"
                />
            </div>
            <div className="fixed bottom-0 right-0 p-4">
                <img
                    src="/Frame.png"
                    alt="Gift Box"
                    className="w-[150px] h-[150px] opacity-80"
                />
            </div>

            {/* Main Content */}
            <div className="relative h-full w-full">
                {children}
            </div>
        </div>
    );
};

export default VideoBackground;
