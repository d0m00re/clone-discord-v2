import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { store } from "./service/redux/redux";
import { Provider } from "react-redux";

import AuthManagement from "./components/features/auth/AuthManagement";
import * as Feature from "./components/features";

import routerInfo from "./router/url";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
