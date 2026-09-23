import { JOURNEY } from "@/data/journey";
import JourneyTimeline from "@/components/ui/JourneyTimeline";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-28">
      <div className="container-aaywa">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="The AAYWA journey"
            title="From discovery to leadership."
            text="A supported pathway that grows with every woman — built to carry her from a first step into agriculture to leading an enterprise that transforms her community."
          />
        </Reveal>

        <Reveal className="mt-16" y={40}>
          <JourneyTimeline steps={JOURNEY} tone="light" />
        </Reveal>
      </div>
    </section>
  );
}