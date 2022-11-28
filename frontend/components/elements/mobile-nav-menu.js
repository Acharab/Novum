import PropTypes from "prop-types";
import { MdClose, MdChevronRight } from "react-icons/md";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import { useLockBodyScroll } from "utils/hooks";
import { getButtonAppearance } from "utils/button";
import ButtonLink from "./button-link";
import NextImage from "./image";
import CustomLink from "./custom-link";

import { LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const MobileNavMenu = ({ navbar, closeSelf, navicons }) => {
  useLockBodyScroll();

  return (
    <div className="w-screen h-[100%] fixed top-0 left-0 overflow-y-scroll bg-black z-50 pb-6">
      <div className="container h-full flex flex-col ">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center ">
          {/* Company logo */}
          <NextImage width="200" height="60" media={navbar.logoWhite} />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="hover:text-blue-500 text-white h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-start w-11/12 mx-auto mt-6">
          <ul className="flex flex-col list-none gap-5 items-baseline text-xl ">
            {navbar.links.map((navLink, id) => (
              <li key={id} className="block w-full">
                <CustomLink link={navLink}>
                  <button onClick={closeSelf} className="hover:text-gray-900  flex flex-row justify-start text-3xl items-center">
                    <span className="text-orange-500 tracking-tighter font-bold">{navLink.text}</span>
                  </button>
                </CustomLink>
              </li>
            ))}
          </ul>
        <Link className="w-20" href={navbar.button.url}>
          <button onClick={closeSelf}   className="p-3 w-52 my-6 border-2 border-blue-500 text-blue-500 rounded">
            {navbar.button.text}
          </button>
        </Link>
        </div>
        <div className="w-11/12 mx-auto ">
          <p className="text-3xl font-bold text-blue-500">Contact opnemen</p>
          <ul >  
          {navicons.map((icon) => (
              <a key={icon?.id} href={icon.link} className="flex gap-x-3 items-center">
                <NextImage media={icon.icon} width={20} height={20}/>
                <span className="text-white">{icon.iconText}</span>
              </a>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
};

export default MobileNavMenu;
