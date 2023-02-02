class Casas{
    constructor(x,z,dirección){
        if (dirección){
            this.casa = new Block(x,-4,z,0.1,10,10);
        }else{
            this.casa = new Block(x,-4,z,10,10,0.1);
        }

    }

    display(casa1){  
        this.casa.display(casa1);
        this.casa.update();
    }

}