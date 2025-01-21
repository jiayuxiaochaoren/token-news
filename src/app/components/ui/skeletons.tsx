import { Skeleton } from "@/app/components/ui/skeleton";

export function TokenHeaderSkeleton() {
  return (
    <div className="bg-[#262626]/50 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-24" />
            </div>
            <Skeleton className="h-4 w-32 mt-1" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
    </div>
  );
}

export function MetricCardSkeleton() {
  return (
    <div className="bg-[#262626]/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-8 w-32 mb-4" />
      <div className="grid grid-cols-3 gap-2">
        <div>
          <Skeleton className="h-3 w-8 mb-1" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div>
          <Skeleton className="h-3 w-8 mb-1" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div>
          <Skeleton className="h-3 w-8 mb-1" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return <div className="bg-[#262626]/50 rounded-lg h-[400px] animate-pulse" />;
}

export function AISummarySkeleton() {
  return (
    <div className="bg-[#262626]/50 rounded-lg p-4">
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5 mt-2" />
    </div>
  );
}

export { Skeleton };
