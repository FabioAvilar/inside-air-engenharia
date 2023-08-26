import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/inside.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="logo inside air" className="logotype" />
            </Link>

            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="menu-span"></span>
                <span className="menu-span"></span>
                <span className="menu-span"></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/" className="projetos home">
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Sobre" className="projetos ">
                        Sobre
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Projetos" className="projetos">
                        Serviços
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/Contato" className="projetos">
                        Contato
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
