// Components
import Heading from "./foundation/Heading";
import Section from "./foundation/Section";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

// Assets
import { smallSphere, stars } from "@/assets";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="sphere"
            className="relative z-1"
            width={255}
            height={255}
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          className="md:text-center"
          title="Pay once, use forever"
          tag="Get started with Brainwave"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
