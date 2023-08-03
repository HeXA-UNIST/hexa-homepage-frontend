import HomeView from "@pages/home/view/HomeView";
import { HomeViewModel } from "@pages/home/vm/home_view_model";

function Home() {
  const viewModel = new HomeViewModel();
  return <HomeView viewModel={viewModel} />;
}

export default Home;
