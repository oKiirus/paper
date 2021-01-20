class Paper{

    constructor(x, y, r){

        var options = {
            restitution : 0.3,
            friction : 1,
            density : 1
        }

        this.img = loadImage("paper.png")
        this.body = Bodies.circle(x,y,r/2 - 20,options)
        this.r = r

        World.add(world,this.body)
    } 

        display(){
            imageMode(CENTER)
            image(this.img, this.body.position.x, this.body.position.y, this.r, this.r)
        }


}