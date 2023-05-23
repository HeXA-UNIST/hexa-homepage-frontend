import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "./slider.json";

function Slides() {
  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-50px",
          position: "absolute",
          size: "large",
        },
      }}
      navButtonsAlwaysVisible="true"
      animation="slide"
      interval={10000}
    >
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Slides;
