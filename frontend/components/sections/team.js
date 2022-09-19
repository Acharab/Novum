import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import NextImage from "../elements/image";
function team({data}) {
    
  return (
    <div className="bg-white justify-center items-center  py-0">
      <div className="flex max-w-[1140px]  flex-col mt-2  items-center justify-center text-center">
        <h2 className="max-w-2xl tracking-wide mt-2 text-5xl font-bold leading-snug  text-gray-800 lg:leading-tight lg:text-5xl"></h2>
      </div>
      <div className="mx-auto sm:py-16 lg:px-2 justify-center items-center max-w-[1140px]  ">
        <div className="grid md:grid-cols-3 gap-[25px] container p-8 mx-auto xl:px-0">
          {data.Teamcards.map((teamCard, id) => {
            return (
              <div className="flex flex-col justify-center border-2 border-blue-500 rounded-xl" key={id}>
                {" "}
                <div className="flex justify-center ">
                  {/* <div className="absolute visible md:visible lg:visible lg:inset-0 md:inset-3 md:-left-1 md:-bottom-7 w-56  md:mt-10  md:border-2 lg:-left-1  lg:-bottom-3 lg:mr-10 lg:mt-10 rounded-xl lg:border-2 border-red-500 bg-orange-400/20"></div>
                  <div className="absolute visible md:visible  lg:visible lg:inset-0 md:inset-12   md:-right-7 w-[215px] md:mb-10 md:ml-24 md:-top-7 md:border-2 lg:-right-4  lg:mb-10 lg:ml-10 lg:-top-3 rounded-xl lg:border-2 border-blue-500"></div> */}
                  <div className=" flex justify-center">
                    <NextImage
                      // add relative class to make the z-index work
                      // getStrapiMedia(hero.attributes.hero_image)
                      className="object-cover sm:w-1/2 lg:z-10  rounded-xl "
                      media={teamCard.Image}
                      // better not using width and heigt directly on here
                      width="390"
                      height="500"
                      alt="Hero jpeg"
                      //placeholder="blur"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-5 justify-center text-4xl mt-3">
                    <h3>{teamCard.Position}</h3>
                  </div>
                  <div className="flex justify-center py-2">
                    <a className="m-2" href={teamCard.buttons.url}>
                      <MdEmail className="w-10 h-10 text-blue-500" />
                    </a>

                    <a className="m-2" href={teamCard.buttons.url}>
                      <FaLinkedinIn className="w-9 h-9 text-blue-500" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default team;
