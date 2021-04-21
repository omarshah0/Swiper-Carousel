import React from "react";
import Card from "./card";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "./carousel.css"

SwiperCore.use([Scrollbar]);

function Carousel() {
  return (
    <div className="w-full bg-black p-10 overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
