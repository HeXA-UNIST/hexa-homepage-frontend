import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import NewsSummary from "@models/news/NewsSummary";
import ContentArea from "@components/ContentArea";
import PageNation from "@components/search/PageNation";
import NewsListViewModel from "./NewsListViewModel";



// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileLines } from "@fortawesome/free-regular-svg-icons";

// import SearchBox from "@components/search/SearchBox";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

// const QueryFormPart = observer(
//     ({
//       newsPageViewModel,
//     }: {
//       newsPageViewModel: NewsPageViewModel;
//     }) => {
//       const { newsQueryOptions } = newsPageViewModel;

//       return (
//         <div className="">

//         </div>
//       );
//     }
//   );


function NewsItem({ newsData }: { newsData: NewsSummary }) {

    return (
        <Link
            to={`/news/${newsData.newsId}`}
            className="w-full h-30 p-8 bg-neutral-900 rounded-2xl text-zinc-300 mb-10 group/seminarItem"
        >
            <div className="flex flex-col transition-all">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row items-center text-3xl font-bold text-left text-white text-ellipsis overflow-hidden grow">
                        <div className="mb-[3px]">{newsData.title}</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="text-xl">{newsData.date}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function NewsView({ viewModel }: { viewModel: NewsListViewModel }) {
    return (
        <ContentArea>
            <div className="min-h-[40rem]">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,auto))] gap-x-4 gap-y-6 mb-28">
                    {viewModel.queryResult.news.map((news) => (
                        <NewsItem key={news.newsId} newsData={news} />
                    ))}
                </div>
            </div>
            <PageNation
                curPage={viewModel.newsQueryOptions.pageNum}
                maxPage={viewModel.queryResult.totalPage}
                onCurPageChanged={viewModel.setPageNum}
                onPerPageChanged={viewModel.setPerPage}
            />
        </ContentArea>
    );
}

export default observer(NewsView);
