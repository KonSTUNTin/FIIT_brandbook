import React from 'react'
import lottie from 'lottie-web'

class LottieAnimation extends React.Component{
    constructor(props){
        super(props)
        this.ref = React.createRef()
    }
    shouldComponentUpdate(){
        return false
    }
    componentDidMount(){
        lottie.loadAnimation({
            container: this.ref.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: this.props.path // the path to the animation json
        });
    }
    render(){
        return(
            <div ref = {this.ref} className = 'LottieAnimation'>

            </div>
        )
    }
}
export default LottieAnimation