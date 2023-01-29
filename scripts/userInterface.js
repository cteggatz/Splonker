export class UI{
    constructor(x,y, width, height, stack){
        this.pos = {
            x:[x],
            y:[y]
        };
        this.size = {width, height};
        this.stack = stack;
    }
    updateUI(stack){
        this.stack = stack
    }
    draw(ctx){
        ctx.fillStyle = '#F1FAEE';
        ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height);
        ctx.fillStyle = "#1D3557";
        ctx.fillRect(this.pos.x, this.pos.y, this.size.width, 2);
        ctx.fillRect(this.pos.x, this.pos.y+this.size.height, this.size.width, 2);
        ctx.fillRect(this.pos.x, this.pos.y, 2, this.size.height);
        ctx.fillRect(this.pos.x+this.size.width, this.pos.y, 2, this.size.height)
        for(let obj of this.stack){
            obj.draw(ctx, this.pos.x[0], this.pos.y[0])
        }
    }
    onClick(x,y){
        if(x > this.pos.x + this.pos.width || x < this.pos.x ||
            y > this.pos.y + this.pos.height || y < this.pos.y){
            return;
        }  
    }
    updateSize(viewport){
        this.pos.x[0] = viewport.x[0];
        this.pos.y[0] = viewport.y[0]+viewport.height
    }
}
export class UIText{
    constructor(text, x, y, color,size){
        this.text = text;
        this.pos = {x,y};
        this.color = color;
        this.size = size;
    }
    draw(ctx,x,y){
        ctx.fillStyle= this.color;
        ctx.fillText(this.text, this.pos.x + x+3, this.pos.y + y+10, this.size);
    }
}
export class UIButton extends UIText{
    constructor(text, x,y, color, size, xBound, yBound, callback){
        super(text, x,y,color,size);
        this.bounds = {xBound, yBound};
        this.callback = callback;
    }
    
}