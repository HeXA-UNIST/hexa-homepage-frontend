import Carousel from "@pages/home/components/serviceCarousels/Carousel";
import "@css/home/Services.css";
import ContentArea from "@components/ContentArea";

function Services() {
  return (
    <div className="services-area">
      <ContentArea>
        <div className="services-area__content">
          <div className="services-area__content__title">
            SERVICES
            <a href="home" target="_self">
              더보기(more)
            </a>
          </div>
          <div className="services-area__content__subtitle">
            Hexa에서 제공하는 서비스입니다
          </div>
          <div className="services-area__content__carousel">
            <Carousel />
          </div>
        </div>
      </ContentArea>
    </div>
  );
}

export default Services;
