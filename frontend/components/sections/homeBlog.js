import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import NextImage from "../elements/image";
import Link from "next/link";

function Homeblog({ data, global }) {
  let blogs = global.attributes.Blogs;
  blogs = blogs.slice(-4);

  const slides = [];
  blogs.map((image, id) => {
    slides.push(
      <SwiperSlide className="w-96" key={id}>
        <div className="h-fit flex justify-center cursor-pointer">
          <Link href={image.Slug} className="cursor-pointer">
            <NextImage
              className="object-cover"
              media={image.BlogImage}
              width={500}
              height={500}
            />
          </Link>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section className="bg-blue-500 justify-center items-center">
      {blogs === null || blogs === undefined || blogs.length === 0 ? <div className="w-screen h-screen flex justify-center items-center"><h3 className="text-5xl text-white">Binnenkort beschikbaar</h3></div>: (<>
      <div className="flex  container flex-col mt-2 items-center justify-center text-center">
        <h2
          data-text={data.lastword}
          className="lastwordblack max-w-2xl tracking-wide py-10 mt-8 text-5xl font-bold leading-snug  text-white lg:leading-tight lg:text-5xl"
        >
          {data.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:flex md:flex-wrap   py-16 lg:gap-10 lg:flex-nowrap h-fit container p-8 mx-auto xl:px-0">
        <div className="md:w-3/6   grid  ">
          <Swiper
            id="Courasel"
            className="w-full object-cover blogImages"
            modules={[
              Autoplay,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Navigation,
            ]}
            autoplay={true}
            spaceBetween={100}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
          >
            <div className="object-cover aspect-square">{slides}</div>
          </Swiper>
        </div>
        <div className=" md:w-3/6 flex my-10 m-auto justify-center content-center">
          <div className="h-auto m-auto">
            <div className="grid justify-center">
              {blogs.map((blog, id) => (
                <div className=" " key={id}>
                  <Link href={`/${blog.Slug}`}>
                    <div className="lg:mb-3 mb-2  border-2 max-h[10vh] hover:cursor-pointer rounded p-3 ">
                      <h3 className="text-white font-bold text-xl">
                        {blog.BlogTitle}
                      </h3>
                      <a className="text-white">{blog.Description}</a>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>)}
    
    </section>
      
  );
}

export default Homeblog;
