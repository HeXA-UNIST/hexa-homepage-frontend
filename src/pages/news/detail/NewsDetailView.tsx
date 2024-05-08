import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ContentArea from "@components/ContentArea";
import DetailItem from "@components/DetailItem";
import NewsDetailViewModel from "./NewsDetailViewModel";


function NewsDetailView({ viewModel }: { viewModel: NewsDetailViewModel }) {
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            // id: string to number
            viewModel.setNewsId(+id);
        }
    }, []);

    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/news"
                    subTitle="뉴스"
                    title={viewModel.newsDetail.title}
                    image={undefined}
                    contentTitle="뉴스"
                    content={
                        viewModel.newsDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                    <li>
                            <div className="text-zinc-600 text-lg">세미나 일자</div>
                            <div className="text-white text-2xl font-bold">
                                {viewModel.newsDetail.date}
                            </div>
                        </li>
                        <li>
                            <div className="text-zinc-600 text-lg">종류</div>
                            <div className="text-white text-2xl font-bold">
                                {viewModel.newsDetail.newsType}
                            </div>
                        </li>
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    )
}

export default observer(NewsDetailView);