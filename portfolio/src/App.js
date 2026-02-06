import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import doraemon from "./assets/img/doraemon.png";
import githubFav from "./assets/img/github.png";
import imageAboutMe from "./assets/img/john-doe-about.jpg";
import linkedinFav from "./assets/img/linkedin.png";
import twitterFav from "./assets/img/twitter.png";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import MentionLegales from "./pages/MentionLegales";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";


function CardMenu({ onClose }) {
	return (
		<div className="mb-3 w-fit-content rounded-4 m-autocard  position-absolute bg-dark text-white top-50 start-50 translate-middle mt-2 border border-secondary p-3 b-1">
			<div className="d-flex justify-content-between  ">
				<span className="fs-3"> Mon profil Github</span>
				<button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
			</div>
			<div className="myGithubProfile d-flex flex-row  d-flex justify-content-between ">
				<div className='margin-top-2r'>
					<img src={doraemon} className='doraemon '></img>
				</div>
				<div className="list-group bg-dark rounded p-3">
					<ul className='list-group-flush'>
						<li className="bg-dark list-group-item text-light"><i className="bi bi-person me-1"></i><a href="https://www.github.com">John Doe</a></li>
						<li className="bg-dark list-group-item text-light"><i className="bi bi-geo-alt"></i></li>
						<li className="bg-dark list-group-item text-light"><i className="bi bi-card-text me-1"></i><span > As we all know, John Doe's identity is unknown. I just wanted to contribute without being know.</span></li>
						<li className="bg-dark list-group-item text-light"><i className="bi bi-box me-1"></i><span> Repositories: 1</span></li>
						<li className="bg-dark list-group-item text-light"><i className="bi bi-people me-1"></i><span> Followers: 16</span></li>
						<li className="bg-dark list-group-item text-light"><i className="bi bi-people me-1"></i><span> Following: 0</span></li>
					</ul>
				</div>
			</div>
			<div className="divideLine" />
			<div className="w-100 d-flex justify-content-end me-0">
				<button type="button" className="rounded bg-secondary text-light me-0 border-0" aria-label="Close" onClick={onClose}> Fermer</button>
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
		<div id="home" className=" col-md-12 col-sm-12 d-inline-block justify-content-center mx-auto h-50">
			<div className='d-flex justify-content-center flex-column align-items-center h-100'>
				<h1 className="introduction color-black text-center fw-bold text-white">Bonjour, je suis John Doe</h1>
				<h2 className="introduction color-black text-center fw-bold text-white">Développeur Web Full Stack</h2>
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
		<div className="whiteBox d-flex mx-auto col-md-10 col-sm-10 col-10 h-auto mt-5 p-3" >
			<div className="AboutMe px-3 d-inline-block col-md-7 col-sm-7 col-7">
				<h2 className="text-left pt-3">À propos de moi</h2>
				<div className="divideLine line-height-5 blue my-4 col-md-12 col-sm-12 col-12 mb-1 bg-primary" />
				<div className="underline blue"></div>
				<img src={imageAboutMe} className="johnDoeImage d-block mx-auto img-fluid w-100 m-2" alt='picture of myself'></img>
				<p className="paragraphe margin-top-2r">
					Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco
				</p>
				<p className="paragraphe">
					Laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non
				</p>
				<p className="paragraphe">
					Proident sunt in culpa qui officia deserunt mollit anim id est laborum Curabitur blandit tempus porttitor Maecenas faucibus mollis interdum Cras mattis consectetur purus sit amet fermentum
				</p >
			</div>
			<div className="MySkills d-inline-block col-md-5 col-sm-5 col-5">
				<h2 >Mes Compétences</h2>
				<div className="divideLine line-height-5 blue my-4 col-md-12 col-sm-12 col-12 mb-1 bg-primary" />
				<div className="underline blue"></div>
				<div className='SkillList col-md-5 col-sm-5 col-5 w-100'><label>HTML5 90%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 col-sm-5 col-5 w-100'><label>CSS 80%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="CSS " aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-info" style={{ width: "80%" }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 col-sm-5 col-5 w-100'><label>JAVASCRIPT 70%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5 " aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 col-sm-5 col-5 w-100'><label>PHP 60%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar bg-success" style={{ width: "60%" }}></div>
					</div>
				</div>
				<div className='SkillList col-md-5 col-sm-5 col-5 w-100'><label>REACT 50%</label>
					<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
						<div className="progress-bar" style={{ width: "50%" }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className="footer bg-dark text-light">
			<div className="container ">
				<div className="row row-cols-3 pb-5 m-auto">
					<div className="columnTitle mt-5 fs-3"><span>John Doe</span></div>
					<div className="columnTitle  mt-5 fs-3">Liens utiles</div>
					<div className="columnTitle  mt-5 fs-3">Mes dernières réalisations</div>
					<div className="d-flex flex-column mb-3">
						<span>40 Rue Laure Diebold</span>
						<span>69009 Lyon, France</span>
						<span>10 20 30 40 50</span>
						<span>john.doe@gmail.com</span>
						<div className="socialLink ">
							<a>
								<img className="faviconSocial mt-3" src={githubFav}></img>
							</a>
							<a>
								<img className="faviconSocial mt-3" src={twitterFav}></img>
							</a>
							<a>
								<img className="faviconSocial mt-3" src={linkedinFav}></img>
							</a>
						</div>
					</div>
					<div className="d-flex flex-column ">
						<a href="/" className=" text-white text-decoration-none">
							<span>Accueil</span>
						</a>
						<a href="/Services" className=" text-white text-decoration-none">
							<span>Services</span>
						</a>
						<a href="/Portfolio" className=" text-white text-decoration-none">
							<span>Portfolio</span>
						</a>
						<a href="/Contact" className=" text-white text-decoration-none">
							<span>Me contacter</span>
						</a>
						<a href="/MentionLegales" className=" text-white text-decoration-none">
							<span>Mentions légales</span>
						</a>
					</div>
					<div className="d-flex flex-column">
						<a href="/Portfolio" className=" text-white text-decoration-none">
							<span>Fresh Food</span>
						</a>
						<a href="/Portfolio" className=" text-white text-decoration-none">
							<span>Restaurant Akira</span>
						</a>
						<a href="/Portfolio" className=" text-white text-decoration-none">
							<span>Espace bien-être</span>
						</a>
						<a href="/Portfolio" className=" text-white text-decoration-none">
							<span>SEO</span>
						</a>
						<a href="/Portfolio" className=" text-white text-decoration-none">
							<span>Création d'une API</span>
						</a>
						<a href="/Portfolio" className=" text-white text-decoration-none">
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
			<Home />
			<SkillsPart />
		</section>
	);
}

function App() {

	return (
		<BrowserRouter>
			<main className="content">
				<Navbar />
				<Routes>
					<Route path="/" element={<Display />} />
					<Route path="/Services" element={<Services />} />
					<Route path="/Portfolio" element={<Portfolio />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/MentionLegales" element={<MentionLegales />} />
				</Routes>
				<Footer />
			</main >
		</BrowserRouter>
	);

}

export default App;
