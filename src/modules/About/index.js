import React from 'react';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import Avinash_Pic from '../../assets/images/Avi.jpg';
import './About.css';

export const About = () => {
	return (
		<div class="componentContainer">
			<Header text="About" />
			<Divider />
			<div className="picContainer">
				<img src={Avinash_Pic} alt="Avinash Singh" />
			</div>
		</div>
	)
}

export default About;