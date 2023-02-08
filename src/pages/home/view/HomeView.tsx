import { observer } from "mobx-react";
import { HomeViewModel } from "@pages/home/vm/home_view_model";

import Header from "@pages/home/components/sections/Header";
import News from "@pages/home/components/sections/News";
import Services from "@pages/home/components/sections/Services";
import Activities from "@pages/home/components/sections/Activities";
import Supports from "@pages/home/components/sections/Supports";
import Footer from "@pages/home/components/sections/Footer";

function HomeView({ viewModel }: { viewModel: HomeViewModel }) {
  return (
    <div>
      <div>{viewModel.status}</div>
      <Header />
      <News newsList={viewModel.mainPageData.newsList} />
      <Services />
      <Activities />
      <Supports />
      <Footer />
    </div>
  );
}

export default observer(HomeView);
