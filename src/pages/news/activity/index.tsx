import NewsListView from "./NewsListView";
import NewsListViewModel from "./NewsListViewModel";

function NewsList() {
  const viewModel = new NewsListViewModel();
  return <NewsListView viewModel={viewModel} />;
}

export default NewsList;
