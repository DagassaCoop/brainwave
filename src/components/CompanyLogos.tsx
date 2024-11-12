import { companyLogos } from "@/constants";
import { FC, HTMLAttributes } from "react";

interface ICompanyLogosProps {
  className: HTMLAttributes<HTMLElement>["className"];
}

const CompanyLogos: FC<ICompanyLogosProps> = ({ className }) => {
  return (
    <div className={["", className].join(" ")}>
      <h5 className="tagline mb-8 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center flex-1 h-[1.5rem]"
            >
              <img src={logo} alt={logo} width={132} height={28} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyLogos;
