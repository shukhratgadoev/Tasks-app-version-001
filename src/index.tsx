import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
//style
import "./assets/global.css";
import "antd/dist/antd.css";
//components
import MainLayout from "./layouts/Main";

ReactDOM.render(<MainLayout />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
