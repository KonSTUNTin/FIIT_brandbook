import * as THREE from 'three';
import Canvas from './javascript/canvas.js';

let scene;
let w = 1024;
let h = 1024;
let camera_Ortographic;
let renderer;
let time = 0;
let tex;
let myInterface;
let plane;
let uniforms;
let canvasTexture;

let url = [
    "./javascript/fshader.txt",
    "./javascript/vshader.txt"
]




window.onload = ()=>{
    
    tex = new MyTexture()
    init3D()
    let data = [
        {
            name: 'size',
            min: 0,
            max: 300,
            start: 200,
            target: "size"
        },
        {
            name: 'RedColor',
            min: 0,
            max: 100,
            start: 50,
            target: "rColor"
        },
        {
            name: 'GreenColor',
            min: 0,
            max: 100,
            start: 50,
            target: "gColor"
        },
        {
            name: 'BlueColor',
            min: 0,
            max: 100,
            start: 50,
            target: "bColor"
        },
        {
            name: 'Form',
            min: 0,
            max: 100,
            start: 50,
            target: "formtype"
        },
        {
            name: 'Black',
            min: 0,
            max: 100,
            start: 50,
            target: "black"
        },
        {
            name: 'Trace',
            min: 0,
            max: 100,
            start: 90,
            target: "trace"
        },
        {
            name: 'Split',
            min: 0,
            max: 100,
            start: 4,
            target: "split"
        }
    ]
    myInterface = new MyInterface(data)
    animate()

}

async function fetchTxt(url){
    let response = await fetch(url);
    return await response.text();
}


async function init3D(){
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({
    });
   
    renderer.setSize(w,h);
    document.body.appendChild(renderer.domElement);
    camera_Ortographic = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, - h / 2, .01, 30000);
    camera_Ortographic.position.set(0, 0, 1000);
    canvasTexture = new THREE.CanvasTexture(tex.canvas.canvas)

    uniforms = {
        time: {
            value: 0
        },
        pic: {
            value: canvasTexture
        },
        k: {
            value: h / w
        },
        size: {
            value: 200
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
            value: 50
        },
        black: {
            value: 50
        },
        trace: {
            value: 90
        },
        split: {
            value: 4
        },

    }
    uniforms.pic.value.needsUpdate = true;

    let fshader = await fetchTxt(url[0])
    let vshader = await fetchTxt(url[1])

    let g = new THREE.PlaneGeometry(w, h, 1,1);
    let m = new THREE.ShaderMaterial({
        fragmentShader: fshader,
        vertexShader: vshader,
        uniforms: uniforms
    })
   
    plane = new THREE.Mesh(g, m)
    scene.add(plane)
   
}

function animate(){
    requestAnimationFrame(animate);
    time++;
    tex.draw()
    if(plane){
        plane.material.uniforms.time.value = time;
        plane.material.uniforms.pic.value.needsUpdate = true;
    }
    renderer.render(scene, camera_Ortographic)
}

class MyTexture{
    constructor(){
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
    draw(){
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


class MyInterface{
    constructor(data){
        let container = document.createElement('div')
        container.setAttribute('class', 'interfaceContainer')
        document.body.appendChild(container);
        this.input = [];
        for (let i = 0; i < data.length; i++) {  
            this.input.push(
                new Range({
                    name: data[i].name,
                    parent: container,
                    startValue: data[i].start,
                    min: data[i].min,
                    max: data[i].max,
                    target: data[i].target
                })
            )
        } 
    }
}

class Range{
    constructor(data){
        
        let container = document.createElement('div');
        container.setAttribute('class', 'rangeContainer');
        let range = document.createElement('input');
        this.value = data.startValue;
        let info = document.createElement('div');
        info.setAttribute('class', 'rangeText');

        let name = document.createElement('div');
        name.setAttribute('class', 'rangeName');
        name.innerText = data.name

        let num = document.createElement('div');
        num.setAttribute('class', 'rangeValue');
        num.innerText = this.value;

        info.appendChild(name);
        info.appendChild(num);
        container.appendChild(info);
        container.appendChild(range);
        data.parent.appendChild(container);
        range.setAttribute('type', "range");
        range.setAttribute('min', data.min);
        range.setAttribute('max', data.max);
        range.setAttribute('value', this.value);
        range.setAttribute('id', "input1");
        let interval;
        range.oninput = ()=>{
            clearTimeout(interval)
            this.value = range.value;
            num.innerText = this.value;
            interval = setTimeout(
                ()=>{
                uniforms[data.target].value = this.value
                }, 500
            )
           
            
        }
    }
}
