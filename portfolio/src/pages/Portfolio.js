const banner = require('../assets/img/banner.jpg');
const freshFood = "../assets/img/portfolio/fresh-food.jpg";
const restaurantAkira = "../assets/img/portfolio/restaurant-akira.jpg";
const espaceBienetre = "../assets/img/portfolio/espace-bienetre.jpg";
const seo = "../assets/img/portfolio/seo.jpg";
const coder = "../assets/img/portfolio/coder.jpg";
const screens = "../assets/img/portfolio/screens.jpg";

export default function About() {
    return (
        <div className="services vh-150 col-md-12 d-inline-block justify-content-center content my-5">
            <div>
                <img src={banner} className="banner h-100 w-100 mb-5"></img>
            </div>
            <div id="ServicesTitle" className="d-flex flex-column w-100">
                <h1 className="margin-width-auto">Portfolio</h1>
                <span className="subtitle text-center">Voici quelques-unes de mes réalisations </span>
                <div className="divideLine line-height-5 blue my-4 col-md-3 mb-5"></div>
            </div>
            <div className="ServiceList d-inline-block d-flex flex-row-grid mx-auto col-md-9 justify-content-center p-4 rounded">
                <div className="container mt-4">
                    <div className="row g-3">


                        <div className="col-12 col-md-4">
                            <div className="m-3 border border-secondary rounded ">
                                <img src={freshFood} className="portfolioImage mx-auto mt-3 rounded"></img>
                                <h2 className="text-center fs-3">Fresh Food</h2>
                                <span>Site de vente de produits frais en ligne</span>
                                <button className="portfolioButton btn btn-primary mt-2 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 ">
                                    <span className="ms-5 ps-5 w-25">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4">
                            <div className="m-3 border border-secondary rounded ">
                                <img src={restaurantAkira} className="portfolioImage mx-auto mt-3 rounded"></img>
                                <h2 className="text-center fs-3">Restaurant Akira</h2>
                                <span>Site de vente de produits frais en ligne</span>
                                <button className="portfolioButton btn btn-primary mt-2 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 ">
                                    <span className="ms-5 ps-5 w-25">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className=" m-3 border border-secondary rounded ">
                                <img src={espaceBienetre} className="portfolioImage mx-auto mt-3 rounded"></img>
                                <h2 className="text-center fs-3">Espace bien-être</h2>
                                <span>Site de vente de produits frais en ligne</span>
                                <button className="portfolioButton btn btn-primary mt-2 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 ">
                                    <span className="ms-5 ps-5 w-25">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className=" m-3 border border-secondary rounded ">
                                <img src={seo} className="portfolioImage mx-auto mt-3 rounded"></img>
                                <h2 className="text-center fs-3">SEO</h2>
                                <span>Amélioration du référencement d'un site de e-commerce</span>
                                <button className="portfolioButton btn btn-primary mt-2 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 ">
                                    <span className="ms-5 ps-5 w-25">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="m-3 border border-secondary rounded ">
                                <img src={coder} className="portfolioImage mx-auto mt-3 rounded"></img>
                                <h2 className="text-center fs-3">Création d'une API</h2>
                                <span>Création d'une API RESTFULL publique</span>
                                <button className="portfolioButton btn btn-primary mt-2 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 ">
                                    <div className="container fs-6">
                                        <span className="ms-5 ps-5 w-25">Réalisé avec FIGMA</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="m-3 border d-flex flex-column border-secondary rounded ">
                                <img src={screens} className="portfolioImage mx-auto mt-3 rounded"></img>
                                <h2 className="text-center fs-3">Maquette d'un site web</h2>
                                <span className="mx-auto">Création du prototype d'un site</span>
                                <button className="portfolioButton btn btn-primary mt-2 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 ">
                                    <span className="ms-5 ps-5 w-25">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
