import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
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

// function pour la carte du profile github
function CardMenu({ onClose }) {
	return (
		// gere l'affichage globale de la carte
		<div className="githubCard mb-3 col-md-7 col-sm-7 col-7 w-fit-content rounded-4 m-autocard position-absolute bg-dark text-white top-50 start-50 translate-middle mt-2 border border-secondary p-3 b-1">
			{/* gere le header de la carte */}
			<div className="d-flex justify-content-between  ">
				<span className="fs-3"> Mon profil Github</span>
				<button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
			</div>
			{/* affichage de la partie centrale de la carte */}
			<div className="myGithubProfile col-row d-flex flex-column flex-sm-row justify-content-between ">
				{/* affichage de gauche pour l'image */}
				<div className='margin-top-2r'>
					<img src={doraemon} className="doraemon col-md-5 col-sm-5 col-5 mb-3" />
				</div>
				{/* affichage de droite pour les informations du profil */}
				<div className="list-group bg-dark col-md-7 mx-auto col-sm-7 col-12  rounded ">
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
			<div className="w-100 d-flex justify-content-end me-0">
				<button type="button" className="rounded bg-secondary text-light me-0 border-0" aria-label="Close" onClick={onClose}> Fermer</button>
			</div>
		</div>
	);
}

// function pour la partie surpérieur de la page d'acceuil
function Home() {

	// sert a déclarer le menu comme fermer
	// et donc à l'ouvrir si la constante openCardMenu est appelé dans la page
	const [isCardMenuOpen, setIsCardMenuOpen] = useState(false);
	const openCardMenu = () => {
		setIsCardMenuOpen(true);
	};
	const closeCardMenu = () => {
		setIsCardMenuOpen(false);
	};

	return (
		// sert à gérer l'affichage global de la premiere partie de la page d'acceuil
		<div id="home" className=" col-md-12 col-sm-12 col-12 d-inline-block justify-content-center mx-auto">
			<div className='d-flex justify-content-center flex-column align-items-center h-100'>
				<h1 className="introduction color-black text-center fw-bold text-white">Bonjour, je suis John Doe</h1>
				<h2 className="introduction color-black text-center fw-bold text-white">Développeur Web Full Stack</h2>
				<div className="d-inline-block">
					<div>
						{/* bouton pour ouvrir le menu d'information github */}
						<button className="btn btn-danger" onClick={openCardMenu}>En savoir plus</button>
						{isCardMenuOpen && <div className="backdropBlur" onClick={closeCardMenu} />}
						{isCardMenuOpen && <CardMenu onClose={closeCardMenu} />}
					</div>
				</div>
			</div>
		</div>
	);
}


