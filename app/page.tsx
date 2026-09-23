import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ChallengeSection from "@/components/home/ChallengeSection";
import PillarsSection from "@/components/home/PillarsSection";
import JourneySection from "@/components/home/JourneySection";
import ImpactSection from "@/components/home/ImpactSection";
import StoriesSection from "@/components/home/StoriesSection";
import ValuesSection from "@/components/home/ValuesSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import ResourcesPreview from "@/components/home/ResourcesPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ChallengeSection />
      <PillarsSection />
      <JourneySection />
      <ImpactSection />
      <StoriesSection />
      <ValuesSection />
      <WhoWeServeSection />
      <GetInvolvedSection />
      <ResourcesPreview />
    </>
  );
}