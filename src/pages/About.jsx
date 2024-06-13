import { socials } from "../../data/constants";

const About = () => {
	return (
		<div className="w-[90%] max-w-7xl flex flex-col lg:flex-row gap-y-4 justify-start items-center lg:justify-between lg:items-start gap-[10%] mx-auto lg:pl-10">
			<div>
				<img src="/assets/images/fannie-therrien_hero-reverse.jpg" alt="Fannie Therrien" className="max-w-[300px]" />
			</div>
			<div className="max-w-[90%] lg:max-w-[70%] text-gray-900">
				<h2 className="text-4xl text-center lg:text-5xl text-[#e13593] font-semibold mb-6">Fannie Therrien</h2>
				<p className="mb-3">
					<span className="uppercase font-semibold">Fannie Therrien</span> se passionne pour la musique et le cinéma, mais c'est dans l'écriture qu'elle
					s'épanouit. Attirée par la littérature jeunesse, elle adore créer des univers dans lesquels évoluent toutes sortes de personnages.
				</p>

				<p className="mb-3">
					Fanatique de romans d&apos;épouvante et de films d&apos;horreur, elle garde de merveilleux souvenirs des séries Frissons et Chair de poule
					qu&apos;elle se plaisait à lire, seule dans sa chambre, lorsque la nuit tombait.
				</p>

				<p className="mb-3">
					Écrire des romans lui permet de rêver, créer et voyager sans même devoir quitter son bureau. C&apos;est avec le sourire et dans le plaisir
					qu&apos;elle pianote à l&apos;ordinateur toutes les idées qui lui passent par la tête.
				</p>

				<p className="mb-10 lg:mb-4">
					Ses études en arts et lettres l'ont menée à l'écriture de son premier roman, Béa dans tous ses états (éditions De Mortagne), paru en 2016. Avec sa
					plume moderne et teintée d'humour, elle adore faire voyager le lecteur dans son univers coloré. Maman de deux petites rouquines, elle réussit à
					concilier sa vie de famille et sa passion de l'écriture, pour son plus grand bonheur.
				</p>

				<div className="hidden lg:flex justify-center lg:justify-start items-end gap-3 mb-6">
					{socials.map((social, index) => {
						const Icon = social.icon;
						return (
							<a
								key={index}
								target="_blank"
								title={social.title}
								href={social.href}
								className={`text-[#B8B8B8] text-2xl hover:text-[#e13593] transition duration-300`}
							>
								<Icon />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default About;
