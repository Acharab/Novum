import React from "react";
import NextImage from "../elements/image";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function eachblog({ global, data }) {
  global = global.attributes.Blogs[data.blogNumber];
  return (
    <div className="flex justify-between container  md:flex-wrap flex-wrap-reverse  h-auto">
      <div className="flex content-center  max-h-[100%] md:w-2/4 grid-cols-1">
        <div className="py-7 flex justify-center">
          <div className="flex pl-5 flex-col justify-center content-center">
            <h1 className="md:text-2xl text-xl font-bold pt-8 text-gray-800 p-3">
              {global.BlogTitle}
            </h1>

            <p className="pt-8 textarea scroll-px-2  text-gray-700 bold text-[12px] text-justify p-3 leading-6 max-h-[500px] overflow-auto">
              {global.BlogContent}
            </p>
            <button
              onClick={function Scrolldown() {
                // let textarea = document.getElementsByClassName("textarea");
                // textarea.scrollTop = textarea.scrollHeight;
                
                let element = document.querySelector(".textarea");
                element.scroll({
                  top: element.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              <FontAwesomeIcon
                className="pt-5  text-orange-500 fill-orange-500"
                icon={faCircleChevronDown}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-2/4 flex justify-end">
        <NextImage
          media={global.BlogImage}
          className="flex object-contain aspect-square"
          width={800}
          height={700}
        />
      </div>
    </div>
  );
}

