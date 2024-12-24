"use client"
import React, { useState } from "react";
import { BackgroundLines } from "../components/magicui/background-lines";
import { HoverBorderGradient } from "../components/magicui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";

export default function BackgroundLinesDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 px-4 py-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Desktop and Mobile Layout */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Image 
                src="/base_xmas.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">GiftPack</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/create" className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                Create
              </Link>
              {/* <Link href="/gallery" className="text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                Gallery
              </Link> */}
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-blue-700 text-white dark:text-white px-4 py-2 text-sm"
              >
                Connect Wallet
              </HoverBorderGradient>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 text-blue-700 dark:text-blue-400"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-0 bg-white dark:bg-black bg-opacity-95 dark:bg-opacity-95 
            transition-transform duration-300 ease-in-out transform
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            flex flex-col items-center justify-center space-y-8 pt-20
          `}>
            <Link 
              href="/create" 
              className="text-blue-700 dark:text-blue-400 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            {/* <Link 
              href="/gallery" 
              className="text-blue-700 dark:text-blue-400 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link> */}
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-blue-700 text-white dark:text-white px-6 py-3 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect Wallet
            </HoverBorderGradient>
          </div>
        </div>
      </nav>

      <BackgroundLines className="flex items-center justify-center w-full h-full px-4">
        <div className="max-w-4xl w-full flex flex-col items-center gap-8">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-600 to-blue-900 dark:from-blue-400 dark:to-blue-100 text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Onchain Gift Pack <br /> on Base.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-blue-700 dark:text-blue-400 text-center">
          Create a gift pack to send to someone special!
          </p>
          <div className="mt-4 md:mt-8">
            <Link href="/create">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-blue-700 text-white dark:text-white flex items-center space-x-2 px-6 py-3 text-sm md:text-base"
            >
              <Image 
                src="/base_img.png"
                alt="Logo"
                width={12}
                height={12}
                className="h-8 w-8"
              />
              <span className="font-extrabold">Send a Gift</span>
            </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}