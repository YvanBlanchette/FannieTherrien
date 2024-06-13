const BooksHeader = ({ handleClick }) => {
	return (
		<div>
			<div className="flex lg:px-10 py-20 mx-auto justify-center w-full lg:translate-x-[20px]">
				<div
					onClick={() => handleClick("Béa dans tous ses états")}
					className="w-[160px] -rotate-[9deg] z-10 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-500"
				>
					<img src="/assets/images/9782896625901_large.jpg" alt="Béa dans tous ses états" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("Dangereux Directeur")}
					className="w-[160px] lg:-translate-x-[10px] rotate-[8deg] z-20 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782898120930_large.jpg" alt="Dangereux Directeur" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("Victoria: Ma vie n'est pas une fiction")}
					className="w-[160px] lg:-translate-x-[25px] z-30 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782762599220_large.jpg" alt="Victoria" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("#SANSTABOU: Être ado")}
					className="w-[160px] lg:-translate-x-[30px] rotate-[8deg] z-40 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782897920753_large.jpg" alt="#SansTabou" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("La colère du démon")}
					className="w-[160px] lg:-translate-x-[40px] -rotate-[8deg] z-50 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782898121234_large.jpg" alt="La colère du démon" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("L'encre de la mort")}
					className="w-[160px] lg:-translate-x-[50px] z-50 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782898122842_large.jpg" alt="L'encre de la mort" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("Panique à l'école")}
					className="w-[160px] lg:-translate-x-[60px] rotate-[11deg] z-50 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782898123320_large.jpg" alt="Panique à l'école" className="w-full max-w-full shadow-custom" />
				</div>
				<div
					onClick={() => handleClick("Idées noires")}
					className="w-[160px] lg:-translate-x-[80px] translate-y-[8px] lg:translate-y-[15px] rotate-[23deg] z-50 hover:rotate-0 hover:scale-150 hover:z-[100] cursor-pointer transition-scale duration-300"
				>
					<img src="/assets/images/9782897921668_large.jpg" alt="Idées noires" className="w-full max-w-full shadow-custom" />
				</div>
			</div>
		</div>
	);
};

export default BooksHeader;
