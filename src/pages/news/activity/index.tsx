import NewsListView from "./NewsListView";
import NewsListViewModel from "./NewsListViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function NewsList() {
  const viewModel = new NewsListViewModel();
  return (
    <>
        <Header/>
        <NewsListView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default NewsList;
