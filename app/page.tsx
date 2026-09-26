import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import PillarsSection from "@/components/home/PillarsSection";
import SisterhoodSection from "@/components/home/SisterhoodSection";
import ImpactSection from "@/components/home/ImpactSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import CtaBanner from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <PillarsSection />
      <SisterhoodSection />
      <ImpactSection />
      <WhoWeServeSection />
      <div className="pt-10">
        <CtaBanner
          title="Grow with AAYWA."
          text="Whether you are a young woman farmer ready to begin the journey, or a partner who believes young women-led agriculture can transform Africa — start the conversation today."
          primaryLabel="Get involved"
          primaryHref="/get-involved"
          secondaryLabel="Contact us"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}
