const mapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.627152462178!2d4.796403976928754!3d45.77866197108083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1769943420950!5m2!1sfr!2sfr"

export default function Contact() {
    return (
        <div className=" mainContact col-md-12 d-inline-block justify-content-center content my-5 pt-5 ">
            <div id="ContactTitle" className="d-flex flex-column margin-width-auto">
                <h1 className="margin-width-auto"> Contact </h1>
                <span>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
                <div className="divideLine line-height-5 blue my-4 col-8 bg-primary">
                </div>
            </div>
            <div className="whiteBox d-flex flex-row mx-auto justify-content-between px-4 py-3">
                <div className=" d-inline-block col-md-6">
                    <h2>Formulaire de contact</h2>
                    <div className="divideLine line-height-3  my-4 mb-15 bg-primary"> </div>
                    <form action="#" method="post" className=" d-flex flex-column justify-content-between">
                        <label for="name" className="form-label" ></label>
                        <input className="form-control border border-secondary " type="text" id="name" placeholder="Votre nom" name="name" required></input>
                        <label for="email" className="form-label" ></label>
                        <input className="form-control border border-secondary " type="email" id="email" placeholder="Votre adresse email" name="email" required></input>
                        <label for="phone" className="form-label" ></label>
                        <input className="form-control border border-secondary " type="tel" id="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder="Votre numéro de téléphone" name="phone" required></input>
                        <label for="subject" className="form-label" ></label>
                        <input className="form-control border border-secondary " type="text" id="subject" placeholder="Sujet" name="subject" required></input>
                        <label for="message" className="form-label" ></label>
                        <textarea className="form-control border border-secondary h-100" id="message" placeholder="Votre message" name="message"></textarea>
                        <button type="submit" id="submitBtn" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
                <div className=" d-inline-block h-100 col-md-6 mx-3">
                    <h2>Mes coordonnées</h2>
                    <div className="divideLine line-height-3 blue my-4 bg-primary"></div>
                    <div className="MyLocalisation mt-3 pb-5 d-flex flex-column">
                        <ul className='list-group-flush ps-0 mt-4 '>
                            <p className="my-0 fs-4">John Doe</p>
                            <li className="list-group-item text-dark"><i className="bi bi-map me-1"></i><span> 40 Rue Laure Diebold</span></li>
                            <li className="list-group-item text-dark"><i className="bi bi-geo-alt me-1"></i><span> 69009 Lyon, France</span></li>
                            <li className="list-group-item text-dark"><i className="bi bi-phone me-1"></i><span> 10 20 30 40 50</span></li>
                            <li className="list-group-item text-dark"><i className="bi bi-envelope-at me-1"></i><span> john.doe@gmail.com</span></li>
                        </ul>
                        <div className="map w-100 h-100 flex-grow-1 mt-3">
                            <iframe src={mapLink} className="" id="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
