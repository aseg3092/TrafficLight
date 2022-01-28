import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("rojo");

	return (
		<div>
			<div className="container">
				<div
					onClick={() => setSelectedColor("rojo")}
					className={
						"luz rojo" + (selectedColor === "rojo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("amarillo")}
					className={
						"luz amarillo" +
						(selectedColor === "amarillo" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("verde")}
					className={
						"luz verde" + (selectedColor === "verde" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
