"use client";
import React, { useState } from "react";
import { BackgroundLines } from "../components/magicui/background-lines";
import { HoverBorderGradient } from "../components/magicui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";

export default function BackgroundLinesDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-0 overflow-hidden bg-white">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 px-4 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <Image
                src="/base_xmas.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-blue-700 font-bold text-xl">
                GiftPack
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/create"
                className="text-blue-700 hover:text-blue-800"
              >
                Create
              </Link>
              <Wallet>
                <ConnectWallet className="rounded-full">
                  <Avatar className="h-6 w-6" />
                  <Name />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 text-blue-700"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
            md:hidden fixed inset-0 bg-white bg-opacity-100
            transition-transform duration-300 ease-in-out transform
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            flex flex-col items-center justify-center space-y-8 pt-20
          `}
          >
            <Link
              href="/create"
              className="text-blue-700 text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <ConnectWallet className="bg-blue-500 hover:bg-blue-400">
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
          </div>
        </div>
      </nav>

      <main className="relative w-full h-full bg-white">
        <BackgroundLines className="flex items-center justify-center w-full h-full px-4 bg-white">
          <div className="max-w-4xl w-full flex flex-col items-center gap-8">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-500 to-blue-900 text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              Onchain Gift Pack <br /> on Base.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-blue-700 text-center">
              Create a gift pack to send to someone special!
            </p>
            <div className="mt-4 md:mt-8">
              <Link href="/create">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-blue-700 text-white flex items-center space-x-2 px-6 py-3 text-sm md:text-base"
                >
                  <Image
                    src="/gifted.png"
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
      </main>
    </div>
  );
}
