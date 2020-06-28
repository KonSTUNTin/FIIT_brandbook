import React from 'react';
import './App.css';
import brandbookContent from './js/content.js'
import Picture from './js/picture.js'
import Header from './js/header.js'
import HeroBlock from './js/heroBlock.js'
import {RadioRow, ButtonRow} from './js/formElements.js'
import {GeraldicBlock, Person, ColorSwatches} from './js/layoutBlock.js'
import LottieAnimation from './js/lottieAnimation'

class App extends React.Component{
    constructor(props){
        super(props)
        this.logoColor = this.logoColor.bind(this)
    }
    logoColor(event){
        document.getElementById('logo_FIIT').setAttribute('class', '')
        document.getElementById('logo_FIIT').classList.add(event.target.value)
    }
    render(){
        return(
            <>
                <Header></Header>
                <HeroBlock/>
                    {brandbookContent.map(
                        (item, index)=>{
                            return(
                                <Section
                                    key = {index}
                                    content = {item}
                                    handler = {{
                                            'logoColor': this.logoColor
                                        }}
                                />
                            )
                        }
                    )}
            </>
        )
  }
}

class Section extends React.Component{
    render(){
        return(
            <div className = {this.props.content.className}>
                <div className = 'content'>
                {
                    this.props.content.columns.map(
                        (item, index)=>{
                            return(
                                <Column content = {item}
                                key = {index}
                                handler = {this.props.handler}
                                >
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
    render(){
        return(
            <div className = {this.props.content.className}>
            {Object.keys(this.props.content).map(
                (el, index)=>{
                    return(
                        <>
                            {el==='h2'&&
                            <h2 key = {index}>
                                {this.props.content[el]}
                            </h2>
                            }
                            {el==='h3'&&
                            <h3 key = {index}>
                                {this.props.content[el]}
                            </h3>
                            }
                            {el==='text'&&
                            <p key = {index}>
                                {this.props.content[el]}
                            </p>
                            }
                            {el==='img'&&
                                <Picture data = {this.props.content[el]} key = {index}/>
                            }
                            {el==='aboutGeraldic'&&
                                <GeraldicBlock data = {this.props.content[el]} key = {index}/>
                            }
                            {el==='person'&&
                            <Person data = {this.props.content[el]} key = {index}/>
                            }
                            {el==='buttonRow'&&
                            <ButtonRow data = {this.props.content[el]} key = {index}/>
                            }
                            {el==='radioRow'&&
                            <RadioRow data = {this.props.content[el]} key = {index} handler = {this.props.handler}/>
                            }
                            {el==='colorSwatches'&&
                            <ColorSwatches data = {this.props.content[el]} key = {index}/>
                            }
                            {el==='lottie'&&
                            <LottieAnimation path = {this.props.content[el]} key = {index}/>
                            }
                        </>
                    )
                }
            )}
        </div>
        )
    }
}

export default App;
