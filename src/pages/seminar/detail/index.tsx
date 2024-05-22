import SeminarDetailView from "./SeminarDetailView";
import SeminarDetailViewModel from "./SeminarDetailViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
function SeminarDetail() {
  const viewModel = new SeminarDetailViewModel();
  return (
    <>
        <Header/>
        <SeminarDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default SeminarDetail;
