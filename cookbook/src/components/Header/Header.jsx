import React from 'react';
import logo from '../../images/logo.png';
import "./header.scss";

const Header = () => {

    return (
        <div id='topPage' className='headerwrap'>
            <div className='hw1'>
                <img src={logo} alt="logo" className='headerimg' />
                <p>Healthy <span>Artist</span></p>
            </div>

            <div className='hw2'>

                <div className='aboutSection'>
                    <a href="#about"> ➤ About </a>

                    <a href="#history"> ➤ History  </a>

                    <a href="#skills"> ➤ Skills  </a>

                    <a href="#dishes" > ➤ Dishes  </a>
                </div>
                <label className='switch'>
                    <input className="switch-input" type="checkbox" />
                    <span className="switch-label" data-on='on' data-off="Off"></span>
                    <span className="switch-handle"></span>
                </label>

            </div>

        </div>
    );
};

export default Header;