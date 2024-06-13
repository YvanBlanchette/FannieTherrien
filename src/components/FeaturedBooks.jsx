import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AmazonLogo from "/assets/images/amazon_logo.svg";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { htmlToText } from "html-to-text";
import LinesEllipsis from "react-lines-ellipsis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const FeaturedBooks = () => {
	const { books } = useContext(DataContext);

	const getMostRecentBooks = (books) => {
		if (!Array.isArray(books)) return [];
		return books.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 3);
	};

	const mostRecentBooks = getMostRecentBooks(books);
	console.log(mostRecentBooks);

	if (!mostRecentBooks || mostRecentBooks.length === 0) {
		return <div>Aucuns livres n'a été trouvés...</div>;
	}

	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			autoplay={{
				delay: 3500,
				disableOnInteraction: false,
			}}
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
			loop
			pagination={{ clickable: true }}
			className="cursor-grab"
			style={{ width: "90vw", marginInline: "auto" }}
		>
			{mostRecentBooks.map((book) => {
				const bookDescription = htmlToText(book.description, {
					wordwrap: 130,
				});
				return (
					<SwiperSlide key={book.isbn}>
						<div className="flex flex-col lg:flex-row pb-6 gap-y-4 gap-x-6 justify-center lg:justify-end">
							<div className="flex flex-col justify-center lg:justify-end h-full self-center">
								<p className="text-gray-800  text-center lg:text-start pl-1 font-semibold text-xs lg:text-sm -mb-2">{book.author}</p>
								<h1 className="text-[2.5rem] text-center lg:text-start lg:text-5xl font-semibold text-[#e13593]">{book.title}</h1>
								<p className="text-md text-gray-900 max-w-[400px] p-2 lg:mt-4 text-justify">
									<LinesEllipsis text={bookDescription} maxLine="5" ellipsis="..." basedOn="words" />
								</p>
								<div className="flex flex-col lg:flex-row gap-5 justify-center items-center align-center lg:justify-start p-2 mt-4 mb-4">
									<a
										href={book.amazon_link}
										className="flex flex-col text-black items-center px-6 py-2 lg:text-md gap-1 bg-[#ff9900] hover:bg-[#FBBD69] font-medium transition w-[200px] h-[70px]"
										target="_blank"
										rel="noopener noreferrer"
									>
										Commander sur <img src={AmazonLogo} alt="amazon" className="w-[80px]" />
									</a>
									<Link
										to={`/livres/${book.isbn}`}
										className="w-[200px] h-[70px] flex items-center justify-center gap-2 px-6 py-2 lg:text-md text-black bg-gray-100 lg:bg-transparent hover:bg-gray-100 font-medium transition duration-300"
									>
										En savoir plus <FaArrowRight size={20} />
									</Link>
								</div>
							</div>
							<div className="max-w-[250px] shadow-sm self-center">
								<img src={book.cover_image} alt="cover" className="max-w-full h-auto" />
							</div>
						</div>
					</SwiperSlide>
				);
			})}

			<div className="swiper-pagination"></div>
		</Swiper>
	);
};

export default FeaturedBooks;
