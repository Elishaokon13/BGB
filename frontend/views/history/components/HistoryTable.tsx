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
];

export function HistoryTable() {
  return (
    <Card className="container mx-auto mt-16 pt-10 z-10 bg-black/20 backdrop-blur-sm">
      <CardHeader className="flex w-full items-center px-10">
        <CardTitle className="text-[28px] font-bold flex w-full">
          <div className="text-[28px] font-bold flex-1">Track Gifts</div>
          <div className="flex items-center space-x-4">
            <Search />
            <Button variant="ghost" size="icon" className="p-0">
              <RefreshCcw className="h-5 w-5" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-10 space-y-10">
        <StatsRow />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Recipient</TableHead>
              <TableHead>Gift Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Sent</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((gift) => (
              <TableRow key={gift.recipient}>
                <TableCell className="font-medium">{gift.recipient}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/usdc.svg" alt="USDC" className="w-4 h-4" />
                    <span>{gift.details}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge>{gift.status}</Badge>
                </TableCell>
                <TableCell
                  title={moment
                    .unix(gift.date)
                    .format("MMMM Do YYYY, h:mm:ss a")}
                >
                  {moment.unix(gift.date).fromNow()}
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
