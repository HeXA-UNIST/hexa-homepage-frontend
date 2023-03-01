import "@css/home/contents.css";
import "@css/home/supports.css";

function Supports() {
  return (
    <div>
      <div className="contents_section contents-area">
        <h1>
          SUPPORTS
          <a href="home" target="_self">
            더보기(more)
          </a>
        </h1>
        <h2>Hexa를 도와주시고 후원해주시는 분들입니다</h2>
      </div>
      <div className="container">
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
  );
}

export default Supports;
