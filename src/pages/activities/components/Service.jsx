import "@css/activities/service.css";

const serviceList = [
  {
    id: 1,
    name: "BUS HeXA",
    image: "images/sample1.png",
    introduction:
      "BUS HeXA는 UNIST 울산 버스 배차간격 및 시간 정보 제공 서비스입니다.",
    link: "./home",
    gitHub: "./home",
  },
  {
    id: 2,
    name: "Blackboard Extension",
    image: "images/sample1.png",
    introduction: "Blackboard Extension은 블랙보드 확장 프로그램입니다.",
    link: "./home",
    github: "./home",
  },
  {
    id: 1,
    name: "BUS HeXA",
    image: "images/sample1.png",
    introduction:
      "BUS HeXA는 UNIST 울산 버스 배차간격 및 시간 정보 제공 서비스입니다.",
    link: "./home",
    gitHub: "./home",
  },
  {
    id: 2,
    name: "Blackboard Extension",
    image: "images/sample1.png",
    introduction: "Blackboard Extension은 블랙보드 확장 프로그램입니다.",
    link: "./home",
    github: "./home",
  },
  {
    id: 1,
    name: "BUS HeXA",
    image: "images/sample1.png",
    introduction:
      "BUS HeXA는 UNIST 울산 버스 배차간격 및 시간 정보 제공 서비스입니다.",
    link: "./home",
    gitHub: "./home",
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

function Service() {
  const services = serviceList.map((service) => (
    <div className="serviceContent">
      <img src={service.image} alt=" " />
      <div className="serviceIntroduction">
        <div className="h1">{service.name}</div>
        {service.introduction}
        <div className="serviceButtons">
          <a href={service.link}>
            <button type="button" className="serviceButton">
              사용해보기
            </button>
          </a>
          <a href={service.github}>
            <button type="button" className="serviceButton">
              github
            </button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="serviceArea">
        <h1>HeXA가 만든 서비스</h1>
        <h5>HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다.</h5>
      </div>
      {services}
    </div>
  );
}

export default Service;
