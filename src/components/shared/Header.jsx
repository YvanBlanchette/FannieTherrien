import { Link, useLocation } from "react-router-dom";

const links = [
	[
		{
			name: "accueil",
			to: "/",
		},
		{
			name: "livres",
			to: "/livres",
		},
		{
			name: "à propos",
			to: "/a-propos",
		},
		{
			name: "nouvelles",
			to: "/nouvelles",
		},
	],
	[
		{
			name: "me joindre",
			to: "/me-joindre",
		},
		{
			name: "boutique",
			to: "https://www.amazon.ca/s?i=stripbooks&rh=p_27%3AFannie+Therrien&s=relevancerank&language=fr&text=Fannie+Therrien&ref=dp_byline_sr_book_1",
		},
	],
];

const Header = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<header className="bg-white w-screen max-w-[90rem] h-screen lg:h-[120px] mx-auto flex flex-col justify-start lg:flex-row lg:justify-between items-center p-6">
			<div className="flex flex-col lg:flex-row items-center gap-8 lg:w-[50vw] mb-8">
				<Link to="/" className="w-[325px]">
					<img src="/assets/images/fannie-therrien_logo.svg" alt="Logo" className="max-w-[100%]" />
				</Link>
				<nav>
					<ul className="flex flex-col lg:flex-row justify-start items-center gap-8">
						{links[0].map((link, index) => (
							<li key={index}>
								<Link
									to={link.to}
									className={`nav-link text-lg capitalize font-medium ${
										pathname === link.to ? " active text-[#e13593] pointer-events-none" : "text-gray-900 hover:text-[#e13593] transition-all duration-300"
									}`}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<nav>
				<ul className="flex flex-col lg:translatex-0 lg:flex-row justify-start lg:justify-end items-center gap-8 text-lg capitalize text-gray-900 font-medium">
					{links[1].map((link, index) => (
						<li key={index}>
							<Link
								to={link.to}
								className={`nav-link text-lg capitalize font-medium ${
									pathname === link.to ? " active text-[#e13593] pointer-events-none" : "text-gray-900 hover:text-[#e13593] transition-all duration-300"
								}`}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
export default Header;
