import React from 'react';
import "./home.scss";
import Card from "../../components/Card/Card.jsx";
import pies from '../../images/pies.PNG'
import soup from '../../images/soup.jpg'
import oatmeal from '../../images/oatmeal.jpg'
import artist from '../../images/artist.jpg'
import artist2 from '../../images/artist2.jpg'
import { useState } from 'react'
import ConfirmModal from '../../components/confirmModal/ConfirmModal';


const HomePage = (props) => {
    const [search, setSearch] = useState("")

    return (
        <div className='homewrap'>

            <a href="#topPage" id='backOnTopLink'></a>

            {props.confirmModal === "open" ? <ConfirmModal selectedRecipeId={props.selectedRecipeId} setShouldUpdate={props.setShouldUpdate} recipe={props.recipe} changeConfirmModal={props.changeConfirmModal} /> : null}
            <div className='main'>

                <p className='mainText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='section_01'>
                <div className='div_sec01_wrapper'>
                    <img src={artist} alt="artist" className='artistImg' />
                    <img src={artist2} alt="artist2" className='artistImg' />
                    <div id='about' className='div_sec01_wrapper_artist'>
                        <p className='artistText_01'>WHO IS THE ASTIST?</p>
                        <p className='artistText_02'>Lorem e nostrum dolores itaque nam! Tenetur delectus autem eius sunt dolores? Molestias!</p>
                        <p className='artistText_02'>Lorem a at quos facilis sit sequi ipsam cumque neque quidem iusto non, vitae quod necessitatibus, dolore deserunt voluptas iste perferendis, distinctio qui repellendus vel doloribus dicta. Officia, expedita dignissimos?</p>
                    </div>
                </div>
            </div>

            {/* valjda je ovde kraj */}
            <div className='section_02'>
                <div id='history' className='div_sec02_history_wrapper'>
                    <p className='artistText_01'>HISTORY OF THE PERFORMER</p>
                    <p className='artistText_02'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ipsa fugit? Dicta labore cupiditate dolore nesciunt excepturi. Ipsam, voluptates voluptatibus.</p>
                </div>

                <div className='div_sec02_food_wrapper'>
                    <div className='div_food_wrapper_01'>
                        <img src={pies} alt="burger" className='p1' />
                        <p className='foodTitle'>FOOD</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='div_food_wrapper_01'>
                        <img src={soup} alt="salad" className='p1' />
                        <p className='foodTitle'>FOOD</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='div_food_wrapper_01'>
                        <img src={oatmeal} alt="pancakes" className='p1' />
                        <p className='foodTitle'>FOOD</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                </div>
            </div>

            {/* SKILLS PART */}
            <div id='skills' className='section_03'>
                <div className='div_sec03_picture'></div>
                <div className='div_sec03_note'>
                    <p className='title'>SKILLS</p>
                    <p className='comment'>~Everything You Want To Know~</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi repellendus provident perspiciatis magnam eos obcaecati sunt fugit, unde veritatis error numquam et, nisi aspernatur aut. Consectetur deserunt exercitationem suscipit.</p>
                    <div className='skillsWrapper'>

                        <div className='skill'>
                            <p>Creativity</p>
                            <p>96%</p>
                        </div>
                        <div className='skill'>
                            <p>Respectability</p>
                            <p>100%</p>
                        </div>
                        <div className='skill'>
                            <p>Adaptability</p>
                            <p>98%</p>
                        </div>
                        <div className='skill'>
                            <p>Decision making</p>
                            <p>95%</p>
                        </div>


                    </div>
                </div>
            </div>


            {/* DEO ZA SEARCH I CREATE BTN */}

            <div className='section_04'>
                <div className='div_sec04_wrapper'>
                    <div><p id='dishes' className='searchTitle'>Make magic with the artist! Share your favorites!</p></div>
                    <div className='div_sec04_wrapper_btn'>
                        <div className='search-box'>
                            <input type="text" className="input-search" placeholder="Type to Search..." onChange={(e) => setSearch(e.target.value)} />
                            <button className="btn-search"></button>
                        </div>
                        <div className='createBtn-wrapper'>
                            <button className='addBtn' onClick={() => props.setModal(true)}>
                                Create new recipe
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* CARDS PART */}

            <div className='section_05'>
                <div className='div_sec05_card_wrapper_01'>
                    <h3 >READY-TO-EAT DISHES</h3>
                    <div className='foodCard'>
                        {props.recipes.filter((e) => {
                            if (search === "" && e.level <= 2) {
                                return e;
                            } else if (e.meal.toLowerCase().includes(search.toLowerCase()) && e.level <= 2) {
                                return e;
                            } else return null;

                        }).map(e => <Card changeConfirmModal={props.changeConfirmModal} key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e} />)}
                    </div>
                </div>
                <div className='div_sec05_card_wrapper_01'>
                    <h3 >EASY TO PREPARE MEALS</h3>
                    <div className='foodCard'>
                        {props.recipes.filter((e) => {
                            if (search === "" && e.level <= 4 && e.level > 2) {
                                return e;
                            } else if (e.meal.toLowerCase().includes(search.toLowerCase()) && e.level <= 4 && e.level > 2) {
                                return e;
                            } else return null;

                        }).map(e => <Card changeConfirmModal={props.changeConfirmModal} key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e} />)}
                    </div>
                </div>
                <div className='div_sec05_card_wrapper_01'>
                    <h3>COMPLEX DISHES TO MAKE</h3>
                    <div className='foodCard'>
                        {props.recipes.filter((e) => {
                            if (search === "" && e.level > 4) {
                                return e;
                            } else if (e.meal.toLowerCase().includes(search.toLowerCase()) && e.level > 4) {
                                return e;
                            } else return null;
                            
                        }).map(e => <Card changeConfirmModal={props.changeConfirmModal} key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e} />)}
                    </div>
                </div>
                </div>
            </div>
    );
};

export default HomePage;
