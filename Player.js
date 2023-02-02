class Player extends RoverCam {
    constructor() {
      super();
      this.x = 0;
      this.z = 0;
      this.y = 0;
      this.py = 0;
      this.px = 0;
      this.pz = 0;
      this.municion = 6;
      this.name = "";
      this.dimensions = createVector(1, 3, 1);
      this.velocity = createVector(0, 0, 0);
      this.gravity = createVector(0, 0.03, 0);
      this.grounded = false;
      this.pointerLock = false;
      this.sensitivity = 0.002;
      this.speed = 0.03;
      this.bala1 = false;
      this.tiempo = true;
      this.ultimate = false;
      this.v = true;
    }
    
    controller() { // override
      if (keyIsDown(69)){
        this.speed = 0.01;
      }else{
        this.speed = 0.03;
      }
      if (player.pointerLock) {
        this.yaw(movedX * this.sensitivity);   // mouse left/right
        this.pitch(movedY * this.sensitivity); // mouse up/down
        if(keyIsDown(65) || keyIsDown(LEFT_ARROW))  this.moveY(this.speed); // a
        if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)) this.moveY(-this.speed);// d
      }
      else { // otherwise yaw/pitch with keys
        if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) this.yaw(-this.speed); // a
        if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) this.yaw(this.speed); // d
        //if (keyIsDown(82)) this.pitch(-0.02); // r
        //if (keyIsDown(70)) this.pitch(0.02);  // f
      }
      if (keyIsDown(87) || keyIsDown(UP_ARROW)) this.moveX(this.speed);    // w
      if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) this.moveX(-this.speed); // s
      
    }
    
    update() {
      /*if (keyIsPressed && key == 'e') {
        this.grounded = false;
        return;
      }*/
      this.velocity.add(this.gravity);
      this.position.add(this.velocity);
  
      /*if (this.grounded && keyIsPressed && keyCode == 32) { // space
        this.grounded = false;
        this.velocity.y = -1.5;
        this.position.y -= 0.05;
      }*/
    }
      disparar(){
      if (this.municion !== 0||this.ultimate){
        if (this.tiempo){
          this.x = this.position.x;
          this.z = this.position.z;
          this.y = this.position.y;
          this.py = this.tilt;
          this.px = sin(this.pan - PI/2.0)*-1;
          this.pz = cos(this.pan - PI/2.0);
          this.tiempo = false;
          this.municion -=1;
          if (this.municion === 0){
            this.ultimate = true;
          }
          
        }
        var bala = new Block(this.x,this.y, this.z, 0.1, 0.1, 0.1);
        bala.fillColor = color(0,0,0);
        bala.display();
        bala.update();
        this.bala1 = true;
        if (this.tilt > PI/2.0){         
          this.y -=this.py*2;
        }else if (this.tilt <= PI/2.0){
          this.y +=this.py*2;
        }

        
        this.x += this.px*2;
        this.z += this.pz*2;
        

        if (this.v){
        this.v = false;
        setTimeout(()=>{
          this.tiempo = true;
          this.bala1 = false;
          this.ultimate = false;
          this.v = true;      
    
    
        },2000)
      }
        
      
  }
}



}
  