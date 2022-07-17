import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import food from '../public/main_food.jpg';
import sea from '../public/main_sea.jpg';
import musical from '../public/main_musical.jpg';
import utilStyles from '../styles/utils.module.css';
import Button from '../components/Button';
import Layout from '../components/layout';

function Favorite() {
    return (
        <div style={{margin: '0 auto 0', minHeight: '100vh', maxWidth: '80vw'}}>
            <div style={{minHeight:'15vh'}} className={utilStyles.favContainer}>
                <div> 🎶Favorites </div>
            </div>
            <div style={{minHeight:'60vh'}} className={utilStyles.favContainer}>
                <div className={utilStyles.imgContainer}>
                    <Image
                        src={food}
                        className={utilStyles.borderCircle}
                        height={225}
                        width={225}
                        alt="food"
                    />
                    <div className={utilStyles.txtContainer}><div>Food</div><div>🍽️</div></div>
                </div>
                <div className={utilStyles.imgContainer}>
                    <Image 
                        src={musical}
                        className={utilStyles.borderCircle}
                        height={225}
                        width={225}
                        alt="musical"
                    />
                    <div className={utilStyles.txtContainer}><div>Musical</div><div>💃🕺</div></div>
                </div>
                <div className={utilStyles.imgContainer}>
                    <Image
                        src={sea}
                        className={utilStyles.borderCircle}
                        height={225}
                        width={225}
                        alt="sea"
                    />
                    <div className={utilStyles.txtContainer}><div>Sea</div><div>🌊</div></div>
                </div>
            </div>
            <div className={utilStyles.favContainer}>
                <Button name="Home" url="/"/>
            </div>
        </div>
    );
};

export default Favorite;