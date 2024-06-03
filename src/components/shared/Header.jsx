import { Link, useLocation } from "react-router-dom";
import { navLinks, socials, theme } from "../../../data/constants";
import Logo from "../ui/Logo";

const { textColor, bgColor, hoverTextColor } = theme;

const Header = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<header className="bg-white w-screen max-w-[90rem] h-screen lg:h-[120px] mx-auto flex flex-col justify-start lg:flex-row lg:justify-between items-center pt-12 p-6">
			<div className="flex flex-col lg:flex-row items-center gap-8 lg:w-[50vw] mb-8">
				<Link to="/">
					<Logo fill="black" hoverFill="#e13593" width={350} height={100} />
				</Link>
				<nav>
					<ul className="flex flex-col lg:flex-row justify-start items-center gap-8">
						{navLinks[0].map((link, index) => (
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
					{navLinks[1].map((link, index) => (
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
					<li>
						{socials.map((social) => {
							const Icon = social.icon;
							return (
								<a key={social.title} target="_blank" title={social.title} href={social.href} className={`text-white text-2xl transition ${hoverTextColor}`}>
									<Icon />
								</a>
							);
						})}
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
