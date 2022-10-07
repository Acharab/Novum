import Link from "next/link";
import React from "react";
import { getButtonAppearance } from "utils/button";
import ButtonLink from "../elements/button-link";
import CustomLink from "../elements/custom-link";
import NextImage from "../elements/image";

function homeServicesSection({ data }) {
  return (
    <div className="bg-white justify-center items-center mt-10 md:mt-24 ">
      <section className="">
        <div className="mx-auto  lg:px-2 justify-center items-center container ">
          <div className="flex  container flex-col mt-2 items-center justify-center text-center">
            <h2
              data-text="diensten"
              className=" lastword max-w-2xl tracking-wide mt-2 text-5xl font-bold leading-snug  text-gray-800 lg:leading-tight lg:text-5xl"
            >
              {data.Title}
            </h2>
            <p className="max-w-4xl py-8 text-lg leading-normal text-gray-400 lg:text-xl xl:text-xl ">
              {data.Description}
            </p>
          </div>

          <div className="space-y-8 md:grid   sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
            {data.Cards.map((card, id) => (
              <div
                className="px-8 md:pb-3  w-full pb-5 md:p-12 hover:shadow-lg ease-in duration-500 hover:shadow-slate-400 py-1  hover:border-slate-300"
                key={id}
              >
                <div className="mb-3">
                <NextImage
                  className="z-10"
                  media={card.Image}
                  width="70"
                  height="70"
                  alt="Hero jpeg"
                />
                </div>
                <h3 className="py-3 text-3xl font-bold max-w-[100%]">
                  {card.Title}
                </h3>
                <div>
                  <p className="text-gray-500 justify-start text-justify  pt-2">
                    {card.Description}
                  </p>
                  <div className="md:py-7 py-3">
                      <ButtonLink
                        button={card.Buttons}
                        appearance={getButtonAppearance("blue", "blue")}
                        compact
                      />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/diensten">
            <div className="flex-auto  flex justify-center items-center  lg:items-center mb-32 pt-20 sm:flex">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="w-[48%] uppercase py-2 px-2 sm:items-center items-stretch text-lg font-medium text-center ease-in duration-300 hover:bg-orange-500 hover:text-white text-orange-500 border border-orange-500 rounded  "
              >
                <span className="">Diensten</span>
              </a>
            </div>
          </Link>
        </div>
        <div className="bg-white pb-14 ">
          <div className="flex flex-col justify-center container">
            <div className="flex flex-wrap justify-center gap-5 md:justify-around">
              {data.companys.map((company) => (
                <div key={company.Image.id} className="group">
                  <NextImage
                    className="object-contain ease-in duration-300 opacity-60  group-hover:opacity-100"
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
