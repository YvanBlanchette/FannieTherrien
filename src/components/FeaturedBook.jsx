import { FaAmazon, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AmazonLogo from "/assets/images/amazon_logo.svg";

const FeaturedBook = () => {
	return (
		<div className="flex pb-6 gap-6">
			<div className="flex flex-col justify-center h-full self-center">
				<p className="text-gray-800 pl-1 font-semibold tracking-widest">FANNIE THERRIEN</p>
				<h1 className="text-6xl">
					<span className="text-[#e13593] block -mb-2 font-semibold ">Idées</span>
					<span className="text-black font-semibold">NOIRES</span>
				</h1>
				<p className="text-md text-gray-900 max-w-[400px] p-2 mt-4 text-justify">
					J'ai tout pour être heureuse et, pourtant, j'ai perdu l'envie de sourire. Depuis que mes parents m'ont annoncé qu'on déménagerait l'été prochain, mon
					quotidien s'est assombri. Un immense vide s'est installé en moi, insidieusement...
				</p>

				<div className="flex gap-5 justify-center align-center lg:justify-start p-2 mt-4">
					<a
						href={
							"https://www.amazon.ca/-/fr/Fannie-Therrien-ebook/dp/B08C38NVWK/ref=sr_1_4?dib=eyJ2IjoiMSJ9.hGEoVXQWDpZuAZ2d3z-UCfp-41NqnZHpjh8psST8OM5f9O7RVwzH3MXiXD8WN8EGY_5WOg1OyYxgedffPn1khS0502KIdCy_bfRvAvejQoj2y4qk-_Au3blqG6XtYcTWIz6EGhaI0IQ4gBoFy5kiGDgsHVxiS4b6QOxFERQMrevTB3OO8L89x-eTb6vMKHIs3y2RhayMAQo8Gr5cDJKeLDJ_0N3GKzKCyxkHa7_AwgPQuu4i8umk0WpiydDrC7_ccFitAOzpQ_Kjrm1mVVn7OEhFAkM5o7qkJZKs-x5fUN0.uIr5PRA3YhY2yM3eCfgaQSQ2sDjXhOfJ1Zjih0CM_-U&dib_tag=se&keywords=id%C3%A9es+noires&qid=1717372005&sr=8-4"
						}
						className="flex flex-col text-black items-center px-6 py-2 lg:text-md gap-1 bg-[#ff9900] hover:bg-[#FBBD69] font-medium transition w-[200px]"
						target="_blank"
					>
						Commander sur <img src={AmazonLogo} alt="amazon" className="w-[80px]" />
					</a>
					<Link
						to={"/livres/9782897921668"}
						className={`flex items-center gap-2 px-6 py-2.5 lg:text-md text-black hover:bg-gray-100 font-medium transition duration-300`}
					>
						En savoir plus <FaArrowRight size={20} />
					</Link>
				</div>
			</div>
			<div className="max-w-[250px] shadow-sm self-center">
				<img src="/assets/images/9782897921668_large.jpg" alt="texture" className="max-w-full h-auto " />
			</div>
		</div>
	);
};
export default FeaturedBook;
