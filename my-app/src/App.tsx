import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Drawer from "./components/Drawer";
import { Provider } from "react-redux";
import store from "./store/Store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div id="root" className="drawer h-full">
          <div className="drawer-content z-10">
            <Header />
            <MainBanner />
            <Section />
            <Footer />
          </div>
          <Drawer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
