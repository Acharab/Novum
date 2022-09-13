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

function homeBlog({ data }) {
  const slides = [];
  data.Images.map((image, id) => {
    slides.push(
      <SwiperSlide className="w-96" key={{id}}>
        <div className="h-fit flex justify-center">
          <NextImage src={image} width={500} height={500} />
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
          <Link href="#">
            <div className="mb-6 border-2 hover:cursor-pointer rounded p-3">
              <h3 className="text-white font-bold text-xl">
                Hoe kunt u geld besparen bij u aangiften?
              </h3>
              <a className="text-white">
                Lorem si zolem i lo si mo deminium si lopikum si halon di parma
                di solitaier
              </a>
            </div>
          </Link>

          <Link href="#">
            <div className="mb-6 border-2 hover:cursor-pointer rounded p-3">
              <h3 className="text-white font-bold text-xl">
                Wat zijn onze specialiteiten?
              </h3>
              <a className="text-white">
                Lorem si zolem i lo si mo deminium si lopikum si halon di parma
                di solitaier
              </a>
            </div>
          </Link>

          <Link href="#">
            <div className="mb-6 border-2 hover:cursor-pointer rounded p-3">
              <h3 className="text-white font-bold text-xl">
                Wanneer kunnen wij u helpen?
              </h3>
              <a className="text-white">
                Lorem si zolem i lo si mo deminium si lopikum si halon di parma
                di solitaier
              </a>
            </div>
          </Link>

          <Link href="#">
            <div className="mb-6 border-2 hover:cursor-pointer rounded p-3">
              <h3 className="text-white font-bold text-xl">
                Wij gaan verhuizen naar een nieuw pand!
              </h3>
              <a className="text-white">
                Lorem si zolem i lo si mo deminium si lopikum si halon di parma
                di solitaier
              </a>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default homeBlog;
