
import { Component } from "react";
import { Link } from "react-router-dom";


import AboutOurBeans from "../components/about-our-beans/about-our-beans";
import Filter from "../components/filter/filter";
import Search from "../components/search/search";


import "./our-coffee.css";


class OurCoffee extends Component {
    constructor (props) {
        super(props);
        this.state = {
            cardsData: props.cardsData,
            term: '',
            filter: '',
            actual: '2',
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
                return items.filter(item => item.country === 'Brasil');
            case 'Columbia': 
                return items.filter(item => item.country === 'Columbia');
            case 'Keniya': 
                return items.filter(item => item.country === 'Keniya');
            case 'All': 
                return items;   
            default : return items;   
        }
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    
       

    
    render () {
        
        const {cardsData, term, filter} = this.state;
        const visibleCards = this.filterPost(this.searchEmp(cardsData, term), filter);
        const cards = visibleCards.map(({name, price, src, alt, country, id}) => {
   
            return (   
                        <div className="our-best-item" key={id}  value={name}>
                            <img src={src} alt={alt}></img>
                            <Link id={id} to={`/about-it/` + id} onClick = {() => {this.props.onCardSelect(id)}}><h4>{name}</h4></Link> 
                            <span>{country}</span>
                            <span>{price}</span>
                            
                        </div>
                       
               
            )
        
        });
        return (
            <div>
                <div className="header header-our-coffee">
                <h1 className="header-title">Our Coffee</h1>
                </div>
                <AboutOurBeans/>
                <div className="filter">
                    <Search onUpdateSearch={this.onUpdateSearch}/>
                    <Filter onFilter={this.onFilter} filter={filter}/>
                </div>
                <div className="cards">
                    {cards}
                </div>

            
                
            </div>
        )
    }
}

export default OurCoffee;