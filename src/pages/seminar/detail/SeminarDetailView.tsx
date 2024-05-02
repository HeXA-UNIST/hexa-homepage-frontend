import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ContentArea from "@components/ContentArea";
import DetailItem from "@components/DetailItem";
import SeminarDetailViewModel from "./SeminarDetailViewModel";

function SeminarDetailView({ viewModel }: { viewModel: SeminarDetailViewModel }) {
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            // id: string to number
            viewModel.setSeminarId(+id);
        }
    }, []);

    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/seminars"
                    subTitle="세미나"
                    title={viewModel.seminarDetail.title}
                    image={undefined}
                    contentTitle="세미나 설명"
                    content={
                        viewModel.seminarDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                        <li>
                            <div className="text-zinc-600 text-lg">날짜</div>
                            <div className="text-white text-2xl font-bold">
                                {viewModel.seminarDetail.date}
                            </div>
                        </li>
                        
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    )
}

export default observer(SeminarDetailView);