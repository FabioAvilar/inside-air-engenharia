import { React } from "react";
import "./contato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import KEY from "../../key_maps.json"
import {
    faLinkedin,
    faInstagram,
    faWhatsapp,
    faFacebook,
    faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Contato = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: KEY.API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div>
            <div className="contact-container-1">
                <h1 className="contact-h1">CONTATO</h1>
            </div>

            <div className="contact-container-2">
                <div>
                    <div>
                        <h2 className="contact-h2">Entre em Contato</h2>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-contact"
                        />
                    </div>
                    <div className="contact-div">
                        <p className="contact-p">Telefone</p>
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="icon-contact whats"
                        />
                        <p className="contact-p2">(11) 3925-5423</p>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-contact-dados"
                        />
                    </div>
                    <div className="contact">
                        <p className="contact-p">Email</p>
                        <p className="contact-p2">eduardo@hotmail.com</p>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-contact-dados"
                        />
                    </div>
                    <div className="contact">
                        <p className="contact-p">Endereço</p>
                        <p className="contact-p2">Sao Paulo - SP</p>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-contact-dados"
                        />
                    </div>
                    <div className="contact">
                        <p className="contact-p">Redes Sociais</p>
                        <div className="contact-container">
                            <div>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="icon-contact-social"
                                />
                            </div>

                            <div>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="icon-contact-social"
                                />
                            </div>

                            <div>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="icon-contact-social"
                                />
                            </div>
                        </div>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className="icon-contact-dados hidden-icon"
                        />
                    </div>
                </div>
                <div className="message-us">
                    <h2 className="contact-h2">Nos envie uma mensagem</h2>
                    <FontAwesomeIcon icon={faMinus} className="icon-contact" />
                    <form action="" className="contact-form">
                        <label htmlFor="">Nome: </label>
                        <input type="text" className="input-1" />

                        <label htmlFor="">Email: </label>
                        <input type="email" className="input-1" />

                        <label htmlFor="">Sua Mensagem: </label>
                        <input type="text" className="input-msg input-1" />
                        <button type="submit" className="contact-button">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <Map />
        </div>
    );

    function Map() {
        const center = { lat: -23.5505, lng: -46.6333 };
        return (
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName="map-container"
            >
                <Marker
                    position={center}
                />
            </GoogleMap>
        );
    }
};
