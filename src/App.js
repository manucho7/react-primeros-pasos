import React from "react";
import "./App.css";
import Header from "./Components/Header/index";
import Aside from "./Components/Aside/index";
import ProductsDB from "./Components/ProductsDB/index";
import AmountProducts from "./Components/AmountProducts/index";
import UserQuantity from "./Components/UserQuantity/index";
import LastProduct from "./Components/LastProduct/index";
import CategoriesDB from "./Components/CategoriesDB/index";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Aside />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <ProductsDB />
                </div>
                <div className="col-md-4 mb-4">
                  <AmountProducts />
                </div>
                <div className="col-md-4 mb-4">
                  <UserQuantity />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <LastProduct />
                </div>
                <div className="col-lg-6 mb-4">
                  <CategoriesDB />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
