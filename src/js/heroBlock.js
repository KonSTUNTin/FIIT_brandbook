import React from 'react'

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
                        <h1>
                            Логотип<br/>и&nbsp;фирменный<br/>стиль ФИИТ
                        </h1>
                        <div className = 'heroBlockBottomLine'>
                            <a href = 'https://www.jetstyle.ru' target = '_blank'><img className = 'jetLogo' src = './logoJS.svg'/></a>
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
