import React from "react";
import "./home.css";
import "./home-media.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap, faClock, faProjectDiagram, faArrowCircleDown, faPlane, faMinus, faEarthAmericas} from "@fortawesome/free-solid-svg-icons";
import sobre6 from "../../assets/sobre6.jpg";
import detalhe2 from "../../assets/detalhe2.png";

export const Home = () => {
    return (
        <>
            <section className="sectionOne dark-image">
                <h1 className="animation">
                    Uma nova <br />
                    experiencia de <br />
                    conforto térmico
                </h1>
                <Link to="/Projetos">
                    <button className="btn-s1">SERVIÇOS</button>
                </Link>
                <Link to="/Contato">
                    <button className="btn-s1">ORÇAMENTO</button>
                </Link>
            </section>
            <div className="back">
                <h2 className="h2-s2">Nossos Serviços</h2>
                <FontAwesomeIcon icon={faMinus} className="icon-home-minus" />
                <section className="sectionTwo">
                    <div className="element-container">
                        <div className="element">
                            <FontAwesomeIcon
                                icon={faProjectDiagram}
                                className="icon-home"
                            />
                            <div className="element-inside">
                                <h2>Instalação</h2>
                                <p>
                                    Garantimos a melhor instalação seguindo
                                    todos os padrões do fabricante.
                                </p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon
                                icon={faArrowCircleDown}
                                className="icon-home"
                            />
                            <div className="element-inside">
                                <h2>Projetos</h2>
                                <p>
                                    Vamos até o local para analisar e
                                    desenvolver seu projeto.
                                </p>
                            </div>
                        </div>
                        <div className="element">
                            <FontAwesomeIcon
                                icon={faMap}
                                className="icon-home"
                            />
                            <div className="element-inside">
                                <h2>Infraestutura</h2>
                                <p>
                                    Estudamos o tamanho e espaço do seu ambiente
                                    para selecionar o condicionador de ar ideal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Link to={"/Sobre"}>
                    <button className="btn-s2">SAIBA MAIS</button>
                </Link>
            </div>
            <section className="sectionThree">
                <div className="container-map">
                    <div className="img"></div>
                    <div className="info">
                        <h2 className="info-h2">
                            Há 10 anos climatizando casas e empresas
                        </h2>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-home-section-three"
                        />
                        <p className="info-p">
                            Estamos no mercado a mais de 10 anos trazendo
                            conforto e bem-estar para qualquer ambiente,
                            entregando sempre os melhores resultados para nossos
                            clientes.
                        </p>
                        <Link to="/Contato">
                            <button className="btn-info">ORÇAMENTO</button>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="background">
                <section className="sectionFour">
                    <h2>Avaliaçoes</h2>
                    <FontAwesomeIcon
                        icon={faMinus}
                        className="icon-home-section-three"
                    />
                    <div className="section-four-grid">
                        <div>
                            <img
                                src={sobre6}
                                alt="Foto da empresa"
                                className="img-section-four"
                            />
                            <p className="comment">
                                "Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam perferendis magni
                                incidunt tempore quia soluta ratione? Labore
                                distinctio error dolor."
                            </p>
                            <p className="name-p">FABIO BASSANI</p>
                        </div>
                        <div>
                            <div>
                                <img
                                    src={sobre6}
                                    alt="Foto da empresa"
                                    className="img-section-four"
                                />
                                <p className="comment">
                                    "Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam perferendis magni
                                    incidunt tempore quia soluta ratione? Labore
                                    distinctio error dolor."
                                </p>
                                <p className="name-p">FABIO BASSANI</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    src={sobre6}
                                    alt="Foto da empresa"
                                    className="img-section-four"
                                />
                                <p className="comment">
                                    "Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Numquam perferendis magni
                                    incidunt tempore quia soluta ratione? Labore
                                    distinctio error dolor."
                                </p>
                                <p className="name-p">FABIO BASSANI</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
