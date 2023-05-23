import "@css/home/Banner.css";
import MainPageNewsItem from "@models/mainpage/MainPageNewsItem";

interface NewsProps {
  newsList: MainPageNewsItem[];
}
function NewsItem({ news }: { news: MainPageNewsItem }) {
  const { newsType, title, date } = news;

  return (
    <div className="news-item">
      <div className="news-item__type">{newsType}</div>
      <div className="news-item__title">{title}</div>
      <div className="news-item__date">{date}</div>
    </div>
  );
}

function News({ newsList }: NewsProps) {
  return (
    <div className="contents_section contents-area">
      <h1>
        NEWS
        <a href="home" target="_self">
          더보기(more)
        </a>
      </h1>
      <h2>Hexa 회원들의 최신 소식입니다</h2>
      {newsList.map((news) => (
        <NewsItem key={news.newsId} news={news} />
      ))}
    </div>
  );
}

export default News;
