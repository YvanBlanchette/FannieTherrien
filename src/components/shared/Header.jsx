import { Link, useLocation } from "react-router-dom";
import { navLinks, socials, theme } from "../../../data/constants";
import Logo from "../ui/Logo";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const { textColor, bgColor, hoverTextColor } = theme;

const Header = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavOpen(!mobileNavOpen);
	};

	const closeMobileNav = () => {
		setMobileNavOpen(false);
	};

	return (
		<header className="bg-white w-screen max-w-7xl lg:h-[120px] lg:mt-4 mx-auto flex flex-col justify-start lg:flex-row lg:justify-between items-center pt-6 lg:py-6 px-10">
			<div className="flex flex-col lg:flex-row lg:justify-between items-center mb-4 lg:mb-8 w-full">
				<div className="flex justify-between lg:justify-start items-center w-full">
					<Link to="/">
						<Logo fill="black" hoverFill="#e13593" width={275} height={100} />
					</Link>
					<RiMenu3Line onClick={toggleMobileNav} className="text-3xl text-black cursor-pointer hover:text-[#e13593] inline lg:hidden transition duration-300" />
				</div>

				<nav
					className={`absolute lg:static top-[130px] lg:top-0 w-screen lg:w-full h-full bg-white z-[900] lg:block transition-all duration-200 ${
						mobileNavOpen ? "block" : "hidden"
					}`}
				>
					<ul className={`flex flex-col lg:flex-row justify-evenly pb-40 lg:pb-0 lg:justify-end w-full items-center gap-6 h-full`}>
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link
									to={link.to}
									className={`nav-link text-lg capitalize font-medium ${
										pathname === link.to ? " active text-[#e13593] pointer-events-none" : "text-gray-900 hover:text-[#e13593] transition-all duration-300"
									}`}
									onClick={closeMobileNav}
								>
									{link.name}
								</Link>
							</li>
						))}
						<li className="flex gap-4 lg:hidden">
							{socials.map((social, index) => {
								const Icon = social.icon;
								return (
									<a key={index} target="_blank" title={social.title} href={social.href} className={`text-black text-2xl transition ${hoverTextColor}`}>
										<Icon />
									</a>
								);
							})}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
