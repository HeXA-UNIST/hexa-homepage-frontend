import ServiceDetailView from "./ServiceDetailView";
import ServiceDetailViewModel from "./ServiceDetailViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function ServiceDetail() {
  const viewModel = new ServiceDetailViewModel();
  return (
    <>
        <Header/>
        <ServiceDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default ServiceDetail;
