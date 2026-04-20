import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <SignIn forceRedirectUrl="/explore" />
    </>
  );
};

export default SignInPage;
