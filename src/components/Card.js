import React from "react";
import card1 from '../images/image12.png';
import star from '../images/Star.png';
function Card(){

return(
    <div className="card">
    <img src={card1} className="card--image" alt="card"/>
    <div className="card--stats">
        <img src={star} className="card--star" alt="star"/>
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
    </div>
    <p>Life Lessons with Katie Zaferes</p>
    <p><span className="bold">From $136</span> / person</p>
</div>
    );
}


export default Card;