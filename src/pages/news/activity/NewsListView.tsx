import { observer } from "mobx-react";
import { useState } from "react";
import NewsSummary from "@models/news/NewsSummary";
import ContentArea from "@components/ContentArea";
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
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <button
            onClick={() => setOpen(!isOpen)}
            className="w-full h-30 p-8 bg-neutral-900 rounded-2xl text-zinc-300 mb-10 group/seminarItem"
            type="button"
        >
            <div className="flex flex-col transition-all">
                <div className="w-full flex flex-row items-center">
                    <div className="flex flex-row items-center text-3xl font-bold text-left text-white text-ellipsis overflow-hidden grow">
                        <div className="mb-[3px]">{newsData.title}</div>
                    </div>
                    <div className="text-xl w-32">{newsData.date}</div>
                </div>
                <div
                    className={`flex flex-row text-left overflow-hidden transition-all duration-300 mx-10 ${
                        isOpen ? "h-80 my-10" : "h-0 my-0"
                    }`}
                >
                    {/* <div>{newsData.content}</div>
                    <div className="ml-auto">
                        {newsData.attachment.length !== 0 && (
                            <div>
                                <div className=" text-base mb-3">첨부파일</div>
                                {newsData.attachment.map((attach) => (
                                    <div
                                        key={attach}
                                        className=" p-4 overflow-hidden text-ellipsis w-[20rem] border-zinc-600 bg-zinc-700 rounded-2xl"
                                    >
                                        {attach}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </button>
    );
}

function NewsView({ viewModel }: { viewModel: NewsListViewModel }) {
    return (
        <ContentArea>
            <div className="flex flex-col">
                {viewModel.queryResult.news.map((news) => (
                    <NewsItem key={news.newsId} newsData={news} />
                ))}
            </div>
        </ContentArea>
    );
}

export default observer(NewsView);
