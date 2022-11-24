import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";

import { useEffect, useState } from "react";

import NextImage from "../elements/image";

import CustomLink from "../elements/custom-link";
import ButtonLink from "../elements/button-link";
import { getButtonAppearance } from "utils/button";
import { useRouter } from "next/router";
export default function Hero({ data }) {
  let router = useRouter();

  const color = data.bg;
  let text;
  if (color === "black") {
    text = "white";
  }
  if (color === "white") {
    text = "black";
  }

  return (
    <div
      className={`md:bg-${color} herovisuals text-${text} md:py-16 lg:py-0 xl:py-0 py-56 z-10 w-screen relative`}
    >
      <section className={`container `}>
        {/* <div className="rounded-full bg-transparent border-4 border-orange-500/20 w-52 h-52 absolute top-0 right-0"></div>
      <div className="rounded-full bg-transparent border-4 border-orange-500/20 w-32 h-52 absolute top-30 left-20"></div>
      <div className="rounded-full bg-transparent border-4 border-orange-500/20 w-52 h-52 absolute bottom-0 right-0"></div> */}
        <div className=" lg:gap-10 lg:flex-nowrap h-fit container p-8 mx-auto xl:px-0">
          <div className="flex">
            <div className="grid place-content-center max-w-[100%]">
              <h1
                data-text={data.lastword}
                className=" md:lastwordsecendary lastword  text-4xl font-bold h-fit md:pr-8 md:text-5xl max-w-[100%]  leading-snug    lg:text-7xl lg:leading-tight  xl:leading-tight tracking-wide "
              >
                {data.Title}
                {data.lastword}
              </h1>

              <p className="lg:w-5/6 pt-2 pb-10 md:pb-16 md:pt-6 md:text-base text-lg leading-normal  lg:text-base xl:text-base pr-0 md:pr-12 ">
                {data.Description}
              </p>
              {data.Buttons == null && <></>}
              {data.Buttons !== null && (
                <div className="md:w-[32%] lg:w-[19%] w-[40%]">
                  <ButtonLink
                    button={data.Buttons}
                    appearance={getButtonAppearance("blue", "blue")}
                    compact
                  />
                </div>
              )}
            </div>

            <div className={"w-full hidden md:block p-14 pt-10 lg:flex justify-end  lg:px-1 lg:py-24"}>
              <div className={"relative lg:visible md:block hidden w-[85%]"}>
                <div className={`absolute inset-0 md:-left-7 md:-bottom-7 md:mr-10 md:mt-10  md:border-2 lg:-left-7 lg:-bottom-7 lg:mr-10 lg:mt-10 rounded-3xl lg:border-2 border-orange-500 bg-orange-400/20`}></div>
                <div className={"absolute inset-0 md:-right-7 md:mb-10 md:ml-10 md:-top-7 md:border-2 lg:-right-7 lg:mb-10 lg:ml-10 lg:-top-7 rounded-3xl lg:border-2 border-blue-500"}></div>

                <div className="relative  grid px-0  border-2 border-blue-500 rounded-3xl  ">
                  <NextImage
                    // add relative class to make the z-index work
                    // getStrapiMedia(hero.attributes.hero_image)
                    className="lg:relative object-cover sm:w-1/2 lg:z-10  rounded-3xl"
                    media={data.Image}
                    // better not using width and heigt directly on here
                    width="390"
                    height="500"
                    alt="Hero jpeg"
                    //placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
