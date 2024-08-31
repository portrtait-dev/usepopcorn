import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} />
    <StarRating size={36} color="red" />

    {/* <App /> */}
  </React.StrictMode>
);
