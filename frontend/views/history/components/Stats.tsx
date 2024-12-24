import { Card } from "@/components/ui/card";

interface StatsProps {
  value: number;
  label: string;
}

export function StatsRow() {
  const statsData: StatsProps[] = [
    { value: 300, label: "Total Gifts Sent" },
    { value: 150, label: "Total Gifts Received" },
    { value: 75, label: "Total Gifts Pending" },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {statsData.map((stat, index) => (
        <Stats key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

function Stats({ value, label }: StatsProps) {
  return (
    <Card className="flex flex-col p-4 gap-2 w-full bg-black/30 backdrop-blur-sm">
      <div className="text-[24px] md:text-[32px] font-bold">{value}</div>
      <div className="text-[14px] md:text-[18px] font-medium">{label}</div>
    </Card>
  );
}
