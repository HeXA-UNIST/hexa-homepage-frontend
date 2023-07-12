import ContentArea from "@components/ContentArea";
import "@css/app/Footer.css";

function Footer() {
  return (
    <div className="footer-area">
      <ContentArea>
        <div className="footer-area__center-content">
          <div className="footer-area__content">
            <div className="footer-area__left-content">
              <div className="footer-area__content__logo">HeXA</div>
              <div className="footer-area__content__text">
                (44919) 울산광역시 울주군 언양읍 유니스트길 50, 203동(학생회관)
                415호 <br />
                hexa.unist@gmail.com <br />
                <br />
                Developed in HeXA, Licensed under MIT License
              </div>
            </div>
            <div className="footer-area__right-content">
              <nav>
                <li>
                  <a href="test">
                    <div className="box">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/instagram_logo.png`}
                        className="profile"
                        alt="face"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="test">
                    <div className="box">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/facebook_logo.png`}
                        className="profile"
                        alt="face"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="test">
                    <div className="box">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/github_logo.png`}
                        className="profile"
                        alt="face"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="test">
                    <div className="box">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/githubblog_logo.png`}
                        className="profile"
                        alt="face"
                      />
                    </div>
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  );
}

export default Footer;
