import React, { Component} from "react";

class Information extends Component {
    constructor(props) {
        super(props);
        let startDate = new Date(2015, 6);
        let endDate = new Date();

        let difference = endDate.getFullYear() - startDate.getFullYear();
        if (endDate.getMonth() < startDate.getMonth()) {
            difference--;
        }

        this.state = { experience : difference };
    }

    render() {
        return (
            <div className="information bg-light p-5" id="information">
                <h1 className="mb-5 display-2">Welcome to Dzmitry Vaniukhin's website!</h1>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-md pb-3">
                            <img className="photo" src="/pics/photo.png" alt="Photo"/>
                        </div>
                        <div className="col-md col-xl-7 col-xxl-8">
                            <p>Hi, everyone! My name is Dzmitry, and I am a Front-end developer with {this.state.experience}+ years of experience. I develop web apps using Vue and React.</p>
                            <p>I gratuated from Grodno State University with a diploma on software engineering and with a degree of master of technical sciences.</p>
                            <p>I also had experience in backend development using Java programming language in the beginning of my career.</p>
                            <p>My hobbies include astronomy, cooking, DIY, and music.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;