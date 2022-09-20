import React from "react";
import NextImage from "../elements/image";

export default function advantages({ data }) {
  return (
    <div className="bg-white justify-center items-center ">
      <div className="flex flex-wrap max-w-[1140px]  py-10 lg:gap-10 lg:flex-nowrap container p-8 mx-auto xl:px-0">
        <div className={`flex items-center justify-center w-full lg:w-1/2`}>
          <NextImage media={data.Image} width="510" height="480" />
        </div>

        <div className="flex flex-wrap items-center w-full lg:w-1/2">
          <div className="flex flex-col w-full lg:pl-1 md:justify-center md:items-center lg:mt-4">
            <h2 className="max-w-xl mt-3 text-4xl grid justify-center md:text-5xl font-bold leading-relaxed pb-5 px-4 tracking-tight text-blue-500 lg:leading-tight lg:text-5xl">
              {data.Title}
            </h2>
            {data.Advantages.map((advantage, id) => (
              <div key={id}>
                <h2 className=" justify-center flex gap-5  mt-3 text-xl font-bold leading-relaxed pb-5 tracking-tight text-gray-000 lg:leading-tight lg:text-xl">
                  <NextImage media={advantage.Image} className="text-3xl" width="60px" height="60px" />{" "}
                  <div className="text-center items-center flex">
                  {advantage.Title}
                  </div>
                </h2>
                
                <p className=" py-5  leading-normal text-gray-400   text-center  dark:text-gray-300">
                  {advantage.Description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
