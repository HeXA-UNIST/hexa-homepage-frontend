import Album from "@pages/home/albums/Album";

function Activities() {
  return (
    <div>
      <div className="contents_section contents-area">
        <h1>
          ACTIVITIES
          <a href="home" target="_self">
            더보기(more)
          </a>
        </h1>
        <h2>Hexa에서 진행하는 활동입니다</h2>
      </div>
      <div className="contents-wrap">
        <Album />
      </div>
    </div>
  );
}

export default Activities;
