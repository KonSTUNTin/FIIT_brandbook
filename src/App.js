import React from 'react';
import './App.css';
import brandbookContent from './js/content.js'
import Picture from './js/picture.js'
import Header from './js/header.js'
import HeroBlock from './js/heroBlock.js'
import {RadioRow, ButtonRow, RangeRow, MyRadio, MyRange} from './js/formElements.js'
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
                <Conception/>
                <MajorSign/>
            </>
        )
  }
}

class Conception extends React.Component{
    render(){
        return(
            <Section class = 'section'>
                <Column class = 'column width4 border'>
                    <h2>Концепция</h2>
                </Column>
                <Column class = 'column width4 arrow border concept'>
                    <img src = './images/code.png'></img>
                    <h3>Фигурная скобка</h3>
                    <p>Используется как в математике, так и в программинге (JS, Python).</p>
                </Column>
                <Column class = 'column width4 border concept'>
                    <img src = './images/shield.png'></img>
                    <h3>Перевернутая скобка</h3>
                    <p>Дает основу для геральдического символа с любым содержимым, по ситуации.</p>
                </Column>
            </Section>
        )
    }
}

class MajorSign extends React.Component{
    render(){
        return(
            <Section class = 'section mobile_border gradientBlack'>
            <Column class = 'column width3 horizontal_center'>
                <h2>Основной знак</h2>
                <p>Самый самостоятельный знак по-умолчанию.</p>
                <RadioRow type = 'text'>
                    <MyRadio 
                        name = 'logo_rus'
                        value = 'RUS'
                        text = "RUS"
                        key = {0}
                        ident = 'logo_rus'
                        defaultChecked = {true}

                    />
                    <MyRadio 
                        name = 'logo_eng'
                        value = 'ENG'
                        text = "ENG"
                        key = {1}
                        ident = 'logo_eng'
                        defaultChecked = {false}
                    />

                </RadioRow>
                <RadioRow type = 'color' >
                    <MyRadio
                        handler = 'logoColor'
                        handlerName = 'logo_white'
                        name = 'logo_white'
                        text = "white"
                        value = "white"
                        key = {0}
                        ident = 'logo_white'
                        defaultChecked = {true}
                    />
                     <MyRadio
                        handler = 'logoColor'
                        handlerName = 'logo_pink'
                        name = 'logo_pink'
                        text = "pink"
                        value = "pink"
                        key = {1}
                        ident = 'logo_pink'
                        defaultChecked = {false}
                    />
                </RadioRow>
                {/* {
                    name: 'colorAnimation',
                    type: 'color',
                    handler: 'logoColor',
                    values: [
                        {
                            name: 'logo_white',
                            text: "white",
                            value: "white",
                            select: true
                        },
                        {
                            name: 'logo_pink',
                            text: "pink",
                            value: "pink",
                            select: false
                        },
                        {
                            name: 'logo_blue',
                            text: "blue",
                            value: "blue",
                            select: false
                        },
                    ]
                }
            ],
            buttonRow:[
                {
                    text: 'PNG',
                    file: './media/logo_white.svg'
                },
                {
                    text: 'SVG',
                    file: './media/logo_white.svg'
                }
            ] */}
            {/* columns: [
            {
                h2: 'Основной знак',
                text: 'Самый самостоятельный знак по-умолчанию.',
                className: 'column width3 horizontal_center',
                radioRow: [
                    {
                        name: 'language',
                        type: 'text',
                        values: [
                            {
                                name: 'logo_rus',
                                value: 'RUS',
                                text: "RUS",
                                select: true
                            },
                            {
                                name: 'logo_eng',
                                value: 'ENG',
                                text: "ENG",
                                select: false
                            },
                        ]
                    },
                    {
                        name: 'colorAnimation',
                        type: 'color',
                        handler: 'logoColor',
                        values: [
                            {
                                name: 'logo_white',
                                text: "white",
                                value: "white",
                                select: true
                            },
                            {
                                name: 'logo_pink',
                                text: "pink",
                                value: "pink",
                                select: false
                            },
                            {
                                name: 'logo_blue',
                                text: "blue",
                                value: "blue",
                                select: false
                            },
                        ]
                    }
                ],
                buttonRow:[
                    {
                        text: 'PNG',
                        file: './media/logo_white.svg'
                    },
                    {
                        text: 'SVG',
                        file: './media/logo_white.svg'
                    }
                ]
            },
            {
                lottie: './lottie/main.json',
                className: 'column width5 center'
            },
            {
                text:'Знак содержит и геральдические трактовки.',
                className: 'column width4 horizontal_center',
                aboutGeraldic: [
                    {
                        img:'./images/1_heraldic.svg',
                        title: 'Уробoрос',
                        text: 'Репрезентация циклической природы жизни:\
                        чередования созидания и разрушения, жизни и смерти.'
                    },
                    {
                        img:'./images/2_heraldic.svg',
                        title: 'Молния',
                        text: 'Начало революционного шторма.\
                        Молния, озаряющая мрак, также символ борьбы света с тьмой,\
                        символ революционной мысли.'
                    },
                    {
                        img:'./images/3_heraldic.svg',
                        title: 'Костыль',
                        text: 'Одна из почетных фигур'
                    }
                ]
                
            },
        ],
    },*/}
            </Column>
            </Section>
        
        ) 
    }
}


class Section extends React.Component{
    render(){
        return(
            <div className = {this.props.class}>
                <div className = 'content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class Column extends React.Component{
    render(){
        return(
            <div className = {this.props.class}>
                {this.props.children}
            </div>
        )
    }
}

export default App;
