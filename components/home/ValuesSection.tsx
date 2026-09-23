import { VALUES } from "@/data/values";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ValueCard from "@/components/ui/ValueCard";

export default function ValuesSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-aaywa">
        <Reveal>
          <SectionHeading
            eyebrow="Our values"
            title="The principles behind every programme, partnership and decision."
            text="Eight values guide how AAYWA shows up — with the women we serve, the partners we work with and the change we pursue."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={(index % 4) * 0.07}>
              <ValueCard title={value.title} text={value.text} icon={value.icon} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}