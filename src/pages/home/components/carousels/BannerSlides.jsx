import Carousel from "react-material-ui-carousel";
import BannerItem from "./BannerItem";
import slider from "./slider.json";

function BannerSlides() {
  return (
    <div className="cropper">
      <Carousel
        prevButtonProps={{
          style: {
            position: 'absolute',
            top: '50%',
            left: '60px',
            transform: 'translateY(-50%)',
          },
        }}
        nextButtonProps={{
          style: {
            position: 'absolute',
            top: '50%',
            right: '60px',
            transform: 'translateY(-50%)',
          },
        }}
        indicatorContainerProps={{
          style: {
            zIndex: '1',
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
          },
        }}
        duration={1000}
        interval={5000}
        autoPlay
        animation="fade"
        navButtonsAlwaysVisible
      >
        {slider.map((item) => (
          <BannerItem key={item.id} item={item} />
        ))}
      </Carousel>
    </div>

  );
}

export default BannerSlides;
