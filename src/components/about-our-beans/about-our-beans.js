import { Component } from "react";
import Underline from "../underline/underline";

import ("./about-our-beans.css");

class AboutOurBeans extends Component {
    render () {
        return (
            <div className="about-our-beans">
                <img src={require('../../images/girl.jpg')} alt="girl"/>
                <div className="about-our-beans-text">
                    <h2 className="about-our-beans-title">About Our Beans</h2>
                    <Underline/>
                    <p className="about-our-beans-descr">Extremity sweetness difficult behaviour he of. 
                        On disposal of as landlord horrible.<br/>
                        Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/>
                        so questions.<br/>
                        As greatly removed calling pleased improve an.<br/>Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we <br/>prospect answered followed. At it went<br/>
                        is song that held help face.
                    </p>
                </div>
            </div>
        )
    }
}


export default AboutOurBeans;