import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './js/controls.js';
import Generatorresult from './js/generatorresult';
import settings from './js/settingData.js';




class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      time: 0
    }   
    settings.map(
      (item, index)=>{
        if(item.type == 'radio'){
          this.state[item.title] = item.options[item.value].value
        } else {
          item.options.map(
            (item2, index2)=>{
              this.state[item2.name] = item2.value 
            }
          )
        }
        
      }
    )
    this.loop = this.loop.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
  }
  componentDidMount(){
    this.raf = requestAnimationFrame(this.loop)
  }
  loop(){
    this.setState({
      time: this.state.time +1
    })
    this.raf = requestAnimationFrame(this.loop)
  }
  inputHandler(event){
      let name = event.target.name.toString();
      this.setState({
        [name]: event.target.value.split(",")
      })
  }

  render(){
    return(
      <>
        <Generatorresult data = {this.state}/>
        <Controls settings = {settings} data = {this.state} onInput = {this.inputHandler}/>
      </>
    )
  }
}


export default App;
