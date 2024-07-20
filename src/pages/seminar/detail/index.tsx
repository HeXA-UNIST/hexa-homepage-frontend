import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import ScrollToTop from "@components/ScrollToTop";
import SeminarDetailView from "./SeminarDetailView";
import SeminarDetailViewModel from "./SeminarDetailViewModel";



function SeminarDetail() {
  const viewModel = new SeminarDetailViewModel();
  return (
    <>
        <Header/>
        <ScrollToTop/>
        <SeminarDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default SeminarDetail;
