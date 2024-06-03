import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Hero from "./components/Hero";
import Router from "./components/Router";

function App() {
	return (
		<div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
			<Header />
			<main className="flex-1 p-6">
				<Router />
			</main>
			<Footer />
		</div>
	);
}

export default App;