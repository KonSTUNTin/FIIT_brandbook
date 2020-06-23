import React from 'react';
import './App.css';
import brandbookContent from './js/content.js'
import Button from './js/button.js'


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
                                <Column content = {item}>
                                </Column>
                            )
                        }
                    )
                }
                </div>
            </div>
        )
    }
}

class Column extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = {this.props.content.className}>
            {Object.keys(this.props.content).map(
                (el)=>{
                    return(
                        <>
                            {el=='h2'&&
                            <h2>
                                {this.props.content[el]}
                            </h2>
                            }
                            {el=='h3'&&
                            <h3>
                                {this.props.content[el]}
                            </h3>
                            }
                            {el=='text'&&
                            <p>
                                {this.props.content[el]}
                            </p>
                            }
                            {el=='img'&&
                                <Picture data = {this.props.content[el]}/>
                            }
                            {el=='aboutGeraldic'&&
                                <GeraldicBlock data = {this.props.content[el]}/>
                            }
                            {el=='person'&&
                            <Person data = {this.props.content[el]}/>
                            }
                             {el=='buttonRow'&&
                            <ButtonRow data = {this.props.content[el]}/>
                            }
                        </>
                    )
                }
            )}
        </div>
        )
    }
}


class ButtonRow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = 'buttonRow'>
                {this.props.data.map(
                    (button)=>{
                        return(
                            <Button text = {button.text}/>
                        )
                    }
                )}
            </div>
        )
    }
}


class Picture extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            {!Array.isArray(this.props.data)&&
            <img src = {this.props.data}/>}
            {Array.isArray(this.props.data)&&
            this.props.data.map(
                (pic)=>{
                    return(
                        <img className = 'examples' src = {pic}/>
                    )
                }
            )}
            </>
        )
    }
}

class GeraldicBlock extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            this.props.data.map(
                (geraldic)=>{
                    return(
                        <div className = 'aboutGeraldic'>
                        <img className = 'aboutGeraldic' src = {geraldic.img}/>
                        <div>
                            <h3>
                                {geraldic.title}
                            </h3>
                            <p>
                                {geraldic.text}
                            </p>
                        </div>
                        </div>
                    )
                }
            )
        )
    }
}

class Person extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = 'person'>
            <img className = 'person' src = {this.props.data.photo}/>
            <div>
                <h4>
                    {this.props.data.name}
                </h4>
                <p>
                    {this.props.data.role}
                </p>
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
