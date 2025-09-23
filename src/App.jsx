import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Router/Router.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="pt-[64px]">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
