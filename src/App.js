import React from 'react';
import './App.css';
import brandbookContent from './js/content.js'
import Picture from './js/picture.js'
import Header from './js/header.js'
import HeroBlock from './js/heroBlock.js'
import {RadioRow, ButtonRow, RangeRow} from './js/formElements.js'
import {GeraldicBlock, Person, ColorSwatches} from './js/layoutBlock.js'
import LottieAnimation from './js/lottieAnimation'
import MyCanvas from './js/myCanvas.js'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            black: 50,
            scale: 50,
            form: 50,
            trace: 50,
            split: 50,
            logoSize: 50,
            color: 'pink',
            logo: 'main'
        }
        this.logoColor = this.logoColor.bind(this)
        this.logoColorInGenerator = this.logoColorInGenerator.bind(this)
        this.rangeHandler = this.rangeHandler.bind(this)
        this.downloadPDF = this.downloadPDF.bind(this)
    }
    logoColor(event){
        document.getElementById('logo_FIIT').setAttribute('class', '')
        document.getElementById('logo_FIIT').classList.add(event.target.value)
    }
    logoColorInGenerator(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    rangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    downloadPDF(){
        console.log('hi')
    }

    render(){
        return(
            <>
                <Header 
                    handler = {this.downloadPDF}></Header>
                <HeroBlock/>
                    {brandbookContent.map(
                        (item, index)=>{
                            return(
                                <Section
                                    key = {index}
                                    content = {item}
                                    generator = {this.state}
                                    handler = {{
                                            'logoColor': this.logoColor,
                                            'logoColorInGenerator': this.logoColorInGenerator,
                                            "rangeHandler": this.rangeHandler
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
                                generator = {this.props.generator}
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
                            {el.indexOf('h2')>-1&&
                            <h2 key = {index}>
                                {this.props.content[el]}
                            </h2>
                            }
                            {el.indexOf('h3')>-1&&
                            <h3 key = {index}>
                                {this.props.content[el]}
                            </h3>
                            }
                            {el.indexOf('text')>-1&&
                            <p key = {index}>
                                {this.props.content[el]}
                            </p>
                            }
                            {el.indexOf('img')>-1&&
                                <Picture data = {this.props.content[el]} key = {index}/>
                            }
                            {el.indexOf('aboutGeraldic')>-1&&
                                <GeraldicBlock data = {this.props.content[el]} key = {index}/>
                            }
                            {el.indexOf('person')>-1&&
                            <Person data = {this.props.content[el]} key = {index}/>
                            }
                            {el.indexOf('buttonRow')>-1&&
                            <ButtonRow data = {this.props.content[el]} key = {index}/>
                            }
                            {el.indexOf('radioRow')>-1&&<RadioRow data = {this.props.content[el]} key = {index} handler = {this.props.handler}/>
                            }
                            {el.indexOf('rangeRow')>-1&&
                            <RangeRow name = {this.props.content[el].name} data = {this.props.content[el].values} key = {index} handler = {this.props.handler} generator = {this.props.generator}/>
                            }
                            {el.indexOf('colorSwatches')>-1&&
                            <ColorSwatches data = {this.props.content[el]} key = {index}/>
                            }
                            {el.indexOf('lottie')>-1&&
                            <LottieAnimation path = {this.props.content[el]} key = {index}/>
                            }
                            {el.indexOf('canvasGenerator')>-1&&
                            <MyCanvas width = '400' height = "400" key = {index} settings = {this.props.generator}/>
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
