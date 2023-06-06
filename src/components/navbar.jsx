import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";

export const Navbar = () => {
    return (
        <nav className="nav-bar">
            <FontAwesomeIcon icon={faHouse} flip className="fahouse" />
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/Sobre">
                    Sobre
                </Link>
                <Link to="/Projetos" className="projetos">
                    Projetos
                </Link>
                <Link to="/Contato">
                    Contato
                </Link>
            </div>
        </nav>
    );
};
