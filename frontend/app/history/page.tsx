// import { HistoryView } from "@/views/history";
import { HistoryTable } from "@/views/history/components/history-table/HistoryTableContent";

export default function HistoryPage() {
  return (
    <div className="min-h-screen relative flex flex-col px-2 md:px-auto gap-10">
      <HistoryTable />
    </div>
  );
}
