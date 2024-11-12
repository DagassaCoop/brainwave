import { FC, HTMLAttributes, PropsWithChildren } from "react";

// Assets
import SectionSvg from "@/assets/svg/SectionSvg";

interface ISectionProps extends PropsWithChildren {
  className?: HTMLAttributes<HTMLElement>["className"];
  id?: HTMLAttributes<HTMLElement>["id"];
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: string;
}

const Section: FC<ISectionProps> = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <section
      id={id}
      className={[
        "relative",
        customPaddings || "py-10 lg:py-16 xl:py-20",
        crosses ? "lg:py-32 xl:py-40" : "",
        className ?? "",
      ].join(" ")}
    >
      {children}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      {crosses && (
        <>
          <div
            className={[
              "hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 pointer-events-none lg:block xl:left-10 xl:right-10",
              crossesOffset ?? "",
            ].join(" ")}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
