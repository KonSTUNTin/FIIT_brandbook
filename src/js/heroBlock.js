import React from 'react'
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

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
        this.texture = null;
        this.px = this.x;
        this.py = this.y;
        this.a = Math.random() * Math.PI * 2;
        this.ref = React.createRef()
        this.animate = this.animate.bind(this)
        this.initMouse = this.initMouse.bind(this)
        this.initWindowResize = this.initWindowResize.bind(this)
    }
    initMouse(){
        this.ref.current.onmousemove = ()=>{
            let e = window.event;
            this.x = e.clientX ;
            let y = e.clientY - this.ref.current.offsetTop + document.documentElement.scrollTop;
            if(y <this.h * .8)this.y = y ;
        }
    }
    initWindowResize(){
        window.onresize = ()=>{
            this.w = window.innerWidth;
            this.h = window.innerHeight * .8;
            this.renderer.setSize( this.w, this.h )
        }
    }

    animate(){
        requestAnimationFrame(this.animate)
        this.texture.offset.y -= 0.001
       
        this.renderer.render(
            this.scene, this.camera
        )
        
    }
    async componentDidMount(){
        this.scene = new THREE.Scene();
       
        this.camera = new THREE.OrthographicCamera(-this.w / 2, this.w / 2, this.h / 2, -this.h / 2, 0.01, 20000)
        

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.ref.current,
            antialias: true
        })
        this.renderer.setClearColor( "#110F2C", 1 );
        this.renderer.setSize(
            this.w, this.h
        )
        let loader = new GLTFLoader();
        
        this.texture = new THREE.TextureLoader().load('./images/text.png');
        this.texture.wrapS = THREE.RepeatWrapping;
        this.texture.wrapT = THREE.RepeatWrapping;
        this.texture.magFilter = THREE.LinearMipmapLinearFilter;
        this.texture.minFilter = THREE.LinearMipmapLinearFilter;
        
        let alphaMap = new THREE.TextureLoader().load('./images/carpethair.png');

        loader.load('./carpet.gltf',
            (gltf)=>{
                gltf.scene.traverse(
                    (child)=>{
                        if(child.isMesh){
                            let geometry = child.geometry;
                            let material = new THREE.MeshBasicMaterial(
                                {   
                                    // alphaMap: alphaMap,
                                    // transparent: true,
                                    map: this.texture,
                                    side: THREE.DoubleSide
                                })
                            let mesh = new THREE.Mesh(geometry,material);
                            this.scene.add(mesh);
                            mesh.renderOrder = 0.5;
                            mesh.position.set(0, 0, -2000)
                            mesh.rotation.set(-Math.PI, -Math.PI / 2, -Math.PI / 2)
                            mesh.scale.set(400, 400, 300)
                        }
                    }
                )
                
            },
            (xhr)=>{

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            function ( error ) {

                console.log( 'An error happened' );
        
            }
        )
        
        this.animate()
        this.initWindowResize()
    }
    
    render(){
        return(
            <canvas ref = {this.ref} className = 'interactionCanvas'/>
        )
    }
}


export default HeroBlock
