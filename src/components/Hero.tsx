import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="Medical equipment" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/60" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-light border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Nigeria's Trusted Medical Equipment Supplier
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Precision You <br />Can <span className="text-gold">Trust</span>
        </h1>
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
          Certified diagnostic & surgical ophthalmic equipment. Expert installation, calibration, and nationwide delivery from Lagos.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#quote" className="bg-gold text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all text-sm">
            Request a Quote
          </a>
          <a href="#products" className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all text-sm">
            View Products
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
