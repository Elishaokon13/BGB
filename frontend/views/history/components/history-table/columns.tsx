'use client';

import { ColumnDef, Row } from '@tanstack/react-table';
import { ArrowUpDown, EllipsisVertical } from 'lucide-react';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

interface Gift {
  id: number;
  recipient: string;
  details: string;
  status: string;
  date: number;
}

export const columns: ColumnDef<Gift>[] = [
  {
    accessorKey: 'recipient',
    header: 'Recipient',
    cell: ({ row }) => <div className="min-w-20 md:min-w-40">{row.original.recipient}</div>,
  },
  {
    accessorKey: 'details',
    header: 'Gift Details',
    cell: ({ row }) => (
      <div className="flex items-center gap-2 md:gap-1">
        <img src="/usdc.svg" alt="USDC" className="w-4 h-4" />
        <span className="w-[150px] md:w-auto md:max-w-[300px]">{row.original.details}</span>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-xs md:text-sm"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <ArrowUpDown className="" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;
      let badgeVariants: "pending" | "destructive" | "default" | "secondary" | "outline";

      switch (status) {
        case 'Pending':
          badgeVariants = 'pending';
          break;
        case 'Failed':
          badgeVariants = 'destructive';
          break;
        case 'Claimed':
        default:
          badgeVariants = 'default';
          break;
      }

      return <Badge className="text-xs md:text-sm" variant={badgeVariants}>{status}</Badge>;
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-xs md:text-sm w-[80px] md:w-[80px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date Sent
          <ArrowUpDown className="-ml-1" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="w-[80px] md:w-[80px]" title={moment.unix(row.original.date).format("MMMM Do YYYY, h:mm:ss a")}>
        {moment.unix(row.original.date).fromNow()}
      </div>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <ActionCellComponent row={row} />;
    },
  },
];

const ActionCellComponent = ({ row }: { row: Row<Gift> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTermination = () => {
    const id = row.original.id;
    console.log(`Deactive item with ID: ${id}`);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <EllipsisVertical />
      </PopoverTrigger>
      <PopoverContent className="absolute -right-5 bg-black/30 w-[200px] backdrop-blur-sm">
        <div className="flex flex-col justify-center gap-2">
          <Button variant="destructive" onClick={handleTermination}>Deactivate</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
