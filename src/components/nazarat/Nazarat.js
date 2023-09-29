import React from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {FaUserTie} from "react-icons/fa";

const Nazarat = () => {
  const Dummy_Data = [
    {
      id: 1,
      title: "احمد محمدی",
      description:
        "کناف تیم شما واقعاً عالی بود. من تاالان از انجام کارهای ساختمانی اینقدر راضی نبودم."
    },
    {
      id: 2,
      title: "رضا عبدالمحمد",
      description:
        "خدمات کنافی که ارائه دادید واقعاً حرف نداره. هیچ وقت به اندازه این بار راضی نشده بودم."
    },
    {
      id: 3,
      title: "زهرا قاسمی",
      description:
        " برای پروژه‌های کنافی مون همیشه به شما اعتماد می‌کنیم. کیفیت و سرعت کار شما بی‌نظیره واقعا."
    },
    {
      id: 4,
      title: "سینا بابازاده",
      description:
        "باانجام کناف تیم شما، زیبایی منزل ما به طرز فوق‌العاده‌ای افزایش یافت. ممنون از شما"
    },
    {
      id: 5,
      title: "پوریا کریمی",
      description:
        "مشتریان شما خدمات کناف را به عنوان بهترین راه برای بهبود دکوراسیون داخلی توصیه می‌کنند، و من هم موافق آنها هستم."
    },
    {
      id: 6,
      title: "مجید بابایی",
      description:
        "با تیم شما کار کردن واقعاً لذت‌بخش بود. شما به همه جوانب پروژه توجه داشتید و به تمام سوالات ما پاسخ دادید"
    },
    {
      id: 7,
      title: "مریم خداداد",
      description:
        "سرعت اجرا و دقت در جزئیات پروژه کناف شما تحت هر شرایطی عالی بود."
    },
    {
      id: 8,
      title: "غزل صیادی",
      description:
        "من از انجام کارهای کناف توسط شما بسیار راضی هستم. از شما تشکر می‌کنم "
    },
    {
      id: 9,
      title: "حسین فراهانی",
      description:
        "با تکنولوژی‌های مدرنی که در کارهای کناف به کار می‌برید، نتیجه واقعاً عالی بود."
    },
    {
      id: 10,
      title: "شایان صالحی",
      description:
        "توانایی ایجاد طراحی‌های منحصربه‌فرد با کناف شما بی‌نظیر است. این واقعا به خونه ما زیبایی جدید داده ."
    }
  ];

  return (
    <div className="py-12 bg-[#f1f1f1] w-screen h-[420px]">

        <div className="text-black text-center pb-6">
          <p className="text-2xl font-bold">نظرات شما</p>
        </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={2000}
        className={`w-full h-full`}
      >
        {Dummy_Data.map((item) => (
          <SwiperSlide className="flex items-center justify-center w-full h-full" key={item.id}>
            <div className="w-[90%] md:w-[60%] mx-auto flex flex-col items-center justify-center text-center bg-white shadow-2xl rounded-xl p-6">
                <FaUserTie className="p-3 text-primary bg-[#e7ebfd] rounded-full w-[50px] h-[50px] border-2 border-[#e7ebfd]" />
                <h1 className="font-black text-lg py-2">{item.title}</h1>
                
                <p className="leading-8 py-4">{item.description}</p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Nazarat;
