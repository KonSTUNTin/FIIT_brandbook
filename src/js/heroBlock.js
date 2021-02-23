import React from 'react'
let text = [
    'Logo and brand identity for FIIT',
    'Логотип и\u00A0фирменный стиль\u00A0ФИИТ'
]
let link = [
    'https://www.jet.style',
    'https://www.jetstyle.ru'
]

class HeroBlock extends React.Component{
    shouldComponentUpdate(){
        return false
    }
    render(){
        return(
            <div className = 'section heroBlock nopadding_bottom'>
                 <div className = 'videoSection'>
                    {//poster={this.props.data.poster}
                    }
                    <video  poster = './poster.jpg' autoPlay="autoplay" playsInline muted loop="loop" >
                        <source src={"./heroVideo1.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                    </video>
                </div>
                <div className = 'content'>
                    <div className = 'column width12'>
                        {this.props.lang===1&&<h1>
                            Логотип<br/>и фирменный стиль&nbsp;ФИИТ
                        </h1>}
                        {this.props.lang===0&&<h1>
                            Logo&nbsp;and&nbsp;brand<br/>identity for&nbsp;FIIT
                        </h1>}
                        <div className = 'heroBlockBottomLine'>
                            <a href = {link[this.props.lang]} target = '_blank'><img className = 'jetLogo' src = './logoJS.svg'/></a>
                            <div className = 'socialIcons'>

                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}


export default HeroBlock
