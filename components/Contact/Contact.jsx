import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; // Import the envelope icon


import "./contact.css"


export default function Contact() {
    return (
        <div className="main-Contact">
            <div className="main1-Contact container">
                <div className="main1-Contact1">
                    <p>Get in touch</p>
                    <p>Fill in the form to start a conversation</p>
                   <div>
                   <FontAwesomeIcon icon={faLocationDot} className="fontAwesomeIcon" />

                   <p>Sss,ORMSM,LDKEF,lwofff</p>
                   </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone} className="fontAwesomeIcon"/>
                   <p> +945104900</p>
                   </div>
                   <div>
                   <FontAwesomeIcon icon={faEnvelope} className="fontAwesomeIcon"/>
                   <p>info@acme.org</p>
                   </div>
                </div>
                <div className="main1-Contact2">
                    <input type="text" className="input-contact" placeholder="Name"/>
                    <input type="email" className="input-contact" placeholder="E-mail"/>
                    <input type="tel" className="input-contact" placeholder="TelePhone Number"/>
                </div>
            </div>
        </div>
    )
}