import SeminarView from "@pages/seminar/view/SeminarView";
import { SeminarViewModel } from "@pages/seminar/vm/SeminarViewModel";

function Seminar() {
  const viewModel = new SeminarViewModel();
  return <SeminarView viewModel={viewModel} />;
}

export default Seminar;
