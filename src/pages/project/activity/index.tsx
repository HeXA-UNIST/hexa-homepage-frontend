import ProjectListView from "./ProjectListView";
import ProjectListViewModel from "./ProjectListViewModel";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function ProjectList() {
  const viewModel = new ProjectListViewModel();
  return (
    <>
        <Header/>
        <ProjectListView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default ProjectList;
