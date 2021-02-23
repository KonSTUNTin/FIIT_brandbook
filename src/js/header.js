import React from 'react'
import Button from './button.js'

const menuContent_ru = [
    {
        name: 'Концепция',
        link: 'conception', 
    },
    {
        name: 'Основной знак',
        link: 'major_logo', 
    },
    {
        name: 'Геральдика',
        link: 'geraldic', 
    },
    {
        name: 'Герб-контейнер',
        link: 'brackets', 
    },
    {
        name: 'Краткая форма',
        link: 'short_form', 
    },
    {
        name: 'Цвета',
        link: 'colors', 
    },
    {
        name: 'Гарнитура',
        link: 'font', 
    },
    {
        name: 'Паттерн',
        link: 'pattern', 
    },
    
    {
        name: 'Носители',
        link: 'mockups', 
    },
    {
        name: 'Отзывы',
        link: 'testimonials', 
    },
]

const menuContent_en = [
    {
        name: 'Concept',
        link: 'conception', 
    },
    {
        name: 'Main symbol',
        link: 'major_logo', 
    },
    {
        name: 'Heraldry',
        link: 'geraldic', 
    },
    {
        name: 'Emblem-container',
        link: 'brackets', 
    },
    {
        name: 'Short form',
        link: 'short_form', 
    },
    {
        name: 'Colours',
        link: 'colors', 
    },
    {
        name: 'Typeface',
        link: 'font', 
    },
    {
        name: 'Pattern',
        link: 'pattern', 
    },
    {
        name: 'Application',
        link: 'mockups', 
    },
    {
        name: 'Testimonials',
        link: 'testimonials', 
    },
   
]



class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            class: ''
        }
        this.content = [
            menuContent_en, menuContent_ru
        ]
        this.buttonText = [
            'Download\u00A0as\u00A0PDF',
            'Скачать\u00A0как\u00A0PDF'
        ]
        this.mobileMenuActive = this.mobileMenuActive.bind(this)
    }
    mobileMenuActive(){
        if(this.state.class === ''){
            this.setState({class: 'active'})
        }else{
            this.setState({class: ''})
        }
    }
    render(){
        return(
            <div className = {'header ' + this.state.class}>
                <div className = 'content'>
                    <div className = 'leftSideMenu column'>
                        <div onClick = {this.mobileMenuActive} className = 'mobileMenu'> </div>
                        <div className = 'menuNavigation'>
                            {
                                this.content[this.props.lang].map(
                                    (item, index)=>{
                                        return(
                                            <a onClick = {this.mobileMenuActive}  className = 'menuUnit' href = {window.location.origin + window.location.pathname + '#' + item.link}>
                                                {item.name}
                                            </a>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    
                    {(this.props.lang===1)&&<Button file = './media/FIIT.pdf' text = {this.buttonText[this.props.lang]}/>}
                    {(this.props.lang===0)&&<Button file = './media/FIIT_en.pdf' text = {this.buttonText[this.props.lang]}/>}
                </div>
            </div>
        )
    }
}



export default Header