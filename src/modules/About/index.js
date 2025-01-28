import React from 'react';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import AviPic from '../../assets/images/AviPic.png';
import './About.css';

export const About = () => {
	return (
		<div class="componentContainer">
			<Header text="About" />
			<Divider />
			<div className="aboutContainer">
				
				<div className="picContainer">
					<img class="pic" src={AviPic} alt="Avinash Singh" />
				</div>

				<p className="contentText">
					Meticulous Full-Stack Developer with 8 years of experience in
					building innovative solutions. Motivated to produce polished products and
					deliver client specific results. Holds a professional certification
					in Full Stack Development from UT Austin.
				</p>

				<p className="contentText">
					Have worked on developing multiple ReactJS applications using C# and MS SQL server 
					that utilizes RESTful APIs and follows MVC design patterns.
				</p>

				<p className="contentText">
					Experienced in technologies like C#, .NET, Node.js, React.js, JavaScript, HTML, CSS,
					MongoDB, Bootstrap and Express (MERN stack). Comfortable with all
					aspects of development from frontend to backend. Solid experience in
					WinForms, MS SQL Server, SSRS, MS Access and XML technologies.
				</p>

				<p className="contentText">
					Started programming in the 7th grade as a hobby on a tiny ZX Spectrum
					microcomputer and have always loved it. The first language I learnt was
					"Spectrum Basic" which was a subset of Basic. Programming continues to be a
					hobby for me and I consider myself lucky to have been able to make a career out of it.
				</p>

			</div>
		</div>
	)
}

export default About;