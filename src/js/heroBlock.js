import React from 'react'

class HeroBlock extends React.Component{
    shouldComponentUpdate(){
        return false
    }
    render(){
        return(
            <div className = 'section heroBlock nopadding_bottom'>
               
                <div className = 'content'>
                    <h1>
                        Логотип<br/>и&nbsp;фирменный<br/>стиль ФИИТ
                    </h1>
                    <div className = 'heroBlockBottomLine'>
                        <img className = 'jetLogo' src = './logoJS.png'/>
                        <div className = 'socialIcons'>

                        </div>
                    </div>
                </div>
                <div className = 'videoSection'>
                    {//poster={this.props.data.poster}
                    }
                    <video  autoPlay="autoplay" playsInline muted loop="loop" controls = {false}>
                        <source src={"./heroVideo.mp4"} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                    </video>
                </div>
            </div>
        )
    }
}


export default HeroBlock
