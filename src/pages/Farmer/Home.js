import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Step1 from "../../components/Farmer/Step1";
import Step2 from "../../components/Farmer/Step2";
import Step3 from "../../components/Farmer/Step3";
import Step4 from "../../components/Farmer/Step4";
import "../splide-green.min.css";
function Home() {
  return (
    <div className="pt-24">
      <Splide
        className="w-full md:h-[80vh] h-full"
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: false,
         
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: true,

          arrows: false,

          pagination: true,
          drag: true,
        }}
      >
        <SplideSlide>
          <Step1 />
        </SplideSlide>
        <SplideSlide>
          <Step2 />
        </SplideSlide>

        <SplideSlide>
          <Step3 />
        </SplideSlide>

        <SplideSlide>
          <Step4 />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Home;
