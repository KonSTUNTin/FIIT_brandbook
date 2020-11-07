import React from 'react'
import MyCanvas from './myCanvas.js'
import {RadioRow, ButtonRow, RangeRow} from './formElements.js'

class PatternBlock extends React.Component{
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
            logo: 'main',
            scrollCanvas: null,
        }
        this.rangeHandler = this.rangeHandler.bind(this)
        this.logoColorInGenerator = this.logoColorInGenerator.bind(this)
    }
    logoColorInGenerator(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    shouldComponentUpdate(){
        return true
    }
    rangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div className = 'section nopadding_top'>
                <div className = 'content'>
                    <div className = 'column width6 patternBlock'>
                        <MyCanvas width = '400' height = "400" key = {99} settings = {this.state}/>
                        <ButtonRow data = {[{text: 'PNG'}]}/>
                    </div>
                    <div className = 'column width6 vertical'>
                        <RadioRow data = {controls_1} handler = {{'logoColorInGenerator': this.logoColorInGenerator}}/>
                        <RadioRow data = {controls_2} handler = {{'logoColorInGenerator': this.logoColorInGenerator}}/>
                        <RangeRow name = 'Логотип' data = {controls_3} handler = {{"rangeHandler": this.rangeHandler}} generator = {this.state}/>
                        <RangeRow name = 'Узор' data = {controls_4} handler = {{"rangeHandler": this.rangeHandler}} generator = {this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}


const controls_1 = [{
                        name: 'ratio',
                        type: 'text',
                        values: [
                            {
                                name: 'generator_ratio_square',
                                value: "square",
                                text: "Квадрат",
                                select: true
                            },
                            {
                                name: 'generator_ratio_youtube',
                                value: "youtube",
                                text: "Шапка Youtube",
                                select: false
                            },
                            {
                                name: 'generator_ratio_vk',
                                value: "vk",
                                text: "Шапка VK",
                                select: false
                            }
                        ]
                    },
                    {
                        name: 'color',
                        type: 'color',
                        handler: 'logoColorInGenerator',
                        values: [
                            {
                                name: 'generator_white',
                                text: "white",
                                value: "white",
                                select: false
                            },
                            {
                                name: 'generator_pink',
                                text: "pink",
                                value: "pink",
                                select: true
                            },
                            {
                                name: 'generator_blue',
                                text: "blue",
                                value: "blue",
                                select: false
                            },
                            {
                                name: 'generator_white_pink',
                                text: "white_pink",
                                value: "white_pink",
                                select: false
                            },
                            {
                                name: 'generator_white_blue',
                                text: "white_blue",
                                value: "white_blue",
                                select: false
                            },
                            {   
                                name: 'generator_pink_blue',
                                text: "pink_blue",
                                value: "pink_blue",
                                select: false
                            },
                        ]
                    }
                ]

const controls_2 = [{
                        name: 'logo',
                        type: 'text',
                        handler: 'logoColorInGenerator',
                        values: [
                            {
                                name: 'generator_logo_without',
                                value: 'none',
                                text: "Без логотипа",
                                select: false
                            },
                            {
                                name: 'generator_logo_main',
                                value: 'main',
                                text: "Основной знак",
                                select: true
                            },
                            {
                                name: 'generator_logo_brackets',
                                value: 'brackets',
                                text: "Герб-контейнер",
                                select: false
                            },
                            {
                                name: 'generator_logo_short',
                                value: 'short',
                                text: "Краткая форма",
                                select: false
                            },
                        ]
                    }]

const controls_3 = [{
                            text: 'Размер логотипа',
                            name: 'logoSize',
                            value: 50,
                            handler: 'rangeHandler'
                        }
                    ]
                
const controls_4 = [
                    {
                        text: 'Размер точек',
                        name: 'black',
                        value: 50,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Масштаб',
                        name: 'scale',
                        value: 50,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Контраст',
                        name: 'trace',
                        value: 50,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Форма',
                        name: 'form',
                        value: 50,
                        handler: 'rangeHandler'
                    },
                    {
                        text: 'Разделение',
                        name: 'split',
                        value: 50,
                        handler: 'rangeHandler'
                    }

                ]
export default PatternBlock