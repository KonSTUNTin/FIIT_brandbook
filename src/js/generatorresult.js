import React from 'react';
import Button  from './button';
import MyCanvas  from './myCanvas';
class Generatorresult extends React.Component{
    constructor(props){
      super(props)
        this.saveImage = this.saveImage.bind(this)
    }
    saveImage(){
        // var c = document.getElementById("alpha");
        // var d = c.toDataURL("image/png");
        // var w = window.open('about:blank','image from canvas');
        // w.document.write("<img src='"+d+"' alt='from canvas'/>");
        // console.log('saveStart')
    }

    render(){
      return(
        <div id = 'generatorResultColumn' className = 'column'>
            <div class = 'fixContainer'>
                <h1>ImageGenerator</h1>
                <MyCanvas 
                settings = {this.props.data}
                width = {this.props.data.Format[0]} 
                height = {this.props.data.Format[1]} 
                time = {this.props.data.time}/>
                <Button onClick = {this.saveImage}/>
                <DataList settings = {this.props.settings} data = {this.props.data}></DataList>
                <div className = 'js'>
                    js 2020
                </div>
          </div>
        </div>
      )
    }
}

class DataList extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
          <>
          {this.props.settings.map(
              (item)=>{
                if(item.type){
                    return(
                        <div>
                            {item.name} = {this.props.data[item.name]}
                        </div>
                    )
                }
              }
          )}
          </>
      )
    }
}
  

export default Generatorresult;
  
  