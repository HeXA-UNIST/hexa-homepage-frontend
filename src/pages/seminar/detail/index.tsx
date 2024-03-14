import SeminarDetailView from "./SeminarDetailView";
import SeminarDetailViewModel from "./SeminarDetailViewModel";

function SeminarDetail() {
  const viewModel = new SeminarDetailViewModel();
  return <SeminarDetailView viewModel={viewModel} />;
}

export default SeminarDetail;
