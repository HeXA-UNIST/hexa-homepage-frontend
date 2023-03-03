import { observer } from "mobx-react";
import useStores from "@hooks/storeHooks";

import profileimg from "@img/profile_img.jpg";

import "@css/app/Header.css";
import ContentArea from "@components/ContentArea";

function Header() {
  const { isLoggedIn } = useStores().loginStore;

  return (
    <div className="header-area">
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
              <a href="test">회원</a>
            </li>
            <li>
              <a href="test">활동</a>
            </li>
            <li>
              <a href="test">뉴스</a>
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

export default observer(Header);
