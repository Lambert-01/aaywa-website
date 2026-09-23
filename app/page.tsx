import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ChallengeSection from "@/components/home/ChallengeSection";
import PillarsSection from "@/components/home/PillarsSection";
import JourneySection from "@/components/home/JourneySection";
import ImpactSection from "@/components/home/ImpactSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import StoriesSection from "@/components/home/StoriesSection";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import CtaBanner from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ChallengeSection />
      <PillarsSection />
      <JourneySection />
      <ImpactSection />
      <WhoWeServeSection />
      <GetInvolvedSection />
      <StoriesSection />
      <ResourcesPreview />
      <div className="pt-10">
        <CtaBanner
          title="Grow with AAYWA."
          text="Whether you are a young woman farmer ready to begin the journey, or a partner who believes women-led agriculture can transform Africa — start the conversation today."
          primaryLabel="Get involved"
          primaryHref="/get-involved"
          secondaryLabel="Contact us"
          secondaryHref="/contact"
        />
      </div>
    </>
  );
}