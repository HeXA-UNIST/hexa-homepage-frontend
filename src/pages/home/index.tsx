import HomeView from "@pages/home/view/HomeView";
import { HomeViewModel } from "@pages/home/vm/HomeViewModel";

function Home() {
  const viewModel = new HomeViewModel();
  return <HomeView viewModel={viewModel} />;
}

export default Home;
