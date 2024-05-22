import ProjectDetailView from "./ProjectDetailView";
import ProjectDetailViewModel from "./ProjectDetailViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function ProjectDetail() {
  const viewModel = new ProjectDetailViewModel();
  return (
    <>
        <Header/>
        <ProjectDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default ProjectDetail;
