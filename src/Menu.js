import React, { Component} from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonUpHidden: true
        };

        let that = this;
        window.addEventListener('scroll', function() {
            that.setState({ buttonUpHidden: (pageYOffset < document.documentElement.clientHeight / 4) });
        });
    }

    scrollToTop(e) {
        this.scrollTo(e, "information");
    }

    scrollTo(e, elementId) {
        e.preventDefault();
        let upperCoordinates = document.getElementById("information").getBoundingClientRect();
        let relational = upperCoordinates.top + pageYOffset;
        let currentCoordinates = document.getElementById(elementId).getBoundingClientRect();
        let offsetY = currentCoordinates.top + pageYOffset - relational;
        window.scrollTo(pageXOffset, offsetY);
    }

    render() {
        return (
          <nav className="menu bg-primary bg-gradient px-5 fixed-top">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link p-3 link-light" href="" onClick={(e) => this.scrollTo(e, "information")}>Info</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-3 link-light" href="" onClick={(e) => this.scrollTo(e, "portfolio")}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link p-3 link-light" href="" onClick={(e) => this.scrollTo(e, "contact")}>Contact</a>
                </li>
            </ul>
            <div className={ "button-up text-white" + (this.state.buttonUpHidden ? " hidden" : "") } onClick={(e) => this.scrollToTop(e)}></div>
          </nav>
        );
    }
}

export default Menu;