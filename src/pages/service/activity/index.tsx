import ServiceListView from "./ServiceListView";
import ServiceListViewModel from "./ServiceListViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function SeminarList() {
  const viewModel = new ServiceListViewModel();
  return (
    <>
        <Header/>
        <ServiceListView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default SeminarList;
