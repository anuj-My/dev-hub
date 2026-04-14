"use client";

type FormActionType = (formData: FormData) => Promise<void>;

const FormContainer = ({
  action,
  className,
  children,
}: {
  action: FormActionType;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
};

export default FormContainer;
