import { observer } from "mobx-react";
import {
  ActivityMode,
  ActivityViewModel,
} from "@pages/activities/vm/activity_view_model";

import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Submain from "@components/subMain/SubMain";

import ServiceView from "@pages/activities/view/ServiceView";
import ProjectView from "@pages/activities/view/ProjectView";
import SeminarView from "@pages/activities/view/SeminarView";
import NewsView from "@pages/activities/view/NewsView";

function ActivityView({ viewModel }: { viewModel: ActivityViewModel }) {
    // console.log(viewModel.projectPageState.queryResult.projects);
  const activityContents = {
    [ActivityMode.Service]: (
        <ServiceView viewModel={viewModel.servicePageState} />
    ),
    [ActivityMode.Project]: (
        <ProjectView viewModel={viewModel.projectPageState} />
    ),
    [ActivityMode.Seminar]: (
        <SeminarView viewModel={viewModel.seminarPageState} />
    ),
    [ActivityMode.News]: (
        <NewsView viewModel={viewModel.newsPageState} />
    )
  };
  return (
    <div>
      <Header />
      <Submain
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
