"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { savePackage } from "@/lib/utils";
import { useRouter } from 'next/navigation'
import Image from "next/image";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

function GiftModal() {
    const [amount, setAmount] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [shareLink, setShareLink] = useState<string>("");
    const { address, isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
        sessionStorage.removeItem('package_link');
    }, []);
    

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
            setAmount(value)
        }
    }

    const handleSavePackage = async () => {
        const data = await savePackage(address as string);
        console.log(data);
        setShareLink(window.location.origin + "/claim/" + data.savedPackageId);
        sessionStorage.setItem("package_link", shareLink)
        router.push('/created')
    }

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
                    {shareLink ? (
                        <div className="space-y-4">
                            <div className="text-center">
                                <h1 className="text-2xl font-medium">Share Gift Link</h1>
                            </div>
                            <div className="relative">
                                <Input
                                    value={shareLink}
                                    readOnly
                                    className="pr-10 text-center"
                                />
                                <button
                                    onClick={() => navigator.clipboard.writeText(shareLink)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-md transition-colors"
                                >
                                    <svg className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-6">
                                <span className="text-sm text-gray-600">Share via</span>
                                {/* Social share buttons */}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="text-center">
                                <h1 className="text-2xl font-cursive inline-flex items-center gap-2">
                                    Send
                                    <Image
                                        src="/redgift.png"
                                        alt="Gift"
                                        width={100}
                                        height={70}
                                    />
                                    to a friend
                                </h1>
                            </div>

                            <div className="relative w-full aspect-video">
                                <video
                                    src="/video/base_animate.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Enter amount to send
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                           <Image src="/usdc.svg" width={20} height={20} alt=""/>
                                        </div>
                                        <Input
                                            type="text"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            placeholder="0.00"
                                            className="pl-10"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium">
                                            USDC
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Add a nice message
                                    </label>
                                    <Textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Write heartfelt message here"
                                        className="h-[80px] resize-none"
                                    />
                                </div>

                                <Button
                                    className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                                    onClick={handleSavePackage}
                                    disabled={!isConnected}
                                >
                                    Send Gift 🎁
                                </Button>

                                <div className="text-center">
                                    <Button variant="link" className="text-blue-600 hover:underline">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-4 text-center text-sm text-gray-500">
                Built by BGB Community
            </footer>
        </div>
    );
}

export default GiftModal;

