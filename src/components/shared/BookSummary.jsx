import htmlParser from "html-react-parser";
import AmazonLogo from "/assets/images/amazon_logo.svg";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookSummary = ({ book }) => {
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-16 w-full max-w-7xl mx-auto mt-8 lg:mt-10 gap-y-8 min-h-[800px] text-gray-900 pb-6">
				<div className="w-full lg:w-1/3">
					<img className="max-w-full w-full shadow-custom" src={book.cover_image} alt={book.title} />
				</div>
				<div className="w-full lg:w-2/3">
					<h2 className={`text-3xl lg:text-5xl text-center lg:text-start text-[#e13593] uppercase font-bold mb-6`}>
						{book.title}
						<Link to="/a-propos" className={`text-gray-700 hover:text-[#e13593] transition duration-300 block text-lg`}>
							{book.author}
						</Link>
					</h2>
					<ul className="mb-4 text-gray-900 text-base -space-y-1">
						<li>
							<span className="font-medium mr-2">ISBN :</span> {book.isbn}
						</li>
						<li>
							<span className="font-medium mr-2">Date de sortie :</span> {book.release_date}
						</li>
						<li>
							<span className="font-medium mr-2">Langue :</span> {book.language}
						</li>
						<li>
							<span className="font-medium mr-2">Éditeur :</span> {book.editor}
						</li>
						<li>
							<span className="font-medium mr-2">Collection :</span> {book.collection}
						</li>
						<li>
							<span className="font-medium mr-2">Catégories :</span> {book.categories.join(", ")}
						</li>
						<li>
							<span className="font-medium mr-2">Nombre de pages :</span> {book.page_count} pages
						</li>
					</ul>

					<div className="overflow-auto">
						<div className="text-base">{htmlParser(book.description)}</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-5 justify-center items-center align-center lg:justify-start pb-6 text-center">
						<a
							href={book.excerpt}
							target="_blank"
							className={`flex justify-center items-center px-6 py-2.5 lg:text-lg text-white hover:text-white gap-3 bg-[#3c3c3c] hover:opacity-80 font-medium transition w-full lg:w-[250px] h-[70px]`}
						>
							Lire un extrait <FaBookOpen size={30} />
						</a>
						<a
							href={book.amazon_link}
							className="flex flex-col text-black items-center px-6 py-2 lg:text-md gap-1 bg-[#ff9900] hover:bg-[#FBBD69] font-medium transition w-full lg:w-[200px] h-[70px]"
							target="_blank"
							rel="noopener noreferrer"
						>
							Commander sur <img src={AmazonLogo} alt="amazon" className="w-[80px]" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default BookSummary;
