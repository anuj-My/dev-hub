import AuthButtons from "@/components/shared/auth-buttons";

const Homepage = () => {
  return (
    <section className="max-w-xl mx-auto min-h-[60vh] text-center flex items-center justify-center flex-col">
      <div className="mb-10">
        <h1 className="text-4xl mb-4 font-bold text-primary">
          Share what you're building with the dev world
        </h1>
        <p className="text-muted-foreground text-lg">
          DevHub is a platform for developers to share ideas, code snippets, and
          connect with others.
        </p>
      </div>

      <AuthButtons centered={true} />
    </section>
  );
};

export default Homepage;
