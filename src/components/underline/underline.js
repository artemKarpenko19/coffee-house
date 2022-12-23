
import { Component } from "react"; 
import CoffeeBeansImgSmall from "../../images/coffee-beans-small.png";  

import "./underline.css";


class Underline extends Component {
    render () {
        return (
            <div className="underline">
                <img src={CoffeeBeansImgSmall} alt="coffee-beans"/>
            </div>
        )
    }
}

export default Underline;