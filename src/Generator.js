import React from 'react';
import logo from './logo.svg';
import './App.css';
import Controls from './js/controls.js';
import Generatorresult from './js/generatorresult';
import settings from './js/settingData.js';




class Generator extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      time: 0,
    }   
    settings.map(
      (item)=>{
        this.state[item.name] = item.value
      }
    )
    console.log(this.state)
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
    
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(value.indexOf(',')>-1)value = value.split(',')
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <>
        <Generatorresult data = {this.state} settings = {settings}/>
        <Controls data = {this.state} settings = {settings} onInput = {this.inputHandler}/>
      </>
    )
  }
}


export default Generator;