//affiche la deuxieme partie de la page d'acceuil
function SkillsPart() {
	return (
		// gerer l'affiche de la boite avec les éléments intérieurs
		<div className="whiteBox col-row d-flex flex-column flex-sm-row mx-auto col-md-10 col-sm-10 col-10 mt-5 p-3" >

			{/* gérer la partie d'introduction */}
			<div className="AboutMe px-3 d-inline-block col-md-7 col-sm-7 col-12">
				<h2 className="text-left">À propos de moi</h2>
				<div className=" line-height-5 blue my-4 col-md-12 col-sm-12 col-12 mb-1 bg-primary" />
				<div className="underline blue"></div>
				<img src={imageAboutMe} className="johnDoeImage d-block mx-auto img-fluid w-100 m-2" alt='picture of myself' />
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

			{/* gérer la partie montrant mes compétences */}
			<div className="MySkills d-inline-block col-md-5 col-sm-5 col-12">
				<h2 >Mes Compétences</h2>
				<div className="line-height-5 blue my-4 col-md-12 col-sm-12 col-12 mb-1 bg-primary" />
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

//affichage du footer
function Footer() {
	return (
		// gérer l'affichage globale de la partie footer
		<div className="footer bg-dark text-light col-md-12 col-sm-12 col-12">
			<div className="col-row d-flex flex-column flex-sm-row col-md-10 col-sm-10 col-10 pb-5 m-auto">

				{/* gestion  de la partie contact et lien vers autres réseaux*/}

				<div className="col-md-4 col-sm-3 col-12 mx-auto mt-5 fs-3">
					<h2 className="columnTitle">John Doe</h2>
					<div className="d-flex mx-auto flex-column mb-3">
						<span className="fs-5">40 Rue Laure Diebold</span>
						<span className="fs-5">69009 Lyon, France</span>
						<span className="fs-5">10 20 30 40 50</span>
						<span className="fs-5">john.doe@gmail.com</span>
						<div className="socialLink ">
							<a>
								<img className="faviconSocial mt-3" src={githubFav} />
							</a>
							<a>
								<img className="faviconSocial mt-3" src={twitterFav} />
							</a>
							<a>
								<img className="faviconSocial mt-3" src={linkedinFav} />
							</a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-sm-3 mx-auto col-12 mt-5 fs-3"><h2 className="columnTitle">Liens Utilse</h2>
					<div className="d-flex flex-column ">
						<a href="/" className=" text-white w-fit text-decoration-none">
							<span className="fs-5">Accueil</span>
						</a>
						<a href="/Services" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Services</span>
						</a>
						<a href="/Portfolio" className="  w-fit text-white text-decoration-none">
							<span className="fs-5">Portfolio</span>
						</a>
						<a href="/Contact" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Me contacter</span>
						</a>
						<a href="/MentionLegales" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Mentions légales</span>
						</a>
					</div>
				</div>
				<div className=" col-md-4 col-sm-3 col-12 mx-auto mt-5 fs-3 "><h2 className="columnTitle">Mes dernières réalisations</h2>
					<div className="d-flex flex-column">
						<a href="/Portfolio" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Fresh Food</span>
						</a>
						<a href="/Portfolio" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Restaurant Akira</span>
						</a>
						<a href="/Portfolio" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Espace bien-être</span>
						</a>
						<a href="/Portfolio" className="w-fit text-white text-decoration-none">
							<span className="fs-5">SEO</span>
						</a>
						<a href="/Portfolio" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Création d'une API</span>
						</a>
						<a href="/Portfolio" className="w-fit text-white text-decoration-none">
							<span className="fs-5">Maquette d'un site</span>
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
	const [screenWidthError, setscreenWidthError] = useState(false);
	const [screenHeightError, setscreenHeightError] = useState(false);

	useEffect(() => {
		const screenWidth = window.matchMedia("(max-width: 319px)");

		const updateWidth = () => setscreenWidthError(screenWidth.matches);
		if (screenWidth.addEventListener) {
			screenWidth.addEventListener("change", updateWidth);
			return () => screenWidth.removeEventListener("change", updateWidth);
		}

	}, []);

	useEffect(() => {
		const screenHeight = window.matchMedia("(max-height: 399px)");
		const updateHeight = () => setscreenHeightError(screenHeight.matches);
		if (screenHeight.addEventListener) {
			screenHeight.addEventListener("change", updateHeight);
			return () => screenHeight.removeEventListener("change", updateHeight);
		}
	})

	if (screenWidthError || screenHeightError) {
		if (screenWidthError) {
			return (
				<div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white px-3">
					<div className="text-center">
						<i className="bi bi-phone text-warning fs-1" aria-hidden="true"></i>
						<h1 className="h4 mt-3">Écran trop petit</h1>
						<p className="mb-2">
							Pour afficher ce site correctement, utilisez un écran d’au moins 320 pixels de large.
						</p>
						<p className="small text-secondary mb-0">
							Astuce : passez votre téléphone en mode paysage.
						</p>
					</div>
				</div>
			);
		} else if (screenHeightError) {
			return (
				<div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark text-white px-3">
					<div className="text-center">
						<i className="bi bi-phone text-warning fs-1" aria-hidden="true"></i>
						<h1 className="h4 mt-3">Écran trop petit</h1>
						<p className="mb-2">
							Pour afficher ce site correctement, utilisez un écran d’au moins 400 pixel de hauteur.
						</p>
						<p className="small text-secondary mb-0">
							Astuce : passez votre téléphone en mode portrait.
						</p>
					</div>
				</div>
			);
		}
	}

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
			</main >
			<Footer />
		</BrowserRouter>
	);

}

export default App;
