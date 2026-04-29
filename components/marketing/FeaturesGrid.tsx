import { RiBookmarkLine, RiHeartLine, RiCompass3Line } from "@remixicon/react";

export default function FeaturesGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-24 border-t">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Everything you need to grow</h2>
        <p className="text-muted-foreground">Built for developers, by developers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RiCompass3Line className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Explore the Feed</h3>
          <p className="text-muted-foreground leading-relaxed">
            Discover what other developers are building. Get inspired by their code snippets, projects, and daily progress updates.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RiBookmarkLine className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Curate Knowledge</h3>
          <p className="text-muted-foreground leading-relaxed">
            Found a useful code snippet or a brilliant project? Bookmark posts to save them to your personal collection for later.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-card hover:bg-muted/50 transition-colors group">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RiHeartLine className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Connect & Engage</h3>
          <p className="text-muted-foreground leading-relaxed">
            Show appreciation by liking posts and leave comments to discuss implementations, ask questions, or provide feedback.
          </p>
        </div>
      </div>
    </section>
  );
}
