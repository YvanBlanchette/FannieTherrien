import { useEffect, useState } from "react";
import BooksHeader from "../components/books/BooksHeader";
import BookDetails from "./BookDetails";
import { books as booksData } from "../../data/books";

const Books = () => {
	const [book, setBook] = useState(null);

	useEffect(() => {
		setBook(booksData[0]);
	}, []);

	const handleClick = (bookName) => {
		const selectedBook = booksData.find((b) => b.title === bookName);
		setBook(selectedBook);
	};

	return (
		<div>
			<h2 className="lg:mt-10 text-4xl lg:text-5xl text-center text-gray-900 uppercase font-semibold mb-2.5">
				<span className="inline-block lg:inline text-[#F1F1F1] bg-[#df2a8d] uppercase py-2 px-4 opacity-80">Ma collection</span>{" "}
				<span className="block lg:inline">de livres</span>
			</h2>
			<img src="/assets/images/underline.svg" alt="brush underline" className="w-[55%] mx-auto" />
			<div className="w-[90%] max-w-6xl mx-auto">
				<BooksHeader handleClick={handleClick} />
				<BookDetails book={book} />
			</div>
		</div>
	);
};

export default Books;
