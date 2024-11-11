import { useLocation } from "react-router-dom";
import { MouseEvent, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// Assets
import { brainwave } from "@/assets";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

// Constants
import { navigation } from "@/constants";
import Button from "./Button";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(true);

  const toggleOpenNavigation = (e: MouseEvent) => {
    e.stopPropagation();

    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    } else {
      disablePageScroll();
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={[
        "fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90",
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm",
      ].join(" ")}
      onClick={handleClick}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav
          className={[
            "fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent",
            openNavigation ? "flex" : "hidden",
          ].join(" ")}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((n) => {
              return (
                <a
                  href={n.url}
                  key={n.id}
                  className={[
                    "block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12",
                    n.onlyMobile ? "lg:hidden" : "",
                    location.hash === n.url
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50",
                  ].join(" ")}
                >
                  {n.title}
                </a>
              );
            })}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden px-3"
          onClick={toggleOpenNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
