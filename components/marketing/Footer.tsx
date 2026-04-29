export default function Footer() {
  return (
    <footer className="w-full border-t py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} DevHub. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
