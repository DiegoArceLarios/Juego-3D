class OtherPlayer{
    constructor(player){
            this.x = 20;
            this.z = 30;
            this.x1 = 20;
            this.z1 = 30;
            this.y1 = -4.5;
            this.y2 = -3.5;
            this.player = player;
            this.px = random(0.3,-0.3);   
            this.pz = random(0.3,-0.3);
            this.random = Math.round(random(1000,3000));
            this.px1 = 0;   
            this.pz1 = 0;
            this.px2 = 0;   
            this.pz2 = 0;
            this.res = 0.01;
            this.dificultad = 30;
            this.resX = random(this.res,-this.res);
            this.resZ = random(this.res,-this.res);       
            this.v = true;
            this.v1 = true;
        
            
    }

    dibujar(){

            if(form.nombre !== 2){
              var cabello = new Block(this.x,-5.1,this.z,1,0.2,1);
              cabello.fillColor = color(0,0,0);
              cabello.display();
              cabello.update();
            }
              
            
            var cabeza = new Block(this.x,this.y1,this.z,1,1,1);
            if (form.nombre === 2){
              cabeza.fillColor = color(35,54,22);
            }else{
              cabeza.fillColor = color(255,242,204);
            }
            var cuerpo = new Block(this.x,this.y2,this.z,1,1,1);
            if (form.nombre === 5||form.nombre === 1){
              var sombrero1 = new Block(this.x,this.y1-0.7,this.z,1.5,0.2,1.5);
              sombrero1.fillColor = color(237,131,59);
              sombrero1.display();
              sombrero1.update();

              var sombrero2 = new Block(this.x,this.y1-1,this.z,0.8,0.8,0.8);
              sombrero2.fillColor = color(237,131,59);
              sombrero2.display();
              sombrero2.update();
            }
            switch(form.nombre){
              case 1:cuerpo.fillColor = color(0,0,0);
              break;
              case 2:cuerpo.fillColor = color(0,100,0);
              break;
              case 3:cuerpo.fillColor = color(140,140,140);
              break;
              case 4:cuerpo.fillColor = color(111,42,11);
              break;
              case 5:cuerpo.fillColor = color(255,202,33);
              break;
            }
            var pierna = new Block(this.x,-2.5,this.z,1,1,1);
            pierna.fillColor = color(0,0,50);
          
            cabeza.display();
            cabeza.update();

            cuerpo.display();
            cuerpo.update();

            pierna.display();
            pierna.update();

            
            

  
            if (this.x > 70||this.x < 0){
                this.px=this.px*-1;
            }
              
              if (this.z > 70||this.z < 0){
                this.pz=this.pz*-1;
            }

            this.x += this.px;
            this.z += this.pz;

          
          
  
            if (this.v){
            this.v = false;
            setTimeout(()=>{
                this.v = true;  
                this.px = random(0.2,-0.2);
                this.pz = random(0.2,-0.2);    
        
        
            },1000)
        }
    }

    bala(){

            if (this.tiempo){

                this.x1 = this.x;
                this.z1 = this.z;
             
                this.px1 = this.player.position.x-this.x1;   
                this.pz1 = this.player.position.z-this.z1;
                
                this.resX = random(this.res,-this.res);
                this.resZ = random(this.res,-this.res);

                this.tiempo = false;
              
              
            }
            var bala = new Block(this.x1,this.y2, this.z1, 0.1, 0.1, 0.1);
            bala.fillColor = color(0,0,0);
            bala.display();
            bala.update();
            this.bala1 = true;
            
            this.x1 += ((this.px1*1)/this.dificultad)+this.resX;
            this.z1 += ((this.pz1*1)/this.dificultad)+this.resZ;
            
            
    
            if (this.v1){
            this.v1 = false;
            setTimeout(()=>{
              this.tiempo = true;
              this.v1 = true;
              this.random = Math.round(random(1000,3000));      
        
        
            },this.random)
          }

    
        
    
}

}
