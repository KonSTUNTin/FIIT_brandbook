import React from 'react';
import './App.css';
import brandbookContent_RU from './js/content_ru.js';
import brandbookContent_EN from './js/content_en.js';

import Picture from './js/picture.js'
import Header from './js/header.js'
import HeroBlock from './js/heroBlock.js'
import {RadioRow, ButtonRow} from './js/formElements.js'
import {GeraldicBlock, Person, ColorSwatches} from './js/layoutBlock.js'
import LottieAnimation from './js/lottieAnimation'
import PatternBlock from './js/patternBlock.js'

let language = 0;
let brandbookContent = brandbookContent_EN
if(language === 1){
    brandbookContent = brandbookContent_RU
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: 0,
            show: 1
        }
        this.loadHandler = this.loadHandler.bind(this)
    }
    loadHandler(){
        let loaded = this.state.loaded + 1
        this.setState({loaded:loaded})
        if(this.state.loaded === 13){
            this.setState({show: 0})
        }
    }
    render(){
       
        return(
            <>
                {(this.state.show===1)&&<Loader data = {this.state.loaded}/>}
                <Layout data = {(this.state.show===1)?'noScroll':''} handler = {this.loadHandler}/>
            </>
        )
    }
}

class Loader extends React.Component{
    render(){
        return(
            <div className = 'fiitLoader'>{Math.round(this.props.data / 14 * 100)}%</div>            
        )
    }
}

class Layout extends React.Component{
    constructor(props){
        super(props)
        //this.ref = React.createRef();
        this.scroll = 'noScroll';
        this.logoColor = this.logoColor.bind(this)
        this.downloadPDF = this.downloadPDF.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.scroll===nextProps.data){
            return false
        } else {
            this.scroll = ''
            return true
        }
        
    }
   

    logoColor(event){
        document.getElementById('logo_FIIT').setAttribute('class', '')
        document.getElementById('logo_FIIT').classList.add(event.target.value)
    }
    downloadPDF(){
        console.log('hi')
    }

    render(){
        console.log('render')
        return(
            <div className = {"Fiit_Container " + this.props.data}>
                <Header lang = {language} handler = {this.downloadPDF}></Header>
                <div ref = {this.ref}>
                    <HeroBlock lang = {language}/>
                        {brandbookContent.map(
                            (item, index)=>{
                                return(
                                    <>
                                    {item.type === 'static'&&
                                    <Section
                                        handlerLoad = {this.props.handler}
                                        key = {'section ' + index}
                                        content = {item}
                                        generator = {this.state}
                                        handler = {{
                                                'logoColor': this.logoColor
                                            }}
                                    />}
                                    {item.type === 'PatternBlock'&&
                                        <PatternBlock lang = {language}/>
                                    }
                                    </>
                                )
                            }
                        )}
                        <Footer></Footer>
                </div>
            </div>
        )
  }
}

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: ''
        }
        this.open = this.open.bind(this)
    }
    open(){
        if(this.state.open === ''){
            this.setState({open: 'open'})
            let scroll = window.scrollY + 300;
            setTimeout(()=>{
                window.scrollTo({
                    top: scroll,
                    behavior: "smooth"
                })
            }, 100)
           
        } else {
            this.setState({open: ''})
        }
    }
    render(){
        return(
            <div className = 'section nopadding_bottom'>
            <div className = 'content'>
                    <div className = 'column width12'>
                        <div className = 'footer'>
                            <a href = 'https://www.jetstyle.ru' target = '_blank'><img className = 'jetLogo' src = './logoJS.svg'/></a>
                            
                                <div onClick = {this.open} className = 'link'>
                                    {(language === 0)&&<>See options that weren't included in the final version</>}
                                    {(language === 1)&&<>Смотреть варианты, которые не&nbsp;пошли в&nbsp;релиз</>}
                                </div>
                            
                        </div>
                        <div className = {'processClip ' + this.state.open}>
                            <img src = './images/process/Slice 1.jpg'></img>
                            <img src = './images/process/Slice 2.jpg'></img>
                            <img src = './images/process/Slice 3.jpg'></img>
                            <img src = './images/process/Slice 4.jpg'></img>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

class Section extends React.Component{
    shouldComponentUpdate(){
        return false
    }
    render(){
        
        return(
            <div id = {this.props.content.navigation} className = {this.props.content.className}>
                <div className = 'content'>
                {
                    this.props.content.columns.map(
                        (item, index)=>{
                            return(
                                <Column content = {item}
                                handlerLoad = {this.props.handlerLoad}
                                key = {'column' + index}
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
                            <h2 key = {'h2' + index}>
                                {this.props.content[el]}
                            </h2>
                            }
                            {el.indexOf('h3')>-1&&
                            <h3 key = {'h3' + index}>
                                {this.props.content[el]}
                            </h3>
                            }
                            {el.indexOf('text')>-1&&
                            <p key = {'text' + index}>
                                {this.props.content[el]}
                            </p>
                            }
                            {el.indexOf('img')>-1&&
                                <Picture data = {this.props.content[el]} key = { 'img' + index} handlerLoad = {this.props.handlerLoad}/>
                            }
                            {el.indexOf('aboutGeraldic')>-1&&
                                <GeraldicBlock data = {this.props.content[el]} key = { 'ag' + index}/>
                            }
                            {el.indexOf('person')>-1&&
                            <Person data = {this.props.content[el]} key = {'person' + index}/>
                            }
                            {el.indexOf('buttonRow')>-1&&
                            <ButtonRow data = {this.props.content[el]} key = {'br' + index}/>
                            }
                            {el.indexOf('radioRow')>-1&&<RadioRow data = {this.props.content[el]} key = {'rr' + index} handler = {this.props.handler}/>
                            }
                           
                            {el.indexOf('colorSwatches')>-1&&
                            <ColorSwatches data = {this.props.content[el]} key = {'colors' + index}/>
                            }
                            {el.indexOf('lottie')>-1&&
                            <LottieAnimation path = {this.props.content[el]} key = {'lottie' + index}/>
                            }
                            {el.indexOf('shield')>-1&&
                            <Shield data = {this.props.content[el]} key = {'shield' + index}/>
                            }
                            
                        </>
                    )
                }
            )}
        </div>
        )
    }
}


class Shield extends React.Component{
    render(){
        return(
            <div className = 'shield'>
                <img src = {this.props.data.img}></img>
                <p>{this.props.data.text}</p>
            </div>
        )
    }
}

export default App;
