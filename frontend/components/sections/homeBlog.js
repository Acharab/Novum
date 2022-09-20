import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
import NextImage from "../elements/image";
import Link from "next/link";

function Homeblog({ data, global }) {
  let blogs = global.attributes.Blogs;
  blogs = blogs.slice(-4)

  const slides = [];
  blogs.map((image, id) => {
    slides.push(
      <SwiperSlide className="w-96" key={{ id }}>
        <div className="h-fit flex justify-center">
          <NextImage media={image.BlogImage} width={500} height={500} />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section className="bg-blue-500 justify-center items-center">
      <div className="grid grid-cols-1 md:flex md:flex-wrap max-w-[1140px]  py-20 lg:gap-10 lg:flex-nowrap h-fit container p-8 mx-auto xl:px-0">
        <div className="md:w-3/6 h-fill">
          <Swiper
            id="Courasel"
            className="w-full h-fill ml-0"
            modules={[
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Scrollbar,
              Navigation,
            ]}
            spaceBetween={100}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
          >
            <div>{slides}</div>
          </Swiper>
        </div>
        <div className="md:w-3/6 pt-8 h-fill grid justify-center">
          {blogs.map((blog, id) => (
            <div className="" key={id}>
              <Link href={`/${blog.Slug}`}>
                <div className="mb-6  border-2 border-gray-300 hover:border-white ease-in duration-500 hover:cursor-pointer hover:rounded p-3">
                  <h3 className="text-white font-bold text-xl">
                    {blog.BlogTitle}
                  </h3>
                  <a className="text-white">
                    {blog.Description}
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Homeblog;

