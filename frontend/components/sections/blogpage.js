import Link from "next/link";

import { getStaticProps } from "pages/[[...slug]]";
import React from "react";
import NextImage from "../elements/image";

function blogpage({ global, data }) {
  let Blogs = global.attributes.Blogs;
  return (
    // <div className="grid md:grid-cols-2 container justify-center">
    //   {Blogs.map((blog, id) => (
    //     <div key={id} className="max-w-max flex-col  justify-center px-2">
    //       <div className="flex h-[246px] justify-center  max-w-max shadow-inner shadow-indigo-500/50 border-solid border-4 border-blue-500  md:h-64 w-full rounded-xl object-cover object-center">
    //       <NextImage className="object-fill" media={blog.BlogImage} width={500} height={350}/>
    //       </div>

    //       <span className="inline-block py-1 px-2  max-w-min rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
    //         {blog.Category}
    //       </span>
    //       <h2 className="sm:text-2xl lg:text-xl title-font lg:min-w-[100%] md:min-w-[100%] max-w-[500px] font-bold text-gray-900 mt-4 mb-4">
    //         {/* {blogPage.attributes.title} */}
    //         {blog.BlogTitle}
    //       </h2>
    //       <p className="leading-relaxed mb-8 max-w-[500px] lg:min-w-[100%] md:min-w-[100%]">
    //         {blog.Description}
    //       </p>
    //       <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
    //         <Link href={`/${blog.Slug}`}>
    //           {/* /nieuws/${blogPageContent.attributes.Slug} */}
    //           <a className="font-bold text-xl text-blue-500 w-[9rem] p-2 text-center border-2 border-blue-500 ease-in duration-300 hover:text-white hover:bg-blue-500 rounded">
    //                 Lees Meer
    //               </a>
    //         </Link>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div
      class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl tails-selected-element"
    >
      <div class="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
        {Blogs.map((blog, id) => (
          <div key={id} class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-6 border p-3 rounded-lg border-indigo-500">
            <Link href={blog.Slug} className="block cursor-pointer">
              <NextImage
                className="object-fill rounded-md cursor-pointer"
                media={blog.BlogImage}
                width={500}
                height={350}
              />
            </Link>
            <div class="bg-indigo-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
              <span>{blog.Category}</span>
            </div>
            <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            {blog.BlogTitle}
            </h2>
            <p class="text-sm text-gray-500 max-w-[500px]">
            {blog.Description}
            </p>
          </div>
          
        ))}
      </div>
      </div>
    
  );
}

export default blogpage;
