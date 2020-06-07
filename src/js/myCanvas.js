import React from 'react';
import Canvas from './canvas.js'
import * as THREE from 'three'

const url = [
    "./fshader.txt",
    "./vshader.txt"
]



class MyCanvas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            width: this.props.height,
            height: this.props.width,
            time: 0
        }
        this.canvasRef = React.createRef()
    }
    async componentDidMount(){
        let w = this.props.width;
        let h = this.props.height;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasRef.current
        });
    
        this.renderer.setSize(w , h);
        this.camera_Ortographic = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, - h / 2, .01, 30000);
        this.camera_Ortographic.position.set(0, 0, 1000);

        let fshader = await this.fetchTxt(url[0])
        let vshader = await this.fetchTxt(url[1])
        this.tex = new MyTexture(w, h)
        this.canvasTexture = new THREE.CanvasTexture(this.tex.canvas.canvas)

        let uniforms = {
            time: {
                value: 0
            },
            pic: {
                value: this.canvasTexture
            },
            k: {
                value: h / w
            },
            size: {
                value: this.props.settings.Scale
            },
            rColor: {
                value: 50
            },
            gColor: {
                value: 50
            },
            bColor: {
                value: 50
            },
            formtype: {
                value: this.props.settings.Form
            },
            black: {
                value: this.props.settings.Black
            },
            trace: {
                value: this.props.settings.Trace
            },
            split: {
                value: this.props.settings.Split
            },
        }
        uniforms.pic.value.needsUpdate = true;
        let g = new THREE.PlaneGeometry(w, h, 1, 1);
        
        let m = new THREE.ShaderMaterial({
            fragmentShader: fshader,
            vertexShader: vshader,
            uniforms: uniforms
        })
        this.plane = new THREE.Mesh(g, m)
        this.scene.add(this.plane)
    }
    async fetchTxt(url){
        let response = await fetch(url);
        return await response.text();
    }
    componentDidUpdate(){
        if(this.tex)this.tex.draw(
            this.props.width,
            this.props.height,
            this.props.time
        )
        if(this.plane){
            this.plane.material.uniforms.time.value = this.props.time;
            this.plane.material.uniforms.pic.value.needsUpdate = true;
            this.plane.material.uniforms.size.value = this.props.settings.Scale;
            this.plane.material.uniforms.black.value = this.props.settings.Black;
            this.plane.material.uniforms.formtype.value = this.props.settings.Form;
            this.plane.material.uniforms.trace.value = this.props.settings.Trace;
            this.plane.material.uniforms.split.value = this.props.settings.Split;
        }
        this.renderer.render(
            this.scene, 
            this.camera_Ortographic
            )
    }
    render(){
        return(
        <canvas width = {this.props.width} height = {this.props.height} ref = {this.canvasRef}/>
        )
    }
}


class MyTexture{
    constructor(w, h){
        this.canvas = new Canvas(w, h, false);
        this.sprite = [];
        this.num = 25;
        for (let i = 0; i < this.num; i++) {
            this.sprite.push({
                side: Math.round(Math.random() * 3) + 10,
                r: Math.random() * h / 5 + h / 10,
                x: Math.random() * h / 2 - h / 4 + w / 2,
                y: Math.random() * h / 2 - h / 4 + h / 2,
                color: Math.random(),
                a: Math.random() * Math.PI * 2,
            })
        }
        let ctx = this.canvas.ctx;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, w, w);
    }
    draw(w, h, time){
        let ctx = this.canvas.ctx;
        ctx.fillStyle = 'white';
        ctx.globalAlpha = .01;
        ctx.fillRect(0, 0, w, h);
        
        ctx.globalAlpha = .1;
        for (let i = 0; i < this.num; i++) {
            let sprite = this.sprite[i];
            ctx.beginPath()
            sprite.x += Math.cos(sprite.a);
            sprite.y += Math.sin(sprite.a);
            let dx = sprite.x - w / 2;
            let dy = sprite.y - h / 2;
            let d = Math.sqrt(dx * dx + dy * dy)
            if(d > h * .3){
                sprite.a += Math.PI / 2
            }    


            for (let j = 0; j < sprite.side; j++) {
                let a = Math.PI * 2 / sprite.side * j;
                let l = sprite.r / 2 + Math.cos(time / 200 + i) * sprite.r / 4;
                let x = sprite.x + Math.cos(a) * l;
                let y = sprite.y + Math.sin(a) * l;
                if(j == 0){
                    ctx.moveTo(x, y);
                }else {
                    ctx.lineTo(x, y)
                }
            }
            
            ctx.closePath();
            if(i>this.num * .7){
                ctx.fillStyle = 'white'
            } else {
                ctx.fillStyle = 'black'
            }
            ctx.fill()
            
        }
    }
}






export default MyCanvas