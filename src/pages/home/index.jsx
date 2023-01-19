import "./index.css";

import Header from "./Header";
import News from "./News";
import Services from "./Services";
import Activities from "./Activities";
import Supports from "./Supports";
import Footer from "./Footer";

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
