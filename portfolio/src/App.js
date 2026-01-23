import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
	return (
		<main className="content">
			<section className="desktop">
				<div className=" header d-flex justify-content-center bg-dark col-md-12">
					<div className="d-flex justify-content-between col-md-11 text-white p-3">
						<a href="#home" data-bs-spy="scroll" className="text-white text-decoration-none">
							<span> JOHN DOE</span>
						</a>
						<div>
							<a href="phone:+33XXXXXXXXX" className="text-white text-decoration-none">
								<span className="topHeader left --bs-link-hover-underline"> HOME </span>
							</a>
							<span> | </span>
							<a href="mailto:adressmail@proton.me" className="text-white text-decoration-none">
								<span> adressmail@proton.me</span>
							</a>
						</div>
					</div>
				</div>
				<div id="home" className=" col-md-12 d-inline-block justify-content-center h-50">
					<div className='d-flex justify-content-center flex-column align-items-center h-100'>
						<p className="introduction color-black text-center fw-bold">Bonjour, je suis John Doe</p>
						<h1 className="color-black text-center fw-bold">Développeur Web Full Stack</h1>
					</div>
				</div>
			</section>

			<section className="tablet">Tablet layout</section>
			<section className="mobile">Mobile layout</section>
		</main>
	);

}

export default App;
