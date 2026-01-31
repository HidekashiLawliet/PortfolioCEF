import 'bootstrap/dist/css/bootstrap.min.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="header  bg-dark d-flex align-items-center col-md-12">
            <div className=" d-flex margin-width-auto-2r justify-content-between position-relative col-md-11 text-white p-3 text-white text-decoratio-none">
                <a className="text-white text-decoration-none mx-2">
                    <span>JOHN DOE</span>
                </a>
                <div className="navbar-nav d-flex align-content-center flex-row">
                    <NavLink className="nav-link mx-2" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link margin mx-2" to="/Services">
                        Services
                    </NavLink>
                    <NavLink className="nav-link mx-2" to="/Portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink className="nav-link mx-2" to="/Contact">
                        Contact
                    </NavLink>
                    <NavLink className="nav-link mx-2 " to="/MentionLegales">
                        MentionLegales
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
