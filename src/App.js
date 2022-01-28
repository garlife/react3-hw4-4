import React from "react";
import "./style.css";

export default class App extends React.Component {
 constructor(props){
   super(props);
   this.state = {
     name: '',
     text: ''
   }
 }

 handlerInput = (e) => {
   let value = e.target.value;
   this.setState({
    text: value
   })
 }

 handlerAssignName = () => {
   if( this.state.text === ''){
     return(
      alert('Сначала нужно ввести имя')
     )
   }
   else{
    this.setState({
      name: this.state.text
    });
   }
 }

 componentDidUpdate(){
   console.info(this.state)
 }

  render(){
  return (
    <div>
      <h1>{this.state.name === ('') ? 'Для приветствия нужно твоё имя. Укажи его ниже' :  'Привет, ' + this.state.name}!</h1>
      <input type="text" value={this.state.text} onChange={this.handlerInput}></input>
      <button onClick={this.handlerAssignName}>Указать имя</button>
    </div>
  );
}
}
