import React from "react";
import reactDom from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { data: [] };
    // this.setStateHandler = this.setStateHandler.bind(this);
  }
  setStateHandler = () =>{
    const item = 'SetState...';
    // const myArray = this.state.data.slice(); //slice như là copy
    // myArray.push(item);
    // const myArray = [this.state.data];
    const myArray = [...this.state.data];
    myArray.push(item);
    this.setState({data: myArray}); // thay doi du lieu thi goi state update lai du lieu
  }

  forceUpdateHandler = () => {
    this.forceUpdate(); //cho dù ko có thay đổi nhưng vẫn ép update lại (render lại)
  }

  findDomNodeHandler = () => {
    const myDiv = document.getElementById('myDiv');
    reactDom.findDOMNode(myDiv).style.color = 'green';
    //findDOMNode kiem tra xem co class do ko?
  }

  render(){
    return(
      <div>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>

        <button onClick={this.forceUpdateHandler}>SET STATE</button>
        <h4>Random number: {Math.random()}</h4>

        <button onClick={this.findDomNodeHandler}>FIND DOM</button>
        <div id='myDiv'>NODE</div>

      </div>
    );
  }
}
export default App;