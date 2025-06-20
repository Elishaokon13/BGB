"use client";

import { Button } from "@/components/ui/button";
import CopySvg from "@/app/svg/CopySvg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SentModal() {
    const [shareLink, setShareLink] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Loading state to prevent rendering prematurely
    const router = useRouter();

    useEffect(() => {
        const packageLink = sessionStorage.getItem('package_link');
        
        if (!packageLink) {
            // Redirect to create page if no package link is found
            router.push('/create');
        } else {
            // If the link is found, set it and stop loading
            setShareLink(packageLink);
        }

        // Once useEffect is done, stop loading
        setLoading(false);
    }, [router]);

    // If still loading, return nothing (prevents rendering of content before the check is complete)
    if (loading) {
        return null;
    }

    const copyLink = async () => {
        if (shareLink) {
            navigator.clipboard.writeText(shareLink);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-white relative overflow-hidden">
            {/* Snowflakes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-blue-700 animate-[float_5s_ease-in-out_infinite]"
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

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 mb-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                        <div className="space-y-5 w-full">

                            <div className="relative w-full aspect-video">
                                <video
                                    src="/video/sent_video.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            <div className="space-y-6">
                                <h1 className="font-[500] mt-8 text-[18px] text-center">Send this to  your friend to claim</h1>

                                <div className="flex gap-4 bg-[#F2F2F2] w-fit px-5 py-2 rounded-full mx-auto">
                                    <p className="text-[#5e5e5e] font-[400] text-[16px]">{shareLink}</p>
                                    <button onClick={copyLink} className="pt-1"><CopySvg/></button>
                                </div>

                                <div className="flex w-fit mx-auto gap-6">
                                    <h1 className="font-[400] text-[16px]">Share on:</h1>
                                    <div className="flex gap-4">
                                        <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}>
                                            <Image 
                                                src="/facebook.png" 
                                                height={23}
                                                width={22}
                                                alt="Facebook" 
                                            />
                                        </a>
                                        <a target="_blank" href={`https://api.whatsapp.com/send?text=${shareLink}`}>
                                            <Image 
                                                src="/whatsapp.png" 
                                                height={23}
                                                width={22}
                                                alt="Whatsapp" 
                                            />
                                        </a>
                                        <a target="_blank" href={`hhttps://twitter.com/intent/tweet?url=${shareLink}&text=I just sent my friend an onchain gift`}>
                                            <Image 
                                                src="/x_black.png" 
                                                height={23}
                                                width={22}
                                                alt="X" 
                                            />
                                        </a>
                                        <a target="_blank" href="https://www.instagram.com">
                                            <Image 
                                                src="/instagram.png" 
                                                height={23}
                                                width={22} 
                                                alt="Instagram" 
                                            />
                                        </a>
                                    </div>
                                </div>

                                <Button
                                 className="w-full rounded-full text-white bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                                >
                                    <Link href="/create" className="w-fit gap-3 flex">
                                        <p>Send another Gift</p> 
                                        <p>
                                            <Image
                                                src="/video/gift.gif" 
                                                height={30}
                                                width={30}
                                                alt="Facebook"
                                            />
                                        </p>
                                    </Link>                                
                                </Button>
                            </div>
                        </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-4 text-center text-sm text-gray-500">
                Built by BGB Community
            </footer>
        </div>
    );
}

export default SentModal;

