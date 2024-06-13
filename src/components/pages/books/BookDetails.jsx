import BookSummary from "../../shared/BookSummary";

const BookDetails = ({ book }) => {
	if (!book) {
		return (
			<div className="flex justify-center items-center w-full h-[385px] text-3xl text-gray-900">
				<h1>Désolé, aucun livre trouvé...</h1>
			</div>
		);
	}

	return (
		<>
			<BookSummary book={book} />
		</>
	);
};

export default BookDetails;
