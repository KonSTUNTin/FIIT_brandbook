import React from 'react';
import Button  from './button';
class Generatorresult extends React.Component{
    constructor(props){
      super(props)

    }

    render(){
      return(
        <div id = 'generatorResultColumn' className = 'column'>
          <h1>ImageGenerator</h1>
          <MyCanvas 
          width = {this.props.data.Format[0]} 
          height = {this.props.data.Format[1]} 
          time = {this.props.data.time}/>
          <Button/>
          <DataList data = {this.props.data}></DataList>
          <div className = 'js'>
            js 2020
          </div>
        </div>
      )
    }
}

class DataList extends React.Component{
    constructor(props){
      super(props)
      console.log(Object.entries(this.props.data))
    }
    render(){
      return(
          <>
          {Object.keys(this.props.data).map(
              (item)=>{
                  return(
                      <div>
                          {item} = {this.props.data[item]}
                      </div>
                  )
              }
          )}
          </>
      )
    }
}
  
class MyCanvas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            width: this.props.height,
            height: this.props.width,
            time: 0
        }
        this.canvasRef = React.createRef()
    }
    componentDidMount(){
        let ctx = this.canvasRef.current.getContext("2d");
        let w = this.state.width;
        let h = this.state.height;
        ctx.strokeRect(
            0 ,0 ,w, h 
        )
    }
    componentDidUpdate(){
        let ctx = this.canvasRef.current.getContext("2d");
        let w = this.props.width;
        let h = this.props.height;
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, w, h)
        ctx.strokeRect(
            0 ,0 ,w, h 
        )
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.arc(
            w / 2, 
            h / 2 , 
            h / 4 * Math.cos(this.props.time / 70) * .8 + h / 4,
            0, Math.PI * 2
        )
        ctx.closePath()
        ctx.fill()
    }
    render(){
        return(
        <canvas width = {this.props.width} height = {this.props.height} ref = {this.canvasRef}/>
        )
    }
}

export default Generatorresult;
  
  