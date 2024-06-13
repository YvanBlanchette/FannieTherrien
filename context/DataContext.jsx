import React, { createContext, useState, useEffect } from "react";
import { books as booksData } from "../data/books";
import { reviews as reviewsData } from "../data/reviews";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [selectedBook, setSelectedBook] = useState(null); // Start with null
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		setBooks(booksData);
		setReviews(reviewsData);
	}, []);

	useEffect(() => {
		if (books.length > 0) {
			setSelectedBook(books[0]);
		}
	}, [books]);

	return <DataContext.Provider value={{ books, setBooks, selectedBook, setSelectedBook, reviews, setReviews }}>{children}</DataContext.Provider>;
};
