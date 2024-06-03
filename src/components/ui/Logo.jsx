import React, { useState } from "react";

const Logo = ({ fill = "currentColor", hoverFill = "var(--themeColor)", width = 300, height = 65 }) => {
	const aspectRatio = width / height;
	const letterSpacing = "0.04em"; // Adjust this value to get the desired spacing

	// Initialize state for fill color
	const [currentColor, setCurrentColor] = useState(fill);

	// Event handler for mouse hover
	const handleMouseOver = () => {
		setCurrentColor(hoverFill);
	};

	// Event handler for mouse leave (optional)
	const handleMouseLeave = () => {
		setCurrentColor(fill);
	};

	// Define transition duration
	const transitionDuration = 150; // in milliseconds

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 302.75 67.82"
			width={width}
			height={width / aspectRatio}
			fill={currentColor}
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			style={{ transition: `fill ${transitionDuration}ms ease-in-out` }} // Apply transition effect to fill color
		>
			<text
				className="font-medium text-[2.2rem]"
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				style={{ letterSpacing, transition: `fill ${transitionDuration}ms ease-in-out` }}
			>
				<tspan>{"Fannie"}</tspan> <tspan>{"Therrien"}</tspan>
			</text>
			<text
				className=" text-sm tracking-wide"
				x="50%"
				y="90%"
				dominantBaseline="middle"
				textAnchor="middle"
				style={{ transition: `fill ${transitionDuration}ms ease-in-out` }}
			>
				Nourir les esprits, une histoire à la fois!
			</text>
			<polyline
				fill="none"
				stroke={currentColor} // Use state variable for stroke color
				strokeMiterlimit="10"
				strokeWidth="0.75px"
				points="17.98 61.38 .38 61.38 .38 .38 302.38 .38 302.38 61.38 285.37 61.38"
				style={{ transition: `stroke ${transitionDuration}ms ease-in-out` }} // Apply transition effect to stroke color
			/>
		</svg>
	);
};

export default Logo;
