import React from "react";
import classes from "./Clients.module.css"

import img1 from "../images/clients/1.png";
import img2 from "../images/clients/2.png";
import img3 from "../images/clients/3.png";
import img4 from "../images/clients/4.jpg";
import img5 from "../images/clients/5.png";
import img6 from "../images/clients/6.png";
import img7 from "../images/clients/7.jpg";
import img8 from "../images/clients/8.png";
import img9 from "../images/clients/9.jpg";
import img10 from "../images/clients/10.png";
import background_img from "../images/clients/bg.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const DUMMY_SWIPER_SLIDER = [
  {
    id: 1,
    src: img1
  },
  {
    id: 2,
    src: img2
  },
  {
    id: 3,
    src: img3
  },
  {
    id: 4,
    src: img4
  },
  {
    id: 5,
    src: img5
  },
  {
    id: 6,
    src: img6
  },
  {
    id: 7,
    src: img7
  },
  {
    id: 8,
    src: img8
  },
  {
    id: 9,
    src: img9
  },
  {
    id: 10,
    src: img10
  }
];

const Clients = () => {
  return (
    <div id="clients" className="bg-[#f1f1f1] relative w-screen h-[400px] md:h-[550px]">

      <div className="absolute top-[0%] w-full h-full flex flex-col items-center justify-center">
        <div className="text-black text-center pb-10">
          <div className={classes.line}></div>
          <p className="text-2xl font-bold pb-4">مشتریان ما</p>
        </div>

        <div className="shadow-2xl rounded-xl bg-[#ffffff99] grid grid-cols-1 grid-rows-1 mx-auto px-2 py-4 w-[90%] ">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            spaceBetween={0}
            loop={true}
            speed={500}
            className={`w-full h-full`}
            breakpoints={{
              0: {
                slidesPerView: 2
              },
              576: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 5
              },
              1200: {
                slidesPerView: 5
              },
              1400: {
                slidesPerView: 5
              }
            }}
          >
            {DUMMY_SWIPER_SLIDER.map((item) => (
              <SwiperSlide
                className="w-full h-full cursor-pointer"
                key={item.id}
              >
                <div className="flex items-center justify-center p-4 w-48 h-32 lg:w-58 xl:w-72 2xl:w-[90%] lg:h-44">
                <img
                  className="w-26 md:w-32"
                  src={item.src}
                  width={100}
                  height={50}
                  alt="slide"
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Clients;
