// Constants
import { benefits } from "@/constants";

// Assets
import Arrow from "@/assets/svg/Arrow";
import ClipPath from "@/assets/svg/ClipPath";

// Components
import Section from "./foundation/Section";
import Heading from "./foundation/Heading";
import { GradientLight } from "./design/Benefits";

const Benefit = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(src/${benefit.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{benefit.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={benefit.iconUrl}
                      alt={benefit.title}
                      width={48}
                      height={48}
                    />
                    <div className="flex items-center ml-auto pointer-events-auto cursor-pointer">
                      <p className="font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Explore more
                      </p>
                      <Arrow />
                    </div>
                  </div>
                </div>

                {benefit.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {benefit.imageUrl && (
                      <img
                        src={benefit.imageUrl}
                        alt={benefit.title}
                        width={380}
                        height={362}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Benefit;
