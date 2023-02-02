class Caja{
    constructor(x,z,m){
        
        if (m = 2){
            this.caja = new Block(x, -3.5, z, m, m, m);
        }else{
            this.caja = new Block(x, -4, z, m, m, m);
        }
                
    }
    display(img){
        this.caja.display(img);
        this.caja.update();
    
    }
}