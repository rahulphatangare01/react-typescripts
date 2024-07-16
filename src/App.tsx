import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/routing-test/layout/R-Layout";
import Home from "./component/routing-test/r-home/R-home";
import About from "./component/routing-test/r-about/R-About";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
