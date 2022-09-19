import React from "react";
import NextImage from "../elements/image";

function aboutus({ data }) {
  return (
    <div className="py-3">
         <h2 className="pt-5 flex mb-10 justify-center text-[3rem] md:text-[5rem] ">{data.Title}</h2>
      <div className="max-w-[1140px] flex  justify-center container">

        <div className=" p-4">
          <p className="text-lg">{data.Description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default aboutus;
