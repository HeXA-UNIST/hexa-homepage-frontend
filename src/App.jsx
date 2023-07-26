import "static/css/app/App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "mobx-react";

import authenticationStore from "@stores/AuthenticationStore";

import LoginPage from "pages/login";
import Home from "pages/home";
import Activities from "pages/activities";

function App() {
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      authenticationStore.setToken(storedToken);
    }
  }, []);
  return (
    <div className="App">
      <Provider authenticationStore={authenticationStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
