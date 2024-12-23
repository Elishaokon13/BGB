'use client';

import { ColumnDef } from '@tanstack/react-table';
import { EllipsisVertical } from 'lucide-react';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';

interface Gift {
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
    header: 'Status',
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
    header: 'Date Sent',
    cell: ({ row }) => (
      <div className="w-[80px] md:w-auto" title={moment.unix(row.original.date).format("MMMM Do YYYY, h:mm:ss a")}>
        {moment.unix(row.original.date).fromNow()}
      </div>
    ),
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: () => <EllipsisVertical />,
  },
];
