import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Books from "./Books";
import News from "./News";
import Contact from "./Contact";
import Shop from "./Shop";
import BookDetails from "./BookDetails";

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
