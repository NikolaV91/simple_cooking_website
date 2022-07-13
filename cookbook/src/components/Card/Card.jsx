import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  
  return (
    <div className="card">
      <img src={props.obj.image} alt="meal" className="cardimg" />

      <div className="btnwrap">
        <Link to={`/singlePage/${props.obj.id}`}>
          <button
            onClick={() => props.setSelectedRecipe(props.obj.id)}
            className="openbtn"
          ></button>
        </Link>

        <p className="cardmealtitle">~{props.obj.meal}~</p>

        <button
          onClick={(e) => {
            props.setSelectedRecipe(props.obj.id)
            props.changeConfirmModal("open")
          }}
          className="closeBtn"
        ></button>
      </div>
    </div>
  );
};

export default Card;
