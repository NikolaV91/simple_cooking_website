import React from "react";
import { Link } from "react-router-dom";

import "./confirm-modal.scss"

const ConfirmModal = (props) => {

  // console.log(props.selectedRecipeId)

  const deleteRecipeConfirm = () => {
    fetch(
      `https://626d4fa650a310b8a34ce36c.mockapi.io/recipe/${props.selectedRecipeId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.recipe),
      }
    )
      .then((res) => res.json())
      .then(() => props.setShouldUpdate());
  };

  return (
    <div className="confirm-modal-wrap">
      <div className="confirm-modal">
        <h3>Are you sure you want to delete this recipe?</h3>
        <div className="btnDiv">
          <Link to={`/`}>
            <button className="yesBtn" onClick={(e) => {
            //  e.stopPropagation();
            //  e.preventDefault();
             deleteRecipeConfirm();
             props.changeConfirmModal("close");
             props.deleteRecipeSingle();
            }}>Yes</button>
          </Link>

          <button className="noBtn" onClick={(e) => {
            props.changeConfirmModal("close")
          }}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;