import React from "react";
import Carousel from "@pages/home/components/serviceCarousels/Carousel";
import "@css/home/services.css";

function Services() {
  return (
    <div>
      <div className="contents_section contents-area">
        <h1>
          SERVICES
          <a href="home" target="_self">
            더보기(more)
          </a>
        </h1>
        <h2>Hexa에서 제공하는 서비스입니다</h2>
      </div>
      <div className="serviceContainer">
        <Carousel />
      </div>
    </div>
  );
}

export default Services;
