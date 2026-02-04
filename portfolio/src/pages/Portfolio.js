import banner from '../assets/img/banner.jpg';
import coder from "../assets/img/portfolio/coder.jpg";
import espaceBienetre from "../assets/img/portfolio/espace-bien-etre.jpg";
import freshFood from "../assets/img/portfolio/fresh-food.jpg";
import restaurantAkira from "../assets/img/portfolio/restaurant-japonais.jpg";
import screens from "../assets/img/portfolio/screens.jpg";
import seo from "../assets/img/portfolio/seo.jpg";

export default function About() {
    return (
        <div className="services vh-150 col-md-12 d-inline-block justify-content-center content my-5">
            <div>
                <img src={banner} className="banner h-100 w-100 mb-5"></img>
            </div>
            <div id="ServicesTitle" className="d-flex flex-column w-100">
                <h1 className="margin-width-auto">Portfolio</h1>
                <span className="subtitle text-center">Voici quelques-unes de mes réalisations </span>
                <div className="divideLine line-height-5 blue my-4 col-md-5 mb-5 bg-primary"></div>
            </div>
            <div className="ServiceList d-inline-block d-flex flex-row-grid mx-auto col-md-12 justify-content-center p-4 rounded">
                <div className="container mt-3">
                    <div className="row g-3">


                        <div className="col-12 col-md-4">
                            <div className=" border d-flex flex-column border-secondary rounded">
                                <img src={freshFood} className="portfolioImage mx-auto rounded-top" alt="Panier légumes fresh food"></img>
                                <h2 className="text-center fs-3">Fresh Food</h2>
                                <span className="mx-auto text-center">Site de vente de produits frais en ligne</span>
                                <button className="portfolioButton btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className="bottomText fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4">
                            <div className="border d-flex flex-column border-secondary rounded">
                                <img src={restaurantAkira} className="portfolioImage mx-auto rounded-top" alt="image restaurant akira"></img>
                                <h2 className="text-center fs-3">Restaurant Akira</h2>
                                <span className="mx-auto text-center">Site de vente de produits frais en ligne</span>
                                <button className="portfolioButton btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className="bottomText fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className=" border d-flex flex-column border-secondary rounded ">
                                <img src={espaceBienetre} className="portfolioImage mx-auto rounded-top" alt="Espace bien-être photo d'illustration"></img>
                                <h2 className="text-center fs-3">Espace bien-être</h2>
                                <span className="mx-auto text-center">Site de vente de produits frais en ligne</span>
                                <button className="portfolioButton btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className="bottomText fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className=" border d-flex flex-column border-secondary rounded">
                                <img src={seo} className="portfolioImage mx-auto rounded-top" alt="image SEO"></img>
                                <h2 className="text-center fs-3">SEO</h2>
                                <span className="mx-auto text-center">Amélioration du référencement d'un site de commerce</span>
                                <button className="portfolioButton btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className="bottomText fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className=" border d-flex flex-column border-secondary rounded">
                                <img src={coder} className="portfolioImage mx-auto rounded-top" alt="image code informatique"></img>
                                <h2 className="text-center fs-3">Création d'une API</h2>
                                <span className="mx-auto text-center">Création d'une API RESTFULL publique</span>
                                <button className="portfolioButton btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className="bottomText fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="border d-flex flex-column border-secondary rounded ">
                                <img src={screens} className="portfolioImage mx-auto rounded-top" alt="image d' illustration d'une conception maquette"></img>
                                <h2 className="text-center fs-3">Maquette d'un site web</h2>
                                <span className="mx-auto text-center">Création du prototype d'un site</span>
                                <button className="portfolioButton btn btn-primary my-3 mx-auto">Voir le site</button>
                                <div className="bg-dark-subtle rounded-bottom border-top border-secondary py-2 w-100 d-flex justify-content-center">
                                    <span className="bottomText fs-6">Réalisé avec FIGMA</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}