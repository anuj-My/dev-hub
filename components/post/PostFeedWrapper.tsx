import { cn } from "@/lib/utils";

function FeedWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-6 w-full mb-16", className)}>{children}</div>;
}

export default FeedWrapper;
