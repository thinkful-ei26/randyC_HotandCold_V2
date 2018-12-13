import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
     
    
         //Game is on!
         if(props.gameMode === 1){

            return(

                <header>
                <TopNav setGameMode = {props.setGameMode} />
                <h1>HOT or COLD</h1>
                </header>


            )


        };

        //instructions
        if(props.gameMode === 2){

            return(

                <header>
                <InfoModal setGameMode = {props.setGameMode} />
                </header>


            )


        };


        

       
    
};


