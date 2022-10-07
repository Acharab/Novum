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

const Navbar = ({ navbar, pageContext, navicons }) => {
  const router = useRouter();
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);
  const background =
    router.asPath === "/"
      ? "black"
      : router.asPath === "/diensten"
      ? "white"
      //diensten variants
      : router.asPath === "/diensten#omzetbelasting"
      ? "white"
      : router.asPath === "/diensten#jaarrekening"
      ? "white"
      : router.asPath === "/diensten#algemeenadvies"
      ? "white"
      : router.asPath === "/diensten#salarisadministratie"
      ? "white"
      : router.asPath === "/diensten#rapportage"
      ? "white"
      : router.asPath === "/diensten#inkomstenbelasting"
      ? "white"
      : router.asPath === "/aboutus"
      ? "black"
      : router.asPath === "/contact"
      ? "black"
      : router.asPath === "/blog"
      ? "white"
      : router.asPath === "/blogitemfirst"
      ? "white"
      : router.asPath === "/blogitemsecond"
      ? "white"
      : router.asPath === "/blogitemthird"
      ? "white"
      : router.asPath === "/blogitemfourth"
      ? "white"
      : router.asPath === "/bedankt"
      ? "black"
      : "";
  let text;
  //choose black and white logo
  let logo;
  if (background === "white") {
    logo = navbar.logoBlack;
  } else {
    logo = navbar.logoWhite;
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
      <div className={`bg-${background} text-${text}`}>
      <nav className={`py-6 container`}>
        <div className=" flex flex-row items-center justify-between gap-x-6">
          {/* Content aligned to the left */}
          <Link href="/">
            <a className="">
              <NextImage width="200" height="75" media={logo} />
            </a>
          </Link>
          <div className="flex flex-row items-center ">
            {/* List of links on desktop */}
            <ul
              className={`hidden list-none md:flex flex-row md:gap-10  justify-center items-center`}
            >
              {navbar.links.map((navLink) => (
                <li key={navLink.id}>
                  <CustomLink link={navLink} locale={router.locale}>
                    <div className="hover:text-orange-500 duration-300 ease-in py-1 ">{navLink.text}</div>
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
              <div className="hidden md:block w-full">
                
                <ButtonLink
                  button={navbar.button}
                  appearance={getButtonAppearance("nav", "nav")}
                  compact
                />
              </div>
            )}
            {/* Locale Switch Desktop */}
          </div>
        </div>
      </nav>
      </div>
      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
          navicons={navicons}
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
