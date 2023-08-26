import React from "react";
import profilePhoto from "../../assets/sobre.jpg";
import profilePhoto1 from "../../assets/sobre1.jpg";
import profilePhoto2 from "../../assets/sobre2.jpg";
import sobre from "../../assets/sobre6.jpg";
import "./about.css";
import "./sobre-media.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBarsProgress,
    faBuilding,
    faCheck,
    faCircleCheck,
    faEnvelope,
    faUser,
    faMinus,
    faMedal,
} from "@fortawesome/free-solid-svg-icons";

export const Sobre = () => {
    return (
        <>
            <div className="about-us-1">
                <h1 className="about-us-h2">SOBRE NÓS</h1>
            </div>
            <div className="about-us-container">
                <div className="about-us-content">
                    <div className="about-us-image">
                        <img
                            src={profilePhoto}
                            alt="Foto da empresa"
                            className="about-img1 img-effect"
                        />
                        <img
                            src={profilePhoto1}
                            alt="Foto da empresa"
                            className="about-img2 img-effect"
                        />
                        <img
                            src={profilePhoto2}
                            alt="Foto da empresa"
                            className="about-img3 img-effect"
                        />
                    </div>
                    <div className="about-us-text">
                        <h2 className="about-us-h2-text">
                            NÓS FAZEMOS ACONTECER
                        </h2>
                        <FontAwesomeIcon
                            className="about-icon-minus"
                            icon={faMinus}
                        />
                        <div className="about-us-p"></div>
                        <p>
                            Somos uma empresa capaz de surpreender nossos
                            clientes, tendo soluções completas e inteligentes em
                            todos os seguimentos de HVAC. Trazemos soluções de
                            controle de temperatura para o conforto humano,
                            procurando manter um contínuo processo de
                            aprimoramento através de treinamentos qualificados
                            para sempre prestar serviços de alta qualidade.
                        </p>
                        <p>
                            Estamos no mercado para levar aos nossos clientes
                            uma experiencia única, nosso objetivo é usar nossas
                            qualificações profissionais para desenvolver o seu
                            projeto, seja ele em sua residência ou empresa.
                        </p>
                        <div>
                            <ul className="about-ul">
                                <li className="about-li">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="li-icon"
                                    />
                                    Especialista profissional
                                </li>
                                <li className="about-li">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="li-icon"
                                    />
                                    Ideias Brilhantes
                                </li>
                                <li className="about-li">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="li-icon"
                                    />
                                    Assistência 24/7
                                </li>
                                <li className="about-li">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="li-icon"
                                    />
                                    Especialista profissional
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-container-2">
                <section className="about-container-grid">
                    <div className="element-grid">
                        <div className="element-1">
                            <div className="about-border-icon">
                                <FontAwesomeIcon
                                    icon={faMedal}
                                    className="about-icon"
                                />
                            </div>

                            <div className="element-inside-1">
                                <h2>10 anos de experiencia</h2>
                                <p>
                                    Garantimos a instalação seguindo todos os
                                    padrões do fabricante através de técnicos
                                    experientes.
                                </p>
                            </div>
                        </div>
                        <div className="element-1">
                            <div className="about-border-icon">
                                <FontAwesomeIcon
                                    icon={faBarsProgress}
                                    className="about-icon"
                                />
                            </div>
                            <div className="element-inside-1">
                                <h2>Projetos</h2>
                                <p>
                                    Vamos até o local para analisar o melhor
                                    posicionamento dos equipamentos.
                                </p>
                            </div>
                        </div>
                        <div className="element-1">
                            <div className="about-border-icon">
                                <FontAwesomeIcon
                                    icon={faBuilding}
                                    className="about-icon"
                                />
                            </div>
                            <div className="element-inside-1">
                                <h2>Infraestutura</h2>
                                <p>
                                    Estudamos o tamanho e espaço do ambiente
                                    para selecionar o condicionador de ar ideal
                                    para aquele local.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="history">
                <div>
                    <h2>NOSSA HISTÓRIA</h2>
                    <FontAwesomeIcon
                        className="about-icon-minus"
                        icon={faMinus}
                    />
                    <p>
                        Antes de idealizar a Inside Air foi preciso entender
                        esse mercado concorrido e exigente, essa compreensão foi
                        fundamental para consolidar todos os processos
                        organizacional, levando a direção e todos os
                        colaboradores mostrar que podemos fazer a diferença na
                        prestação de serviços com foco no atendimento
                        interpessoal.
                    </p>
                </div>
                <div className="history-2">
                    <p className="p2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatum veritatis consequuntur maiores debitis
                        aliquid error culpa ducimus dolorem quisquam, suscipit
                        quo maxime blanditiis, architecto nesciunt deleniti esse
                        ea, inventore cumque at. Voluptates porro quas,
                        consectetur, ipsa ut sunt voluptas rerum atque nostrum
                        fuga dolorem dignissimos odit, illum sit quis similique!
                    </p>
                    <img
                        src={sobre}
                        alt="Foto da empresa"
                        className="about-6"
                    />
                    <p className="name">Eduardo Bassani Jr. </p>
                    <p className="founder">Fundador </p>
                </div>
            </div>
            <hr className="hr-about" />
        </>
    );
};
