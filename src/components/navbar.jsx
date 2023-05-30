import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons/faDiagramProject";
import { faIdCard } from "@fortawesome/free-solid-svg-icons/faIdCard";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse} flip />
                    Casa
                </Link>
                <Link to="/Sobre">
                    <FontAwesomeIcon icon={faUser} style={{ color: "green" }} shake/>
                    Sobre
                </Link>
                <Link to="/Projetos">
                    <FontAwesomeIcon icon={faDiagramProject} bounce/>
                    Projetos
                </Link>
                <Link to="/Contato">
                    <FontAwesomeIcon icon={faIdCard} fade />
                    Contato
                </Link>
            </div>
        </nav>
    );
};
