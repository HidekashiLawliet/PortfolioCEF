import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="header bg-dark mx-auto d-flex align-items-center col-md-12 col-sm-12 col-12">
            <div className=" d-flex mx-auto justify-content-between col-md-11 col-sm-11 col-11 ext-white m-3 text-white text-decoratio-none">
                <a className="text-white text-decoration-none mx-2 my-auto">
                    <span>JOHN DOE</span>
                </a>
                <div className="navbar-nav d-flex align-content-center flex-row">
                    <NavLink className="nav-link mx-2" to="/">
                        HOME
                    </NavLink>
                    <NavLink className="nav-link  mx-2" to="/Services">
                        SERVICES
                    </NavLink>
                    <NavLink className="nav-link mx-2" to="/Portfolio">
                        PORTFOLIO
                    </NavLink>
                    <NavLink className="nav-link mx-2" to="/Contact">
                        CONTACT
                    </NavLink>
                    <NavLink className="nav-link mx-2" to="/MentionLegales">
                        MENTIONS LÉGALES
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
