import ActivityView from "@pages/activities/view/ActivityView";
import { ActivityViewModel } from "@pages/activities/vm/activity_view_model";
import "@css/activities/activities.css";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import ScrollToTop from "@components/ScrollToTop";

function Activity() {
  const viewModel = new ActivityViewModel();

  return (
    <>
        <Header/>
        <ScrollToTop/>
        <ActivityView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default Activity;
