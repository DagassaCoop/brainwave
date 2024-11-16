import { FC, HTMLAttributes, PropsWithChildren } from "react";

// Assets
import brackets from "@/assets/svg/Brackets";

interface ITaglineProps extends PropsWithChildren {
  className?: HTMLAttributes<HTMLElement>["className"];
}

const Tagline: FC<ITaglineProps> = ({ className, children }) => {
  return (
    <div className={["tagline flex items-center", className].join(" ")}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
