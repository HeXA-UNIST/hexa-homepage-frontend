import ContentArea from "@components/ContentArea";
import "@css/activities/ServicePage.css";

interface Service {
  id: number;
  name: string;
  image: string;
  introduction: string;
  link: string | null;
  github: string | null;
}

const serviceList: Service[] = [
  {
    id: 1,
    name: "BUS HeXA",
    image: "images/sample1.png",
    introduction:
      "BUS HeXA는 UNIST-울산 버스 배차간격 및 시간 정보 제공 서비스입니다. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "./home",
    github: "./home",
  },
  {
    id: 2,
    name: "Blackboard Extension",
    image: "images/sample1.png",
    introduction: "Blackboard Extension은 블랙보드 확장 프로그램입니다.",
    link: "./home",
    github: "./home",
  },
];

function ServiceItem({ service }: { service: Service }) {
  const handleOnClickLink = () => {
    if (service.link) {
      window.open(service.link);
    }
  };

  const handleOnClickGithub = () => {
    if (service.github) {
      window.open(service.github);
    }
  };

  return (
    <div className="service-page__item">
      <img src={service.image} alt=" " />
      <div className="service-page__item__content">
        <div className="service-page__item__content__title">{service.name}</div>
        <div className="service-page__item__content__introduction">
          {service.introduction}
        </div>
        <div className="service-page__item__content__buttons">
          {service.link && (
            <button
              type="button"
              className="service-page__item__content__button"
              onClick={handleOnClickLink}
            >
              사용해보기 →
            </button>
          )}

          {service.github && (
            <button
              type="button"
              className="service-page__item__content__button"
              onClick={handleOnClickGithub}
            >
              Github →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function TitlePart() {
  return (
    <div className="service-page__title">
      <h2>HeXA가 만든 서비스</h2>
      <span>HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다</span>
    </div>
  );
}

function ServicePage() {
  return (
    <ContentArea>
      <TitlePart />
      <div className="service-page__list">
        {serviceList.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </ContentArea>
  );
}

export default ServicePage;
