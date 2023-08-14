import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
    faClock,
    faEarthAmericas,
    faEnvelopesBulk,
    faPhone,
    faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/inside-air.jpg";

export const Footer = () => {
    return (
        <footer>
            <section className="dados">
                <div className="footer_content">
                    <div className="footer_contacts">
                        <h2 className="footer_contacts-title">
                            <img src={logo} alt="" />
                        </h2>
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
                </div>

                <div className="footer_dados">
                    <div className="grid">
                        <FontAwesomeIcon
                            icon={faEarthAmericas}
                            className="icon-contact"
                        />
                        <div className="address">
                            <h3 className="h3">Address:</h3>
                            <p className="p-add">São Paulo - Brasil</p>
                        </div>
                    </div>
                    <div className="grid">
                        <FontAwesomeIcon
                            icon={faEnvelopesBulk}
                            className="icon-contact"
                        />
                        <div className="email">
                            <h3 className="h3">Email:</h3>
                            <p className="p-add">
                                eduardobassani@engenharia.com
                            </p>
                        </div>
                    </div>
                    <div className="grid">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="icon-contact"
                        />
                        <div className="email">
                            <h3 className="h3">Telefone:</h3>
                            <p className="p-add">5945-8569</p>
                        </div>
                    </div>
                    <div className="grid">
                        <FontAwesomeIcon
                            icon={faClock}
                            className="icon-contact"
                        />
                        <div className="hour">
                            <h3 className="h3">Horario de Atendimento:</h3>
                            <p className="p-add">Seg. à Sex. 9:00 às 18:00</p>
                        </div>
                    </div>
                </div>
            </section>

            <a href="#" className="arrow-up">
                <FontAwesomeIcon
                    icon={faArrowCircleUp}
                    className="icon-contact"
                />
            </a>

            <hr size="5" />

            <div className="footer_copyright">
                <a
                    className="footer-link footer-hover"
                    href="https://fabiobassani.com/"
                    target="_Blank"
                >
                    Copyright © 2023 Inside Air
                </a>
            </div>
        </footer>
    );
};
