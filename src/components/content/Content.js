import React from "react";

import ContentImage from "../images/gallery/40.jpeg";

import { PiTelevisionFill } from "react-icons/pi";
import { FaParking } from "react-icons/fa";
import { SiAirplayaudio } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

import img1 from "../images/content/1.png";
import img2 from "../images/content/2.png";

const Content = () => {
  return (
    <div id="khadamat" className="py-14 w-screen h-[520px] bg-[#fff]">
      <div className="w-full h-full">
        <div className="w-full mx-auto text-center">
          <h1 className="font-black text-[18px] pb-3">
            خدمات مجموعه کناف شمسایی
          </h1>
          <p className="border-t-[6px] border-myGray w-[30%] md:w-[10%] text-center mx-auto flex justify-center rounded"></p>
        </div>

        <div className="w-full h-full py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center grid-rows-1 w-[60%] mx-auto py-8 ">
            <div>
              <div className="w-full text-center flex items-center justify-center bg-[#ebedf7] rounded-lg p-4 mb-3">
                <img className="w-[50px] h-[50px]" src={img1} alt="img-1" />
              </div>
              <p>تخریب و</p>
              <p>بازسازی</p>
            </div>

            <div>
              <div className="w-full text-center flex items-center justify-center bg-[#ebedf7] rounded-lg p-4 mb-3">
                <img className="w-[50px] h-[50px]" src={img2} alt="img-1" />
              </div>
              <p className="text-center">باکس و</p>
              <p className="text-center">نور مخفی</p>
            </div>

            <div className="mt-8 md:mt-0">
              <div className="w-full text-center flex items-center justify-center bg-[#ebedf7] rounded-lg p-4 mb-3">
                <PiTelevisionFill className="w-[50px] h-[50px] text-primary" />
              </div>
              <p>جا نمایی TV</p>
            </div>

            <div className="mt-8 md:mt-0">
              <div className="w-full text-center flex items-center justify-center bg-[#ebedf7] rounded-lg p-4 mb-3">
                <FaParking className="w-[50px] h-[50px] text-primary" />
              </div>
              <p>پارکینگ های</p>
              <p>اداری و تجاری</p>
            </div>

            <div className="mt-8">
              <div className="w-full text-center flex items-center justify-center bg-[#ebedf7] rounded-lg p-4 mb-3">
                <SiAirplayaudio
                  className="w-[50px] h-[50px] text-primary"
                  src={img1}
                  alt="img-1"
                />
              </div>
              <p>عایق گرمایشی و</p>
              <p>صوتی</p>
            </div>

            <div className="mt-8">
              <div className="w-full text-center flex items-center justify-center bg-[#ebedf7] rounded-lg p-4 mb-3">
                <MdDesignServices
                  className="w-[50px] h-[50px] text-primary"
                  src={img1}
                  alt="img-1"
                />
              </div>
              <p>طراحی زیبا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
