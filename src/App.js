import React, { useEffect, Fragment } from "react";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import GoToTop from "./components/gototop/GoToTop";
import ShowGallery from "./components/showgallery/ShowGallery";
import Footer from "./components/footer/Footer";
import MobileNavbar from "./components/mobilenavbar/MobileNavbar";


import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kanaf from "./components/kanaf/Kanaf";
import GensKanaf from "./components/gens-ganaf/GensKanaf";
import DivarKhoshk from "./components/divar-khoshk/DivarKhoshk";
import SaghfRabis from "./components/saghf-rabis/SaghfRabis";
import EjrayeSaghf from "./components/ejraye-saghf/EjrayeSaghf";
import Ashpazkhane from "./components/ashpazkhane/Ashpazkhane";
import NoorPardazi from "./components/noor-pardazi/NoorPardazi";
import AnvaeTarh from "./components/anvae-tarh/AnvaeTarh";
import Nokat from "./components/nokat/Nokat";
import Moshabak from "./components/moshabak/Moshabak";

const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Fragment>
      
      <Layout />
      <GoToTop />
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<ShowGallery />} />
          
          <Route path="/kanaf" element={<Kanaf />} />
          <Route path="/gens-kanaf" element={<GensKanaf />} />
          <Route path="/divar-khoshk" element={<DivarKhoshk />} />
          <Route path="/saghf-rabis" element={<SaghfRabis />} />
          <Route path="/ejraye-kanaf" element={<EjrayeSaghf />} />
          <Route path="/ashpazkhane" element={<Ashpazkhane />} />
          <Route path="/noor-pardazi" element={<NoorPardazi />} />
          <Route path="/anvae-tarh" element={<AnvaeTarh />} />
          <Route path="/nokat" element={<Nokat />} />
          <Route path="/moshabak" element={<Moshabak />} />
          
        </Routes>
      </BrowserRouter>

      <MobileNavbar />
      <Footer />

    </Fragment>
  );
};

export default App;
