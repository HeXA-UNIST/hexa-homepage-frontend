import ContentArea from "@components/ContentArea";
import "@css/home/Main.css";

function BannerItem({ item }) {
  return (
    <div className="banner-item">
      <img
        src={process.env.PUBLIC_URL + item.image}
        alt={item.title}
        style={{ width: "100%", height: "100%" }}
      />
      <ContentArea maximizeHeight>
        <div className="banner-content">
          <h1>
            <b>HeXA</b>에서 <b>UNIST 학우를 위한</b>
            <br />
            <b>웹/앱 서비스</b>를 만들어갑니다
          </h1>
          <p>
            Hexa는 2011년부터 시작된 UNIST 종합 프로그래밍 동아리입니다.
            <br />
            UNIST 학우의 생활을 개선하기 위한 많은 서비스를 개발하고 있습니다.
          </p>
        </div>
      </ContentArea>

    </div>
  );
}

export default BannerItem;
