import React from "react";
import { BiCoin } from "react-icons/bi";
import { HiOutlineLightBulb, HiOutlineShieldCheck } from "react-icons/hi";
import { GiBinoculars } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";

export default function workProcces({data}) {
  return (
    <section className="bg-gray-100">
      <div className="relative flex flex-col justify-center items-center overflow-hidden py-6 sm:py-12">
        <div className="flex max-w-[1140px]  flex-col mt-2 items-center justify-center text-center container p-8 mx-auto xl:px-0">
          <h2 className="max-w-2xl tracking-wide mt-2 text-5xl font-bold leading-snug  text-gray-800 lg:leading-tight lg:text-5xl">
            {data.Title}
          </h2>
        </div>
        <div className="  md:max-w-[1140px] w-[95%] flex justify-center bg-white px-6 pt-10 md:pt-40 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg sm:px-10">
          <ol className="lg:border-1 lg:border-t-4 border-l-0 z-0  border-1 w-[95%]  border-dashed border-gray-300 md:flex md:justify-center md:gap-[12.5rem]">
            <li className="relative text-gray-600">
              <div className="md:absolute  -top-20 w-12">
                <HiOutlineLightBulb className="w-full hover:text-blue-500 text-5xl" />
              </div>
              <div className=" flex md:flex-col flex-start items-center pt-2 md:pt-0">
                <div className="bg-gray-300 w-4 h-4 relative -left-5 -top-1 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                <p className="text-gray-400 text-xs pl-1 font-bold mt-0 px-10">
                  Advies
                </p>
              </div>
              <div className="mt-0.5 md:mt-5  ml-4 md:ml-3 pb-5">
                <h4 className="text-gray-400  font-semibold text-6xl mb-1.5">
                  1
                </h4>
              </div>
            </li>
            <li className="relative text-gray-600">
              <div className="md:absolute -top-20 w-12">
                <GiBinoculars className="hover:text-blue-500 text-5xl" />
              </div>
              <div className="flex md:flex-col flex-start items-center pt-2 md:pt-0">
                <div className="bg-gray-300 w-4 h-4  relative -top-1  rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                <p className="text-gray-400 text-xs font-bold mt-0">Bekijken</p>
              </div>
              <div className="mt-0.5 md:mt-5 ml-4 md:ml-3 pb-5">
                <h4 className="text-gray-400  font-semibold text-6xl mb-1.5">
                  2
                </h4>
              </div>
            </li>
            <li className="relative  text-gray-600">
              <div className="md:absolute -top-20 w-12">
                <BiCoin className="w-full text-gray-600 hover:text-blue-500 text-5xl" />
              </div>
              <div className="flex md:flex-col flex-start items-center pt-2 md:pt-0">
                <div className=" w-4 h-4 relative -top-1 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
                <p className="text-gray-400 text-xs font-bold mt-0">
                  Afronden
                </p>
              </div>
              <div className="mt-0.5 md:mt-5 ml-4 md:ml-3 pb-5">
                <h4 className="text-gray-400 font-semibold text-6xl mb-1.5">
                  3
                </h4>
              </div>
            </li>
            
          </ol>
        </div>
      </div>
    </section>
  );
}


