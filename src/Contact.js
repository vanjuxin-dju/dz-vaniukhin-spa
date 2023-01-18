import React, { Component} from "react";

function Contact() {
    return (
        <div className="contact bg-light p-5" id="contact">
            <h1 className="mb-5 display-2">Contact</h1>
            <p>Ask any questions: <a href="mailto:sokol.vdu@gmail.com">sokol.vdu@gmail.com</a> <small className="text-muted">(preferable option)</small></p>
            <p>Phone: <a href="tel:+375295831788">+375295831788</a></p>
            <p>Skype: <a href="skype:sokol_vdu?chat">sokol_vdu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/dzmitry-vaniukhin-5618a1192/" target="_blank">Dzmitry Vaniukhin</a></p>
        </div>
    );
}

export default Contact;