import ContentArea from "@components/ContentArea";
import "@css/home/News.css";
import MainPageNewsItem from "@models/mainpage/MainPageNewsItem";

interface NewsProps {
  newsList: MainPageNewsItem[];
}
function NewsItem({ news }: { news: MainPageNewsItem }) {
  const { newsType, title, date } = news;

  return (
    <div className="news-item">
      <a href="home" className="news-item__content">
        <div className="news-item__type">[{newsType}]</div>
        <div className="news-item__title">{title}</div>
      </a>
      <div className="news-item__timestamp">{date}</div>
    </div>
  );
}

function News({ newsList }: NewsProps) {
  return (
    <div className="news-area">
      <ContentArea>
        <div className="news-area__content">
          <div className="news-area__content__title">
            News
            <a href="home" target="_self">
              더보기(more)
            </a>
          </div>
          <div className="news-area__content__subtitle">
            Hexa 회원들의 최신 소식입니다
          </div>
          <div className="news-area__content__list">
            {newsList.map((news) => (
              <NewsItem key={news.newsId} news={news} />
            ))}
          </div>
        </div>
      </ContentArea>
    </div>
  );
}

export default News;
