import NewsDetailView from "./NewsDetailView";
import NewsDetailViewModel from "./NewsDetailViewModel";

function NewsDetail() {
  const viewModel = new NewsDetailViewModel();
  return <NewsDetailView viewModel={viewModel} />;
}

export default NewsDetail;
