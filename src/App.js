import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    guessArray: [],
    score: 0,
    hiScore: 0,
  };

  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;
    
// little lost on getting the high score to show/persist.  Looked around,  not much luck.  
      if (guessArray[card.id]) {
        this.setState({
          hiScore: Math.max(this.state.score, this.state.hiScore),
          guessArray: [],
          score: 0,
        })
      } else {
        guessArray[card.id] = true;
        this.setState({
          guessArray: guessArray,
          score: ++score,
        })
      }
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return <div>
        <Navbar message={this.state.message} score={this.state.score} hiScore={this.state.hiScore} />
        <Wrapper>
          {cards
            .sort((a, b) => Math.random())
            .map(card => (
              <Card
                clickCard={this.clickCard}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
        </Wrapper>
        <Footer />
      </div>;
      
  }
}

export default App;
