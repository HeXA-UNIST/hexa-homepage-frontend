import { useEffect, useState } from "react";

import { observer } from "mobx-react";
import useStores from "@hooks/storeHooks";

import profileimg from "@img/profile_img.jpg";

import ContentArea from "@components/ContentArea";
import { useMediaQuery } from "react-responsive";

import "@css/app/Header.css";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

function Header({ transparent = false }: { transparent?: boolean }) {
  const scrollPosition = useScrollPosition();
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });

  const { isLoggedIn } = useStores().loginStore;

  const height = scrollPosition === 0 || isMobile ? "74px" : "114px";

  return (
    <div
      className="header-area"
      style={{
        height,
        position: transparent ? "fixed" : "sticky",
        backgroundColor:
          scrollPosition === 0 && transparent ? "var(--component-transparent-color)" : undefined,
      }}
    >
      <ContentArea>
        <div className="header-area__content">
          <h2>
            <a href="home">Hexa</a>
          </h2>
          <nav>
            <li>
              <a href="test">소개</a>
            </li>
            <li>
              <a href="project">프로젝트</a>
            </li>
            <li>
              <a href="service">서비스</a>
            </li>
            <li>
              <a href="test">게시판</a>
            </li>
            {isLoggedIn ? (
              [
                <li>
                  <a href="test">마이페이지</a>
                </li>,
                <li>
                  <div className="box">
                    <img className="profile" src={profileimg} alt="face" />
                  </div>
                </li>,
              ]
            ) : (
              <li>
                <a href="login">로그인</a>
              </li>
            )}
          </nav>
        </div>
      </ContentArea>
    </div>
  );
}

Header.defaultProps = {
  transparent: false,
};

export default observer(Header);
