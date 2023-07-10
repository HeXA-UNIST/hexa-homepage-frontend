import ActivityView from "@pages/activities/view/ActivityView";
import { ActivityViewModel } from "@pages/activities/vm/activity_view_model";
import "@css/activities/activities.css";

function Activity() {
  const viewModel = new ActivityViewModel();
  console.log(viewModel.projectPageState.queryResult.projects);
  return <ActivityView viewModel={viewModel} />;
}

export default Activity;
