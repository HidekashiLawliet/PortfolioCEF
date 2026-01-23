import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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
								<span className="customLink active"> HOME </span>
								<span className="customLink"> SERVICES </span>
								<span className="customLink "> PORTFOLIO </span>
								<span className="customLink"> CONTACT </span>
								<span className="customLink"> MENTIONS LÉGALES </span>
							</a>
						</div>
					</div>
				</div>
				<div id="home" className=" col-md-12 d-inline-block justify-content-center h-50">
					<div className='d-flex justify-content-center flex-column align-items-center h-100'>
						<p className="introduction color-black text-center fw-bold">Bonjour, je suis John Doe</p>
						<h1 className="introduction color-black text-center fw-bold">Développeur Web Full Stack</h1>
						<button className="btn btn-danger d-block mx-auto mt-4">Contactez-moi</button>
					</div>
				</div>
				<div className="aboutMeAndMySkills  d-inline-block">
					<h2 className="text-center mt-5">À propos de moi et mes compétences</h2>
				</div>
			</section>

			<section className="tablet">Tablet layout</section>
			<section className="mobile">Mobile layout</section>
		</main>
	);

}

export default App;
