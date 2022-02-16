import React from "react";
import"./Card.css";


const Card = (props) => {
    return(
        <div>

<div className="card">


<img src={props.thumbnailUrl }  />
<h1> {props.title} </h1>
    
</div>
</div>

    );

}
export default Card;