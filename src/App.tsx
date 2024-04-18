import "@css/tailwindCopy.css";
import "@css/app/App.css";
import "@css/app/Hexa.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "pages/home";
import IntroductionPage from "@pages/introduction";
import ProjectPage from "@pages/project";
import ServicePage from "@pages/service";
import NoticePage from "@pages/notice";
// import Activities from "pages/activities";
import LoginPage from "@pages/login";
import { AdminRouter } from "@pages/admin";
import { AuthenticationProvider } from "common/context/AuthenticationContext";
import { AdminNewsRouter } from "@pages/admin/pages/news";
import AdminProjectRouter from "@pages/admin/pages/project";
import AdminSeminarRouter from "@pages/admin/pages/seminar";
import AdminServiceRouter from "@pages/admin/pages/service";

function App() {
  return (
    <div className="App bg-black">
      <AuthenticationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/activities" element={<Activities />} /> */}
            <Route path="/*" element={<HomePage />} />
            <Route path="/admin" element={<AdminRouter />}>
              <Route path="/admin/news" element={<AdminNewsRouter />} />
              <Route path="/admin/project" element={<AdminProjectRouter />} />
              <Route path="/admin/seminar" element={<AdminSeminarRouter />} />
              <Route path="/admin/service" element={<AdminServiceRouter />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
