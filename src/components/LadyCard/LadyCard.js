import React from "react";
import "./LadyCard.css";

const LadyCard = props => {
  return (
    <div className="card" onClick={function () {
      props.handleClick(props.id);
    }}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">

      </div>
      <span onClick={() => props.removeLady(props.id)} className="remove">
        𝘅
    </span>
    </div>
  )
};

export default LadyCard;
