import HeroSection from "@/components/marketing/HeroSection";
import CodeWindow from "@/components/marketing/CodeWindow";
import FeaturesGrid from "@/components/marketing/FeaturesGrid";
import Footer from "@/components/marketing/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <CodeWindow />
      <FeaturesGrid />
      <Footer />
    </div>
  );
};

export default Homepage;
