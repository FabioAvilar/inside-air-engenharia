import React from "react";
import "./projetos.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faMap,
    faClock,
    faProjectDiagram,
    faArrowCircleDown,
    fa,
    faClipboardList,
    faUserTie,
    faScrewdriverWrench,
    faToolbox,
    faMinus,
    faPeopleRoof,
    faCaretRight,
    faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";


import servico1 from "../../assets/servicos1.jpg";
import servico2 from "../../assets/home2.jpg";
import servico3 from "../../assets/servicos3.jpg";
import servico4 from "../../assets/servicos4.jpg";
import servico5 from "../../assets/servicos5.jpeg";
import servico6 from "../../assets/servicos6.jpeg";
import servico7 from "../../assets/analise.jpg";
import servico8 from "../../assets/gerenciamento.jpg";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";


export const Projetos = () => {
    return (
        <>
            <div className="services">
                <h2 className="servicos-h2">NOSSOS SERVIÇOS</h2>
            </div>

            <div className="container-service">
                <div className="service-container1">
                    <div>
                        <div className="service-img-border"></div>
                        <img
                            src={servico7}
                            alt="Foto do serviço"
                            className="service-img"
                        />
                    </div>

                    <div className="service-block">
                        <FontAwesomeIcon
                            icon={faUserTie}
                            className="icon-services"
                            thin
                        />
                        <h2>PROJETOS</h2>
                        <p>
                            Análise de projeto é feito com todos dados técnicos
                            sobre o local, tamanho do ambiente, número de
                            pessoas, possível fonte de calor, aberturas de
                            portas janelas etc. Seguindo todas as normas ABNT
                            para dimensionar o equipamento correto, responsável
                            pela refrigeração e aquecimento, ventilação e
                            desumidificação, visando o maior conforto térmico.
                        </p>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="service-container1 service-2">
                    <div className="service-block-2">
                        <FontAwesomeIcon
                            icon={faClipboardList}
                            className="icon-services"
                        />
                        <h2>DESINSTALAÇÃO</h2>
                        <p>
                            Com responsabilidade ambiental, preservando a camada
                            de ozônio.
                        </p>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </div>
                    <div className="service-img-container">
                        <div className="service-img-border"></div>
                        <img
                            src={servico8}
                            alt="Foto do serviço"
                            className="service-img"
                        />
                    </div>
                </div>

                <div className=" services-2 service-container1">
                    <div>
                        <div className="service-img-border"></div>
                        <img
                            src={servico5}
                            alt="Foto do serviço"
                            className="service-img"
                        />
                    </div>
                    <div className="service-block">
                        <FontAwesomeIcon
                            icon={faScrewdriverWrench}
                            className="icon-services"
                        />
                        <h2>MANUTENÇÃO</h2>
                        <p>
                            Preventiva e corretiva, realizando procedimentos
                            corretos para garantir maior vida útil ao seu
                            aparelho.
                        </p>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="service-container1 service-2">
                    <div className="service-block">
                        <FontAwesomeIcon
                            icon={faToolbox}
                            className="icon-services"
                        />
                        <h2>INSTALAÇÃO</h2>
                        <p>
                            Seguindo todos os parâmetros técnicos exigidos pelo
                            fabricante.
                        </p>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </div>

                    <div className="service-img-container">
                        <div className="service-img-border"></div>
                        <img
                            src={servico2}
                            alt="Foto do serviço"
                            className="service-img"
                        />
                    </div>
                </div>

                <div className="service-container1 ">
                    <div>
                        <div className="service-img-border"></div>
                        <img
                            src={servico6}
                            alt="Foto do serviço"
                            className="service-img"
                        />
                    </div>
                    <div className="service-block">
                        <FontAwesomeIcon
                            icon={faHandshake}
                            className="icon-services"
                        />
                        <h2>VENDA DE PRODUTOS</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Cumque ipsam quas atque iure delectus nulla
                            placeat iusto debitis eveniet, provident, eligendi
                            deleniti numquam repellat optio quidem voluptate
                        </p>
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faAnglesRight}
                                    className="icon-services-arrow"
                                />
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="service-contact">
                <FontAwesomeIcon className="about-icon-minus" icon={faMinus} />
                <h3>NÓS OFERECEMOS OS MELHORES SERVIÇOS</h3>
                <Link to="/Contato">
                    <button className="button-service">Entre em contato</button>
                </Link>
            </div>
        </>
    );
};
