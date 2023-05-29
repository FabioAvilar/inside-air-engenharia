import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contato">Contato</Link>
            </div>
        </div>
    );
};
