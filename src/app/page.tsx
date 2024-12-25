import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavCard from "@/components/NavCard";

const page = () => {
  return <div className="px-4 sm:px-0">
    <Hero />
    <NavCard />
    <Footer/>
  </div>;
};

export default page;
