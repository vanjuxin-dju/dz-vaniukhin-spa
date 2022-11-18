import React, { Component} from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards : [
                {
                    image: "/price-list.png",
                    title: "Price Lists",
                    url: "https://www.sap.com/products/technology-platform/price-list/list.cpea.html"
                },
                {
                    image: "/estimator.png",
                    title: "Estimator",
                    url: "https://www.sap.com/products/technology-platform/price-list/estimator-tool.html"
                },
                {
                    image: "/sap-search.png",
                    title: "SAP Search",
                    url: "https://search.sap.com/search.html"
                },
                {
                    image: "/partneredge.png",
                    title: "SAP Partner portal",
                    url: "https://partneredge.sap.com"
                },
                {
                    image: "/dummy.png",
                    title: "Lorem",
                    url: "https://www.sap.com"
                },
                {
                    image: "/dummy.png",
                    title: "Lorem",
                    url: "https://www.sap.com"
                }
            ]
        };
    }
    render() {
        const portfolioCards = this.state.cards.map((card, index) =>
            <div className="portfolio-card col text-center" key={index}>
                <div className="portfolio-card-image"><a href={card.url} target="_blank"><img src={card.image} alt={card.title} /></a></div>
                <p><a href={card.url} target="_blank">{card.title}</a></p>
            </div>
        );
        return (
            <div className="portfolio bg-light p-5 my-1" id="portfolio">
                <h1 className="mb-5 display-2">Portfolio</h1>
                <div className="portfolio-cards container-fluid">
                    <div className="row gy-5 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
                        {portfolioCards}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;