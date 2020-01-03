import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";

import App from "./App";
import itemReducer from "./store/reducers/items";
import * as serviceWorker from "./serviceWorker";

const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    isChrome &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({
  cart: itemReducer
}); //for adding more than one reducers

const store = createStore(rootReducer,composeEnhancers()); // to apply any middleware
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
