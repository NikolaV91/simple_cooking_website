import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
import ConfirmModal from '../../components/confirmModal/ConfirmModal';
import "./single.scss";

const SinglePage = (props) => {
  // console.log(props);


  const deleteRecipeSingle = () => {
    fetch(
      `https://626d4fa650a310b8a34ce36c.mockapi.io/recipe/${props.recipe.id}`,
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

  // console.log(props.recipe.id)

  return (
    <div className="single-page">
       {props.confirmModal === "open" ? <ConfirmModal deleteRecipeSingle={deleteRecipeSingle} selectedRecipeId={props.selectedRecipeId} setShouldUpdate={props.setShouldUpdate} recipe={props.recipe} changeConfirmModal={props.changeConfirmModal}/> : null}
      <div className="btnWrap">
        {/* <Link to={`/`}> */}
          <button
            onClick={(e) => {
              // deleteRecipeSingle();
              // e.stopPropagation();
              // e.preventDefault();
              props.changeConfirmModal("open");
            }}
            className="deleteBtn"
          >
            Delete Recipe
          </button>
        {/* </Link> */}

        <Link to={`/`}>
          <button
            className="single-pageBtn"
            onClick={() => props.setSelectedRecipe("")}
          >
            Back
          </button>
        </Link>
      </div>

      <div className="singlecard">
        <img className="cardImg" src={props.recipe.image} alt="meal" />
        <p className="mainTitle">~{props.recipe.meal}~</p>
        <p>Country of origin: {props.recipe.countryOfOrigin}</p>
        <p>Preparation time: {props.recipe.prepTime} min</p>

        <p>Ingredients:</p>
        <ol className="inglist">
          {props.recipe.ingredients.map((e) => (
            <li>{e}</li>
          ))}
        </ol>

        <div className="mealtypewrap">
          <p> Meal type:</p>
          <div className="mealtype">
            {" "}
            {props.recipe.mealType.map((e) => (
              <li >{e}</li>
            ))}{" "}
          </div>
        </div>

        <p>
          Is Vegan:{" "}
          {props.recipe.isVegan.toString((e) => (
            <li >{e}</li>
          ))}
        </p>
        <p>
          is Vegetarian:{" "}
          {props.recipe.isVegetarian.toString((e) => (
            <li >{e}</li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
