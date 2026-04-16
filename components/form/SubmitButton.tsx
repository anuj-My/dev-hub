import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RiLoaderLine } from "@remixicon/react";

const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending}>
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
