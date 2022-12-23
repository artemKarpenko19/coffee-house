import { Component } from "react";
import NavMenu from "./nav-menu";
import "./header.css";


class Header extends Component {
    render () {

        return (
            <div className="header">
                <NavMenu />
                <h1 className="header-title wrapper">Everything You Love About Coffee</h1>
                <h2 className="wrapper header-subtitle">We makes every day full of energy and taste</h2>
                <h2 className="wrapper header-subtitle">Want to try our beans?</h2>
                <button className="header-btn wrapper">More</button>
            </div>
            
        )
    }
}

export default Header;