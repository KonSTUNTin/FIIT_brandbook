import React from 'react'
import Button from './button.js'
const menuContent = [
    {
        name: 'Концепция',
        link: '', 
    },
    {
        name: 'Основной знак',
        link: '', 
    },
    {
        name: 'Герб-контейнер',
        link: '', 
    },
    {
        name: 'Краткая форма',
        link: '', 
    },
    {
        name: 'Цвета',
        link: '', 
    },
    {
        name: 'Гарнитура',
        link: '', 
    },
    {
        name: 'Паттерн',
        link: '', 
    },
    {
        name: 'Носители',
        link: '', 
    },
]



class Header extends React.Component{
    shouldComponentUpdate(){
        return false
    }
    render(){
        return(
            <div className = 'header'>
                <div className = 'content'>
                    <div className = 'mobileMenu'> </div>
                    <div className = 'menuNavigation'>
                        {
                            menuContent.map(
                                (item, index)=>{
                                    return(
                                        <a className = 'menuUnit' href = {item.link}>
                                            {item.name}
                                        </a>
                                    )
                                }
                            )
                        }
                    </div>
                    <Button file = './media/FIIT.pdf' text = 'Скачать&nbsp;как&nbsp;PDF'/>
                </div>
            </div>
        )
    }
}



export default Header