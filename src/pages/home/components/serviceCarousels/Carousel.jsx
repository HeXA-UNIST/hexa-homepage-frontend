import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "./slider.json";

function Slides() {
  return (
    <Carousel
      prevButtonProps={{
        style: {
          // 이전 버튼의 스타일
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
        },
      }}
      nextButtonProps={{
        style: {
          // 다음 버튼의 스타일
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
        },
      }}
      indicatorContainerProps={{
        style: {
          zIndex: '1',
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
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
