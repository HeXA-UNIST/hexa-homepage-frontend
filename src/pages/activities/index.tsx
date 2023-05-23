import ActivityView from "@pages/activities/view/ActivityView";
import { ActivityViewModel } from "@pages/activities/vm/activity_view_model";

function Activity() {
  const viewModel = new ActivityViewModel();
  return <ActivityView viewModel={viewModel} />;
}

export default Activity;
