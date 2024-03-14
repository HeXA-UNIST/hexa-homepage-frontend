import ProjectDetailView from "./ProjectDetailView";
import ProjectDetailViewModel from "./ProjectDetailViewModel";

function ProjectDetail() {
    console.log("프로젝트!!!");
  const viewModel = new ProjectDetailViewModel();
  return <ProjectDetailView viewModel={viewModel} />;
}

export default ProjectDetail;
