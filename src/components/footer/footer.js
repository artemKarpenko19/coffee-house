import { Component } from "react";
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
                    <li className="footer-nav-menu-item">Coffee house</li>
                    <li className="footer-nav-menu-item">Our coffee</li>
                    <li className="footer-nav-menu-item">For your pleasure</li>
                </ul>
                </div>
                <Underline/>
            </div>
            

        )
    }
}

export default Footer;