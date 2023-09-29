import React, {useState} from 'react';
import classes from "./ShowGallery.module.css";

import {AiOutlineClose} from "react-icons/ai";
import Dynamic from "../dynamic-component/Dynamic";


import img31 from "../images/gallery/31.jpeg";
import img32 from "../images/gallery/32.jpeg";
import img33 from "../images/gallery/33.jpeg";
import img34 from "../images/gallery/34.jpeg";
import img35 from "../images/gallery/35.jpeg";
import img36 from "../images/gallery/36.jpeg";
import img37 from "../images/gallery/37.jpeg";
import img38 from "../images/gallery/38.jpeg";
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


const ShowGallery = () => {

    const DUMMY_DATA_GALLERY = [
        { id: 31, imgSrc: img31 },
        { id: 32, imgSrc: img32 },
        { id: 33, imgSrc: img33 },
        { id: 34, imgSrc: img34 },
        { id: 35, imgSrc: img35 },
        { id: 36, imgSrc: img36 },
        { id: 37, imgSrc: img37 },
        { id: 38, imgSrc: img38 },
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


        const [modal, setModal] = useState(false);
        const [tempImgSrc, setTempImgSrc] = useState("");
        const [count, setCount] = useState(9);

        const getImg = (imgSrc) => {
          setTempImgSrc(imgSrc);
          setModal(true);
        };

        const loadMoreImages = () => {
          setCount(count + 6); // افزایش تعداد عکس‌ها برای نمایش بیشتر
        };

  return (
    <div className="mt-20 mr-2">

        <Dynamic title="گالری" />


         <div
          onClick={() => setModal(false)}
          className={`bg-[rgba(0,0,0,0.8)] w-full h-full z-50 fixed top-0 right-0 flex items-center justify-center ${
          modal ? classes["modal open"] : classes["modal"]
        }`}
      >
        <img
          src={tempImgSrc}
          alt="modal"
          className="w-[90%] md:w-[70%] h-[50%] md:h-[70%] rounded-xl"
        />
        <AiOutlineClose
          className="fixed top-[5%] right-[5%] text-white cursor-pointer w-[30px] h-[30px]"
          onClick={() => setModal(false)}
        />
      </div>

      <div className={classes.gallery}>
        {DUMMY_DATA_GALLERY.slice(0, count).map((item) => (
          <div
            className={classes.pics}
            key={item.id}
            onClick={() => getImg(item.imgSrc)}
          >
            <img src={item.imgSrc} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
      {count < DUMMY_DATA_GALLERY.length && (
          <div className="py-8 flex items-center justify-center">
            <button
              className="mt-4 p-2 px-4 bg-primary text-white rounded-xl"
              onClick={loadMoreImages}
            >
              نمایش بیشتر
            </button>
          </div>
        )}



    </div>
  )
}

export default ShowGallery