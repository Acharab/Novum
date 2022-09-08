import React from "react";

import Link from "next/link";
import ButtonLink from "../elements/button-link";
import NextImage from "../elements/image";
import CustomLink from "../elements/custom-link";
export default function Cta({ data }) {
  return (
    <section className="bg-blue-500 md:flex md:justify-evenly grid grid-cols-1 w-screen py-4">
      <div className="align-center md:w-1/3 h-full justify-center grid my-auto">
        <h2 className="flex-innitial h-full place-items-center grid px-3 text-3xl font-bold w-fit lg:text-4xl text-center md:mb-0 mb-6  text-white">
          {data.Title}
        </h2>
      </div>
      <div className="align-center md:w-1/3 justify-center grid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="sm:h-24 sm:w-24 h-12 w-12 text-center text-white hidden md:block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
      </div>
      <div className="align-center md:w-1/3 justify-center grid">
        <CustomLink className="w-max" link={button.url} key={button.id}>
          <div className="md:mt-[1rem] md:py-0 py-2">
            <button className="inline-block md:pl-5 md:ml-2 md:item-center  md:text-center mx-auto text-xl sm:text-2xl pl-0 ml-0  lg:text-center text-white font-bold  border-2 sm:px-7  py-4 sm:text-center ">
              {button.text}
            </button>
          </div>
        </CustomLink>
      </div>
    </section>
  );
}