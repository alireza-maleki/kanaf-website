import React, { Fragment } from "react";
import Slider from "../slider/Slider";
import Content from "../content/Content";
import Overview from "../overview/Overview";
import Gallery from "../gallery/Gallery";
import Video from "../video/Video";
import Clients from "../clients/Clients";
import Nazarat from "../nazarat/Nazarat";
import Maqale from "../maqale/Maqale";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <Content />
      <Gallery />
      <Overview />
      <Maqale />
      <Nazarat />
      <Video />
      <Clients />
    </Fragment>
  );
};

export default Home;
