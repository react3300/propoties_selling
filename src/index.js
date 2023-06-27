import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.min.css";
import "../src/assets/scss/global.scss";
import "../src/assets/scss/bootstrap.scss";
import App from './App';
import AppStates from "./utils/AppStates"
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppStates>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </AppStates>
);

// Any Condition where DEBUGGING is NEEDED
var DEBUG = process.env.NODE_ENV === "development";
if (!DEBUG) {
  console.log = () => { };
}