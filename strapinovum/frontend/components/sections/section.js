import NextImage from "../elements/image";
import ButtonLink from "../elements/button-link";
import CustomLink from "../elements/custom-link";

export default function section({ data }) {
  let imgpos
  console.log(data.background)
  console.log(data.textcolor)

  if(data.Position === false){
    imgpos = "left"
  }
  else{
    imgpos = "right"
  }
  return (
    <section className={`bg-${data.Background}  justify-center items-center`} >
      <div className="flex flex-wrap max-w-[1140px]  py-18 lg:gap-10 lg:flex-nowrap container p-8 mx-auto xl:px-0">
        <div className={`flex items-center justify-center w-full lg:w-1/2 ${
            imgpos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="flex flex-col w-full lg:pl-6 lg:mt-4">
            <h2 className="max-w-xl mt-3 text-5xl font-bold leading-relaxed pb-5 tracking-normal lg:leading-tight lg:text-5xl">
              {data.title}{" "}
            </h2>

            <p className={`max-w-lg py-5  leading-normal  text-base   dark:text-gray-300`}>
              {data.Description}
            </p>
            {/* {data.Buttons.map((button) => (
              <CustomLink link={button}>
                <div className="flex-auto  flex space-x-7 lg:items-start  sm:flex">
                  <button className="px-8 py-4 sm:items-center  text-base font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white   text-orange-500 border-2 border-orange-500 rounded">
                    {button.text}
                  </button>
                </div>
              </CustomLink>
            ))} */}
          </div>
        </div>

        <div className="max-w-6xl hidden md:block p-14 pt-10 lg:flex items-center place-content-center lg:w-1/2 lg:px-1 lg:pt-24 lg:pb-24">
          <div className="relative lg:visible md:block hidden">
            <div className="absolute inset-0 md:-left-7 md:-bottom-7 md:mr-10 md:mt-10  md:border-2 lg:-left-7 lg:-bottom-7 lg:mr-10 lg:mt-10 rounded-3xl lg:border-2 border-orange-500 bg-orange-400/20"></div>
            <div className="absolute inset-0 md:-right-7 md:mb-10 md:ml-10 md:-top-7 md:border-2 lg:-right-7 lg:mb-10 lg:ml-10 lg:-top-7 rounded-3xl lg:border-2 border-blue-500"></div>

            <div className="relative  grid px-0 z-40  border-2 border-blue-500 rounded-3xl  ">
              {/* <NextImage
                // add relative class to make the z-index work
                className="z-10 object-cover rounded-3xl"
                media={data.image}
                // better not using width and heigt directly on here
                width="400"
                height="250"
                alt="Hero jpeg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
