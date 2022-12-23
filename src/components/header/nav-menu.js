import React from "react";
import { Component } from "react";
import CoffeeBeansImg from "../../images/coffee-beans-white.png"


import "./nav-menu.css";



class NavMenu extends Component {
    
    render () {
        return (
            <div >
                <ul className="nav-menu">
                    <img src={CoffeeBeansImg} alt="coffee-beans"/>
                    <li className="nav-menu-item">Coffee house</li>
                    <li className="nav-menu-item">Our coffee</li>
                    <li className="nav-menu-item">For your pleasure</li>
                </ul>
            </div>
        );
    }
}

export default NavMenu;
