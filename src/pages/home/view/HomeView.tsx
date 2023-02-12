import { observer } from "mobx-react";
import { HomeViewModel } from "@pages/home/vm/home_view_model";

import Header from "@pages/header/Header";
import News from "@pages/home/components/sections/News";
import Services from "@pages/home/components/sections/Services";
import Activities from "@pages/home/components/sections/Activities";
import Supports from "@pages/home/components/sections/Supports";
import Footer from "@pages/footer/Footer";
import Banner from "@pages/home/components/sections/Banner";


function HomeView({ viewModel }: { viewModel: HomeViewModel }) {
  return (
    <div>
      <div>{viewModel.status}</div>
      <Header />
      <Banner />
      <News newsList={viewModel.mainPageData.newsList} />
      <Services />
      <Activities />
      <Supports />
      <Footer />
    </div>
  );
}

export default observer(HomeView);
