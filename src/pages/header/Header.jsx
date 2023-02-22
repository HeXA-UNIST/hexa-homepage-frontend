import { observer } from "mobx-react";
import useStores from "@hooks/storeHooks";

import profileimg from "@img/profile_img.jpg";

import "@css/app/Header.css";

function Header() {
  const { isLoggedIn } = useStores().loginStore;

  if (!isLoggedIn) {
    return (
      <body>
        <div className="header">
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
              <a href="activities">활동</a>
            </li>
            <li>
              <a href="test">뉴스</a>
            </li>
            <li>
              <a href="login">로그인</a>
            </li>
          </nav>
        </div>
      </body>
    );
  }
  return (
    <body>
      <div className="header">
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
          <li>
            <a href="test">마이페이지</a>
          </li>
          <li>
            <div className="box">
              <img className="profile" src={profileimg} alt="face" />
            </div>
          </li>
        </nav>
      </div>
    </body>
  );
}

export default observer(Header);
