import PropTypes from "prop-types";
import { linkPropTypes, mediaPropTypes } from "utils/types";
import NextImage from "./image";
import CustomLink from "./custom-link";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faMessage,
  faLocationDot,
  faArrowUpRightFromSquare,
  faFolderOpen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ footer }) => {
  
  return (
    <footer className="pt-12 bg-black">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <NextImage width="200" height="75" media={footer.logo} />
          )}
        </div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="uppercase tracking-wide font-semibold text-orange-500">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-300 py-1 px-1 flex -mx-1 hover:text-white"
                  >
                    {link.icons == "Phone" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faPhone}
                      />
                    )}
                    {link.icons == "Email" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faEnvelope}
                      />
                    )}
                    {link.icons == "Location" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faLocationDot}
                      />
                    )}
                    {link.icons == "Linkedin" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faLinkedin}
                      />
                    )}
                    {link.icons == "extern" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faArrowUpRightFromSquare}
                      />
                    )}
                    {link.icons == "folder" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faFolderOpen}
                      />
                    )}
                    {link.icons == "Message" && (
                      <FontAwesomeIcon
                        className="mr-2 text-orange-500 fill-orange-500"
                        icon={faMessage}
                      />
                    )}
                    {link.icons !== null && ""}
                    <CustomLink taget="_blank" link={link}>
                      <div className="max-w-[100%] md:text-base text-xs text-center">{link.text}</div>
                      <div className="max-w-[100%] md:text-base text-xs text-center">{link.secondtext}</div>
                    </CustomLink>
                  </li>
                ))}
              </ul>
              {/* dont put a title to have it working */}
              {footerColumn.title === null && 
                <Link href="https://noab.nl/">
                  <div className="cursor-pointer">
                    <NextImage
                      className="bg-gray-300 rounded-full cursor-pointer"
                      height={120}
                      width={120}
                      media={footerColumn.noab}
                    />
                  </div>
                </Link>
              }
            </div>
          ))}
        </nav>
      </div>
      <div className="text-sm md:text-base text-gray-300 mb-6 ">
        <div className="container flex">
          <div className=" md:max-w-[100%] max-w-[50%]">{footer.smallText}</div>
          <div className="text-white fill-white">
            <FontAwesomeIcon
              className="px-3 text-orange-500 fill-orange-500"
              icon={faHeart}
            />
          </div>
          <div>
            <Link className="cursor-pointer " href={footer.url}>
              <p className="hover:text-orange-500 ease-in duration-300 cursor-pointer">
                {footer.urltext}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
};

export default Footer;
