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
				<div className="mx-auto max-w-7xl px-4 py-4 flex justify-center items-center">
					<Link to="/" className="w-full lg:w-1/3 my-auto">
						<Logo fill="white" hoverFill="#e13593" width={350} height={100} />
					</Link>
					<div className="w-full lg:w-1/3 text-center flex flex-col justify-center items-center my-auto h-full mt-8">
						<div>
							<label htmlFor="mailing_list" className="text-gray-200 text-sm w-full">
								Rejoignez notre liste d'envoi pour connaître les dernières nouvelles
							</label>
							<div style={{ width: "100%" }} className="mt-2">
								<input id="mailing_list" placeholder="Adresse courriel..." className="bg-white px-3 py-1.5 w-[75%] focus:outline-none" />
								<button className={`hover:opacity-80 text-white uppercase tracking-wider font-medium px-3 py-1.5 ${bgColor}`} type="custom">
									Envoyer
								</button>
							</div>
						</div>
						<div className="flex justify-center items-end gap-2.5 mt-4">
							{socials.map((social, index) => {
								const Icon = social.icon;
								return (
									<a key={index} target="_blank" title={social.title} href={social.href} className={`text-white text-2xl transition ${hoverTextColor}`}>
										<Icon />
									</a>
								);
							})}
						</div>
						<div className="mt-4">
							<a href="#" className={`text-white ${hoverTextColor} font-medium text-sm transition`}>
								Mentions légales et politique de confidentialité
							</a>
						</div>
					</div>
					<div className="w-full lg:w-1/3 flex justify-end text-end pr-4">
						<ul>
							{navLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.to}
										className={`${
											pathname === link.to ? `font-medium pointer-events-none ${textColor}` : `text-gray-200 ${hoverTextColor}`
										} text-lg capitalize transition`}
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<section className="bg-[#565656]">
				<div className="mx-auto max-w-2xl px-4 py-4 flex flex-col justify-center items-center">
					<p className="text-gray-100">Copyright © {new Date().getFullYear()} - Fannie Therrien - Tous droits réservés</p>
					<p className="text-gray-100 text-sm mt-1">
						Une création de{" "}
						<a href="https://yvanblanchette.com" className={`hover:opacity-85 font-medium tracking-wider transition ${textColor}`}>
							Yvan jr Blanchette
						</a>
					</p>
				</div>
			</section>
		</footer>
	);
};
export default Footer;
