import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import food from '../public/main_food.jpg';
import sea from '../public/main_sea.jpg';
import musical from '../public/main_musical.jpg';
import Button from '../components/Button';
import Layout from '../components/layout';

const ContentContainer = styled.div`
    background-color: #FFB4B4;
    border-radius: 30px;
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    @media screen and (max-width: 499px){
        height: 250px;
    }
`;

function Favorite() {
    return (
        <div className="h-screen max-w-screen mx-auto">
            <div className="flex items-center justify-center h-24 text-2xl font-extrabold">
                <div> 🎶Favorites </div>
            </div>
            <div className="flex items-center justify-center max-w-5xl h-3/5 text-2xl font-extrabold mx-auto">
                <ContentContainer>  
                    <div className="flex flex-col items-center text-center w-1/3 p-5">
                        <Image
                            src={food}
                            className="rounded-full"
                            height={225}
                            width={225}
                            alt="food"
                        />
                        <div className="mt-3 text-lg font-semibold"><div>Food</div><div>🍽️</div></div>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/3 p-5">
                        <Image 
                            src={musical}
                            className="rounded-full"
                            height={225}
                            width={225}
                            alt="musical"
                        />
                        <div className="mt-3 text-lg font-semibold"><div>Musical</div><div>💃🕺</div></div>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/3 p-5">
                        <Image
                            src={sea}
                            className="rounded-full"
                            height={225}
                            width={225}
                            alt="sea"
                        />
                        <div className="mt-3 text-lg font-semibold"><div>Sea</div><div>🌊</div></div>
                    </div>
                </ContentContainer>
            </div>
            <div className="flex items-center justify-center h-10 text-2xl">
                <Button name="Home" url="/"/>
            </div>
        </div>
    );
};

export default Favorite;