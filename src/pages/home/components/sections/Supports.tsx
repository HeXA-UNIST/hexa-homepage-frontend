import ContentArea from "@components/ContentArea";
import "@css/home/Supports.css";

function Supports() {
  return (
    <div className="supports-area">
      <ContentArea>
        <div className="supports-area__content">
          <div className="supports-area__content__title">
            SUPPORTS
            <a href="home" target="_self">
              더보기(more)
            </a>
          </div>
          <div className="supports-area__content__subtitle">Hexa를 도와주시고 후원해주시는 분들입니다</div>
          <div className="supports-area__content__list">
            <div className="item">
              <div className="box">
                <img
                  className="profile"
                  src={`${process.env.PUBLIC_URL}/images/sample1.png`}
                  alt="face"
                />
              </div>
            </div>
            <div className="item">
              <div className="box">
                <img
                  className="profile"
                  src={`${process.env.PUBLIC_URL}/images/sample1.png`}
                  alt="face"
                />
              </div>
            </div>
            <div className="item">
              <div className="box">
                <img
                  className="profile"
                  src={`${process.env.PUBLIC_URL}/images/sample1.png`}
                  alt="face"
                />
              </div>
            </div>
            <div className="item">
              <div className="box">
                <img
                  className="profile"
                  src={`${process.env.PUBLIC_URL}/images/sample1.png`}
                  alt="face"
                />
              </div>
            </div>
            <div className="item">
              <div className="box">
                <img
                  className="profile"
                  src={`${process.env.PUBLIC_URL}/images/sample1.png`}
                  alt="face"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  );
}

export default Supports;
