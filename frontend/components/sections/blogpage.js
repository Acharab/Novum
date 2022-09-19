import Link from "next/link";

import { getStaticProps } from "pages/[[...slug]]";
import React from "react";
import NextImage from "../elements/image";

function blogpage({ global, data }) {
  let Blogs = global.attributes.Blogs
  return (
    
    <div className="grid md:grid-cols-2">
      {Blogs.map((blog, id) => (
        <div key={id} className="p-12  w-auto  justify-center">
          <div className="flex h-[246px] lg:h-[350px] lg:w-[500px] shadow-inner shadow-indigo-500/50 border-solid border-4 border-blue-500  md:h-36 w-full rounded-xl object-cover object-center">
          <NextImage className="object-fill" media={blog.BlogImage} width={500} height={350}/>
          </div>
          
          <span className="inline-block py-1 px-2  max-w-min rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
            {blog.Category}
          </span>
          <h2 className="sm:text-3xl lg:text-xl title-font lg:min-w-[100%] md:min-w-[100%] font-bold text-gray-900 mt-4 mb-4">
            {/* {blogPageContent.attributes.title} */}
            {blog.BlogTitle}
          </h2>
          <p className="leading-relaxed mb-8 lg:min-w-[100%] md:min-w-[100%]">
            {blog.Description}
          </p>
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <Link href={``}>
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
      ))}
    </div>
  );
}

export default blogpage;
