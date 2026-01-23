import 'bootstrap/dist/css/bootstrap.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import './App.css';
import imageAboutMe from "./assets/img/john-doe-about.jpg";

function App() {
	return (
		<main className="content">
			<section className="desktop">
				<div className="header d-flex justify-content-center bg-dark col-md-12">
					<div className="d-flex justify-content-between col-md-11 text-white p-3">
						<a className="text-white text-decoration-none">
							<span> JOHN DOE</span>
						</a>
						<div>
							<a href="#home" data-bs-spy="scroll" className="nav-pills active text-white text-decoration-none">
								<span className="customLink active">HOME</span>
							</a>
							<span className="customLink">SERVICES</span>
							<span className="customLink ">PORTFOLIO</span>
							<span className="customLink">CONTACT</span>
							<span className="customLink">MENTIONS LÉGALES</span>
						</div>
					</div>
				</div>
				<div id="home" className=" col-md-12 d-inline-block justify-content-center h-50">
					<div className='d-flex justify-content-center flex-column align-items-center h-100'>
						<h1 className="introduction color-black text-center fw-bold">Bonjour, je suis John Doe</h1>
						<h2 className="introduction color-black text-center fw-bold">Développeur Web Full Stack</h2>
						<button className="btn btn-danger d-block mx-auto mt-4">Contactez-moi</button>
					</div>
				</div>
				<div className="aboutMeAndMySkills d-flex">
					<div className="AboutMe d-inline-block col-md-7">
						<h2 className="text-left pt-4">À propos de moi</h2>
						<div className="underline blue"></div>
						<img src={imageAboutMe} className="johnDoeImage d-block mx-auto img-fluid w-100 m-2" alt='picture of myself'></img>
						<p className="mt-2r">
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
						<div className='SkillList col-md-5 w-100'><label>REACT</label>
							<div className="progress bg-dark-subtle" role="progressbar" aria-label="HTML5 " aria-valuemin="0" aria-valuemax="100">
								<div className="progress-bar" style={{ width: 50 * 5.5 }}></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="tablet">Tablet layout</section>
			<section className="mobile">Mobile layout</section>
		</main >
	);

}

export default App;
