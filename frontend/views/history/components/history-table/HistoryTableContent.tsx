"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { StatsRow } from "../Stats";
import { columns } from './columns';
import { DataTable } from './data-table';

const history = [
  {
    id: 1,
    recipient: "Alice Smith",
    details: "100 USDT + Summer NFT + Unique Item",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 2,
    recipient: "Bob Johnson",
    details: "75 USDT + Winter NFT + Special Edition",
    status: "Pending",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 3,
    recipient: "Charlie Brown",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 4,
    recipient: "Diana Prince",
    details: "50 USDT + Spring NFT + Limited Edition",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 5,
    recipient: "Ethan Hunt",
    details: "30 USDT + Fall NFT + Exclusive Item",
    status: "Failed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 6,
    recipient: "Fiona Gallagher",
    details: "20 USDT + Holiday NFT + Collectible",
    status: "Failed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 7,
    recipient: "George Clooney",
    details: "10 USDT + Anniversary NFT + Special Gift",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 8,
    recipient: "Hannah Montana",
    details: "5 USDT + Birthday NFT + Surprise",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 9,
    recipient: "Ian Malcolm",
    details: "15 USDT + Thank You NFT + Gratitude Gift",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 10,
    recipient: "Jack Sparrow",
    details: "25 USDT + Pirate NFT + Treasure",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    id: 11,
    recipient: "Katherine Johnson",
    details: "40 USDT + Space NFT + Stellar Gift",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
];

export function HistoryTable() {
  return (
    <Card className="container mx-auto py-2 mt-16 md:pt-10 z-10 md:bg-black/20 backdrop-blur-sm">
      <CardHeader className="flex w-full items-center md:px-10">
        <CardTitle className="text-[28px] flex-col md:flex-row gap-y-4 font-bold flex w-full">
          <div className="text-[28px] font-bold flex-1">Track Gifts</div>
          {/* <div className="flex items-center md:space-x-4">
            <Search />
            <Button variant="ghost" size="icon" className="p-0 ">
              <RefreshCcw className="h-5 w-5" />
            </Button>
          </div> */}
        </CardTitle>
      </CardHeader>
      <CardContent className="md:p-10 space-y-10">
        <StatsRow />
        <DataTable columns={columns} data={history} />
      </CardContent>
    </Card>
  );
}
