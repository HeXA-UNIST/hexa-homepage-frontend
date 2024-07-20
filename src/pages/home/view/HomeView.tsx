import { observer } from "mobx-react";
import { HomeViewModel } from "@pages/home/vm/HomeViewModel";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

import Introduction from "@pages/home/components/sections/Introduction";
import News from "@pages/home/components/sections/News";
import Services from "@pages/home/components/sections/Services";
import Activities from "@pages/home/components/sections/Activities";
import Supports from "@pages/home/components/sections/Supports";
import Main from "@pages/home/components/sections/Main";

function HomeView({ viewModel }: { viewModel: HomeViewModel }) {
  return (
    <div>
      {/* <Header /> */}
      <Main />
      <Introduction />
      <News newsList={viewModel.mainPageData.newsList} />
      <Services serviceList={viewModel.mainPageData.serviceList} />
      <Activities />
      <Supports />
      {/* <Footer /> */}
    </div>
  );
}

export default observer(HomeView);
