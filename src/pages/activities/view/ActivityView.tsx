import { observer } from "mobx-react";
import {
    //   ActivityMode,
    ActivityViewModel,
} from "@pages/activities/vm/activity_view_model";

import { Outlet } from "react-router-dom";

// import Footer from "@components/footer/Footer";
// import Header from "@components/header/Header";
import Submain from "@components/subMain/SubMain";

// import ServiceView from "@pages/activities/view/ServiceView";
// import ProjectView from "@pages/activities/view/ProjectView";
// import SeminarView from "@pages/activities/view/SeminarView";
// import NewsView from "@pages/activities/view/NewsView";

function ActivityView({ viewModel }: { viewModel: ActivityViewModel }) {
    return (
        <div>
            <Submain
                activityMode={viewModel.mode}
                onModeChange={(mode) => {
                    viewModel.setMode(mode);
                }}
            />
            <div className="min-h-[35rem]">
                <Outlet />
            </div>
        </div>
    );
}

export default observer(ActivityView);
