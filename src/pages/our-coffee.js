
import { Component } from "react";
import NavMenu from "../components/header/nav-menu";
import Footer from "../components/footer/footer";
import AboutOurBeans from "../components/about-our-beans/about-our-beans";
import Filter from "../components/filter/filter";

import "./our-coffee.css";






class OurCoffee extends Component {
    constructor (props) {
        super(props);
        this.state = {
            cardsData : [
                {name:"AROMISTICO Coffee 1 kg", price: "6.99$",  country: "Brasil" , src: require('../images/card-img.png'), alt: "altImg1", id: '1'},
                {name:"AROMISTICO Coffee 2 kg", price: "7.99$",  country: "Keniya" , src: require('../images/card-img.png'), alt: "altImg1", id: '2'},
                {name:"TAROMISTICO Coffee 1 kg", price: "6.99$",  country: "Columbia" , src: require('../images/card-img.png'), alt: "altImg1", id: '3'},
                {name:"AROMISTICO Coffee 3 kg", price: "13.69$",  country: "Brasil" , src: require('../images/card-img.png'), alt: "altImg1", id: '4'},
                {name:"AROMISTICO Coffee 4 kg", price: "6.99$",  country: "Brasil" , src: require('../images/card-img.png'), alt: "altImg1", id: '5'},
                {name:"BAROMISTICO Coffee 1 kg", price: "6.99$",  country: "Brasil" , src: require('../images/card-img.png'), alt: "altImg1", id: '6'},
            ],
            term: '',
            filter: "",
        }
    }
    
    searchEmp = (items, term) => {
        if (term.length === 0){
            return items;
        }
        return items.filter(item => item.name.indexOf(term) > -1)
    }


    onUpdateSearch = (term) => {
       this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brasil': 
                return items.filter(item => 
                    item.country === 'Brasil');
            case 'Columbia': 
                return items.filter(item => item.country === 'Columbia');
            case 'Keniya': 
                return items.filter(item => item.country === 'Keniya'); 
            default : return items;   
        }
    }

    render () {
        const {cardsData, term, filter} = this.state;
        const visibleCards = this.filterPost(this.searchEmp(cardsData, term), filter);
        const cards = visibleCards.map(({name, price, src, alt, country}) => {
   
            return (
                <div className="our-best-item" key={name}>
                    <img src={src} alt={alt}></img>
                    <h4>{name}</h4>
                    <span>{country}</span>
                    <span>{price}</span>
                </div>
            )
        
        });
        return (
            <div>
                <div className="header">
                <NavMenu/>
                <h1 className="header-title">Our Coffee</h1>
                </div>
                <AboutOurBeans/>
                <Filter onUpdateSearch={this.onUpdateSearch} filter={filter}/>
                <div className="cards">
                    {cards}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OurCoffee;