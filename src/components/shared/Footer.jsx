import { Link, useLocation } from "react-router-dom";
import { navLinks, socials, theme } from "../../../data/constants";
import Logo from "../ui/Logo";

const { textColor, bgColor, hoverTextColor } = theme;

const Footer = () => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<footer>
			<section className="bg-[#b8b8b8] max-h-[220px] h-full">
				<div className="mx-auto max-w-7xl px-4 py-4 flex flex-col lg:flex-row justify-center items-center">
					<Link to="/" className="w-full lg:w-1/3 my-auto flex justify-center">
						<Logo fill="white" hoverFill="#e13593" width={350} height={100} />
					</Link>
					<div className="hidden lg:flex w-full lg:w-1/3 text-center flex-col justify-center items-center my-auto h-full">
						<div>
							<label htmlFor="mailing_list" className="text-gray-200 text-sm w-full">
								Rejoignez notre liste d'envoi pour connaître les dernières nouvelles
							</label>
							<div style={{ width: "100%" }} className="mt-2">
								<input id="mailing_list" placeholder="Adresse courriel..." className="bg-white px-3 py-1.5 w-[75%] focus:outline-none" />
								<button className={`hover:opacity-80 text-white uppercase tracking-wider font-medium px-3 py-1.5 bg-[#e13593]`} type="custom">
									Envoyer
								</button>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/3 flex flex-col justify-center lg:justify-end text-center lg:text-end pr-4">
						<div className="flex justify-center lg:justify-end items-end gap-2.5">
							{socials.map((social, index) => {
								const Icon = social.icon;
								return (
									<a
										key={index}
										target="_blank"
										title={social.title}
										href={social.href}
										className={`text-white text-2xl hover:text-[#e13593] transition duration-300`}
									>
										<Icon />
									</a>
								);
							})}
						</div>
						<div className="mt-2">
							<ul className="">
								<li>
									<a href="#" className={`text-white hover:text-[#e13593] font-medium text-sm transition duration-300`}>
										Politique de confidentialité
									</a>
								</li>
								<li>
									<a href="#" className={`text-white hover:text-[#e13593] font-medium text-sm transition duration-300`}>
										Mentions légales
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-[#565656]">
				<div className="mx-auto max-w-2xl px-4 py-4 flex flex-col justify-center items-center">
					<p className="text-sm text-center text-gray-100">Copyright © {new Date().getFullYear()} - Fannie Therrien - Tous droits réservés</p>
					<p className="text-gray-100 text-sm mt-1">
						Une création de{" "}
						<a href="https://yvanblanchette.com" className={`hover:opacity-85 font-medium tracking-wider transition text-[#e13593]`}>
							Yvan jr Blanchette
						</a>
					</p>
				</div>
			</section>
		</footer>
	);
};
export default Footer;
