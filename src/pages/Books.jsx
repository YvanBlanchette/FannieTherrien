import { useContext, useEffect, useState } from "react";
import BooksHeader from "../components/pages/books/BooksHeader";
import { DataContext } from "../../context/DataContext";
import BookDetails from "../components/pages/books/BookDetails";

const Books = () => {
	const { books, selectedBook, setSelectedBook } = useContext(DataContext);

	const handleClick = (bookName) => {
		const book = books.find((b) => b.title === bookName);
		setSelectedBook(book);
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
				<BookDetails book={selectedBook} />
			</div>
		</div>
	);
};

export default Books;
