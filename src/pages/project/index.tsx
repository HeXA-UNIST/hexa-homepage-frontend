import ProjectView from "@pages/project/view/ProjectView";
import { ProjectViewModel } from "@pages/project/vm/ProjectViewModel";

function Home() {
  const viewModel = new ProjectViewModel();
  return <ProjectView viewModel={viewModel} />;
}

export default Home;
