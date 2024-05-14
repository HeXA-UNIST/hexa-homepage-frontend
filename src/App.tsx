import "@css/tailwindCopy.css";
import "@css/app/App.css";
import "@css/app/Hexa.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react";

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
import { AdminRouter } from "@pages/admin";
import { AuthenticationProvider } from "common/context/AuthenticationContext";
import AdminNewsRouter from "@pages/admin/pages/news";
import AdminProjectRouter from "@pages/admin/pages/project";
import AdminSeminarRouter from "@pages/admin/pages/seminar";
import AdminServiceRouter from "@pages/admin/pages/service";

function App() {
    return (
        <div className="App bg-black">
            <AuthenticationProvider>
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

                        <Route
                            path="/project/:id"
                            element={<ProjectDetailView />}
                        />
                        <Route
                            path="/service/:id"
                            element={<ServiceDetailView />}
                        />
                        <Route path="/news/:id" element={<NewsDetailView />} />
                        <Route
                            path="/seminar/:id"
                            element={<SeminarDetailView />}
                        />

                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/admin" element={<AdminRouter />}>
                            <Route
                                path="/admin/news"
                                element={<AdminNewsRouter />}
                            />
                            <Route
                                path="/admin/project"
                                element={<AdminProjectRouter />}
                            />
                            <Route
                                path="/admin/seminar"
                                element={<AdminSeminarRouter />}
                            />
                            <Route
                                path="/admin/service"
                                element={<AdminServiceRouter />}
                            />
                        </Route>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthenticationProvider>
        </div>
    );
}

export default observer(App);
