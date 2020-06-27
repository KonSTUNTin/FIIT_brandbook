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
                <InteractionCanvas/>
            </div>
        )
    }
}

class InteractionCanvas extends React.Component{
    constructor(props){
        super(props)

        let w = window.innerWidth;
        let h = window.innerHeight;

        let bufferCanvas = document.createElement('canvas')
        bufferCanvas.width = w;
        bufferCanvas.height = h;
        let bctx = bufferCanvas.getContext("2d");

        this.state = {
            bufferCanvas: bufferCanvas,
            bctx: bctx,
            x: 0,
            y: 0,
            w: w,
            h: h,
            time: 0,
            px: 512,
            py: 512
        }
        this.initMouse = this.initMouse.bind(this)
        this.animate = this.animate.bind(this)
        this.draw = this.draw.bind(this)
        this.ref = React.createRef()
    }
    animate(){
        requestAnimationFrame(this.animate)
        let time = this.state.time + 1

        let dx = this.state.x - this.state.px;
        let dy =  this.state.y - this.state.py;
        let a = Math.atan2(dy, dx);

        let px = this.state.px + Math.cos(a) * 3;
        let py = this.state.py + Math.sin(a) * 3;

        this.setState({
            time: time,
            px: px,
            py: py
        })
        this.draw()
    }

    initMouse(){
        window.onmousemove = ()=>{
            let e = window.event;
            let x = e.clientX;
            let y = e.clientY - this.ref.current.offsetTop + document.documentElement.scrollTop

            this.setState({
                x: x,
                y: y,
            })
        }
    }

    componentDidMount(){
        this.initMouse()
        let w = this.state.w;
        let h = this.state.h;
        let canvas = document.createElement('canvas')
        
        canvas.width = 200;
        canvas.height = 200;
        
        let ctx = canvas.getContext("2d")
        ctx.beginPath();
        ctx.arc(100, 100, 100, 0, Math.PI * 2)
        
        let gradient = ctx.createLinearGradient(0, 0, 200, 200);

        gradient.addColorStop(0, "rgba(125, 125, 256, 1)");
        gradient.addColorStop(.8, "rgba(125, 256, 125, 1)");
        ctx.fillStyle = gradient;
        ctx.fill();

        this.sprite = canvas;
        this.ref.current.width = w;
        this.ref.current.height = h;

       

        this.ctx = this.ref.current.getContext("2d");
        this.ctx.fillStyle = '#110F2C'
        this.ctx.fillRect(
            0, 0, w, h
        )
        this.animate()
    }
    draw(){
        let w = this.state.w;
        let h = this.state.h;
        let s = Math.cos(this.state.time / 60) * 50 + 150
        this.state.bctx.drawImage(
            this.ref.current,
            0,
            -1
        )
        this.ctx.clearRect(
            0, 0, w, h
        )
        this.ctx.drawImage(
            this.state.bufferCanvas,
            0,
            0
        )


        this.ctx.drawImage(
            this.sprite,
            0, 0, 200, 200,
            this.state.px - s / 2,
            this.state.py - s / 2,
            s, s
        )
    }
    render(){
        return(
            <canvas ref = {this.ref} className = 'interactionCanvas'/>
        )
    }
}


export default HeroBlock
