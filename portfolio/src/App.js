import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const adressLocation = "https://www.google.com/maps/place/Bordeaux,+France/@44.8637178,-0.5860121,12z/data=!3m1!4b1!4m6!3m5!1s0xd5527e8f751ca81:0x796386037b397a89!8m2!3d44.8416106!4d-0.5810938!16zL20vMDFiODU?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoASAFQAw%3D%3D"
function App() {
	return (
		<div className="App bg-dark col-md-12">
			<div className="header col-md-10 text-white p-3">
				<a href={adressLocation} target="_blank" rel="noreferrer" className="text-white text-decoration-none">
					<span className="topHeader right">France | Nouvelle-Aquitaine | Bordeaux </span>
				</a>
				<div>
					<a href="phone:+33XXXXXXXXX" className="text-white text-decoration-none">
						<span className="topHeader left"> +33 X XX XX XX XX </span>
					</a>
					<span> | </span>
					<a href="mailto:adressmail@proton.me" className="text-white text-decoration-none">
						<span className="topHeader left"> adressmail@proton.me</span>
					</a>
				</div>
			</div>
			<div className="divideLine col-md-10"></div>
			<div className="content text-white p-4">
				<h1 className="text-center">test temp</h1>
			</div>
		</div>
	);

}

export default App;
