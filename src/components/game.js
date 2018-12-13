import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

// export default function Game(props) {
    export default class Game extends React.Component {
        constructor(props) {

            super(props);
            this.state = {

                userGuess : 0,
                prevGuesses : [],
                gameMode : 1,//1 game on -- 2 instructions -- 3 New Game
                magicNumber : Math.floor((Math.random() * 100) + 1),
                feedBack : [
                    'Make your guess!','Way Off! .... cold as ice...Guess again!',
                    'Warmish...Guess again!',
                    'Coldish...Guess again!',
                    'Like the surface of the sun!...Guess again!',
                    'You got it! play again?'],
                feedBackSelector : 0 //start

            }

            this.setGameMode = this.setGameMode.bind(this);
            this.handleGuess = this.handleGuess.bind(this);
            this.handleChange = this.handleChange.bind(this);

        }


        // handleGuess(guess){

        //     this.setState({ userGuess })

        // }

        //sets what mode the game is in...
        setGameMode(value){



            if(value < 3){

                //setState for game mode
                this.setState({

                    gameMode : value

                })


            }
            else {
 
                //Reset game
                this.setState({

                    userGuess : 0,
                prevGuesses : [],
                gameMode : 1,//1 game on -- 2 instructions -- 3 New Game
                magicNumber : Math.floor((Math.random() * 100) + 1),
                feedBack : [
                    'Make your guess!','Way Off! .... cold as ice...Guess again!',
                    'Warmish...Guess again!',
                    'Coldish...Guess again!',
                    'Like the surface of the sun!...Guess again!',
                    'You got it! play again?'],
                feedBackSelector : 0 //start
 
                })



            }


            



        }

        //gets the users guess...
        handleGuess(e) {

            e.preventDefault();

            console.log('>>>> dude!');

            //evaluate the guesses
            if(parseInt(this.state.userGuess) === this.state.magicNumber){

                console.log('>>>> you won!');

                //feedback selector....

                

                this.setState({ feedBackSelector: 5 }); 
 
            }


            if(parseInt(this.state.userGuess) !== this.state.magicNumber){

                console.log('>>>> you lost!');

                //feedback selector....

                //add to previous guesses:

                let newArr = this.state.prevGuesses.concat(parseInt(this.state.userGuess));

                let newFeedBack;

                if(
                    (parseInt(this.state.userGuess) >= this.state.magicNumber + 40) || 
                    (parseInt(this.state.userGuess) <= this.state.magicNumber - 40)
                    ){
 
                        newFeedBack = 2;//ice cold

                    }

                if(
                    (parseInt(this.state.userGuess) < this.state.magicNumber + 40) && 
                    (parseInt(this.state.userGuess) > this.state.magicNumber - 40)
                    ){
     
                        newFeedBack = 1;//warmish
    
                    }

               


                this.setState({ 
                    
                    prevGuesses : newArr,
                    userGuess: 0,
                    feedBackSelector: newFeedBack
 
                }); 
 
            }



            

            //set feedback

            //set user guess inoput as guess again

            //add to the array of previous guesses



            
          }

          handleChange(e){

            this.setState({ userGuess: e.target.value });
 
          }

    
    render(){

        return (
            <div>
                <Header gameMode = {this.state.gameMode} setGameMode = {this.setGameMode}/>
                <GuessSection handleChange = {this.handleChange} userGuess = {this.state.userGuess} handleGuess = {this.handleGuess} feedback={this.state.feedBack[this.state.feedBackSelector]} />
                <GuessCount count={(this.state.prevGuesses.length) + 1} />
                <GuessList guesses={this.state.prevGuesses} />
            </div>
        );



    }
        
}

