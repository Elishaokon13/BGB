import React from "react";
import USDC from "../public/usdc.svg";
import BASENAME from "../public/basename.svg";
import CUBE from "../public/cube.svg";
import Image from "next/image";
import VideoBackground from "./VideoBackground";

export const Welcome = () => {
  return (
    <div className="text-center items-center">
      <div className="container flex gap-10">
        <div className="flex flex-col gap-9 transform -rotate-12">
          <div className="border-2 w-fit h-fit border-gray-400 rounded-full mt-28 p-3">
            <Image
              src={USDC}
              alt="usdc"
              height={100}
              width={100}
              className="w-[272.18px] h-[272.18px]"
            />
          </div>
          <div>
            <p className="font-semibold text-3xl">USDC</p>
            <p className="text-2xl">$5</p>
          </div>
        </div>
        <div className="flex flex-col gap-9 text-center">
          <div className="border-2 w-fit h-fit border-gray-400 rounded-lg p-3">
            <Image
              src={CUBE}
              alt="cube"
              height={100}
              width={100}
              className="w-[290px] h-[340px] rounded-lg"
            />
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 max-w-xl object-cover z-[-1]"
            >
              <source src="/video/cubes193d7f1f9ab1cfeeb3506c30ed72391c.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
          <div>
            <p className="font-semibold text-3xl">Holiday Collectible</p>
          </div>
        </div>

        <div className="flex flex-col gap-9 transform rotate-12">
          <div className="border-2 w-fit h-fit border-gray-400 rounded-full mt-28 p-3">
            <Image
              src={BASENAME}
              alt="basename"
              height={100}
              width={100}
              className="w-[272.18px] h-[272.18px]"
            />
          </div>
          <div>
            <p className="font-semibold text-3xl">Basename</p>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col gap-2 max-w-sm mb-7 mx-auto">
        <h1 className="text-[23.19px] font-bold">Welcome to Base! 🎉</h1>
        <p>Congratulations on Receiving Your First Holiday Gift!</p>
        <p className="mt-7">
          You've Just Joined The Base Ecosystem, a Community-Driven Platform
          Where Your Yourney Into The World of Decentralized Finance Begins.
        </p>
      </div>
      <div className="flex gap-4 mx-auto w-fit">
        <button className="rounded-3xl p-3 px-4 font-thin bg-blue-700 hover:bg-blue-600">
          Claim Your Gift
        </button>
        <button className="rounded-3xl p-3 px-4 font-thin border border-blue-700 bg-transparent hover:bg-blue-600">
          How to Claim Gift
        </button>
      </div>
    </div>
  );
};
