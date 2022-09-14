import Link from "next/link";
import React from "react";
import CustomLink from "../elements/custom-link";
import NextImage from "../elements/image";

function homeServicesSection({ data }) {
  console.log(data);
  return (
    <div className="bg-white justify-center items-center mt-10 md:mt-24 grid">
      <section className="p-3  justify-center items-center">
        <div className="mx-auto  lg:px-2 justify-center items-center max-w-[1140px]  ">
          <div className="flex max-w-[1140px]  flex-col mt-2 items-center justify-center text-center">
            <h2 className="max-w-2xl tracking-wide mt-2 text-5xl font-bold leading-snug  text-gray-800 lg:leading-tight lg:text-5xl">
              {data.Title}
            </h2>
            <p className="max-w-4xl py-4 text-lg leading-normal text-gray-400 lg:text-xl xl:text-xl ">
              {data.Description}
            </p>
          </div>

          <div className="space-y-8 md:grid   sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
            {data.Cards.map((card) => (
              <div
                className="px-8 md:pb-3  pb-5 md:p-12 hover:shadow-lg ease-in duration-500 hover:shadow-slate-400 py-1  hover:border-slate-300"
                key={card.id}
              >
                <NextImage
                  className="z-10 object-cover rounded"
                  media={card.Image}
                  width="85"
                  height="85"
                  alt="Hero jpeg"
                />
                <h3 className="mb-2 whitespace-nowrap text-3xl font-bold ">
                  {card.Title}
                </h3>
                <div>
                  <p className="text-gray-500 justify-start text-justify ">
                    {card.Description}
                  </p>
                  <div className="md:pt-5 pt-2">
                    <CustomLink className="w-max" link={card.Buttons}>
                      <button className="font-bold text-xl text-blue-500 w-[9rem] p-3 text-center border-2 border-blue-500 ease-in duration-300 hover:text-white hover:bg-blue-500 rounded">
                        {card.Buttons.text}
                      </button>
                    </CustomLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/diensten">
            <div className="flex-auto  flex justify-center items-center lg:items-center mb-32 pt-20 sm:flex">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 p-10 mr-10 py-4 sm:items-center items-stretch text-xl font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white text-orange-500 border-2 border-orange-500 rounded  "
              >
                <span className="pr-2">Diensten</span>
              </a>
            </div>
          </Link>
        </div>
        <div className="bg-white pb-14">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap justify-center gap-5 md:justify-around">
              {
                data.companys.map((company) => (
                  <div key={company.Image.id} className="">
                    <NextImage
                      className="object-contain"
                      media={company.Image}
                      width="200px"
                      height="70px"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default homeServicesSection;
