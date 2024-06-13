import React, { createContext, useState, useEffect } from "react";
import { books as booksData } from "../data/books";
import { reviews as reviewsData } from "../data/reviews";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		setBooks(booksData);
		setReviews(reviewsData);
	}, []);

	return <DataContext.Provider value={{ books, setBooks, reviews, setReviews }}>{children}</DataContext.Provider>;
};
