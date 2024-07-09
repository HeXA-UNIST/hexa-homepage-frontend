
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import ScrollToTop from "@components/ScrollToTop";
import ServiceDetailView from "./ServiceDetailView";
import ServiceDetailViewModel from "./ServiceDetailViewModel";




function ServiceDetail() {
  const viewModel = new ServiceDetailViewModel();
  return (
    <>
        <Header/>
        <ScrollToTop/>
        <ServiceDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default ServiceDetail;
