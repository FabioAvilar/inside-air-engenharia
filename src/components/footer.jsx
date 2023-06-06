import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_contacts">
                    <h1 className="footer_contacts-title">Logo</h1>
                    <p>It's all about your dreams.</p>

                    <div className="footer_social_media">
                        <a href="#" className="instagram footer-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/eduardo-bassani-j%C3%BAnior-97b7b28b/"
                            className="footer-link linkedin"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a href="#" className="footer-link whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>

                <ul className="footer-list">
                    <li>
                        <h3>Blog</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            Tech
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            Adventures
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            Music
                        </a>
                    </li>
                </ul>

                <ul className="footer-list">
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            App
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            Desktop
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">
                            Cloud
                        </a>
                    </li>
                </ul>
            </div>

            <div className="footer_copyright">
                <a
                    className="footer-link footer-hover"
                    href="https://fabiobassani.com/"
                    target="_Blank"
                >
                    © 2023 Fabio Bassani
                </a>
            </div>
        </footer>
    );
};
