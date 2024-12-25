import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavCard from "@/components/NavCard";
import Resources from "@/components/Resources";

const page = () => {
  return (
    <div className="px-4 sm:px-0">
      <Hero />
      <NavCard />
      <Resources />
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
