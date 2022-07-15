import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import food from '../public/main_food.jpg';
import sea from '../public/main_sea.jpg';
import musical from '../public/main_musical.jpg';
import utilStyles from '../styles/utils.module.css';
import Button from '../components/Button';


function Favorite() {
    // const [Height, setHeight] = useState(null); 

    // useEffect(() => {
    //     setHeight(window.innerHeight-40);
    // }, []);

    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <div style={{height:'100px'}} className={utilStyles.favContainer}>
                <div> 🎶좋아하는 것 </div>
            </div>
            <div style={{height:'500px'}} className={utilStyles.favContainer}>
                <div className={utilStyles.imgContainer}>
                    <Image
                        src={food}
                        className={utilStyles.borderCircle}
                        height={256}
                        width={256}
                        alt="food"
                    />
                    <div className={utilStyles.txtContainer}><div>맛집</div><div>🍽️</div></div>
                </div>
                <div className={utilStyles.imgContainer}>
                    <Image 
                        src={musical}
                        className={utilStyles.borderCircle}
                        height={256}
                        width={256}
                        alt="musical"
                    />
                    <div className={utilStyles.txtContainer}><div>뮤지컬</div><div>💃🕺</div></div>
                </div>
                <div className={utilStyles.imgContainer}>
                    <Image
                        src={sea}
                        className={utilStyles.borderCircle}
                        height={256}
                        width={256}
                        alt="sea"
                    />
                    <div className={utilStyles.txtContainer}><div>바다</div><div>🌊</div></div>
                </div>
            </div>
            <div className={utilStyles.favContainer}>
                <Button name="메인으로" url="/"/>
            </div>
        </div>
    );
};

export default Favorite;