import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <SignUp forceRedirectUrl="/explore" />
    </>
  );
};

export default SignUpPage;
