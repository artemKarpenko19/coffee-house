import React from "react";
import { Component } from "react";
import CoffeeBeansImg from "../../images/coffee-beans-white.png"
import { Link } from "react-router-dom";

import "./nav-menu.css";



class NavMenu extends Component {
    
    render () {
        return (
            <div >
                <ul className="nav-menu">
                    <img src={CoffeeBeansImg} alt="coffee-beans"/>
                    <li><Link to='/'className="nav-menu-item">Coffee house</Link></li>
                    <li><Link className="nav-menu-item" to="/our-coffee">Our coffee</Link></li>
                    <li><Link className="nav-menu-item" to="/for-your-pleasure">For your pleasure</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavMenu;
