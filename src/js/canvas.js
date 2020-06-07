class Canvas {
    constructor(width, height, boolean) {
        width = Math.round(width);
        height = Math.round(height)
        if(width<1){
            width = 1
        }  
        if(height<1){
            height=1
        }
        
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        if(boolean)document.body.appendChild(canvas);
        let context = canvas.getContext('2d');
        this.canvas = canvas;
        this.ctx = context;
        this.ctx.font = (1024 / 30) + 'px' + ' Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
    }
    circle(x, y, r){
        this.ctx.beginPath()
        this.ctx.arc(
            x, y, r, 0, Math.PI * 2
        )
        this.ctx.closePath()
    }
    scan(config){
        let ctx = this.ctx
        let array = ctx.getImageData(
            0 ,0, this.canvas.width, this.canvas.height
        )
        array = array.data;
       
        return array
        
    }
    draw(image){
        this.ctx.drawImage(
            image, 0, 0
        )
    }
    drawParticles(array){
        for (let i = 0; i < array.el.length; i++) {
            this.ctx.drawImage(
                array.el[i].image,
                array.el[i].x - array.el[i].w / 2,
                array.el[i].y - array.el[i].h / 2
            )
            
        }
    }
    clear(){
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(
            0, 0, this.canvas.width, this.canvas.height
        )
    }
    polygon(array){
        let ctx = this.ctx;
        ctx.beginPath()
        for (let i = 0; i < array.length; i++) {
            if(i == 0){
                ctx.moveTo(array[i][0], array[i][1])
            } else {
                ctx.lineTo(array[i][0], array[i][1])
            }
            
        }
        ctx.closePath()
    }
    randomClip(config){
        let image = config.image;
        let scale = 1;
        scale = (config.scale)? config.scale: scale
        let w = config.w;
        let h = config.h;
        let ctx = this.ctx;
        ctx.drawImage(
            image,
            Math.random() * (image.width - w * scale),
            Math.random() * (image.height - h * scale),
            w * scale, h * scale,
            0, 0, w, h
        )
    }
    
}
export default Canvas