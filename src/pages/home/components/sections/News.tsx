import "@css/home/News.css";
import MainPageNewsItem from "@models/mainpage/MainPageNewsItem";
import ContentFrame from "../content";

interface NewsProps {
    newsList: MainPageNewsItem[];
}
function NewsItem({ news }: { news: MainPageNewsItem }) {
    const { newsType, title, date } = news;

    return (
        <div className="flex flex-col w-72 h-96 bg-neutral-800 rounded-3xl p-4 mr-8 text-left font-bold">
            <div className="flex bg-zinc-500 rounded-3xl text-zinc-300 text-lg w-36 h-10 justify-center items-center mb-3">
                {date}
            </div>
            <div className="text-white text-2xl ml-2 grow">
                <div>[{newsType}]</div>
                <div>{title}</div>
            </div>
            <div className="text-zinc-600 text-right text-xl">
                바로가기
            </div>
        </div>
    );
}

function News({ newsList }: NewsProps) {
    return (
        <div className="news-area">
            <ContentFrame
                title="뉴스"
                subTitle="HeXA의 최신 소식을 알아보세요."
                icon="📄"
            >
                <div className="flex flex-row">
                    {newsList.map((news) => (
                        <NewsItem key={news.newsId} news={news} />
                    ))}
                </div>
            </ContentFrame>
        </div>
    );
}

export default News;
