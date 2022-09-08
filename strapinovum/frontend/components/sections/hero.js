import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

import { useEffect, useState } from "react";

import NextImage from "../elements/image";

import CustomLink from "../elements/custom-link";
export default function Hero({ data }) {
  return (
    <section className={`bg-black md:py-16 lg:py-8 xl:py-0 py-52 w-screen`}>
      <div className="max-w-[1140px] lg:gap-10 lg:flex-nowrap h-fit">
        <div className="flex">
          <div className="grid place-content-center max-w-[100%]">
            <h1 className="text-4xl font-bold h-fit md:pr-8 md:text-5xl max-w-[100%]  leading-snug  text-white  lg:text-7xl lg:leading-tight  xl:leading-tight tracking-wide">
              {data.Title}
            </h1>

            <p className="lg:w-4/6 pt-2 pb-10 md:pb-16 md:pt-6 md:text-base text-lg leading-normal text-gray-400 lg:text-base xl:text-base pr-0 md:pr-12 ">
              {data.Description}
            </p>
            {/* {data.buttons.map((button) => (
              <CustomLink link={button} key={button.id}>
                <button className="flex-auto  flex space-x-7 lg:items-start  sm:flex">
                  <a
                    target="_blank"
                    rel="noopener"
                    className="px-8 py-4 sm:items-center  text-base font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white   text-orange-500 border-2 border-orange-500 rounded"
                  >
                    <span className="pr-2">{button.text}</span>
                  </a>
                </button>
              </CustomLink>
            ))} */}
          </div>

          <div className="max-w-6xl hidden md:block p-14 pt-10 lg:flex items-center place-content-center lg:w-1/2 lg:px-1 lg:pt-24 lg:pb-24">
            <div className="relative lg:visible md:block hidden">
              <div className="absolute inset-0 md:-left-7 md:-bottom-7 md:mr-10 md:mt-10  md:border-2 lg:-left-7 lg:-bottom-7 lg:mr-10 lg:mt-10 rounded-3xl lg:border-2 border-orange-500 bg-orange-400/20"></div>
              <div className="absolute inset-0 md:-right-7 md:mb-10 md:ml-10 md:-top-7 md:border-2 lg:-right-7 lg:mb-10 lg:ml-10 lg:-top-7 rounded-3xl lg:border-2 border-blue-500"></div>

              <div className="relative  grid px-0 z-40  border-2 border-blue-500 rounded-3xl  ">
                {/* <NextImage
                  // add relative class to make the z-index work
                  // getStrapiMedia(hero.attributes.hero_image)
                  className="lg:relative object-cover sm:w-1/2 lg:z-10  rounded-3xl"
                  media={data.Image}
                  // better not using width and heigt directly on here
                  width="390"
                  height="500"
                  alt="Hero jpeg"
                  //placeholder="blur"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
