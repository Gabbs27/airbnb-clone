import React from "react";
import hero from '../images/exp.png';

function Hero(){

return(

<section className="hero">
<img className="hero--img" src={hero} alt="ImagenHero"/>
<h1 className="hero--h1">Online Experiences</h1>
<p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
</section>

)

}

export default Hero;