import React, { Component } from "react";
import LadyCard from "./components/LadyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ladies from "./ladies.json";
import "./App.css";

class App extends Component {
  // Setting this.state.ladies to the ladies json array
  state = {
    ladies
  };


  //selectLady should save selected id into an array, shuffle images. if selected id = something in array, player loses and gains a Loss Point, if not, add a Win point
// selectLady = id => {
//   const ladies = this.state.ladies.filter(lady => lady.id !== id);
//   this.setState({ ladies });
// }

  removeLady = id => {
    // Filter this.state.ladies for ladies with an id not equal to the id being removed
    const ladies = this.state.ladies.filter(lady => lady.id !== id);
    // Set this.state.ladies equal to the new ladies array
    this.setState({ ladies });
  };

  // Map over this.state.ladies and render a LadyCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Ladies List</Title>
        {this.state.ladies.map(lady => (
          <LadyCard
            removeLady={this.removeLady}
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
