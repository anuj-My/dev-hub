import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto max-w-[1100px] px-5 w-full", className)}>{children}</div>
  );
};

export default Container;
