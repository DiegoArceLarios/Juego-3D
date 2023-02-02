class Mun{
    constructor(player){
        this.x = Math.round(random(0,70));
        this.z = Math.round(random(0,70));
        this.player = player;
        this.dist = dist(this.player.position.x,this.player.position.z,this.x,this.z)
        
    }

    display(img){

        var municion = new Block(this.x,-2.5,this.z,1,0.1,1);

        this.dist = dist(this.player.position.x,this.player.position.z,this.x,this.z)
          
        municion.display(img);
        municion.update();

        if (this.dist <= 1&&this.player.municion < 6){
            this.x = Math.round(random(0,70));
            this.z = Math.round(random(0,70));
            this.player.municion = 6;

        }
        
    }
}