import React from "react";

function Card(props) {
  //Validacion para badge de sold out
  //   let badgeText;
  //   if (props.item.openSpots === 0) {
  //     badgeText = "SOLD OUT";
  //   } else if (props.item.location === "Online") {
  //     badgeText = "ONLINE";
  //   }

  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>gender</td>
          <td>status</td>
        </tr>
        <tr>
          <td>{props.item.name}</td>
          <td>{props.item.email}</td>
          <td>{props.item.gender}</td>
          <td>{props.item.status}</td>
        </tr>
      </table>
    </div>

    //     <div className="card">
    //         {badgeText && <div className="card--badge"> {badgeText}</div>}
    //     <img src={`./${props.item.coverImg}`} className="card--image" alt="card"/>
    //     <div className="card--stats">
    //         <img src="images/Star.png" className="card--star" alt="star"/>
    //         <span>{props.item.stats.rating}</span>
    //         <span className="gray">({props.item.statsreviewCount}) • </span>
    //         <span className="gray">{props.item.location} </span>
    //     </div>
    //     <p className="card--title">{props.item.title}</p>
    //     <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
    // </div>
  );
}

export default Card;

// `../images/${props.img}`
