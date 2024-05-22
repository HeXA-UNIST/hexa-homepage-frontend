import NewsDetailView from "./NewsDetailView";
import NewsDetailViewModel from "./NewsDetailViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
function NewsDetail() {
  const viewModel = new NewsDetailViewModel();
  return (
    <>
        <Header/>
        <NewsDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default NewsDetail;
