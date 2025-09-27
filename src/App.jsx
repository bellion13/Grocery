import React from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux-toolkit/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from "./components/Header";
import Router from "./Router/Router.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <ScrollToTop />
        
        <Header />
        <div className="pt-[64px]">
          <Router />
        </div>
        <Footer />
         {/* Toast Container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
