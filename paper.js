class paper{
        constructor(x,y,r){

        }
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2;
        }

    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("paper.png");
    this.body = bodies.circle(this.x,this.y,(this.r-20,option));
    World.add(world,this.body);

}
display(){

                var paperpos = this.body.postion;

                push()
                translate(paperpos.x,paperpos.y)
                rectMode(CENTER)
                //strokeWeight(4);
                fill(255,0,255)
                imageMode(CENTER);
                image(this.image,0,0,this.r,this.r)
                //ellipse(0,0,this.r,this.r);
                pop()

}
