import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import ContentArea from "@components/ContentArea";
import DetailItem from "@components/DetailItem";
import ServiceDetailViewModel from "./ServiceDetailViewModel";

function ServiceDetailView({
    viewModel,
}: {
    viewModel: ServiceDetailViewModel;
}) {
    const { id } = useParams();

    useEffect(() => {
        if (id !== undefined) {
            // id: string to number
            viewModel.setServiceId(+id);
        }
    }, []);

    return (
        <ContentArea>
            <div className=" pt-[10rem] min-h-[50rem] mb-40">
                <DetailItem
                    returnLink="/activity/projects"
                    subTitle="서비스 명"
                    title={viewModel.serviceDetail.title}
                    image={viewModel.serviceDetail.thumbnail}
                    contentTitle="서비스 설명"
                    attachments={undefined}
                    content={
                        viewModel.serviceDetail.content ?? "내용이 없습니다."
                    }
                >
                    <ul className=" bg-zinc-900 rounded-2xl p-6 text-left gap-y-3 list-none [&>li]:mb-5">
                        <li>
                            <div className="text-zinc-600 text-lg">
                                관련 링크
                            </div>
                            <div className="flex flex-row gap-2 mt-1 flex-wrap">
                                <a href={viewModel.serviceDetail.githubLink} aria-label="githubLink">
                                    <FontAwesomeIcon
                                        className=" text-white w-8 h-8"
                                        icon={faGithub}
                                    />
                                </a>
                                <a href={viewModel.serviceDetail.siteLink} aria-label="siteLink">
                                    <FontAwesomeIcon
                                        className=" text-white w-8 h-8"
                                        icon={faLink}
                                    />
                                </a>
                            </div>
                        </li>
                    </ul>
                </DetailItem>
            </div>
        </ContentArea>
    );
}

export default observer(ServiceDetailView);
