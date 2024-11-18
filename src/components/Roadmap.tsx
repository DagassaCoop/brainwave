// Components
import Section from "./foundation/Section";
import Heading from "./foundation/Heading";
import Tagline from "./foundation/Tagline";

// Constants
import { roadmap } from "@/constants";

// Assets
import { check2, grid, loading } from "@/assets";
import Button from "./foundation/Button";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:mb-10">
        <Heading title="What we`re working on" tag="Ready to get started" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={[
                  "md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]",
                  item.colorful ? "bg-conic-gradient" : "bg-n-6",
                ].join(" ")}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="Grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading}
                          alt={status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15 ">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full"
                        width={660}
                        height={420}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative w-full flex justify-center mt-20">
          <Button className="w-full md:w-auto">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
