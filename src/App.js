import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, Loader, Footer } from "./components";
import "./App.css";

const Homepage = lazy(() => import("./pages/home"));
const Cryptocurrencies = lazy(() => import("./pages/crypto-currencies"));
const CryptoDetails = lazy(() => import("./pages/crypto-details"));

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <Suspense fallback={<Loader />}>
          <div className="routes">
            <Switch>
              <Route exact path="/cryptoverse-react-app">
                <Homepage />
              </Route>
              <Route exact path="/cryptoverse-react-app/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/cryptoverse-react-app/crypto/:coinId">
                <CryptoDetails />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </Layout>
    </div>
  </div>
);

export default App;
