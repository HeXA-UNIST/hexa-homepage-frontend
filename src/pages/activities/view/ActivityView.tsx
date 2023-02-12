import { observer } from "mobx-react";
import { ActivityViewModel } from "@pages/activities/vm/activity_view_model";

import Header from "@pages/header/Header";
import Footer from "@pages/footer/Footer";
import Container from "@pages/activities/components/Container";


function ActivityView({ viewModel }: { viewModel: ActivityViewModel }) {
  return (
    <div>
      <div>{viewModel.status}</div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default observer(ActivityView);
