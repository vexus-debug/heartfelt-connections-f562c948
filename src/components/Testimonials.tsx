const testimonials = [
  {
    name: "Dr. A. Okoye",
    role: "Consultant Ophthalmologist",
    quote: "The calibration accuracy is outstanding. Crystal-clear slit lamp optics that exceed expectations.",
  },
  {
    name: "VisionCare Clinic",
    role: "Ibadan",
    quote: "Fast delivery and excellent after-sales support. The autorefractor integrates seamlessly with our EMR system.",
  },
  {
    name: "Mobile Eye Initiative",
    role: "Southwest Nigeria",
    quote: "Field screening kits are rugged and reliable — exactly what we need for our community outreach programs.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Trusted by Professionals</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-8 border border-border relative">
            <div className="text-5xl text-primary/20 font-display absolute top-4 left-6">"</div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6 mt-6">{t.quote}</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
