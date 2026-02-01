const banner = require('../assets/img/banner.jpg');

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
                            <div className="p-4 border text-center">
                                <div className=" p-3 m-3 border border-secondary rounded ">
                                    <i className="text-primary bi bi-brush"></i>
                                    <h2 className="text-center">Fresh Food</h2>
                                    <span>Site de vente de produits frais en ligne</span>
                                    <button className="btn btn-primary mt-2">Voir le site</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-4">
                            <div className="p-4 border text-center">
                                <div className=" p-3 m-3 border border-secondary rounded ">
                                    <i className="text-primary bi bi-brush"></i>
                                    <h2 className="text-center">Restaurant Akira</h2>
                                    <span>Site de vente de produits frais en ligne</span>
                                    <button className="btn btn-primary mt-2">Voir le site</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="p-4 border text-center">
                                <div className=" p-3 m-3 border border-secondary rounded ">
                                    <i className="text-primary bi bi-brush"></i>
                                    <h2 className="text-center">Espace bien-êtr</h2>
                                    <span>Site de vente de produits frais en ligne</span>
                                    <button className="btn btn-primary mt-2">Voir le site</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="p-4 border text-center">
                                <div className=" p-3 m-3 border border-secondary rounded ">
                                    <i className="text-primary bi bi-brush"></i>
                                    <h2 className="text-center">SEO</h2>
                                    <span>Amélioration du référencement d'un site de e-commerce</span>
                                    <button className="btn btn-primary mt-2">Voir le site</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="p-4 border text-center">
                                <div className=" p-3 m-3 border border-secondary rounded ">
                                    <i className="text-primary bi bi-brush"></i>
                                    <h2 className="text-center">Création d'une API</h2>
                                    <span>Création d'une API RESTFULL publique</span>
                                    <button className="btn btn-primary mt-2">Voir le site</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="p-4 border text-center">
                                <div className=" p-3 m-3 border border-secondary rounded ">
                                    <i className="text-primary bi bi-brush"></i>
                                    <h2 className="text-center">Maquette d'un site web</h2>
                                    <span>Création du prototype d'un site</span>
                                    <button className="btn btn-primary mt-2">Voir le site</button>
                                    <div className="bg-light text-dark py-2 border-bottom">
                                        <div className="container">
                                            Bandeau gris clair
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
