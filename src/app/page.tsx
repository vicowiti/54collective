import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import NavCard from "@/components/NavCards";
import Resources from "@/components/Resources";

const page = () => {
  return (
    <div className="px-4  sm:px-20">
      <Hero />
      <NavCard />
      <Resources />
      <CTA />
    </div>
  );
};

export default page;
