import React from 'react'
import Button from './button.js'
const menuContent = [
    {
        name: 'Концепция',
        link: '#conception', 
    },
    {
        name: 'Основной знак',
        link: '#major_logo', 
    },
    {
        name: 'Герб-контейнер',
        link: '#brackets', 
    },
    {
        name: 'Краткая форма',
        link: '#short_form', 
    },
    {
        name: 'Цвета',
        link: '#colors', 
    },
    {
        name: 'Гарнитура',
        link: '#font', 
    },
    {
        name: 'Паттерн',
        link: '#pattern', 
    },
    {
        name: 'Носители',
        link: '#mockups', 
    },
]



class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            class: ''
        }
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
                                menuContent.map(
                                    (item, index)=>{
                                        return(
                                            <a onClick = {this.mobileMenuActive}  className = 'menuUnit' href = {item.link}>
                                                {item.name}
                                            </a>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    
                    <Button file = './media/FIIT.pdf' text = 'Скачать&nbsp;как&nbsp;PDF'/>
                </div>
            </div>
        )
    }
}



export default Header