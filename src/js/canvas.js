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
    }
    draw(image){
        this.ctx.drawImage(
            image, 0, 0
        )
    }
    clear(){
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(
            0, 0, this.canvas.width, this.canvas.height
        )
    }
    
}
export default Canvas