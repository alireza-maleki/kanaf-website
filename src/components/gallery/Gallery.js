import React from "react";
import { Link } from "react-router-dom";
import classes from "./Gallery.module.css";



import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import img40 from "../images/gallery/40.jpeg";
import img41 from "../images/gallery/41.jpeg";
import img42 from "../images/gallery/42.jpeg";
import img43 from "../images/gallery/43.jpeg";
import img44 from "../images/gallery/44.jpeg";
import img45 from "../images/gallery/45.jpeg";
import img46 from "../images/gallery/46.jpeg";
import img47 from "../images/gallery/47.jpeg";
import img48 from "../images/gallery/39.jpeg";
import img49 from "../images/gallery/49.jpeg";
import img50 from "../images/gallery/50.jpeg";
import img51 from "../images/gallery/51.jpeg";
import img52 from "../images/gallery/52.jpeg";
import img53 from "../images/gallery/53.jpeg";
import img54 from "../images/gallery/54.jpeg";

const Gallery = () => {
  const DUMMY_DATA_GALLERY = [
    { id: 40, imgSrc: img40 },
    { id: 41, imgSrc: img41 },
    { id: 42, imgSrc: img42 },
    { id: 43, imgSrc: img43 },
    { id: 44, imgSrc: img44 },
    { id: 45, imgSrc: img45 },
    { id: 46, imgSrc: img46 },
    { id: 47, imgSrc: img47 },
    { id: 48, imgSrc: img48 },
    { id: 49, imgSrc: img49 },
    { id: 50, imgSrc: img50 },
    { id: 51, imgSrc: img51 },
    { id: 52, imgSrc: img52 },
    { id: 53, imgSrc: img53 },
    { id: 54, imgSrc: img54 }
  ];


  return (
    <div className="relative w-screen min-h-[300px] bg-[#f1f1f1] py-10">
      <div className="flex items-center justify-center py-4 text-lg md:text-2xl font-bold">
        <div className={classes.line}></div>
        <h1>گالری کارهایی که انجام داده ایم</h1>
      </div>

        <div className="grid grid-cols-1 grid-rows-1 mx-auto px-2 py-4 w-[90%] ">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            spaceBetween={0}
            loop={true}
            speed={1000}
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
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 4
              },
              1400: {
                slidesPerView: 4
              }
            }}
          >
            {DUMMY_DATA_GALLERY.map((item) => (
              <SwiperSlide
                className="w-full h-full cursor-pointer"
                key={item.id}
              >
                <div className="flex items-center justify-center p-4 w-48 h-32 lg:w-58 xl:w-72 2xl:w-[90%] lg:h-44">
                <img
                  className="rounded-xl object-cover w-26 md:w-72"
                  src={item.imgSrc}
                  alt="slide"
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

          <div className="flex items-center justify-center pt-8">
            <Link to="/gallery" className="cursor-pointer bg-primary px-6 py-3 rounded-lg text-white">مشاهده همه</Link>
          </div>

    </div>
  );
};

export default Gallery;
