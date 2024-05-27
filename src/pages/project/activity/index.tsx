import ProjectListView from "./ProjectListView";
import ProjectListViewModel from "./ProjectListViewModel";

function ProjectList() {
  const viewModel = new ProjectListViewModel();
  return <ProjectListView viewModel={viewModel} />;
}

export default ProjectList;
