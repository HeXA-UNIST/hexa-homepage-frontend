import { observer } from "mobx-react";
import {
  ActivityMode,
  ActivityViewModel,
} from "@pages/activities/vm/activity_view_model";

import Footer from "@pages/footer/Footer";
import Header from "@pages/header/Header";
import ModeSelectArea from "@pages/activities/components/ModeSelectArea";

import ServicePage from "@pages/activities/view/ServicePage";
import ProjectPage from "@pages/activities/view/ProjectPage";
import SeminarPage from "@pages/activities/view/SeminarPage";

function ActivityView({ viewModel }: { viewModel: ActivityViewModel }) {
    // console.log(viewModel.projectPageState.queryResult.projects);
  const activityContents = {
    [ActivityMode.Service]: <ServicePage />,
    [ActivityMode.Project]: (
      <ProjectPage projectPageViewModel={viewModel.projectPageState} />
    ),
    [ActivityMode.Seminar]: (
        <SeminarPage seminarPageViewModel={viewModel.seminarPageState} />
    ),
  };
  return (
    <div>
      <Header />
      <ModeSelectArea
        activityMode={viewModel.mode}
        onModeChange={(mode) => {
          viewModel.setMode(mode);
        }}
      />
      {activityContents[viewModel.mode]}
      <Footer />
    </div>
  );
}

export default observer(ActivityView);
