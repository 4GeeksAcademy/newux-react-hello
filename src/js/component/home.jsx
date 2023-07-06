import React from "react";

import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="Home">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center gap-5">
				<Card img={"https://www.yachtworld.com/research/files/2023/06/Kaos-Pool-.jpeg"}/>
				<Card img={"https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}/>
				<Card img={"https://media.architecturaldigest.com/photos/638a085d3e9045fdaa786edf/16:9/w_2560%2Cc_limit/15442.15.jpg"}/>
				<Card img={"https://luxuryliners.com/wp-content/uploads/Miami-Super-yacht-rental-at-sea-1200x900-cropped.jpg"}/>
			</div>	
			<Footer />
		</div>
	);
	
};

export default Home;
