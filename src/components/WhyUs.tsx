import { Shield, Truck, Wrench, CreditCard } from "lucide-react";

const features = [
  { icon: Truck, title: "Nationwide Delivery", desc: "Ships from Lagos to every state in Nigeria" },
  { icon: Wrench, title: "Expert Installation", desc: "On-site calibration and hands-on training" },
  { icon: Shield, title: "12-Month Warranty", desc: "Full warranty with annual maintenance contracts" },
  { icon: CreditCard, title: "Easy Payment", desc: "Flexible payment options and 24hr quotes" },
];

const WhyUs = () => (
  <section id="why-us" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Why Choose Yorlad</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Built for Healthcare Professionals</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
