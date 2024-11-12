import { FC, HTMLAttributes } from "react";

interface IHeadingProps {
  className?: HTMLAttributes<HTMLElement>["className"];
  title?: string;
}

const Heading: FC<IHeadingProps> = ({ className, title }) => {
  return (
    <div
      className={["max-w-[50rem] mx-auto mb-12 lg:mb-20", className].join(" ")}
    >
      <h2 className="h2">{title}</h2>
    </div>
  );
};

export default Heading;
