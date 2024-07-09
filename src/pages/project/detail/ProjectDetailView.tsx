import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";



import ContentArea from "@components/ContentArea";
import DetailItem from "@components/DetailItem";
import { getStringFromDate } from "@util/index";
import ProjectDetailViewModel from "./ProjectDetailViewModel";

function ProjectDetailView({
    viewModel,
}: {
    viewModel: ProjectDetailViewModel;
}) {
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            // id: string to number
            viewModel.setProjectId(+id);
        }
    }, []);

    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/projects"
                    subTitle="프로젝트 명"
                    title={viewModel.projectDetail.title}
                    image={viewModel.projectDetail.thumbnail}
                    contentTitle="프로젝트 설명"
                    attachments={undefined}
                    content={
                        viewModel.projectDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                        <li>
                            <div className="text-zinc-600 text-lg">프로젝트 기간</div>
                            <div className="text-white text-2xl font-bold">
                                {getStringFromDate(
                                    viewModel.projectDetail.startDate,
                                    viewModel.projectDetail.endDate
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="text-zinc-600 text-lg">프로젝트 상태</div>
                            <div className="text-white text-2xl font-bold">{viewModel.projectDetail.state}</div>
                        </li>
                        <li>
                            <div className="text-zinc-600 text-lg">기술스택</div>
                            <div className="flex flex-row gap-2 mt-1 flex-wrap">
                                {viewModel.projectDetail.projectTechStacks.map(
                                    (tech) => (
                                        <div key={tech} className=" text-zinc-400 rounded-xl bg-zinc-800 px-3 p-1">
                                            <div className="mb-1">{tech}</div>
                                        </div>
                                    )
                                )}
                            </div>
                        </li>
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    );
}

export default observer(ProjectDetailView);
