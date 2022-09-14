import React from "react";
import NextImage from "../elements/image";

function aboutus({ data }) {
  return (
    <div className="py-9">
         <h2 className="pt-5 flex mb-10 justify-center text-[5rem]">{data.Title}</h2>
      <div className="max-w-[1140px] flex  justify-center container">

        <div className="w-[50%] p-10">
          <p className="text-lg">{data.Description}</p>
        </div>
        <div className="w-[50%] flex justify-center">
          <NextImage
            className="z-10 object-cover rounded-3xl"
            media={data.Image}
            width="400"
            height="450"
            alt="Hero jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default aboutus;
