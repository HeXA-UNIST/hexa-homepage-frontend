import ContentArea from "@components/ContentArea";
import "@css/home/Activities.css";
import buildAlbumItems from "@pages/home/components/albums/Album";

function Activities() {
  return (
    <div className="activities-area">
      <ContentArea>
        <div className="activities-area__content">
          <div className="activities-area__content__title">
            ACTIVITIES
            <a href="home" target="_self">
              더보기(more)
            </a>
          </div>
          <div className="activities-area__content__subtitle">Hexa에서 진행하는 활동입니다</div>
          <div className="activities-area__content__tile">
            {buildAlbumItems()}
          </div>
        </div>
      </ContentArea>
    </div>


  );
}

export default Activities;
