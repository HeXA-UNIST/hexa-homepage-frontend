import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import ProjectSummary from "@models/project/ProjectSummary";
import { Image } from "@components/ImageContent";

import ContentArea from "@components/ContentArea";
// import SearchBox from "@components/search/SearchBox";
import SearchArea from "@components/search";
import PageNation from "@components/search/PageNation";
import { PageStatus } from "@util/index";
import Loading from "@components/Loading";

import ProjectListViewModel from "./ProjectListViewModel";

const QueryFormPart = observer(
    ({
        projectPageViewModel,
    }: {
        projectPageViewModel: ProjectListViewModel;
    }) => (
        <div className="project-page__query-form">
            <div>
                <SearchArea
                    toggle={{
                        subAreaTypes: ["search", "state", "tech"],
                        search: {
                            searchText: "",
                            onTextChanged: (text: string) => {
                                projectPageViewModel.setSearchText(text);
                                projectPageViewModel.fetchProjects();
                            },
                            placeHolder: "검색 (예: BUS HeXA, tag:서비스)",
                        },
                        onSortChanged: projectPageViewModel.setSort,
                        onYearChanged: projectPageViewModel.setYear,
                        // onStatusChanged: projectPageViewModel.setStatus,
                        projectListViewModel: projectPageViewModel,
                    }}
                />
            </div>
        </div>
    )
);

function ProjectItem({ projectData }: { projectData: ProjectSummary }) {
    return (
        <Link
            to={`/project/${projectData.projectId}`}
            className="flex flex-col h-80 bg-neutral-900 rounded-3xl p-6 text-left font-bold"
        >
            <div className="flex flex-row items-center justify-between text-white text-2xl mb-3 px-1">
                <div>{projectData.title}</div>
                <span className="text-base font-medium text-zinc-500 float-right">
                    Project
                </span>
            </div>
            <Image
                id={projectData.thumbnail}
                className="flex justify-center items-center bg-emerald-500 rounded-2xl h-44 mb-4"
            />
        </Link>
    );
}

function ProjectView({ viewModel }: { viewModel: ProjectListViewModel }) {
    return (
        <ContentArea>
            <QueryFormPart projectPageViewModel={viewModel} />
            <div className="min-h-[40rem]">
                {viewModel.status === PageStatus.Loading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-[repeat(3,minmax(350px,_1fr))] gap-x-6 gap-y-8 mb-28">
                        {viewModel.queryResult.projects.map((project) => (
                            <ProjectItem
                                key={project.projectId}
                                projectData={project}
                            />
                        ))}
                    </div>
                )}
            </div>

            <PageNation
                curPage={viewModel.projectQueryOptions.pageNum}
                maxPage={viewModel.queryResult.totalPage}
                onCurPageChanged={viewModel.setPageNum}
                onPerPageChanged={viewModel.setPerPage}
            />
        </ContentArea>
    );
}

export default observer(ProjectView);
