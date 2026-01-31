export default function Contact() {
    return (
        <div className="height-100">
            <div className=" mainPart col-md-12 d-inline-block justify-content-center content my-5 pt-5 ">
                <div id="ContactTitle" className="d-flex flex-column margin-width-auto">
                    <h1 className="margin-width-auto"> Contact </h1>
                    <span>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
                    <div className="divideLine line-height-5 blue my-4 col-8 ">
                    </div>
                </div>
                <div className="whiteBox d-flex flex-row margin-width-auto px-4 py-3">
                    <div className=" d-inline-block col-md-6">
                        <h2>Formulaire de contact</h2>
                        <div className="divideLine line-height-3 blue my-4 mb-15">
                            <form action="#" method="post">
                                <label for="name" className="form-label" ></label>
                                <input className="form-control border border-secondary " type="text" id="name" placeholder="Votre nom" name="name" required></input>
                                <label for="name" className="form-label" ></label>
                                <input className="form-control border border-secondary " type="text" id="name" placeholder="Votre nom" name="name" required></input>
                                <label for="name" className="form-label" ></label>
                                <input className="form-control border border-secondary " type="text" id="name" placeholder="Votre nom" name="name" required></input>
                                <label for="name" className="form-label" ></label>
                                <input className="form-control border border-secondary " type="text" id="name" placeholder="Votre nom" name="name" required></input>
                                <label for="name" className="form-label" ></label>
                                <input className="form-control border border-secondary " type="text" id="name" placeholder="Votre nom" name="name" required></input>
                            </form>
                        </div>
                    </div>
                    <div className=" d-inline-block col-md-6 mx-3">
                        <h2>Mes coordonnées</h2>
                        <div className="divideLine line-height-3 blue my-4 ">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
