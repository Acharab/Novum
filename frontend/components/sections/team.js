import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import NextImage from "../elements/image";
import Image from "next/image";
function team({ data }) {
  return (
    <div className="bg-white justify-center items-center  py-0">
      <div className="flex max-w-[1140px]  flex-col mt-2  items-center justify-center text-center">
        <h2 className="max-w-2xl tracking-wide mt-2 text-5xl font-bold leading-snug  text-gray-800 lg:leading-tight lg:text-5xl"></h2>
      </div>
      <div className="mx-auto sm:py-16 lg:px-2 justify-center items-center max-w-[1140px]  ">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {data.Teamcards.map((teamCard, id) => {
            return (
              // <div
              //   className="flex flex-col justify-center border-2 border-blue-500 rounded-xl"
              //   key={id}
              // >

              //     {/* <div className="absolute visible md:visible lg:visible lg:inset-0 md:inset-3 md:-left-1 md:-bottom-7 w-56  md:mt-10  md:border-2 lg:-left-1  lg:-bottom-3 lg:mr-10 lg:mt-10 rounded-xl lg:border-2 border-red-500 bg-orange-400/20"></div>
              //     <div className="absolute visible md:visible  lg:visible lg:inset-0 md:inset-12   md:-right-7 w-[215px] md:mb-10 md:ml-24 md:-top-7 md:border-2 lg:-right-4  lg:mb-10 lg:ml-10 lg:-top-3 rounded-xl lg:border-2 border-blue-500"></div> */}
              //       <NextImage
              //         // add relative class to make the z-index work
              //         // getStrapiMedia(hero.attributes.hero_image)
              //         className="object-fill lg:z-10  rounded-t-xl overflow-hidden"
              //         media={teamCard.Image}
              //         // better not using width and heigt directly on here
              //         width="500"
              //         height="500"
              //         alt="Hero jpeg"
              //         //placeholder="blur"
              //       />

              //   <div className="">
              //     <div className="flex gap-5 justify-center text-4xl mt-3">
              //       <h3>{teamCard.Position}</h3>
              //     </div>
              //     <div className="flex justify-center py-2">
              //       <a
              //         className="m-2 cursor-pointer"
              //         href={teamCard.buttons.url}
              //       >
              //         <MdEmail className="w-10 h-10 text-blue-500" />
              //       </a>

              //       <a
              //         className="m-2 cursor-pointer"
              //         href={teamCard.buttons.url}
              //       >
              //         <FaLinkedinIn className="w-9 h-9 text-blue-500" />
              //       </a>
              //     </div>
              //   </div>
              // </div>
              <div key={id}>
                <div className="text-center text-gray-500 py-6">
                  <NextImage
                    // add relative class to make the z-index work
                    // getStrapiMedia(hero.attributes.hero_image)
                    className="mx-auto grayscale hover:grayscale-0 ease-in duration-300 mb-4 md:w-24 md:h-36 aspect-square rounded-xl object-cover object-top"
                    media={teamCard.Image}
                    // better not using width and heigt directly on here
                    width="220"
                    height="220"
                    alt="Hero jpeg"
                    //placeholder="blur"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-blue-500 dark:text-white">
                    <p className="md:text-2xl text-lg">{teamCard.Name}</p>
                  </h3>
                  <p>{teamCard.Position}</p>
                  <ul className="flex justify-center mt-4 space-x-4">
                    {teamCard.buttons.map((button, id) => (
                      <li key={id} >
                        <a
                          href={`${button.text === "Email" ? "mailto:" + button.url : button.url}`}
                          className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                        >
                          {button.text === "LinkedIn" ? (
                           <svg xmlns="http://www.w3.org/2000/svg" className="aboutus-icons" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="aboutus-icons" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
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
