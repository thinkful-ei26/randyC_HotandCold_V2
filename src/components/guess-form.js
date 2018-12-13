import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (


        <form onSubmit={(e) => props.handleGuess(e)}>
        <input value={props.userGuess} onChange={(e) => props.handleChange(e) } placeholder="Enter your Guess" required />
        <button>Submit</button>
        </form>


        // <form>
        //     <input onChange = {e => props.handleChange(e.target.value)} type="number" className="text" maxLength="3" autoComplete="off" placeholder= "Make a Guess" required />
        //     <input onClick = {e => props.handleGuess(e.target.value)} type="submit" id="guessButton" className="button" name="submit"  />
        // </form>

        // <form onSubmit={this.handleSubmit}>
         
        // <input type="text" value={this.state.value} onChange={this.handleChange} />
         
        // <input type="submit" value="Submit" />
        
        // </form>


        // <form>
        //     <input type = "number" />
        //     <input onClick = {(e) => { e.preventDefault(); console.log('hello')}} type="submit"/>
        // </form>
        // <input type="number" name="userGuess" id="userGuess"
        //props.handleGuess(props.userGuess)

        //REF
        // <form>
        //     <input value = { props.userGuess } type="number" name="Guess" id="userGuess"
        //         className="text" maxLength="3" autoComplete="off"
        //         placeholder="Enter your Guess" required />
        //     <input onClick = { (e) => {e.preventDefault(); console.log('>>> ',props.userGuess);}}
        //     type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        // </form>

    );
};


 