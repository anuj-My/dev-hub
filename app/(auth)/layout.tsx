import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <Link href="/" className="text-xl font-bold mb-8">
        Dev<span className="text-primary">Hub</span>
      </Link>

      {children}
    </div>
  );
};

export default AuthLayout;
