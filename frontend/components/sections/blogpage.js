import Link from "next/link";
import React from "react";

function blogpage() {
  return (
    <div className="p-12  md:w-1/2 flex flex-col items-start">
      <div className="flex h-[246px] lg:h-[350px] lg:w-[500px] shadow-inner shadow-indigo-500/50 border-solid border-4 border-blue-500  md:h-36 w-full rounded-xl object-cover object-center"></div>
      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
        Advies
      </span>
      <h2 className="sm:text-3xl lg:text-xl title-font font-bold text-gray-900 mt-4 mb-4">
        {/* {blogPageContent.attributes.title} */}
        Hoe doet u belasting aangiften?
      </h2>
      <p className="leading-relaxed mb-8">
        {/* {blogPageContent.attributes.content} */}
        Hierin vetellen wij hoe u het beste u aangiften doet
      </p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <Link href={`#`}>
          {/* /nieuws/${blogPageContent.attributes.Slug} */}
          <a className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default blogpage;
