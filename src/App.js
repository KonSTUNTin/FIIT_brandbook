import React from 'react';
import './App.css';
import brandbookContent from './js/content.js'
import Picture from './js/picture.js'
import Header from './js/header.js'
import HeroBlock from './js/heroBlock.js'
import {RadioRow, ButtonRow} from './js/formElements.js'
import {GeraldicBlock, Person, ColorSwatches} from './js/layoutBlock.js'
import LottieAnimation from './js/lottieAnimation'
import PatternBlock from './js/patternBlock.js'

class App extends React.Component{
    constructor(props){
        super(props)
        //this.ref = React.createRef();
        this.logoColor = this.logoColor.bind(this)
        this.downloadPDF = this.downloadPDF.bind(this)
    }
    shouldComponentUpdate(){
        return false
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
            <>
                <Header handler = {this.downloadPDF}></Header>
                <div ref = {this.ref}>
                    <HeroBlock/>
                        {brandbookContent.map(
                            (item, index)=>{
                                return(
                                    <>
                                    {item.type === 'static'&&
                                    <Section
                                        
                                        key = {'section ' + index}
                                        content = {item}
                                        generator = {this.state}
                                        handler = {{
                                                'logoColor': this.logoColor
                                            }}
                                    />}
                                    {item.type === 'PatternBlock'&&
                                        <PatternBlock/>
                                    }
                                    </>
                                )
                            }
                        )}
                        <Footer></Footer>
                </div>
            </>
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
        console.log('click')
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
                                    Смотреть варианты, которые не пошли в релиз
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
    render(){
        
        return(
            <div id = {this.props.content.navigation} className = {this.props.content.className}>
                <div className = 'content'>
                {
                    this.props.content.columns.map(
                        (item, index)=>{
                            return(
                                <Column content = {item}
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
                                <Picture data = {this.props.content[el]} key = { 'img' + index}/>
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
                            
                        </>
                    )
                }
            )}
        </div>
        )
    }
}

export default App;
