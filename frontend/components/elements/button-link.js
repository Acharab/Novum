import classNames from "classnames"
import PropTypes from "prop-types"
import { buttonLinkPropTypes } from "utils/types"
import CustomLink from "./custom-link"

const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border rounded-sm",
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "py-2 px-4": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "bg-primary-600 text-white border-primary-600": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "text-blue-500 border-blue-500 hover:bg-blue-500 ease-in duration-300 hover:text-white": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "bg-white text-primary-600 border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        },
        {
          "hover:bg-blue-500 hover:text-white text-blue-500 border-blue-500 text-center ease-in duration-300 px-1": appearance === "blue",
        },
        {
          "hover:bg-orange-500 hover:text-white text-orange-500 border-orange-500 text-center ease-in duration-300": appearance === "orange",
        },
        {
          "hover:bg-blue-500 hover:text-white text-blue-500 border-blue-500 text-center ease-in duration-300 px-6": appearance === "nav",
        }
      )}
    >
      {button?.text}
    </div>
  )
}

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent
        button={button}
        appearance={appearance}
        compact={compact}
      />
    </CustomLink>
  )
}

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
    "blue",
    "orange",
    "nav"
  ]),
  compact: PropTypes.bool,
}

export default ButtonLink
