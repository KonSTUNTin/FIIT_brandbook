import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      question: 'yes',
      index:0,
      string: [
        'youtube',
        'vkontakte'
      ]
    }
    this.raf = this.raf.bind(this)
  }
  componentDidMount(){
    requestAnimationFrame(this.raf)
  }
  toogle(i){
    this.setState({
      index: i
    })
  }
  raf(){
    this.setState({time: this.state.time + 1});
    requestAnimationFrame(this.raf)
  }
  render(){
    return (
      <div>
        {
          this.state.string.map(
            (name, index)=>{
              return <RadioSelect key = {index} onClick = {this.toogle.bind(this, index)} value = {name} text = {name} id = {name} checked = {true}/>
            }
          )
        }
        {this.state.string[this.state.index]}
        <Canvas time = {this.state.time}/>
      </div>
    );
  }
 
}

class Canvas extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      width: 1024,
      height: 1024
    }
    this.canvasRef = React.createRef();
  }
  componentDidMount(){
   
  }
  componentDidUpdate(){
    let ctx = this.canvasRef.current.getContext("2d")
    ctx.clearRect(100, 100, 600, 200)
    ctx.fillRect(
      100 , 
      100, 
      200 + Math.cos(this.props.time / 60) * 100, 
      200
    )
  }
  render(){
    return(
      <canvas ref = {this.canvasRef} id = 'picture' width = {this.state.width} height = {this.state.height}/>
    )
  }
}


class RadioSelect extends React.Component{
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.radioref = React.createRef()
  }
  onChange(){
    console.log(this.radioref.current.value)
  }
  render(){
    return(
      <>
        <input ref = {this.radioref} onClick = {this.props.onClick}  type="radio" id={this.props.id} name="contact" value={this.props.value} />
        <label for={this.props.id}>{this.props.text}</label>
      </>
    )
  }

}


export default App;
