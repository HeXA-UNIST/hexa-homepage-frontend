<<<<<<<< Updated upstream:src/pages/home/sections/Footer.jsx
import "static/css/home/footer.css";
========
import "@css/app/footer.css";
>>>>>>>> Stashed changes:src/pages/footer/Footer.jsx

function Footer() {
  return (
    <div>
      <div className="footer-area">
        <div className="logo">HeXA</div>
        <div className="footer">
          <p>
            (44919) 울산광역시 울주군 언양읍 유니스트길 50, 203동(학생회관)
            415호
            <br />
            hexa.unist@gmail.com
            <br />
            <br />
            Developed in HeXA, Licensed under MIT License
          </p>
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
  );
}

export default Footer;
