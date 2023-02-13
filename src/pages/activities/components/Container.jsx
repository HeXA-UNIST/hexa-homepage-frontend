import React, { useState } from "react";
import "@css/activities/banner.css";
import Service from "./Service";
import Project from "./Project";
import Seminar from "./Seminar";

const activityButton = document.getElementsByClassName("customButton");

function handleClick(event) {
  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < activityButton.length; i += 1) {
      activityButton[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < activityButton.length; i += 1) {
    activityButton[i].addEventListener("click", handleClick);
  }
}

// 참고: https://liufeier.tistory.com/22

function Container() {
  init();
  const [content, setContent] = useState("project");

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    service: <Service />,
    project: <Project />,
    seminar: <Seminar />,
  };

  return (
    <div>
      <div className="headerArea"> </div>
      <div className="bannerArea">
        <h1>
          HeXA
          <span className="h2">에서 진행한 활동 탐색하기</span>
        </h1>
        <div className="buttons">
          <button
            onClick={handleClickButton}
            type="button"
            name="project"
            className="customButton"
          >
            프로젝트
          </button>
          <button
            onClick={handleClickButton}
            type="button"
            name="seminar"
            className="customButton"
          >
            세미나
          </button>
          <button
            onClick={handleClickButton}
            type="button"
            name="service"
            className="customButton"
          >
            서비스
          </button>
        </div>
      </div>
      {content && <div>{selectComponent[content]}</div>}
    </div>
  );
}

export default Container;
