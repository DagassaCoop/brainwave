import { FC, HTMLAttributes } from "react";

// Components
import Tagline from "./Tagline";

interface IHeadingProps {
  className?: HTMLAttributes<HTMLElement>["className"];
  title: string;
  text?: string;
  tag?: string;
}

const Heading: FC<IHeadingProps> = ({ className, title, text, tag }) => {
  return (
    <div
      className={["max-w-[50rem] mx-auto mb-12 lg:mb-20", className].join(" ")}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      <h2 className="h2">{title}</h2>
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
