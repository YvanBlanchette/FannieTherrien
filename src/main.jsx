import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "swiper/css/bundle";
import "./components/css/swiper-custom.css";
import { DataProvider } from "../context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<DataProvider>
			<App />
		</DataProvider>
	</BrowserRouter>
);
