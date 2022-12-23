import Header from "../components/header/header";
import AboutUs from "../components/about-us/about-us";
import OurBest from "../components/our-best/our-best";
import Footer from "../components/footer/footer";
import { Component } from "react";


class Main extends Component {
    render () {
        return (
                <div className="hide">
                    <Header/>
                    <AboutUs/>
                    <OurBest/>
                    <Footer/>
                </div>
        )
    }
}

export default Main ;