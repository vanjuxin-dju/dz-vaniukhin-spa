import React from "react";
import ReactClient from "react-dom/client";
import App from "./App.js";

const root = ReactClient.createRoot(document.getElementById('root'));
root.render(<App />);