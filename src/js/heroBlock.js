import React from 'react'
class HeroBlock extends React.Component{
    render(){
        return(
            <div className = 'section heroBlock'>
                <div className = 'content'>
                    <h1>
                        Логотип и фирменный стиль ФИИТ
                    </h1>
                    <div className = 'heroBlockBottomLine'>
                        <img className = 'jetLogo' src = './logoJS.png'/>
                        <div className = 'socialIcons'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeroBlock
