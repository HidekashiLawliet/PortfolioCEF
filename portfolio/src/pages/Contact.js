export default function Contact() {
    return (
        <div className="height-100">
            <div className=" mainContact vh-100 col-md-12 d-inline-block justify-content-center content my-5 pt-5 ">
                <div id="ContactTitle" className="d-flex flex-column margin-width-auto">
                    <h1 className="margin-width-auto"> Contact </h1>
                    <span>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
                    <div className="divideLine line-height-5 blue my-4 col-8 ">
                    </div>
                </div>
                <div className="whiteBox h-75 d-flex flex-row margin-width-auto justify-content-between px-4 py-3">
                    <div className=" d-inline-block col-md-6 h-100">
                        <h2>Formulaire de contact</h2>
                        <div className="divideLine line-height-3 blue my-4 mb-15 "> </div>
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
                            <button type="submit" id="submitBtn" className="btn btn-primary mx-auto mt-3">Envoyer</button>
                        </form>
                    </div>
                    <div className=" d-inline-block col-md-6 mx-3">
                        <h2>Mes coordonnées</h2>
                        <div className="divideLine line-height-3 blue my-4">
                            <ul className='list-group-flush'>
                                {/* <li className="bg-dark list-group-item text-light"> <img src={mapIcon} className="margin-width-auto" />40 rue de Laure Diebold<a href="https://www.github.com">John Doe</a></li>
                                <li className="bg-dark list-group-item text-light"> <img src={pingIcon} className="margin-width-auto" />69009 Lyon, France</li>
                                <li className="bg-dark list-group-item text-light"> <img src={phoneIcon} className="margin-width-auto" /><span>10 20 30 40 50</span></li>
                                <li className="bg-dark list-group-item text-light"> <img src={mailIcon} className="margin-width-auto" /><span>john.doe@gmail.com</span></li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
