class Dustbin {
    constructor(x,y,width,height){
        var option ={
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image=loadImage("dustbingreen.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('white');
       // image(this.image,450,60);
        rect(pos.x,pos.y,this.width, this.height);
    }
}