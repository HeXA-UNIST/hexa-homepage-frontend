import SeminarListView from "./SeminarListView";
import SeminarListViewModel from "./SeminarListViewModel";

function SeminarList() {
  const viewModel = new SeminarListViewModel();
  return <SeminarListView viewModel={viewModel} />;
}

export default SeminarList;
