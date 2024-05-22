import HomeView from "@pages/home/view/HomeView";
import { HomeViewModel } from "@pages/home/vm/HomeViewModel";


import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function Home() {
  const viewModel = new HomeViewModel();
  return (
    <>
        <Header/>
        <HomeView viewModel={viewModel} />
        <Footer/>
    </>
  );
}

export default Home;
