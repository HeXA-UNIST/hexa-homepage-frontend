import "@css/tailwindCopy.css";
import "@css/app/App.css";
import "@css/app/Hexa.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "mobx-react";

import LoginStore from "common/stores/LoginStore";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import HomePage from "pages/home";
// import IntroductionPage from "@pages/introduction";
import ProjectPage from "@pages/project";
import ServicePage from "@pages/service";
import NewsPage from "@pages/news";
import SeminarPage from "@pages/seminar";
// import Activities from "pages/activities";
import LoginPage from "@pages/login";

function App() {
    return (
        <div className="App bg-black">
            <Provider loginStore={new LoginStore()}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        {/* <Route path="/introduction" element={<IntroductionPage />} /> */}
                        <Route path="/projects" element={<ProjectPage />} />
                        <Route path="/services" element={<ServicePage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/seminars" element={<SeminarPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        {/* <Route path="/activities" element={<Activities />} /> */}
                        <Route path="/*" element={<HomePage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
