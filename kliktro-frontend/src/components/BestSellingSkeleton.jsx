import { Skeleton } from "./ui/skeleton";

export default function BestSellingSkeleton() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-xl border shadow-sm p-4 space-y-4">
          <Skeleton className="w-full h-48 rounded-md" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      ))}
    </div>
  );
}
