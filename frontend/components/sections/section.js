import NextImage from "../elements/image";
import ButtonLink from "../elements/button-link";
import CustomLink from "../elements/custom-link";
import Link from "next/link";

export default function section({ data }) {
  let imgpos;
  if (data.Position === false) {
    imgpos = "left";
  } else {
    imgpos = "right";
  }
  //change id to make diensten from home rederict to section
  const idContainer =
    data.Title === "Omzet belasting"
      ? "omzetbelasting"
      : data.Title === "Algemeen advies"
      ? "algemeenadvies"
      : data.Title === "Jaarrekeningen"
      ? "jaarrekeningen"
      : data.Title === "Salarisadministratie"
      ? "salarisadministratie"
      : data.Title === "Rapportages"
      ? "rapportages"
      : data.Title === "Inkomsten belasting"
      ? "inkomstenbelasting"
      : "";
  //Make lastword blue
  const dataAtrtibute =
      data.Title === "Omzet belasting"
      ? "belasting"
      : data.Title === "Algemeen advies"
      ? "advies"
      : data.Title === "Over ons"
      ? "ons":data.Title === "Inkomstenbelasting"
      ? "belasting"
      :data.Title === "Salarisadministratie"
      ? "administratie":"";

  


  return (
    <div
      className={`flex items-center justify-center bg-${data.Background}`}
      id={idContainer}
    >
      <div className="flex flex-wrap max-w-[1140px]  py-10 lg:gap-10 lg:flex-nowrap container p-6 mx-auto xl:px-0">
        <div
          className={`flex flex-wrap items-left lg:justify-start justify-center w-full lg:w-1/2 ${
            imgpos === "left" ? " lg:order-1" : ""
          }`}
        >
          <div>
            <div className="flex flex-col  md:justify-center  lg:my-24">
              <h2
                data-text={dataAtrtibute}
                className="lastword  max-w-xl text-left mt-3 text-3xl md:text-5xl font-bold leading-relaxed pb-5 tracking-wide text-black lg:leading-tight lg:text-4xl"
              >
                {data.Title}
              </h2>

              <p className="max-w-lg py-5 text-left leading-normal text-gray-500 text-base   dark:text-gray-300">
                {data.Description}
              </p>
              {data.Buttons != undefined && (
                <Link href={data.Buttons.url}>
                  <a className="font-bold text-xl text-blue-500 w-[9rem] p-2 text-center border-2 border-blue-500 ease-in duration-300 hover:text-white hover:bg-blue-500 rounded">
                    Lees Meer
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center lg:justify-start  justify-center w-full lg:w-auto ${
            imgpos === "left" ? "lg:justify-end" : ""
          }`}
        >
          <div className="">
            <div className=" px-6 pt-8 w-full">
              <div className="relative ">
                <div className="absolute inset-0 -left-7 -bottom-7 mr-10 mt-10 rounded-3xl border-2 border-red-500 bg-orange-400/20"></div>
                <div className="absolute border-blue-visual inset-0 -right-3 mb-10 ml-10 -top-3 rounded-3xl border-2 border-blue-500"></div>
                <div className="relative grid top-3 right-3  border-2 border-blue-500 rounded-3xl ">
                  <NextImage
                    // add relative class to make the z-index work
                    className="z-10 object-cover rounded-3xl"
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
  );
}
