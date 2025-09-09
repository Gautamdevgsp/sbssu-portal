import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";   // ✅ Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Import Bootstrap JS
import "./index.css";  // keep if you have custom styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
