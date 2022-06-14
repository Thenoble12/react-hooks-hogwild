import React from "react";
import piggy from "../assets/porco.png";
import Hog from "./Hog";

const Nav = ({ hogs }) => {

	let copyHogs = [...hogs]

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				{copyHogs.map(hog => {
					<Hog hogData={hog} key={hog.indexOf(hog)} />
				}) }
			</div>
		</div>
	);
};

export default Nav;
