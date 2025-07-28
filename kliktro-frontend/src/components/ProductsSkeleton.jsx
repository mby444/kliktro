import { Link } from "react-router";
import { Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="bg-white border border-gray-200">
          <CardContent className="p-4 space-y-4">
            <Skeleton className="w-full h-40 rounded-md bg-gray-200" />
            <Skeleton className="w-3/4 h-4 bg-gray-200" />
            <Skeleton className="w-1/2 h-4 bg-gray-200" />
            <Skeleton className="w-1/3 h-4 bg-gray-200" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
