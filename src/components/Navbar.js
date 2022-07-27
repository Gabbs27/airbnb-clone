import React from "react";
import airbnlogo from '../images/airbnb-logo.png';


function Navbar (){

    return(
        <nav>
        <img src={airbnlogo} alt="airbnb logo" className="nav--logo"/>
        </nav>
    )
}

export default Navbar;
