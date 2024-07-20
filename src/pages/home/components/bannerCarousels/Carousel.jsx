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
      interval={5000}
      navButtonsAlwaysVisible="true"
    >
      {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Slides;
