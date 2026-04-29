import AuthButtons from "@/components/shared/auth-buttons";

export default function HeroSection() {
  return (
    <section className="w-full max-w-4xl mx-auto min-h-[60vh] text-center flex items-center justify-center flex-col relative py-20 px-4">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />

      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 backdrop-blur-sm text-sm text-muted-foreground animate-fade-in-up">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        DevHub v1.0 is now live
      </div>

      <h1 className="text-5xl md:text-7xl mb-6 font-extrabold tracking-tight">
        The ultimate space to <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
          share what you build.
        </span>
      </h1>
      
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        DevHub is a platform for developers to share ideas, code snippets, and connect with others. Join thousands of developers building in public.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up animation-delay-200">
        <AuthButtons centered={true} />
      </div>
    </section>
  );
}
