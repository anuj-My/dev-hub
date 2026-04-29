import { RiCodeSSlashLine } from "@remixicon/react";

export default function CodeWindow() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 -mt-10 mb-32 z-10">
      <div className="w-full rounded-2xl border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden group hover:shadow-primary/10 transition-all duration-500">
        <div className="w-full h-12 bg-muted/30 border-b flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-4 text-xs text-muted-foreground font-mono flex items-center gap-2">
            <RiCodeSSlashLine className="w-3 h-3" />
            devhub-preview.ts
          </div>
        </div>
        <div className="p-8 md:p-12 font-mono text-sm leading-relaxed overflow-x-auto text-left">
          <span className="text-blue-500">import</span> {"{ "} 
          <span className="text-teal-400">createPost</span> 
          {" }"} <span className="text-blue-500">from</span> 
          <span className="text-orange-400"> 'devhub/actions'</span>;
          <br /><br />
          <span className="text-blue-500">const</span> post = <span className="text-purple-400">await</span> <span className="text-teal-400">createPost</span>({"{"} <br />
          &nbsp;&nbsp;title: <span className="text-orange-400">"Launched my new MVP!"</span>, <br />
          &nbsp;&nbsp;content: <span className="text-orange-400">"Built this using Next.js, Prisma, and Supabase."</span>, <br />
          &nbsp;&nbsp;tags: [<span className="text-orange-400">"showdev"</span>, <span className="text-orange-400">"nextjs"</span>] <br />
          {"}"}); <br /><br />
          <span className="text-muted-foreground">// Prepare to receive likes & bookmarks from the community 🚀</span>
        </div>
      </div>
    </section>
  );
}
