import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RiLoaderLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className={cn("capitalize", className)}
    >
      {pending ? (
        <>
          <RiLoaderLine /> {`${text}ing`}
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
