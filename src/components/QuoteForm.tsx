import { useState } from "react";

const interests = ["Diagnostic", "Surgical", "Consumables", "Accessories"];

const QuoteForm = () => {
  const [form, setForm] = useState({ name: "", email: "", facility: "", interest: "", requirements: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Yorlad, I'd like to request a quote.\n\nName: ${form.name}\nEmail: ${form.email}\nFacility: ${form.facility}\nInterest: ${form.interest}\nRequirements: ${form.requirements}`;
    window.open(`https://wa.me/2349034584484?text=${encodeURIComponent(message)}`, "_blank");
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <section id="quote" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Request a Quote</h2>
            <p className="text-muted-foreground mt-3 text-sm">Tailored quotes within 24 hours. Fill out the form and we'll reach out via WhatsApp.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Dr. Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="jane@clinic.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Facility Name (Clinic/Hospital)</label>
              <input
                type="text"
                required
                maxLength={200}
                value={form.facility}
                onChange={(e) => update("facility", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="VisionCare Medical Center"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Primary Interest</label>
              <select
                required
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a category</option>
                {interests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Requirements</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.requirements}
                onChange={(e) => update("requirements", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Models, quantities, delivery timeline, budget range..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm"
            >
              Send via WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
