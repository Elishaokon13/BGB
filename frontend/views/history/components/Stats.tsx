import { Card } from "@/components/ui/card";

export function StatsRow() {
  return (
    <div className="flex items-center gap-4">
      <Stats />
      <Stats />
      <Stats />
    </div>
  );
}

function Stats() {
  return (
    <Card className="flex flex-col p-4 gap-2 w-full bg-black/30 backdrop-blur-sm">
      <div className="text-[32px] font-bold">300</div>
      <div className="text-[18px] font-medium">Total Gifts Sent</div>
    </Card>
  );
}
