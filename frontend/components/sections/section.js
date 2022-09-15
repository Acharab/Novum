import NextImage from "../elements/image";
import ButtonLink from "../elements/button-link";
import CustomLink from "../elements/custom-link";

export default function section({ data }) {
  let imgpos;
  if (data.Position === false) {
    imgpos = "left";
  } else {
    imgpos = "right";
  }
  const idContainer = data.Title === "Omzet belasting" ? "omzetbelasting": data.Title === "Algemeen advies" ? "algemeenadvies" : data.Title === "Jaarrekeningen" ? "jaarrekeningen" : data.Title === "Salarisadministratie" ? "salarisadministratie" : data.Title === "Rapportages" ? "rapportages" : data.Title === "Inkomsten belasting" ? "inkomstenbelasting" : ""
  
  return (
    // <section className={`bg-${data.Background} py-36 md:py-20 justify-center items-center`} >
    //   <div className="flex flex-wrap max-w-[1140px]  py-18 lg:gap-10 lg:flex-nowrap container p-8 mx-auto xl:px-0">
    //     <div className={`flex items-center justify-center w-full lg:w-1/2 ${
    //         imgpos === "right" ? "lg:order-1" : ""
    //       }`}>
    //       <div className="flex flex-col w-full lg:pl-6 lg:mt-4">
    //         <h2 className="max-w-xl mt-3 text-5xl font-bold leading-relaxed pb-5 tracking-normal lg:leading-tight lg:text-5xl">
    //           {data.Title}{" "}
    //         </h2>

    //         <p className={`max-w-lg py-5  leading-normal  text-base   dark:text-gray-300`}>
    //           {data.Description}
    //         </p>
    //         {

    //         // console.log(data.Buttons)

    //         data.Buttons==null &&
    //           <></>
    //         }
    //         {
    //         data.Buttons!==null &&
    //           <CustomLink link={data.Buttons}>
    //           <div className="flex-auto  flex space-x-7 lg:items-start  sm:flex">
    //             <button className="px-8 py-4 sm:items-center  text-base font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white   text-orange-500 border-2 border-orange-500 rounded">
    //               {data.Buttons.text}
    //             </button>
    //           </div>
    //           </CustomLink>
    //         }
    //       </div>
    //     </div>

    //     <div className="max-w-6xl hidden md:block p-14 pt-10 lg:flex items-center place-content-center lg:w-1/2 lg:px-1 lg:pt-24 lg:pb-24">
    //       <div className="relative lg:visible md:block hidden">
    //         <div className="absolute inset-0 md:-left-7 md:-bottom-7 md:mr-10 md:mt-10  md:border-2 lg:-left-7 lg:-bottom-7 lg:mr-10 lg:mt-10 rounded-3xl lg:border-2 border-orange-500 bg-orange-400/20"></div>
    //         <div className="absolute inset-0 md:-right-7 md:mb-10 md:ml-10 md:-top-7 md:border-2 lg:-right-7 lg:mb-10 lg:ml-10 lg:-top-7 rounded-3xl lg:border-2 border-blue-500"></div>

    //         <div className="relative  grid px-0 z-40  border-2 border-blue-500 rounded-3xl  ">
    //           <NextImage
    //             // add relative class to make the z-index work
    //             className="z-10 object-cover rounded-3xl"
    //             media={data.Image}
    //             // better not using width and heigt directly on here
    //             width="400"
    //             height="250"
    //             alt="Hero jpeg"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className={`items-center justify-center bg-${data.Background}`} id={idContainer}>
      <div className="flex flex-wrap max-w-[1140px]  py-10 lg:gap-10 lg:flex-nowrap container p-8 mx-auto xl:px-0">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            imgpos === "left" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <div className="flex flex-col  md:justify-center lg:pl-6 lg:my-24">
              <h2 className="max-w-xl text-center mt-3 text-3xl md:text-5xl font-bold leading-relaxed pb-5 tracking-wide text-black lg:leading-tight lg:text-4xl">
                {data.Title}
              </h2>

              <p className="max-w-lg py-5 text-center leading-normal text-gray-400 text-base   dark:text-gray-300">
                {data.Description}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center  justify-center w-full lg:w-1/2${
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
