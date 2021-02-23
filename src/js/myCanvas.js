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
            width: 1024,
            height: 1024,
            time: Date.now()
        }
        this.ref = this.props.myref
        this.animate = this.animate.bind(this);
        this.animate()
    }
    animate(){
        requestAnimationFrame(this.animate)
        let time = Date.now();
        this.setState({time: time})
    }
    async componentDidMount(){
        let w = this.state.width;
        let h = this.state.height;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.ref.current,
            preserveDrawingBuffer: true 
        });
        this.logo = new THREE.TextureLoader().load('./logo.png');
        this.bracket = new THREE.TextureLoader().load('./bracket.png');
        this.borders = new THREE.TextureLoader().load('./borders.png');
        this.renderer.setSize(w , h);
        this.camera_Ortographic = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, - h / 2, .01, 30000);
        this.camera_Ortographic.position.set(0, 0, 1000);

        let fshader = await this.fetchTxt(url[0])
        let vshader = await this.fetchTxt(url[1])
        this.tex = new MyTexture(w, h)
        this.canvasTexture = new THREE.CanvasTexture(this.tex.canvas.canvas)

        let uniforms = {
            logo: {
                value: this.logo
            },
            bracket: {
                value: this.bracket
            },
            borders: {
                value: this.borders
            },
            time: {
                value: 0
            },
            pic: {
                value: this.canvasTexture
            },
            grad: {
                value: 50
            },
            k: {
                value: w / h
            },
            size: {
                value: this.props.settings.scale
            },
            logoSize: {
                value: 50
            },
            rColor: {
                value: 50
            },
            gColor: {
                value: 50
            },
            logoAlpha: {
                value: 0
            },
            bracketAlpha: {
                value: 0
            },
            borderAlpha: {
                value: 0
            },
            bColor: {
                value: 50
            },
            Seed: {
                value: 50
            },
            formtype: {
                value: this.props.settings.form
            },
            black: {
                value: this.props.settings.black
            },
            trace: {
                value: this.props.settings.trace
            },
            split: {
                value: this.props.settings.split
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
       
        let settings = this.props.settings;
        this.renderer.setSize( this.props.width, this.props.height );
        if(this.tex)this.tex.draw(
            this.props.width,
            this.props.height,
            this.state.time
        )
        if(this.plane){
            let shaderValue = this.plane.material.uniforms;
            shaderValue.time.value = this.state.time;
            shaderValue.pic.value.needsUpdate = true;
            shaderValue.size.value = settings.scale;
            shaderValue.black.value = settings.black;
            shaderValue.formtype.value = settings.form;
            shaderValue.trace.value = settings.trace;
            shaderValue.logoSize.value = settings.logoSize;
            shaderValue.split.value = settings.split;
            shaderValue.k.value = this.props.width / this.props.height;
            if(settings.logo === 'main'){
                shaderValue.logoAlpha.value = 1;
                shaderValue.bracketAlpha.value = 0;
                shaderValue.borderAlpha.value = 0;
            }
            if(settings.logo === 'none'){
                shaderValue.logoAlpha.value = 0;
                shaderValue.bracketAlpha.value = 0;
                shaderValue.borderAlpha.value = 0;
            }
            if(settings.logo === 'short'){
                shaderValue.logoAlpha.value = 0;
                shaderValue.bracketAlpha.value = 1;
                shaderValue.borderAlpha.value = 0;
            }
            if(settings.logo === 'brackets'){
                shaderValue.logoAlpha.value = 0;
                shaderValue.bracketAlpha.value = 0;
                shaderValue.borderAlpha.value = 1;
            }
            if(this.props.settings.color === 'pink'){
                shaderValue.rColor.value = 254;
                shaderValue.gColor.value = 37;
                shaderValue.bColor.value = 167;
            }
            if(this.props.settings.color === 'blue'){
                shaderValue.rColor.value = 26;
                shaderValue.gColor.value = 179;
                shaderValue.bColor.value = 213;
            }
            if(this.props.settings.color === 'white'){
                shaderValue.rColor.value = 256;
                shaderValue.gColor.value = 256;
                shaderValue.bColor.value = 256;
            }
        }

        this.renderer.render(
            this.scene, 
            this.camera_Ortographic
        )
        
        
    }
    render(){
        return(
        <canvas ref = {this.props.myref} className = 'generatorCanvas' width = {this.props.width} height = {this.props.height}/>
        )
    }
}


class MyTexture{
    constructor(w, h){
        w = Math.round(w / 512) * 512;
        h = Math.round(h / 512) * 512;
        this.canvas = new Canvas(w, h, false);
        this.sprite = [];
        this.w = w;
        this.h = h;
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
        // if(this.w!=w || this.h!=h){
        //     this.canvas = null
        //     this.canvas = new Canvas(w, h, false);
        //     this.w = w
        //     this.h = h
        // }
        // this.canvas.canvas.width = w;
        // this.canvas.canvas.height = h
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
                if(j === 0){
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