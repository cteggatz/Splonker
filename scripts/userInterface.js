export class UI{
    constructor(x,y, width, height, stack){
        this.pos = {x,y};
        this.size = {width, height};
        this.stack = stack;
    }
    draw(ctx){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height);
    }
    onClick(x,y){
        if(x > this.pos.x + this.pos.width || x < this.pos.x ||
            y > this.pos.y + this.pos.height || y < this.pos.y){
            return;
        }
        
    }
}
export class UIText{
    constructor(text, x, y, color,size){
        this.text = text;
        this.pos = {x,y};
        this.color = color;
        this.size = size;
    }
    draw(ctx){
        ctx.fillText(this.text, this.pos.x, this.pos.y, this.size);
    }
}
export class UIButton extends UIText{
    constructor(text, x,y, color, size, xBound, yBound, callback){
        super(text, x,y,color,size);
        this.bounds = {xBound, yBound};
        this.callback = callback;
    }
    
}