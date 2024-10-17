"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Slide from "@/app/assets/Slide.png";
import Slide2 from "@/app/assets/Slide2.png";
import Slide3 from "@/app/assets/Slide3.png";
import ArrowLeft from "@/app/assets/Arrow_left.png";
import ArrowRight from "@/app/assets/Arrow_right.png";

import "./Carousel.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const slidesData = [
  {
    image: Slide,
    title: "Latest News & Updates 1",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massaornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    image: Slide2,
    title: "Latest News & Updates 2",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massaornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    image: Slide3,
    title: "Latest News & Updates 3",
    description:
      "Turpis interdum nunc varius ornare dignissim pretium. Massaornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
];

const Carousel = () => {
  return (
    <div className="h-[320px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-[510px]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[331px]  lg:w-[510px] text-[#FFFFFF]">
              <Image
                aria-hidden
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="responsive"
                className="rounded-[5px]"
                width={null}
                height={null}
              />
              <div className="absolute left-4 bottom-7 lg:max-w-[478px] space-y-2">
                <h2 className="text-sm font-semibold leading-4 text-left">
                  {slide.title}
                </h2>
                <p className="text-sm font-normal leading-4 text-left">
                  {slide.description}
                </p>
              </div>
            </div>
            <div className="swiper-button-next">
              <Image src={ArrowRight} alt="Next" width={1.75} height={3} />
            </div>
            <div className="swiper-button-prev">
              <Image src={ArrowLeft} alt="Previous" width={1.75} height={3} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
