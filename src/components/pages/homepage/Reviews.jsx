import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HTMLReactParser from "html-react-parser/lib/index";
import { DataContext } from "../../../../context/DataContext";
import { useContext } from "react";

const Reviews = () => {
	const { reviews } = useContext(DataContext);

	return (
		<section className="bg-[#F1F1F1] py-6 pb-10 ">
			<h3 className="text-5xl py-4 tracking-wide font-semibold text-center uppercase text-gray-900 mt-6 mb-2">
				Avis des <span className="inline-block lg:inline text-[#F1F1F1] bg-[#df2a8d] py-1.5 px-3 uppercase px-5 opacity-80 mt-2 lg:mt-0">lecteurs</span>
			</h3>
			<img src="/assets/images/underline.svg" alt="brush underline" className="w-[90%] lg:w-[40%] mx-auto mb-10 -mt-3" />
			<Swiper
				modules={[Autoplay]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				spaceBetween={10}
				slidesPerView={1}
				breakpoints={{
					// when window width is >= 640px
					640: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					// when window width is >= 1024px
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				loop
				pagination={{ clickable: true }}
				style={{ width: "70vw", marginInline: "auto" }}
			>
				{reviews.map((review) => (
					<SwiperSlide key={review.id} className="">
						<div className="card w-72 bg-white flex flex-col p-6 justify-center text-gray-900 h-full">
							<h3 className="flex items-center gap-3 text-2xl font-semibold">{review.name} </h3>
							<p className="text-lg">{review.book}</p>
							<a href={review.sourceLink} target="_blank" className="text-md cursor-pointer mb-4">
								{review.source}
							</a>

							{review.rating === 4 ? (
								<div className="rating mb-2">
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400 opacity-20" />
								</div>
							) : (
								<div className="rating mb-2">
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
									<input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" />
								</div>
							)}

							<p className="text-sm">{HTMLReactParser(review.text)}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
export default Reviews;
