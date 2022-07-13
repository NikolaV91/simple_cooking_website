import React from 'react';
import { useState } from 'react';
import './modal.scss';


const Modal = (props) => {
    const [recipe, setRecipe] = useState({
        recipe: {
            meal: '',
            prepTime: 0,
            level: 0,
            image: '',
            ingredients: [],
            countryOfOrigin: '',
            mealType: [],
            isVegan: false,
            isVegetarian: false
        }
    })


    const submitRecipe = () => {
        fetch('https://626d4fa650a310b8a34ce36c.mockapi.io/recipe', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        }).then((res) => res.json())
            .then((response) => {
                props.setModal(false)
                props.setShouldUpdate()
            })
    }
    const setIngredients = (recipeValue) => {
        const arr = recipeValue.split(',')
        setRecipe({
            ...recipe,
            ingredients: arr
        })
    }

    const setMealType = (recipeValue) => {
        const arr = recipeValue.split(',')
        setMealType({
            ...recipe,
            mealType: arr
        })
    }


    return (
        <div className="modal-wrapper">

            <div className="modal-content">



                <p className='menutitle'>Your recipes</p>

                <p className='titles'>Your dish's name:</p>
                <input type="text" name="meal" id="meal" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    meal: e.target.value
                })} />
                <br />
                <p className='titles'>Preparing time:</p>
                <input type="number" name="prepTime" id="prepTime" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    prepTime: e.target.value
                })} />
                <br />
                <p className='titles'>Origin of dinner:</p>
                <input type="text" name="" id="" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    countryOfOrigin: e.target.value
                })} />
                <br />
                <p className='titles'>Ingredients: (use comma)</p>
                <input type="text" name="" id="" className='modalinput' onChange={(e) => setIngredients(e.target.value)} />
                <br />
                <p className='titles'>Nivo tezine:</p>
                <input type="number" name="level" id="level" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    level: e.target.value
                })} />
                <br />
                <p className='titles'>Meal image: (link)</p>
                <input type="text" name="image" id="image" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    image: e.target.value
                })} />
                <br />
                <p className='titles'>Type of dish: (use comma)</p>
                <input type="text" name="" id="" className='modalinput' onChange={(e) => setMealType(e.target.value)} />
                <br />

                <div className='radioflex'>
                    <p className='titles'>Is it vegan: </p>
                    <input type="radio" name="isVegan" id="isVegan"  className='answ' /> Yes<span></span>
                    <input type="radio" name="isVegan" id="isVegan"  className='answ'/> No
                </div>

                <br />
                <div className='radioflex'>
                    <p className='titles'>Is it vegetarian: </p>
                    <input type="radio" name="isVegetarian" id="isVegetarian" className='answ' />Yes <span></span>
                    <input type="radio" name="isVegetarian" id="isVegetarian"  className='answ'/>No
                </div>

                <br />

                <div className='divbtn'>
                    <div className='macaroondiv'>
                        <div className='macpicdiv'></div>
                    </div>
                    <button className="close-modal" onClick={() => props.setModal(false)}>Cancel</button>
                    <button className='submitBtn' onClick={submitRecipe}>Add your recipe</button>
                </div>


            </div>
        </div>

    );
}




export default Modal;