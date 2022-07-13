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
           
            {props.confirmModal === "open" ? <ConfirmModal selectedRecipeId={props.selectedRecipeId} setShouldUpdate={props.setShouldUpdate} recipe={props.recipe} changeConfirmModal={props.changeConfirmModal}/> : null}
            <div className='main'>
          
                <p className='maintext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum?</p>
            </div>





            <div className='secmain01'>
                <div className='secmain001'>
                    <img src={artist} alt="artist" className='artistimg' />
                    <img src={artist2} alt="artist2" className='artistimg' />
                    <div id='about' className='secmain0001'>
                        <p className='t11'>WHO IS THE ASTIST?</p>
                        <p className='t12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid assumenda consectetur beatae asperiores, recusandae rem aspernatur dolore tempore repudiandae nostrum dolores itaque nam! Tenetur delectus autem eius sunt dolores? Molestias!</p>
                        <p className='t12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est eius assumenda at quos facilis sit sequi ipsam cumque neque quidem iusto non, vitae quod necessitatibus, dolore deserunt voluptas iste perferendis, distinctio qui repellendus vel doloribus dicta. Officia, expedita dignissimos?</p>
                        <p className='t12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid assumenda consectetur beatae asperiores, recusandae rem aspernatur dolore tempore repudiandae nostrum dolores itaque nam! Tenetur delectus autem eius sunt dolores? Molestias!</p>
                    </div>
                </div>
            </div>

            {/* valjda je ovde kraj */}
            <div className='secmain'>
                <div id='history' className='secmain1'>
                    <p className='t1'>HISTORY OF THE PERFORMER</p>
                    <p className='t2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ipsa fugit? Dicta labore cupiditate dolore nesciunt excepturi. Ipsam, voluptates voluptatibus.</p>
                   
                </div>

                <div className='secmain2'>
                    <div className='sm21'>
                        <img src={pies} alt="burger" className='p1' />
                        <p className='littletitle'>FOOD</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='sm21'>
                        <img src={soup} alt="salad" className='p1' />
                        <p className='littletitle'>FOOD</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='sm21'>
                        <img src={oatmeal} alt="pancakes" className='p1' />
                        <p className='littletitle'>FOOD</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                </div>
            </div>

            {/* SKILLS PART */}
            <div id='skills' className='skilldiv'>
                <div className='pictureskill'></div>
                <div className='skillnote'>
                    <p className='title'>SKILLS</p>
                    <p className='comment'>~Everything You Want To Know~</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi repellendus provident perspiciatis magnam eos obcaecati sunt fugit, unde veritatis error numquam et, nisi aspernatur aut. Consectetur deserunt exercitationem suscipit.</p>
                    <div className='skillwrap'>

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
                        <div className='skill'>
                            <p>Artistic aptitude</p>
                            <p>88%</p>
                        </div>
                        <div className='skill'>
                            <p>Project management</p>
                            <p>90%</p>
                        </div>

                    </div>
                </div>
            </div>


            {/* DEO ZA SEARCH I CREATE BTN */}

            <div className='secheader'>
                <div className='specwrap'>
                    <div><p className='srchTitle'>Make magic with the artist! Share your favorites!</p></div>
                    <div className='secwrap'>

                        <div className='macaroondiv'>
                            <div className='macpicdiv'></div>
                        </div>

                        <div className='search-box'>
                            <button className="btn-search"><i className="fas fa-search"></i></button>
                            <input type="text" className="input-search" placeholder="Type to Search..." onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className='lastwrap'>
                            <button className='addbtn' onClick={() => props.setModal(true)}>
                                <p className='btntext'>Create your recipe</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* CARDS PART */}

            <div className='cardwrap'>
                <div className='cardwrapblur'>
                    <p id='dishes' className='mealtitle mealtitle1'>READY-TO-EAT DISHES</p>
                    <div className='divcard'>
                        {props.recipes.filter((e) => {
                            if (search === "" && e.level <= 2) {
                                return e;
                            } else if (e.meal.toLowerCase().includes(search.toLowerCase()) && e.level <= 2) {
                                return e;
                            } else return null;

                        }).map(e => <Card changeConfirmModal={props.changeConfirmModal} key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e} />)}
                    </div>

                    <p className='mealtitle'>EASY TO PREPARE MEALS</p>
                    <div className='divcard'>
                        {props.recipes.filter((e) => {
                            if (search === "" && e.level <= 4 && e.level > 2) {
                                return e;
                            } else if (e.meal.toLowerCase().includes(search.toLowerCase()) && e.level <= 4 && e.level > 2) {
                                return e;
                            } else return null;

                        }).map(e => <Card changeConfirmModal={props.changeConfirmModal} key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e} />)}
                    </div>

                    <p className='mealtitle'>COMPLEX DISHES TO MAKE</p>
                    <div className='divcard'>
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
