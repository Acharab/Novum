import React from "react";
import NextImage from "../elements/image";

function empty({ global, data }) {
  global = global.attributes.Blogs[data.title];
  return (
    <div className="container">
      <div>
        <NextImage media={global.BlogImage} className='object-fill' width={1920} height={1080} />
      </div>
      <div className="py-7">
        <h1 className="text-3xl font-bold pt-8 text-gray-800">{global.BlogTitle}</h1>
        <p className="pt-8 text-gray-700">{global.BlogContent}</p>
      </div>
    </div>
  );
}

export default empty;
