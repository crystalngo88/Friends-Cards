import React, { Component } from "react";
import LadyCard from "./components/LadyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ladies from "./ladies.json";
import "./App.css";

const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",]

class App extends Component {
  // Setting this.state.ladies to the ladies json array
  state = {
    ladies,
    clickedImages: [],
  };

  _handleClick = (id) => {
    // 1) Check clicked image ID against array of prev clicks (this.state.clickedImages)
    if (this.state.clickedImages.includes(id)) {
      alert("You already clicked this picture. You lose.")
    } else {
      var newClickedImages = this.state.clickedImages.slice(0);
      newClickedImages.push(id)
      if (newClickedImages.length === ladies.length){
        alert("Yay. You win.")
      }
      var newLadies = this._shuffle(this.state.ladies)
      this.setState({clickedImages: newClickedImages, ladies: newLadies})
    }
    // 2) If matches, game over (run defeat function)
    // 3) If no match found, add current ID to array of prev clicks
    // 4) If array of prev clicks === total images, game won (run win function)
    // 5) If game not over, shuffle existing images
  }

  _shuffle = (array) => {
    let chickenarray = array.slice(0);

    var currentIndex = chickenarray.length; // i.e. 14
    var temporaryValue = undefined;
    var randomIndex = undefined;

    // While there remain elements to shuffle...
    while (currentIndex > 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex); // 7
      currentIndex--; // 13

      // And swap it with the current element.
      temporaryValue = chickenarray[currentIndex]; // 13
      chickenarray[currentIndex] = chickenarray[randomIndex];
      chickenarray[randomIndex] = temporaryValue;
    }

    return chickenarray;
  }

  _hamsterFunction = (parameter) => {
    console.log('hamsters are cute')
  }
  // Map over this.state.ladies and render a LadyCard component for each friend object
  render() {
    var newRandomArray = this._shuffle(array);
    console.log('after randomizing, output is;:', newRandomArray);
    console.log(this.state.clickedImages)
    return (
      <Wrapper>
        <Title>Ladies List</Title>
        {this.state.ladies.map(lady => (
          <LadyCard
            handleClick={this._handleClick}
            id={lady.id}
            key={lady.id}
            image={lady.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
