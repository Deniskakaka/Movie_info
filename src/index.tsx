import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.querySelector('#root');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);