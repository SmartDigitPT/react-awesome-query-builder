
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import DemoSwitch from "./demo_switch";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "../css/antd.less"; // or import "antd/dist/antd.css";
import "../css/styles.scss";
//import '../css/compact_styles.scss'; //optional

const rootElement = window.document.getElementById("root");

ReactDOM.render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="switch" element={<DemoSwitch />} />
    </Routes>
  </BrowserRouter>
), rootElement);
