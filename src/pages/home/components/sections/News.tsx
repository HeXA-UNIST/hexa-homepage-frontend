import "@css/home/News.css";
import NewsSummary from "@models/news/NewsSummary";
import { Link } from "react-router-dom";
import ContentFrame from "../content";

interface NewsProps {
    newsList: NewsSummary[];
}
function NewsSummaryItem({ news }: { news: NewsSummary }) {
    const { newsType, title, date } = news;

    return (
        <Link to={`/news/${news.newsId}`}>
            <div className="flex flex-col w-72 h-96 bg-neutral-800 rounded-2xl p-3 mr-8 text-left font-bold">
                <div className="flex bg-zinc-700 rounded-xl font-medium text-zinc-300 text-sm w-24 h-6 justify-center items-center mb-3">
                    {date}
                </div>
                <div className="text-white text-xl ml-2 grow">
                    <div className="text-zinc-400">[{newsType}]</div>
                    <div>{title}</div>
                </div>
                <div className="text-zinc-600 text-right text-lg font-medium">
                    <div>바로가기</div>

                    <div>
                        안녕
                    </div>
                </div>
            </div>
        </Link>
    );
}

function News({ newsList }: NewsProps) {
    const maxNews = 6;
    return (
        <div className="news-area">
            <ContentFrame
                title="HeXA의 최신 소식"
                subTitle="대회수상, 신입부원 모집 등 주요 소식을 살펴보세요!"
                // icon="📄"
            >
                <div className="flex flex-row">
                    {newsList.slice(0, maxNews).map((news) => (
                        <NewsSummaryItem key={news.newsId} news={news} />
                    ))}
                </div>
            </ContentFrame>
        </div>
    );
}

export default News;
