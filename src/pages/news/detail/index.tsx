import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import ScrollToTop from "@components/ScrollToTop";
import NewsDetailView from "./NewsDetailView";
import NewsDetailViewModel from "./NewsDetailViewModel";



function NewsDetail() {
  const viewModel = new NewsDetailViewModel();
  return (
    <>
        <Header/>
        <ScrollToTop/>
        <NewsDetailView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default NewsDetail;
