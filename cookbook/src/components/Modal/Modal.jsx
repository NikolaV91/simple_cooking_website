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
            isVegan: "No",
            isVegetarian: "No"
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
                <p className='titles'>Preparing time:</p>
                <input type="number" name="prepTime" id="prepTime" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    prepTime: e.target.value
                })} />
                <p className='titles'>Origin of dinner:</p>
                <input type="text" name="" id="" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    countryOfOrigin: e.target.value
                })} />
                <p className='titles'>Ingredients: (use comma)</p>
                <input type="text" name="" id="" className='modalinput' onChange={(e) => setIngredients(e.target.value)} />
                <p className='titles'>Nivo tezine:</p>
                <input type="number" name="level" id="level" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    level: e.target.value
                })} />
                <p className='titles'>Meal image: (URL)</p>
                <input type="text" name="image" id="image" className='modalinput' onChange={(e) => setRecipe({
                    ...recipe,
                    image: e.target.value
                })} />
                <p className='titles'>Type of dish: (use comma)</p>
                <input type="text" name="" id="" className='modalinput' onChange={(e) => setMealType(e.target.value)} />

                <div className='radioflex'>
                    <p className='titles'>Vegan:</p>
                    <div>
                        <input type="radio" name="isVegan" id="isVegan" value="Yes"
                            onChange={(e) => setRecipe({
                                ...recipe,
                                isVegan: e.target.value
                            })}
                            className='answ' />Yes
                        <input type="radio" name="isVegan" id="isVegan" value="No"
                            onChange={(e) => setRecipe({
                                ...recipe,
                                isVegan: e.target.value
                            })}
                            className='answ' />No
                    </div>
                </div>

                <br />
                <div className='radioflex'>
                    <p className='titles'>Vegetarian:</p>
                    <div>
                        <input type="radio" name="isVegetarian" id="isVegetarian" value="Yes"
                            onClick={(e) => setRecipe({
                                ...recipe,
                                isVegetarian: e.target.value
                            })}
                            className='answ' />Yes
                        <input type="radio" name="isVegetarian" id="isVegetarian" value="No"
                            onClick={(e) => setRecipe({
                                ...recipe,
                                isVegetarian: e.target.value
                            })}
                            className='answ' />No
                    </div>
                </div>

                <br />

                <div className='divbtn'>
                    <button className='submitBtn' onClick={submitRecipe}>Add your recipe</button>
                    <button className="close-modal" onClick={() => props.setModal(false)}>Cancel</button>
                </div>


            </div>
        </div>

    );
}




export default Modal;