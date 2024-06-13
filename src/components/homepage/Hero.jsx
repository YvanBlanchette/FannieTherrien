import FeaturedBooks from "../FeaturedBooks";

const Hero = () => {
	return (
		<section className="max-w-7xl mx-auto">
			<div className="flex justify-center items-end">
				<div className="pl-10 opacity-90 hidden lg:block">
					<img src="/assets/images/fannie-therrien_hero-reverse.jpg" alt="Fannie Therrien" className="max-w-[300px]" />
				</div>
				<FeaturedBooks />
			</div>
		</section>
	);
};
export default Hero;
