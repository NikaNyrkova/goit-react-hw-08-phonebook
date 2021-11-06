import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import Loader from "./components/Loader";

import "modern-normalize/modern-normalize.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={<Loader />} persistor={store.persistor}>
      <BrowserRouter>
        <Provider store={store.store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
