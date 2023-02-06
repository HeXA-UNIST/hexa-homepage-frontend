import Header from "@pages/home/sections/Header";
import News from "@pages/home/sections/News";
import Services from "@pages/home/sections/Services";
import Activities from "@pages/home/sections/Activities";
import Supports from "@pages/home/sections/Supports";
import Footer from "@pages/home/sections/Footer";

function Home() {
  return (
    <div>
      <Header />
      <News />
      <Services />
      <Activities />
      <Supports />
      <Footer />
    </div>
  );
}

export default Home;
