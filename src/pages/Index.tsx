import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ProductsTable from "@/components/ProductsTable";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <WhyUs />
    <ProductsTable />
    <Testimonials />
    <QuoteForm />
    <Footer />
  </div>
);

export default Index;
