import React from "react";
import { Link } from "react-router-dom";

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
import img43 from "../images/gallery/67.jpg";
import img44 from "../images/gallery/65.jpeg";
import img45 from "../images/gallery/68.jpg";
import img46 from "../images/gallery/7.jpeg";
import img47 from "../images/gallery/32.jpeg";
import img48 from "../images/gallery/39.jpeg";
import img49 from "../images/gallery/71.jpg";


const Gallery = () => {
  const DUMMY_DATA_GALLERY = [
    {
      id: 1,
      title: "کناف چیست ؟",
      description:
        "به صفحات روکش د ار گچی که به کمک فرایندهای به یکدیگر متصل می شوند کناف گفته می شود که شرکت ها و کمپانی های وجود دارند که در این زمینه فعالیت می کنند...ادامه",
      imgSrc: img40,
      href: "/kanaf"
    },
    {
      id: 2,
      title: "جنس کناف از چیست؟",
      description:
        "صولا افرادی که با کناف کار کرده باشند یا اجرای کناف را از نزدیک دیده باشند، متوجه می‌شوند جنس کناف از چیست ؟ این متریال از یک نوع گچ پیش ساخته...ادامه",
      imgSrc: img41,
      href: "/gens-kanaf",
    },
    {
      id: 3,
      title: "منظور از دیوار خشک کناف چیست ؟",
      description:
        "امروزه به دلیل اینکه سقف کناف بسیار از مزیت های ویژه ای برخوردار می باشد مورد استفاده قرار میگیرد. در واقع باید برای پاسخ به سوال اینکه منظور از دیوار خشک کناف چیست؟ باید بیان کنیم که منظور...ادامه",
      imgSrc: img42,
      href: "/divar-khoshk",
    },
    {
      id: 4,
      title: "سقف کناف بهتر است یا رابیتس ؟",
      description:
        "شاید برخی از ما تفاوت هایی که بین سقف کناف و رابیتس وجود دارد را ندانیم و به اشتباه تصور کنیم این ۲ متریال یکی هستند. برای این مقایسه بهتر است در ابتدا ویژگی های هردو آن ها را به طور کلی بدانیم...ادامه",
      imgSrc: img43,
      href: "/saghf-rabis",
    },
    {
      id: 5,
      title: "نحوه اجرای کناف دیوار",
      description:
        "انسان ها به زیبایی و زیبا کردن محیط زندگی خود علاقه دارند. زیبایی محیط زندگی و یا کاری، به ما حس آرامش و انرژی می دهد. ایجاد روحیه خوب از ویژگی های زیبایی است. یکی از راه هایی که می توان خانه ها را زیبا و چشمگیر کرد، اجرای کناف کاری ...ادامه",
      imgSrc: img44,
      href: "/ejraye-kanaf",
    },
    {
      id: 6,
      title: "کناف سقف آشپزخانه",
      description:
        "کناف یکی از روش هایی است که برای دکور کردن سقف و یا دیوار مورد استفاده قرار میگیرد و طرفداران بسیاری دارد. در گذشته بجای استفاده از کناف از گچ بری های ضمخت و نا متعادل برای دکور کردن سقف استفاده میشود. در گذشته برای اینکه...ادامه",
      imgSrc: img45,
      href: "/ashpazkhane",
    },
    {
      id: 7,
      title: "نورپردازی سقف کناف",
      description:
        "همانطور مه میدانید و در دیگر مقالات ما خوانده اید یکی از جدید ترین روش های دکور کردن سقف، استفاده از سقف کناف است. این روش به افزایش جذابیت فضاء شما کمک میکند و باعث میشود فضای شما مدرن تر بنظر برسد. اما آیا استفاده از کناف به تنهایی کافی است؟... ادامه",
      imgSrc: img46,
      href: "noor-pardazi",
    },
    {
      id: 8,
      title: "انواع طرح کناف",
      description:
        "چند سال قبل در ساخت، ساختمان ها شاید کم اهمیت ترین موضوع طراحی و دکور کردن سقف بناها بود. معمار و یا بنا به یک گچ بری ساده برای محل لوستر بسنده میکردند...ادامه",
      imgSrc: img47,
      href: "/anvae-tarh",
    },
    {
      id: 9,
      title: "نکات لازم برای خرید کناف",
      description:
        "اگر شما هم جزء آن دسته از افرادی هستید که قصد دارید برای تغییر دکوراسیون منزل یا محل کارتان از سقف کناف استفاده کنید باید به نکات لازم برای خرید کناف توجه کنید...ادامه",
      imgSrc: img48,
      href: "/nokat",
    },
    {
      id: 10,
      title: "سقف مشبک",
      description:
        "سقف مشبک و یا تایل گچی مشبک جز انواع پانل های گچی به حساب می آید که جهت پیاده سازی سازه های خشک و همچنین سبک نیز از آن استفاده خواهند کرد...ادامه",
      imgSrc: img49,
      href: "/moshabak",
    }
  ];

  return (
    <div className="relative w-screen min-h-[300px] bg-[#fff] py-10">
      <div className="py-4 ps-2 text-lg md:text-2xl font-bold">
        <h1>آخرین مقالات</h1>
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
              slidesPerView: 1
            },
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 3
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
            <SwiperSlide key={item.id} className="w-full h-full cursor-pointer">
                <Link to={item.href} >
                    <div key={item.id} className="w-[94%] mx-auto bg-white shadow-2xl rounded-xl py-8 px-6">
                      <img className="pb-3 rounded-md object-cover" src={item.imgSrc} alt={item.title} />
                      <h2 className="font-black text-xl">{item.title}</h2>
                      <p className="leading-8 pt-8">{item.description}</p>
                    </div>
                </Link>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Gallery;
