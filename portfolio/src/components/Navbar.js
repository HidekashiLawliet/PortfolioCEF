import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Portfolio
                </NavLink>

                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/Services">
                        Services
                    </NavLink>
                    <NavLink className="nav-link" to="/Portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink className="nav-link" to="/Contact">
                        Contact
                    </NavLink>
                    <NavLink className="nav-link" to="/MentionLegales">
                        MentionLegales
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
