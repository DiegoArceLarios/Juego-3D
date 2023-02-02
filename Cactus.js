class Cactus{
    constructor(x,z,nose){
        this.cactus1;
        this.cactus11;
        this.cactus111;
        if (nose === 1){
            
            this.cactus1 = new Block(x, -4, z, 1, 3, 1);
            this.cactus1.fillColor = color(0,100,0);
        
            this.cactus11 = new Block(x+0.75, -4+0.5, z, 0.5, 0.5, 1);
            this.cactus11.fillColor = color(0,100,0);
        
            this.cactus111 = new Block(x-0.75, -4-0.5, z, 0.5, 0.5, 1);
            this.cactus111.fillColor = color(0,100,0);
        }else{
            this.cactus1 = new Block(x, -4, z, 1, 3, 1);
            this.cactus1.fillColor = color(0,100,0);
          
            this.cactus11 = new Block(x, -4+0.5, z+0.75, 1, 0.5, 0.5);
            this.cactus11.fillColor = color(0,100,0);
          
            this.cactus111 = new Block(x, -4-0.5, z-0.75, 1, 0.5, 0.5);
            this.cactus111.fillColor = color(0,100,0);
        }
    }

    display(){
        this.cactus1.display();
        this.cactus11.display();
        this.cactus111.display();

        this.cactus1.update();
        this.cactus11.update();
        this.cactus111.update();
    }

}