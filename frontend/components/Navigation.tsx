"use client";
import { Address, Avatar, EthBalance, Identity, Name } from '@coinbase/onchainkit/identity';
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';

import Image from 'next/image';
import Link from 'next/link';

function Navigation() {
    return (
        <nav className="flex justify-between items-center p-4 bg-transparent">
            {/* Left side - Logo */}
            <div className="flex rounded-full px-2 py-2 border-spacing-6 items-center">
                <Link href={"/"} className='mr-2'>

                    <Image
                        src="/base_xmas.svg"
                        alt="Base Christmas Logo"
                        width={40}
                        height={40}
                    />
                </Link>
                <div className="flex rounded-md px-1 py-1 border-spacing-6 border border-gray-600 gap-2">
                    {/* <Image
                        src="/base_img.png"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="rounded-full"
                    /> */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 animate-pulse rounded-full bg-green-500"></span>
                        Gas Fee
                        <span className="font-extrabold">0.000 ETH</span>
                    </div>
                </div>
            </div>

            {/* Right side - Wallet Connect and Identity */}
            <div className="flex items-center gap-4">
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
        </nav>
    )
}

export default Navigation