import ServiceDetailView from "./ServiceDetailView";
import ServiceDetailViewModel from "./ServiceDetailViewModel";

function ServiceDetail() {
  const viewModel = new ServiceDetailViewModel();
  return <ServiceDetailView viewModel={viewModel} />;
}

export default ServiceDetail;
