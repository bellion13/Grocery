import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Router/Router.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="pt-20">
          <Router />
        </div>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
