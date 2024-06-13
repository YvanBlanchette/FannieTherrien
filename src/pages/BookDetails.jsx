import BookSummary from "../components/shared/BookSummary";

const BookDetails = ({ book }) => {
	if (!book) {
		return <h1>Aucuns livre trouvé!</h1>;
	}

	return (
		<>
			<BookSummary book={book} />
		</>
	);
};

export default BookDetails;
