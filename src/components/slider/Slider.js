import React from "react";
import classes from "./Slider.module.css";
import "aos/dist/aos.css";
import { FaLightbulb } from "react-icons/fa";
import AnimatedText from "./AnimatedText";

const Slider = () => {

  return (
    <div
      id="/"
      className="relative w-screen h-[90vh] md:h-[85vh] md:h-screen bg-white overflow-hidden"
    >
      <div className="relative z-20 md:z-0 w-full h-full">

        <div
          className={`absolute w-full h-full bg-primary ${classes["slider-background"]}`}
        ></div>

        <div className="absolute py-12 top-[10%] md:top-[20%] mx-auto w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-start md:space-y-6 text-center w-[80%] h-full">
            
            <h1 className={`flex items-center justify-around px-2 py-1 w-[60%] md:w-[30%] h-[40px] bg-white text-black rounded-xl ${classes['shadow-title']}`}>
              <span>
                <FaLightbulb className="text-primary pe-1" />
              </span>
              <div>
                <span className="text-primary font-bold px-1"> مجموعه </span>
                کناف شمسایی
              </div>
            </h1>

            <div className="py-4 space-y-2 text-[24px] font-bold">
              <p className="text-white">کناف شمسایی با بیش از 10 سال تجربه</p>

              <p className="text-secondary">نمایندگی اجرای پروژه های کناف</p>

              <AnimatedText />
            </div>

            <p className="leading-8 text-[16px] text-white leading-6 text-justify w-[90%]">
            کناف شمسایی با سال ها تجربه در زمینه اجرای پروژه های کناف در کنار
              شماست تا دسترسی به متخصصان و تکنسین های مجرب را برای شما آسان کند.
              ما با بالاترین کیفیت و کمترین قیمت خدمات کناف را به
              شما ارائه می‌کنیم. شما می توانید برای مشاوره یا درخواست 
               اجرای انواع پروژه های کناف از طریق بخش تماس، با ما در
              ارتباط باشید.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
