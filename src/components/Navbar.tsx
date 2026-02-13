import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#features", label: "產品特點" },
  { href: "#technology", label: "核心技術" },
  { href: "#research", label: "科學實證" },
  { href: "#specs", label: "產品規格" },
  { href: "#howto", label: "使用方法" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-black text-gradient-water">WaveQ</a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.link/uuzzvl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-water-deep text-primary-foreground text-sm font-semibold hover:shadow-water transition-all"
          >
            立即查詢
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground py-2">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
