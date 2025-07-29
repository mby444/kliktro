import { Skeleton } from "./ui/skeleton";

export default function ProductCRUDTableSkeleton() {
  const rows = Array.from({ length: 5 });

  return (
    <div className="space-y-3">
      <Skeleton className="h-6 w-1/2" />
      {rows.map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
