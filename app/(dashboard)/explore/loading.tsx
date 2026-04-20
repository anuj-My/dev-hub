import FeedWrapper from "@/components/post/PostFeedWrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <FeedWrapper>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="border rounded-xl p-4 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>

          <Skeleton className="h-5 w-3/4" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <Skeleton className="h-48 w-full rounded-lg" />

          <div className="flex gap-3 pt-2">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      ))}
    </FeedWrapper>
  );
}
