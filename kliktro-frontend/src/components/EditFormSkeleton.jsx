import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditFormSkeleton() {
  return (
    <Card className="max-w-3xl mx-auto mt-12 border border-muted shadow-xl bg-white animate-pulse">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">
          <Skeleton className="w-40 h-6 mx-auto" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-60 h-4 mx-auto mt-2" />
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <Skeleton className="w-full h-8" />

        <div className="space-y-2">
          <Skeleton className="w-32 h-4" />
          <Skeleton className="w-full h-10" />
        </div>

        <div className="space-y-2">
          <Skeleton className="w-32 h-4" />
          <Skeleton className="w-full h-24" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-10" />
          </div>
          <div className="space-y-2">
            <Skeleton className="w-32 h-4" />
            <Skeleton className="w-full h-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="w-40 h-4" />
          <Skeleton className="w-full h-10" />
        </div>

        <div className="space-y-2">
          <Skeleton className="w-40 h-4" />
          <Skeleton className="w-full h-10" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between px-6 py-4 border-t mt-4">
        <Skeleton className="w-24 h-10" />
        <Skeleton className="w-24 h-10" />
      </CardFooter>
    </Card>
  );
}
