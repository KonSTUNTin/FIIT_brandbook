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
  render(){
    return(
        <>
            <Header></Header>
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
                            {el=='radioRow'&&
                            <RadioRow data = {this.props.content[el]}/>
                            }
                            {el=='colorSwatches'&&
                            <ColorSwatches data = {this.props.content[el]}/>
                            }
                            {el=='lottie'&&
                            <LottieAnimation path = {this.props.content[el]}/>
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
