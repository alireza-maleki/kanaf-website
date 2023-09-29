import React from "react";
import classes from "./Overview.module.css";

import img1 from "../images/overview/1.png";
import img2 from "../images/overview/2.png";
import img3 from "../images/overview/3.png";
import img4 from "../images/overview/4.png";

const Overview = () => {
  return (
    <div className="w-screen min-h-[500px] py-14 bg-[#fff] overflow-hidden">
      <div className="font-bold text-[18px] container mx-auto flex items-center justify-center">
        <div className={classes.line}></div>
        <p className="text-gray">چرا</p>
        <p className="px-3 text-[24px]">کناف شمسایی ؟!</p>
      </div>

      <div className="w-[96%] mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <div className="pb-4 flex flex-col items-center justify-center">
            <img className="w-[50px] h-[50px] mb-4" src={img1} alt="img1" />
            <h3 className="font-bold text-primary">مشاوره تخصصی رایگان</h3>
          </div>
          <p className="text-center md:text-right leading-8">
            کارشناسان  کناف شمسایی، آماده مشاوره حضوری در محل هستند و تمام مراحل
            اجرا، نصب و خدمات را به مشتریان عزیز ارائه میدهند. برای
            مشاوره رایگان با ما تماس بگیرید
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <div className="pb-4 flex flex-col items-center justify-center">
            <img className="w-[50px] h-[50px] mb-4" src={img2} alt="img1" />
            <h3 className="font-bold text-primary">مناسب ترین قیمت</h3>
          </div>
          <p className="text-center md:text-right leading-8">
            خودتان مقایسه کنید! بهترین کیفیت در کنار مناسب ترین قیمت را در کناف
            شمسایی تجربه کنید، هدف ما جذب رضایت شما مشتریان عزیز برای همکاری های
            آینده میباشد
          </p>
        </div>
      </div>

      <div className="w-[96%] mx-auto mt-5 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <div className="pb-4 flex flex-col items-center justify-center">
            <img className="w-[50px] h-[50px] mb-4" src={img3} alt="img1" />
            <h3 className="font-bold text-primary">تحویل به موقع پروژه</h3>
          </div>
          <p className="text-center md:text-right leading-8">
            زمان شما برای کناف شمسایی از اهمیت بالایی برخوردار است، به همین
            منظور تحویل به موقع و صحیح پروژه شما امری قطعی است
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <div className="pb-4 flex flex-col items-center justify-center">
            <img className="w-[50px] h-[50px] mb-4" src={img4} alt="img1" />
            <h3 className="font-bold text-primary">بازدید در کوتاه ترین زمان</h3>
          </div>
          <p className="text-center md:text-right leading-8">
            پس از مشاوره تخصصی شما عزیزان، کارشناسان کناف شمسایی در کوتاه ترین
            زمان ممکن برای شما، از پروژه بازدید کرده و فرایند ثبت سفارش را آغاز
            می نمایند
          </p>
        </div>

      </div>
    </div>
  );
};

export default Overview;
