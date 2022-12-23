import { Component } from "react";


import "./our-best.css";

const cardsData = [
    {name:"Solimo Coffee Beans", price: "10.73$", src: require('../../images/best-item.png'), alt: "altImg1"},
    {name:"Presto Coffee Beans 1 kg", price: "15.99$", src: require('../../images/best-item3.png'), alt: "altImg2"},
    {name:"AROMISTICO Coffee 1 kg", price: "6.99$", src: require('../../images/best-item2.png'), alt: "altImg3"},
];

const cards = cardsData.map(({name, price, src, alt}) => {
   
        return (
            <div className="our-best-item" key={name}>
                <img src={src} alt={alt}></img>
                <h4>{name}</h4>
                <span>{price}</span>
            </div>
        )
    
});


class OurBest extends Component {

    render () {
        return (
            <div className="our-best">
                <h3 className="our-best-title">Our Best</h3>
                {cards}
            </div>
        )
    }
}


export default OurBest;