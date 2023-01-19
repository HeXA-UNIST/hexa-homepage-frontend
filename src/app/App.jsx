import "./App.css";
import Home from "pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import LoginPage from "pages/login";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
