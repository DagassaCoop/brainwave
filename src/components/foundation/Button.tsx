import {
  AnchorHTMLAttributes,
  DOMAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

import ButtonSvg from "@/assets/svg/ButtonSvg";

interface IButtonProps extends PropsWithChildren {
  className?: HTMLAttributes<HTMLElement>["className"];
  href?: AnchorHTMLAttributes<HTMLLinkElement>["href"];
  onClick?: DOMAttributes<HTMLElement>["onClick"];
  white?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  href,
  onClick,
  white,
}) => {
  const classes = [
    "button relative inline-flex items-center justify-center h-11 transition-colors px-7 hover:text-color-1",
    white ? "text-n-8" : "text-n-1",
    className || "",
  ].join(" ");

  const spanClasses = ["relative z-1"].join(" ");

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
