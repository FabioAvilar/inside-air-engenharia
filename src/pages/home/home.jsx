import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faXbox,
    faPlaystation,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
    return (
        <>
            <section className="sectionOne imagem-escura">
                <h1>Inside Air Engenharia</h1>
            </section>
            <section className="sectionTwo">
                <div className="element-container">
                    <div className="element">
                            <FontAwesomeIcon icon={faInstagram} className="icon-home"/>
                        <div className="element-inside">
                            <h2>Texto</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, fugit.
                            </p>
                        </div>
                    </div>
                    <div className="element">
                        <FontAwesomeIcon icon={faXbox} className="icon-home"/>
                         <div className="element-inside">
                            <h2>Texto</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, fugit.
                            </p>
                        </div>
                    </div>
                    <div className="element">
                        <FontAwesomeIcon icon={faPlaystation} className="icon-home"/>
                         <div className="element-inside">
                            <h2>Texto</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, fugit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionOne sectionThree imagem-escura">
                <h1>Inside Air Engenharia</h1>
            </section>
        </>
    );
};
