import { Component } from "react";
import Underline from "../components/underline/underline";

import "./about-it.css"

class AboutIt extends Component {
    constructor (props){
        super(props);
        this.state= {
            actual: 2
        }
    }
    
    render () {
        return (
            <div>
                 
                <div className="header header-our-coffee">
                    <h1 className="header-title">Our Coffee</h1>
                </div>
                <div className="about-it">
                    <img className="about-it-img" src={this.props.cardsData[+this.props.actualCard - 1].cardImg} alt="coffee-beans"/>
                    <div className="about-it-descr">
                        <h3 className="about-it-title">About It</h3>
                        <Underline/>
                        <p><span>Country: </span> {this.props.cardsData[+this.props.actualCard - 1].country}</p>
                        <p><span>Description: </span> {this.props.cardsData[+this.props.actualCard - 1].descr}</p>
                        <p><span>Price: </span> {this.props.cardsData[+this.props.actualCard - 1].price}</p>
                            
                    </div>
                </div>


            </div>
        )
    }
}

export default AboutIt;