"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical, RefreshCcw } from "lucide-react";
import moment from "moment";
import { Search } from "./Search";
import { StatsRow } from "./Stats";

const history = [
  {
    recipient: "John Doe",
    details: "50 USDT + Holiday NFT + Basename",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    recipient: "John Doe",
    details: "50 USDT + Holiday NFT + Basename",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    recipient: "John Doe",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem kalsdfj laskjdfljasdlf kjalsdkf jlaskdj flaksjdf lkajsdlfkjasldkfjlaskdjf",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    recipient: "John Doe",
    details: "50 USDT + Holiday NFT + Basename",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    recipient: "John Doe",
    details: "50 USDT + Holiday NFT + Basename",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    recipient: "John Doe",
    details: "50 USDT + Holiday NFT + Basename",
    status: "Claimed",
    date: 1734968758,
    actions: "View",
  },
  {
    recipient: "John Doe",
    details: "50 USDT + Holiday NFT + Basename",
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
          <div className="flex items-center md:space-x-4">
            <Search />
            <Button variant="ghost" size="icon" className="p-0 ">
              <RefreshCcw className="h-5 w-5" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="md:p-10 space-y-10">
        <StatsRow />
        <Table>
          <TableHeader>
            <TableRow >
              <TableHead className="w-[100px] text-sm md:text-base">Recipient</TableHead>
              <TableHead className="text-sm md:text-base">Gift Details</TableHead>
              <TableHead className="text-sm md:text-base">Status</TableHead>
              <TableHead className="text-sm md:text-base">Date Sent</TableHead>
              <TableHead className="text-sm md:text-base">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((gift) => (
              <TableRow className="text-xs md:text-sm" key={gift.recipient}>
                <TableCell className="font-medium">
                  <div className="w-[80px] lg:w-[250px]">
                    {gift.recipient}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 md:gap-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/usdc.svg" alt="USDC" className="w-4 h-4" />
                    <span className="w-[150px] md:w-auto md:max-w-[300px]">{gift.details}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="text-xs md:text-sm">{gift.status}</Badge>
                </TableCell>
                <TableCell
                  title={moment
                    .unix(gift.date)
                    .format("MMMM Do YYYY, h:mm:ss a")}
                >
                  <div className="w-[80px] md:w-auto">
                    {moment.unix(gift.date).fromNow()}
                  </div>
                </TableCell>
                <TableCell>
                  <EllipsisVertical />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
