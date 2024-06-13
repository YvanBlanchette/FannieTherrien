import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import BookDetails from "../components/pages/books/BookDetails";

const Book = () => {
	const { books, selectedBook, setSelectedBook } = useContext(DataContext);
	const { bookISBN } = useParams(); // Ensure to match the parameter name with route path

	useEffect(() => {
		console.log("ISBN from URL:", bookISBN); // Debugging output
		const book = books.find((b) => b.isbn === bookISBN);
		setSelectedBook(book);
	}, [books, bookISBN, setSelectedBook]);

	return (
		<div>
			<div className="w-[90%] max-w-6xl mx-auto">
				<BookDetails book={selectedBook} />
			</div>
		</div>
	);
};

export default Book;
