import './App.css';
import React from 'react';



class App extends React.Component {
  constructor() {
    super()
    this.handleClic = this.handleClic.bind(this);
    this.handleClic1 = this.handleClic1.bind(this);
    this.handleClic2 = this.handleClic2.bind(this);
  }

  state = {
    cliquesBtn1: 0,
    cliquesBtn2: 0,
    cliquesBtn3: 0,

  };  
  handleBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClic() {
    this.setState((prevState, _props) => ({
      cliquesBtn1: prevState.cliquesBtn1 + 1,
    }), () => {
      console.log((this.handleBtnColor(this.state.cliquesBtn1)));
    })
  }  

  handleClic1() {
    this.setState((prevState, _props) => ({
      cliquesBtn2: prevState.cliquesBtn2 + 1,
    }), () => {
      console.log((this.handleBtnColor(this.state.cliquesBtn2)));
    })
    
  }

  handleClic2() {
    this.setState((prevState, _props) => ({
      cliquesBtn3: prevState.cliquesBtn3 + 1,
    }), () => {
      console.log((this.handleBtnColor(this.state.cliquesBtn3)));
    })
    console.log('botão 3');
  }

  render() {
    // const { cliquesBtn1, cliquesBtn2, cliquesBtn3} = this.state; //desconstruido facilitar a leitura e organização do codigo
    return (
    <>
      <button onClick={this.handleClic} style={{backgroundColor: this.handleBtnColor(this.state.cliquesBtn1)}} >{`NumCliques ${this.state.cliquesBtn1}`}</button>
      <button onClick={this.handleClic1} style={{backgroundColor: this.handleBtnColor(this.state.cliquesBtn2)}} >{`NumCliques ${this.state.cliquesBtn2}`}</button>
      <button onClick={this.handleClic2} style={{backgroundColor: this.handleBtnColor(this.state.cliquesBtn3)}} >{`NumCliques ${this.state.cliquesBtn3}`}</button>
    </>
    )
  }
}

export default App;
