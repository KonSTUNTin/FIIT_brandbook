import React from 'react';
import Button  from './button';
import MyCanvas  from './myCanvas';
class Generatorresult extends React.Component{
    constructor(props){
      super(props)
        this.saveImage = this.saveImage.bind(this)
        this.canvasRef = React.createRef()
    }
    saveImage(){
        
        this.canvasRef.current.toBlob(function(blob) {
            // после того, как Blob создан, загружаем его
            let link = document.createElement('a');
            link.download = 'example.png';
            link.href = URL.createObjectURL(blob);
            link.click();
            // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
            URL.revokeObjectURL(link.href);
          }, 'image/png');
    }

    render(){
      return(
        <div id = 'generatorResultColumn' className = 'column'>
            <div class = 'fixContainer'>
                <h1>ImageGenerator</h1>
                <MyCanvas 
                refProp = {this.canvasRef}
                settings = {this.props.data}
                width = {this.props.data.Format[0]} 
                height = {this.props.data.Format[1]} 
                time = {this.props.data.time}/>
             </div>
             <div class = 'footer'>
                <Button onClick = {this.saveImage}/>
                <div className = 'js'>
                    js 2020
                </div>
             </div>
               
         
        </div>
      )
    }
}  

export default Generatorresult;
  
  