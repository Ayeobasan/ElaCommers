import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { store } from "./app/store";
import {Provider} from 'react-redux'
import store from "./Redux/Store/Store.jsx";
// import { store } from "./Redux/Store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
