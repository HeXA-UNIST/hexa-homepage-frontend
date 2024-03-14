import "@css/tailwindCopy.css";
import "@css/app/App.css";
import "@css/app/Hexa.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "mobx-react";

import LoginStore from "common/stores/LoginStore";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import HomePage from "pages/home";

import ActivityPage from "@pages/activities";

import ProjectListView from "@pages/project/activity";
import ServiceListView from "@pages/service/activity";
import NewsListView from "@pages/news/activity";
import SeminarListView from "@pages/seminar/activity";

import ProjectDetailView from "@pages/project/detail";
import ServiceDetailView from "@pages/service/detail";
import NewsDetailView from "@pages/news/detail";
import SeminarDetailView from "@pages/seminar/detail";

import LoginPage from "@pages/login";

function App() {
    return (
        <div className="App bg-black">
            <Provider loginStore={new LoginStore()}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/activity" element={<ActivityPage />}>
                            <Route
                                path="projects"
                                element={<ProjectListView />}
                            />
                            <Route
                                path="services"
                                element={<ServiceListView />}
                            />
                            <Route path="news" element={<NewsListView />} />
                            <Route
                                path="seminars"
                                element={<SeminarListView />}
                            />
                        </Route>

                        <Route path="/project/:id" element={<ProjectDetailView />} />
                        <Route path="/service/:id" element={<ServiceDetailView />} />
                        <Route path="/news/:id" element={<NewsDetailView />} />
                        <Route path="/seminar/:id" element={<SeminarDetailView />} />

                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
