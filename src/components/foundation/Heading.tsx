import { FC, HTMLAttributes } from "react";

interface IHeadingProps {
  className?: HTMLAttributes<HTMLElement>["className"];
  title: string;
  text?: string;
}

const Heading: FC<IHeadingProps> = ({ className, title, text }) => {
  return (
    <div
      className={["max-w-[50rem] mx-auto mb-12 lg:mb-20", className].join(" ")}
    >
      <h2 className="h2">{title}</h2>
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
