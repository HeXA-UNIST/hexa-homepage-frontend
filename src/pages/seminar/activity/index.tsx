import SeminarListView from "./SeminarListView";
import SeminarListViewModel from "./SeminarListViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
function SeminarList() {
  const viewModel = new SeminarListViewModel();
  return (
    <>
        <Header/>
        <SeminarListView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default SeminarList;
