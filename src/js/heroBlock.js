import React from 'react'
import * as THREE from 'three';
import { Vector2 } from 'three';

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
        
        this.time = 0;
        this.w = window.innerWidth;
        this.h = window.innerHeight * .8;

        this.x = this.w / 2;
        this.y = this.h / 2;

        this.px = this.x;
        this.py = this.y;
        this.a = Math.random() * Math.PI * 2;
        this.ref = React.createRef()
        this.animate = this.animate.bind(this)
        this.initMouse = this.initMouse.bind(this)
    }
    initMouse(){
        this.ref.current.onmousemove = ()=>{
            let e = window.event;
            this.x = e.clientX ;
            let y = e.clientY - this.ref.current.offsetTop + document.documentElement.scrollTop;
            if(y <this.h * .8)this.y = y ;
        }
    }
    animate(){
        requestAnimationFrame(this.animate)

        let dx = this.x - this.px;
        let dy = this.y - this.py;
        let a = Math.atan2(dy, dx);
        let d = Math.sqrt(dx * dx + dy * dy);
        d = Math.min(d, this.h / 5) / (this.h / 5);

        this.a += Math.cos(this.time / 70) / 50;
        let deltaVector = new THREE.Vector2(
            Math.cos(a), Math.sin(a)
        )
        deltaVector.multiplyScalar(d)

        let vector = new THREE.Vector2(
            Math.cos(this.a), Math.sin(this.a)
        )
        vector.multiplyScalar(1 - d)
        vector.add(deltaVector);
        vector.normalize();

        this.px += vector.x * 3;
        this.py += vector.y * 3;

        this.uniforms.x.value = this.px / this.w;
        this.uniforms.y.value = this.py / this.h;

        this.time +=1

        this.renderer.setRenderTarget(
            this.rtA
        )
        this.renderer.render(
            this.buffer_scene, this.camera
        )
        let t = this.rtB;
        this.rtB = this.rtA;
        this.rtA = t;

        this.basicMaterial.map = this.rtA.texture
        this.uniforms.texture.value = this.rtB.texture

        this.renderer.setRenderTarget(
            null
        )
        this.renderer.render(
            this.scene, this.camera
        )

        this.uniforms.time.value = this.time
        
    }
    async componentDidMount(){
        this.scene = new THREE.Scene();
        this.rtA = new THREE.WebGLRenderTarget(this.w, this.h);
        this.rtB = new THREE.WebGLRenderTarget(this.w, this.h)
        this.camera = new THREE.OrthographicCamera(-this.w / 2, this.w / 2, this.h / 2, -this.h / 2, 0.01, 1000)
        this.buffer_scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.ref.current
        })
        this.renderer.setSize(
            this.w, this.h
        )
        
        let vshader = await fetch('./vshader.txt');
        vshader = await vshader.text();

        let fshader = await fetch('./wormshader.txt');
        fshader = await fshader.text();

        this.uniforms = {
            texture:{
                value: this.rtB.texture
            },
            time: {
                value: 0
            },
            x: {
                value: this.x
            },
            y: {
                value: this.y
            },
            w: {
                value: this.w
            },
            h: {
                value: this.h
            }
        }
        let g = new THREE.PlaneGeometry(
            this.w, 
            this.h, 
            1, 
            1
        );
        let shaderMaterial = new THREE.ShaderMaterial({
            vertexShader: vshader,
            fragmentShader: fshader,
            uniforms: this.uniforms
        })
        this.basicMaterial = new THREE.MeshBasicMaterial({
            map: this.rtA.texture
        })

        this.buffer_plane = new THREE.Mesh(g, shaderMaterial);
        this.buffer_plane.position.z = -100;
        this.buffer_scene.add(this.buffer_plane);

        this.plane = new THREE.Mesh(g, this.basicMaterial);
        this.plane.position.z = -100;
        this.scene.add(this.plane);
        
        this.animate()
        this.initMouse()
    }
    
    render(){
        return(
            <canvas ref = {this.ref} className = 'interactionCanvas'/>
        )
    }
}


export default HeroBlock
