import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import Footer from "./components/Footer";
import Section from "./components/Section";

import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <MainBanner />
        <Section />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
