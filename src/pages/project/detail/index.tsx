
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import ScrollToTop from "@components/ScrollToTop";

import ProjectDetailView from "./ProjectDetailView";
import ProjectDetailViewModel from "./ProjectDetailViewModel";



function ProjectDetail() {
  const viewModel = new ProjectDetailViewModel();
  return (
    <>
        <Header/>
        <ScrollToTop/>
        <ProjectDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default ProjectDetail;
