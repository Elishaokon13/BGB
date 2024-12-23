import Image from "next/image";
import { HistoryTable } from "./components/history-table/HistoryTableContent";

export function HistoryView() {
  return (
    <div className="min-h-screen relative flex flex-col px-2 md:px-auto gap-10">
      <Image
        src="/0_Christmas_Christmas Ornaments_1920x1080 1.png"
        alt="Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <HistoryTable />
    </div>
  );
}
