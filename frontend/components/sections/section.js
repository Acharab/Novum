import NextImage from "../elements/image";
import ButtonLink from "../elements/button-link";
import CustomLink from "../elements/custom-link";
import Link from "next/link";
import { getButtonAppearance } from "utils/button";

export default function section({ data }) {
  let imgpos;
  if (data.Position === false) {
    imgpos = "left";
  } else {
    imgpos = "right";
  }

  return (
    <div
      className={`flex items-center justify-center bg-${data.Background}`}
      id={data.idlink != null && data.idlink}
    >
      <div className="container">
        <div className="flex flex-wrap  py-10 lg:gap-10 lg:flex-nowrap container p-6 mx-auto xl:px-0">
          <div
            className={`flex flex-wrap items-left  justify-center w-full lg:w-1/2 ${
              imgpos === "left" ? " lg:order-1" : ""
            }`}
          >
            <div>
              <div className="flex flex-col  md:justify-center  lg:my-24">
                <h2
                  data-text={data.lastword}
                  className="lastword  max-w-xl text-left mt-3 text-3xl md:text-5xl font-bold leading-relaxed pb-5 tracking-wide text-black lg:leading-tight lg:text-4xl"
                >
                  {data.Title}
                  {data.lastword}
                </h2>

                <p className="max-w-lg py-5 text-left leading-normal text-gray-500 text-base   dark:text-gray-300">
                  {data.Description}
                </p>
                {data.Buttons != undefined && (
                  <div className="md:w-[50%] lg:w-[30%] w-[40%]">
                    <ButtonLink
                      button={data.Buttons}
                      appearance={getButtonAppearance("blue", "blue")}
                      compact
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-wrap items-center   justify-center w-full lg:w-auto ${
              imgpos === "left" ? "lg:justify-end" : ""
            }`}
          >
            <div className="">
              <div className=" px-6 pt-8 w-full">
                <div className="relative ">
                  <div className="absolute inset-0 -left-7 -bottom-7 hidden md:block mr-10 mt-10 rounded-3xl border-2 border-red-500 bg-orange-400/20"></div>
                  <div className="absolute border-blue-visual hidden md:block inset-0 -right-3 mb-10 ml-10 -top-3 rounded-3xl border-2 border-blue-500"></div>
                  <div className="relative  top-3 hidden md:grid right-3  border-2 border-blue-500 rounded-3xl ">
                    <NextImage
                      // add relative class to make the z-index work
                      className="z-10 object-cover  rounded-3xl"
                      media={data.Image}
                      // better not using width and heigt directly on here
                      width="500"
                      height="250"
                      alt="Hero jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
