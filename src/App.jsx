import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Router from "./pages/Router";

function App() {
	return (
		<div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
			<Header />
			<main className="flex-1">
				<Router />
			</main>
			<Footer />
		</div>
	);
}

export default App;
