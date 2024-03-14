import { observer } from "mobx-react";
import ContentArea from "@components/ContentArea";
import SearchBox from "@components/search/SearchBox";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

import ProjectSummary from "@models/project/ProjectSummary";
import ProjectListViewModel from "./ProjectListViewModel";

const QueryFormPart = observer(
    ({
      projectPageViewModel,
    }: {
      projectPageViewModel: ProjectListViewModel;
    }) => {
      const { projectQueryOptions } = projectPageViewModel;
  
      return (
        <div className="project-page__query-form">
          <div>
            <SearchBox
              value={projectQueryOptions.searchText ?? ""}
              onChange={(text) => {
                projectPageViewModel.setSearchText(text);
                projectPageViewModel.fetchProjects();
              }}
              placeholder="검색 (예: BUS HeXA, tag:서비스)"
            />
          </div>
        </div>
      );
    }
  );


function ProjectItem({ projectData }: { projectData: ProjectSummary }) {
    return (
        <a
            href="home"
            className="flex flex-col min-w-min w-[22rem] h-96 bg-neutral-900 rounded-2xl p-7 text-left font-bold"
        >
            <div className="flex justify-center items-center bg-emerald-500 rounded-xl h-40 mb-4">
                <img className="" src={`${projectData.thumbnail}`} alt="" />
            </div>
            <div className="text-white text-3xl mb-3">{projectData.title}</div>
        </a>
    );
}

function ProjectView({ viewModel }: { viewModel: ProjectListViewModel }) {
    return (
        <ContentArea>
            <QueryFormPart projectPageViewModel={viewModel}/>
            <div className="flex justify-between">
                {viewModel.queryResult.projects.map((project) => (
                    <ProjectItem
                        key={project.projectId}
                        projectData={project}
                    />
                ))}
            </div>
        </ContentArea>
    );
}

export default observer(ProjectView);
