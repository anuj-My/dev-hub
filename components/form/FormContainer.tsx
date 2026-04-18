"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export type FormState = {
  message: string;
  success?: boolean;
};

type FormActionType = (
  prevState: FormState,
  formData: FormData,
) => Promise<FormState>;

const initialState: FormState = {
  message: "",
};

const FormContainer = ({
  action,
  className,
  children,
  onSuccess,
}: {
  action: FormActionType;
  className: string;
  children: React.ReactNode;
  onSuccess?: () => void;
}) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }

    if (state.success && onSuccess) {
      onSuccess();
    }
  }, [state]);

  return (
    <form action={formAction} className={className}>
      {children}
    </form>
  );
};

export default FormContainer;
