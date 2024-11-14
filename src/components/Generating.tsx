import { FC, HTMLAttributes } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Assets
import { loading } from "@/assets";

interface IGeneratingProps {
  className?: HTMLAttributes<HTMLElement>["className"];
}

const Generating: FC<IGeneratingProps> = ({ className }) => {
  useGSAP(() => {
    const generatingElements = document.querySelectorAll(".generating");
    if (!generatingElements) return;

    gsap.to(generatingElements, {
      duration: 1.5,
      rotate: "360",
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div
      className={[
        "flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]",
        className,
      ].join(" ")}
    >
      <img
        src={loading}
        alt="Loading"
        className="generating mr-4"
        width={20}
        height={20}
      />
      AI is generating
    </div>
  );
};

export default Generating;
