import { Skeleton } from "@/components/ui/skeleton";

export default function CommentListSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3">
          <Skeleton className="h-8 w-8 rounded-full bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24 bg-muted" />
              <Skeleton className="h-3 w-16 bg-muted" />
            </div>
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-5/6 bg-muted" />
            <div className="flex items-center gap-2 pt-1">
              <Skeleton className="h-6 w-12 bg-muted" />
              <Skeleton className="h-6 w-12 bg-muted" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
