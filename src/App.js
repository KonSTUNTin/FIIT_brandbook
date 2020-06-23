import React from 'react';
import './App.css';
import brandbookContent from './js/content.js'



class App extends React.Component{
  render(){
    return(
        <>
            <HeroBlock/>
                {brandbookContent.map(
                    (item, index)=>{
                        return(
                            <Section
                                content = {item}
                            />
                        )
                    }
                )}
        </>
    )
  }
}

class Section extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = {this.props.content.className}>
                <div className = 'content'>
                {
                    this.props.content.columns.map(
                        (item)=>{
                            return(
                                <div className = {item.className}>
                                {
                                    item.img&&
                                    <img src = {item.img}/>
                                }
                                {
                                    item.h3&&
                                    <h3>
                                        {item.h3}
                                    </h3>
                                }
                                {
                                    item.h2&&
                                    <h2>
                                        {item.h2}
                                    </h2>
                                }
                                {
                                    item.text&&
                                    <p>
                                        {item.text}
                                    </p>
                                }
                                </div>
                            )
                            
                        }
                    )
                }
                </div>
            </div>
        )
    }
}

class HeroBlock extends React.Component{
    render(){
        return(
            <div className = 'section'>
                <h1>
                    Логотип и фирменный стиль ФИИТ
                </h1>
                <div className = 'heroBlockBottomLine'>
                    <img src = './logoJS.png'/>
                    <div className = 'socialIcons'>

                    </div>
                </div>
            </div>
        )
    }
}



export default App;
