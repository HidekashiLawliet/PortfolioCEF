import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import './App.css';
import textIcon from "./assets/icon/file-text.svg";
import pingIcon from "./assets/icon/map-pin.svg";
import personIcon from "./assets/icon/person-16.svg";
import repoIcon from "./assets/icon/repo-16.svg";
import userPlusIcon from "./assets/icon/user-plus.svg";
import doraemon from "./assets/img/doraemon.png";
import githubFav from "./assets/img/github.png";
import imageAboutMe from "./assets/img/john-doe-about.jpg";
import linkedinFav from "./assets/img/linkedin.png";
import twitterFav from "./assets/img/twitter.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import MentionLegales from "./pages/MentionLegales";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function CardMenu({ onClose }) {
	return (
		<div className="mb-3 w-fit-content rounded-4 m-autocard position-absolute bg-dark text-white top-50 start-50 translate-middle mt-2 border border-secondary p-3 b-1">
			<div className="d-flex justify-content-between  ">
				<span className="fs-3"> Mon profil Github</span>
				<button type="button" class="btn-close" aria-label="Close" onClick={onClose}></button>
			</div>
			<div className="divideLine" />
			<div className="d-flex flex-row  d-flex justify-content-between ">
				<div className='margin-top-2r'>
					<img src={doraemon} className='doraemon '></img>
				</div>
				<div className='margin-top-2r'>
					<div className="list-group bg-dark rounded p-3">
						<ul className='list-group-flush'>
							<li className="bg-dark list-group-item text-light"> <img src={personIcon} className="margin-width-auto-2r" /> <a href="https://www.github.com">John Doe</a></li>
							<li className="bg-dark list-group-item text-light"> <img src={pingIcon} className="margin-width-auto-2r" /></li>
							<li className="bg-dark list-group-item text-light"> <img src={textIcon} className="margin-width-auto-2r" /><span> As we all know, John Doe's identity is unknown. I just wanted to contribute without being know.</span></li>
							<li className="bg-dark list-group-item text-light"> <img src={repoIcon} className="margin-width-auto-2r" /><span>Repositories: 1</span></li>
							<li className="bg-dark list-group-item text-light"> <img src={userPlusIcon} className="margin-width-auto-2r" /><span>Followers: 16</span></li>
							<li className="bg-dark list-group-item text-light"> <img src={userPlusIcon} className="margin-width-auto-2r" /><span>Following: 0</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="divideLine" />
			<div className="w-100 d-flex justify-content-end me-0">
				<button type="button" class="rounded bg-secondary text-light me-0" aria-label="Close" onClick={onClose}> Fermer</button>
			</div>
		</div>
	);
}

function Header() {
	return (
		<div className="header d-flex justify-content-center bg-dark col-md-12">
			<div className="d-flex justify-content-between col-md-11 text-white p-3">
				<a className="text-white text-decoration-none">
					<span> JOHN DOE</span>
				</a>
				<div>
					<a href="#home" data-bs-spy="scroll" className="nav-pills active text-white text-decoration-none">
						<span className="customLink active">HOME</span>
					</a>
					<Link to="/services" className='nav-pills text-white text-decoration-none'><span className="customLink" >SERVICES</span></Link>
					<Link to="/portfolio" className='nav-pills text-white text-decoration-none'><span className="customLink ">PORTFOLIO</span></Link>
					<Link to="/contact" className='nav-pills text-white text-decoration-none'><span className="customLink">CONTACT</span></Link>
					<Link to="/mentionsLegales" className='nav-pills text-white text-decoration-none'><span className="customLink">MENTIONS LÉGALES</span></Link>
				</div>
			</div>
		</div>
	);
}

