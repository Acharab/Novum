import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// import whiteLogo from "/public/newLogoWhite.png";
// import blackLogo from "/public/newLogoBlack.png";

import { getButtonAppearance } from "utils/button";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import { MdMenu } from "react-icons/md";
import MobileNavMenu from "./mobile-nav-menu";
import ButtonLink from "./button-link";
import NextImage from "./image";
import CustomLink from "./custom-link";
import LocaleSwitch from "../locale-switch";
// import whiteLogo from "../../public/newLogoWhite.png"
// import blackLogo from "../../public/newLogoBlack.png"

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter();
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
  const background =
    router.asPath === "/"
      ? "black"
      : router.asPath === "/diensten"
      ? "white"
      : router.asPath === "/aboutus"
      ? "black"
      : router.asPath === "/contact"
      ? "black"
      : router.asPath === "/blog"
      ? "white": "";
  let text;
  //choose black and white logo
  let logo;
  if(background === "white"){
    logo = navbar.logoBlack
  }
  else{
    logo = navbar.logoWhite
  }

  
  if (background === "black") {
    text = "white";
  }
  if (background === "white") {
    text = "black";
  }
  return (
    <>
      {" "}
      <nav className={`bg-${background} text-${text} py-6 sm:py-2`}>
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <Link href="/">
            <a className="">
              <NextImage width="200" height="75" media={logo} />
            </a>
          </Link>
          <div className="flex flex-row items-center">
            {/* List of links on desktop */}
            <ul
              className={`hidden list-none md:flex flex-row gap-4 justify-center items-center ml-10`}
            >
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink} locale={router.locale}>
                    <div className=" px-2 py-1">{navLink.text}</div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex">
            {/* Locale Switch Mobile */}
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block md:hidden"
            >
              <MdMenu className="h-8 w-auto" />
            </button>
            {/* CTA button on desktop */}
            {navbar.button && (
              <div className="hidden md:block">
                <ButtonLink
                  button={navbar.button}
                  appearance={getButtonAppearance(navbar.button.type, "light")}
                  compact
                />
              </div>
            )}
            {/* Locale Switch Desktop */}
          </div>
        </div>
      </nav>
      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
};

export default Navbar;
