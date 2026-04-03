import logo from "@/assets/yorlad-logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Yorlad Logo" className="h-10 w-10 object-contain" />
        <span className="font-display text-xl font-bold text-primary">Yorlad</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">Products</a>
        <a href="#why-us" className="text-foreground/70 hover:text-primary transition-colors">Why Us</a>
        <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
      </div>
      <a href="#quote" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
        Get a Quote
      </a>
    </div>
  </nav>
);

export default Navbar;
