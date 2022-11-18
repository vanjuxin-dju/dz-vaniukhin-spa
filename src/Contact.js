import React, { Component} from "react";

class Contact extends Component {
    render() {
        return (
          <div className="contact bg-light p-5" id="contact">
            <h1 className="mb-5 display-2">Contact</h1>
            <p>Ask any questions: <a href="mailto:sokol.vdu@gmail.com">sokol.vdu@gmail.com</a> <small className="text-muted">(preferable option)</small></p>
            <p>Phone: <a href="tel:+375295831788">+375295831788</a></p>
            <p>Skype: <a href="skype:sokol_vdu?chat">sokol_vdu</a></p>
          </div>
        );
    }
}

export default Contact;