import { Component } from "react";
import { Link } from "react-router-dom";

import CoffeeBeansImgBlack from "../../images/coffee-beans-black.png";
import Underline from "../underline/underline";



import "./footer.css";


class Footer extends Component {
    
    render () {
        return (
            <div>
                <div className="footer">
                <ul className="footer-nav-menu">
                    <img src={CoffeeBeansImgBlack} alt="coffee-beans"/>
                    <li><Link to="/" className="footer-nav-menu-item">Coffee house</Link></li>
                    <li><Link to="/our-coffee" className="footer-nav-menu-item">Our coffee</Link></li>
                    <li><Link to="/for-your-pleasure" className="footer-nav-menu-item">For your pleasure</Link></li>
                </ul>
                </div>
                <Underline/>
            </div>
            

        )
    }
}

export default Footer;