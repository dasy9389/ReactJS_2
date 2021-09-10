import React from "react";
import reactDom from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      data: ''
    };
    this.myInput = React.createRef();
  }

  updateState = (e) => {
    this.setState({data : e.target.value}); //target.value la lay du lieu khi ngta nhap vo
  }

  clearInput = () => {
    this.setState({data:''});
    // reactDom.findDOMNode(this.refs.myInput).focus();
    this.myInput.current.focus();
  }

  componentDidMount(){
    this.myInput.current.value = 'Nhap vao...';
    this.myInput.current.focus(); //load trang nhay vao input lien...
  }

  render(){
    return(
      <div>
        <input value={this.state.data} onChange={this.updateState} ref={this.myInput}></input>
        <button onClick={this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}
export default App;