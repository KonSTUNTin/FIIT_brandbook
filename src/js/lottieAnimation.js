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
        let path 
        if(Array.isArray(this.props.path)){
            if(window.innerWidth < 820){
                path = this.props.path[1]
            } else {
                path = this.props.path[0]
            }
        } else {
            path = this.props.path
        }
        lottie.loadAnimation({
            container: this.ref.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: path // the path to the animation json
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