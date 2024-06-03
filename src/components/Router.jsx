import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Books from "../pages/Books";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import BookDetails from "../pages/BookDetails";

const Router = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<About />} />
				<Route path="/livres" element={<Books />} />
				<Route path="/nouvelles" element={<News />} />
				<Route path="/me-joindre" element={<Contact />} />
				<Route path="/boutique" element={<Shop />} />
				<Route path="/livres/:bookISBN" element={<BookDetails />} />
			</Routes>
		</>
	);
};
export default Router;
