import React, { useState } from "react";
import Hero from "./hero";
import About from "./about";
import Previous from "./previous/previous_year";
import FAQPage from "./FAQ/FAQ";
import Contact from "./contact/contact";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import Loader from "./loader/loader";
import CommPart from "./commpart/commpart";
import CommPart2 from "./commpart/commpart2";
import Tracks from "./tracks/tracks";

export default function landing() {
  return (
      <div style={{ overflow:'clip' }}>
      <Hero />
      <About />
      <Previous />
      <Tracks/>
      <CommPart/>
    <CommPart2/>
      <FAQPage />
      <Contact />
      <Footer />
   </div>
  );
}
