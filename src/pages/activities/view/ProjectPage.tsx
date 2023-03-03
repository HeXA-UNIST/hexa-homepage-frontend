import ContentArea from "@components/ContentArea";
import SearchBox from "@components/SearchBox";
import { observer } from "mobx-react";

import "@css/activities/ProjectPage.css";
import ProjectPageViewModel from "@pages/activities/vm/project_page_view_model";
import ProjectCard from "@pages/activities/components/ProjectCard";

function TitlePart() {
  return (
    <div className="project-page__title">
      <h2>HeXA가 진행한 프로젝트</h2>
      <span>
        HeXA는, 다양한 프로젝트를 통해 구성원 모두가 즐기며 성장할 수 있는
        동아리 문화를 추구합니다.
      </span>
    </div>
  );
}

const QueryFormPart = observer(
  ({
    projectPageViewModel,
  }: {
    projectPageViewModel: ProjectPageViewModel;
  }) => {
    const { projectQueryOptions } = projectPageViewModel;

    return (
      <div className="project-page__query-form">
        <div>
          <SearchBox
            style={{
              width: "100%",
            }}
            value={projectQueryOptions.searchText}
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

const ProjectListPart = observer(
  ({
    projectPageViewModel,
  }: {
    projectPageViewModel: ProjectPageViewModel;
  }) => {
    const { queryResult } = projectPageViewModel;

    return (
      <div className="project-page__project-list">
        {queryResult.projects.map((project) => (
          <ProjectCard key={project.projectId} project={project} />
        ))}
      </div>
    );
  }
);

function ProjectPage({
  projectPageViewModel,
}: {
  projectPageViewModel: ProjectPageViewModel;
}) {
  projectPageViewModel.fetchProjects();

  return (
    <ContentArea>
      <TitlePart />
      <QueryFormPart projectPageViewModel={projectPageViewModel} />
      <ProjectListPart projectPageViewModel={projectPageViewModel} />
    </ContentArea>
  );
}

export default ProjectPage;
