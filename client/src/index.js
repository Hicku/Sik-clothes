import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PTlFxE2lqlqIIm1zdyqw4OaeWE3k07apauqhKeAuqGOYxgGB7zt3qlNF6AGdF5qfCBOqOwIbCOLQoXSyX8qwaqQ00RpuzrXmG"
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
