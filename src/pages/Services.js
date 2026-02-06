const banner = require('../assets/img/banner.jpg');

export default function About() {
    return (
        <div className="services h-100 col-md-12 d-inline-block justify-content-center content my-5">
            <div>
                <img src={banner} className="banner h-100 w-100 mb-5"></img>
            </div>
            <div className="d-flex flex-column col-md-12 col-sm-12 col-12">
                <h1 className="mx-auto">Services</h1>
                <span className="subtitle text-center">Voici les services que je propose</span>
                <div className="line-height-5 blue my-4 col-md-7 col-sm-7 col-7 mx-auto bg-primary"></div>
            </div>
            <div className="col-md-10  mx-auto">
                <div className=" d-inline-block col-row d-flex flex-column flex-sm-row  flex-row-grid mx-auto justify-content-center p-4 rounded">
                    <div className="ServiceItem d-flex flex-column p-3 m-3 border border-secondary rounded col-md-4">
                        <i className="text-primary mx-auto bi bi-brush"></i>
                        <h2 className="text-center mx-1">UX Design</h2>
                        <p className="text-center lh-sm">L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logicielsn, objets connectés, etc) en placant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>
                    </div>
                    <div className="ServiceItem p-3 d-flex flex-column m-3 border border-secondary rounded col-md-4">
                        <i className="text-primary mx-auto bi bi-code-slash"></i>
                        <h2 className="text-center mx-1">Développement web</h2>
                        <p className="text-center lh-sm ">Le développement de sites web consistes à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)</p>
                    </div>
                    <div className="ServiceItem d-flex flex-column p-3 m-3 border border-secondary rounded col-md-4">
                        <i className="text-primary mx-auto bi bi-search"></i>
                        <h2 className="text-center mx-1">Référencement</h2>
                        <p className="text-center lh-sm ">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche(Google, Bong, Yahoo, etc.) L'objectif est d'attirter un maximum de visiteurs qualifités sur le site.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
