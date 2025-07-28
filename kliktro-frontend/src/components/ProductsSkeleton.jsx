import { Link } from "react-router";
import { Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
      <div className="flex items-center text-gray-900 text-sm mb-4">
        <Link to="/">
          <Home size={16} className="mr-1 text-black" />
        </Link>
        <span className="mx-1">/</span>
        <Link to="." className="text-black">
          Products
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-black">Our Products</h2>
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
    </div>
  );
}
