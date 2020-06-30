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
            time: 0,
            logoSize: 50,
            color: 'pink',
            logo: 'main'
        }
        this.logoColor = this.logoColor.bind(this)
        this.logoColorInGenerator = this.logoColorInGenerator.bind(this)
        this.rangeHandler = this.rangeHandler.bind(this)
        this.animate = this.animate.bind(this)
        this.animate()
    }
    animate(){
        requestAnimationFrame(this.animate);
        let time = this.state.time + 1;
        this.setState({
            time: time
        })
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
                            {el==='rangeRow'&&
                            <RangeRow data = {this.props.content[el]} key = {index} handler = {this.props.handler} generator = {this.props.generator}/>
                            }
                            {el==='colorSwatches'&&
                            <ColorSwatches data = {this.props.content[el]} key = {index}/>
                            }
                            {el==='lottie'&&
                            <LottieAnimation path = {this.props.content[el]} key = {index}/>
                            }
                            {el==='canvasGenerator'&&
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