function Home() {
	const [isCardMenuOpen, setIsCardMenuOpen] = useState(false);
	const openCardMenu = () => {
		setIsCardMenuOpen(true);
	};
	const closeCardMenu = () => {
		setIsCardMenuOpen(false);
	};
	return (
		<div id="home" className=" col-md-12 d-inline-block justify-content-center h-50">
			<div className='d-flex justify-content-center flex-column align-items-center h-100'>
				<h1 className="introduction color-black text-center fw-bold">Bonjour, je suis John Doe</h1>
				<h2 className="introduction color-black text-center fw-bold">Développeur Web Full Stack</h2>
				<div className="d-inline-block">
					<div>
						<button className="btn btn-danger" onClick={openCardMenu}>En savoir plus</button>
						{isCardMenuOpen && <CardMenu onClose={closeCardMenu} />}
					</div>
				</div>
			</div>
		</div>
	);
}

function SkillsPart() {
	return (
		<div className="aboutMeAndMySkills d-flex margin-width-auto-2r margin-top-2r margin-bottom-2r">
			<div className="AboutMe d-inline-block col-md-7">
				<h2 className="text-left pt-4">À propos de moi</h2>
				<div className="underline blue"></div>
				<img src={imageAboutMe} className="johnDoeImage d-block mx-auto img-fluid w-100 m-2" alt='picture of myself'></img>
				<p className="margin-top-2r">
					Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco
				</p>
				<p>
					Laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non
				</p>
				<p>
					Proident sunt in culpa qui officia deserunt mollit anim id est laborum Curabitur blandit tempus porttitor Maecenas faucibus mollis interdum Cras mattis consectetur purus sit amet fermentum
				</p>
			</div>
			<div className="MySkills d-inline-block col-md-5">
				<h2 className="text-center pt-4">Mes Compétences</h2>
				<div className="underline blue"></div>
				<div className='SkillList col-md-5 w-100'><label>HTML5 90%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5" aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-danger" style={{ width: 90 * 5.5 }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 w-100'><label>CSS 80%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="CSS  " aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-info" style={{ width: 80 * 5.5 }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 w-100'><label>JAVASCRIPT 70%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5 " aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-warning" style={{ width: 70 * 5.5 }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 w-100'><label>PHP 60%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5 " aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-success" style={{ width: 60 * 5.5 }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 w-100'><label>REACT 50%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5 " aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar" style={{ width: 50 * 5.5 }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className='footer bg-dark text-light'>
			<div class="container ">
				<div class="row row-cols-3 pb-5 m-auto">
					<div class="columnTitle margin-top-2r"><span>John Doe</span></div>
					<div class="columnTitle  margin-top-2r">Liens utiles</div>
					<div class="columnTitle  margin-top-2r">Mes dernières réalisations</div>
					<div class="d-flex flex-column mb-3">
						<span>40 Rue Laure Diebold</span>
						<span>69009 Lyon, France</span>
						<span>10 20 30 40 50</span>
						<span>john.doe@gmail.com</span>
						<div className="socialLink">
							<a>
								<img className="faviconSocial" src={githubFav}></img>
							</a>
							<a>
								<img className="faviconSocial" src={twitterFav}></img>
							</a>
							<a>
								<img className="faviconSocial" src={linkedinFav}></img>
							</a>
						</div>
					</div>
					<div class="d-flex flex-column ">
						<a href="" className=" text-white text-decoration-none">
							<span>Accueil</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Services</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Portfolio</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Me contacter</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Mentions légales</span>
						</a>
					</div>
					<div class="d-flex flex-column">
						<a href="" className=" text-white text-decoration-none">
							<span>Fresh Food</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Restaurant Akira</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Espace bien-être</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>SEO</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Création d'une API</span>
						</a>
						<a href="" className=" text-white text-decoration-none">
							<span>Maquette d'un site</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
function Display() {
	return (
		<section className="desktop">
			<Header />
			<Home />
			<SkillsPart />
			<Footer />
		</section>
	);
}

function App() {

	return (


		<BrowserRouter>
			<Navbar />
			<main className="content">
				<Routes>
					<Route path="/" element={<Display />} />
					<Route path="/Services" element={<Services />} />
					<Route path="/Portfolio" element={<Portfolio />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/MentionLegales" element={<MentionLegales />} />
				</Routes>
			</main >
		</BrowserRouter>
	);

}

export default App;
