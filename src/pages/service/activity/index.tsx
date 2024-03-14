import ServiceListView from "./ServiceListView";
import ServiceListViewModel from "./ServiceListViewModel";

function SeminarList() {
  const viewModel = new ServiceListViewModel();
  return <ServiceListView viewModel={viewModel} />;
}

export default SeminarList;
