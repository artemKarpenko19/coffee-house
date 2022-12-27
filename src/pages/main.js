import Header from "../components/header/header";
import AboutUs from "../components/about-us/about-us";
import OurBest from "../components/our-best/our-best";
import { Component } from "react";


class Main extends Component {
    render () {
        return (
                <div>
                    <Header/>
                    <AboutUs/>
                    <OurBest/>
                   
                </div>
        )
    }
}

export default Main ;