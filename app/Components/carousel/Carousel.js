"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Slide from "@/app/assets/Slide.png";
import Slide2 from "@/app/assets/Slide2.png";
import Slide3 from "@/app/assets/Slide3.png";
import ArrowLeft from "@/app/assets/arrow_left.png";
import ArrowRight from "@/app/assets/arrow_right.png";
import { useState, useEffect } from "react";

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
  // Persist dark mode preference in local storage
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="w-full max-w-md lg:max-w-lg mx-auto mt-[21px] lg:mt-0 lg:h-[320px] dark:text-white">
      {" "}
      {/* Full width on mobile, limited on larger screens */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 400,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="w-full" // Make Swiper take full width
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full text-[#FFFFFF]">
              <Image
                aria-hidden
                src={slide.image}
                alt={`Slide ${index + 1}`}
                layout="responsive"
                className="rounded-lg " // Rounded edges for the image
                width={null}
                height={null}
              />
              <div className="absolute left-4 bottom-7 max-w-full space-y-2">
                {" "}
                {/* Ensure text fits on all screens */}
                <h2 className="text-xs md:text-sm font-semibold leading-4 text-left">
                  {" "}
                  {/* Smaller font for mobile */}
                  {slide.title}
                </h2>
                <p className="text-xs md:text-sm font-normal leading-4 text-left">
                  {slide.description}
                </p>
              </div>
            </div>
            {/* Position arrows better for smaller screens */}
            <div className="swiper-button-next !text-black !text-lg md:!text-xl">
              <Image src={ArrowRight} alt="Next" width={24} height={24} />
            </div>
            <div className="swiper-button-prev !text-black !text-lg md:!text-xl">
              <Image src={ArrowLeft} alt="Previous" width={24} height={24} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
