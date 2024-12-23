import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search by recipient or gift status"
        className="w-72 h-auto pl-12 rounded-[12px] py-3 pr-4"
      />
    </div>
  );
}
