// Engineer: jWilliamDunn 2020

// First-person camera control w/ HUD
// Mouse: left/right : pan
//        up/down : tilt
//        click : move forward

//  Keys: a/d : left/right
//        w/s : forward/backward
//        e/q : up/down
//        space : jump    <----------- extended behavior
//        h : help
// this is needed to catch the exit from pointerLock when user presses ESCAPE


function onPointerlockChange() {
  if (document.pointerLockElement === canvas.elt ||
    document.mozPointerLockElement === canvas.elt)
    console.log("locked");
  else {
    console.log("unlocked");
    player.pointerLock = false;
  }
}
document.addEventListener('pointerlockchange', onPointerlockChange, false);

var player, base, f, help = false,
  canvas;
  var xc = 0;
  var zc = 0;
  var r = 0;
  var xp = 0
  var zp = 0;
  var xt = 72;
  var zt = 3;
  var d = 0;
  var ex = 0;
  var ez = 0;
  var gameState = 0;


  var caja1,caja2,caja3,caja4,caja5,caja6,caja7,caja8,caja9,caja10,caja11,caja12;

  var casa1Img,casa2Img,casa3Img,casa11Img,casa22Img,casa33Img;

  var casa1,casa2,casa3,casa4,casa5,casa6,casa7,casa11,casa22,casa33,casa44,casa55,casa66,casa77,
  casa111,casa222,casa333,casa444,casa555,casa666,casa777,casa1111,casa2222,casa3333,casa4444,
  casa5555,casa6666,casa7777;

  var img = true;
  var wk = true;
  var hora = true; 
  var inicio = true;
  var tiempo1 = true;
  var tiempo2 = true;

  var otherPlayer;
  var distancia1,distancia2,distancia3,distancia4,distancia5,distancia6,distancia7,distancia8,distancia9,distancia10,
  distancia11,distancia12,distancia13,distancia14,distancia15,distaciaPlayerBala1,distaciaPlayerBala2,distaciaPlayerBala3;

  var mun1,mun2,mun3,munImg;

  var start;
  var blocks;
  var form;
  var fondo1,fondo2,fondo3,fondo4,fondo5;
  var fondoImg;
  var recargaImg;
  var sol;
  var caraImg;
  var vida;
  var vida1;
  


 function preload() {

  f = loadFont('inconsolata.otf');
  casa1Img = loadImage('./imagenes/vaquero1.png');
  casa2Img = loadImage('./imagenes/vaquero2.png');
  casa3Img = loadImage('./imagenes/vaquero3.png');

  casa11Img = loadImage('./imagenes/vaquero11.png');
  casa22Img = loadImage('./imagenes/vaquero22.png');
  casa33Img = loadImage('./imagenes/vaquero33.png');

  cajaImg = loadImage('./imagenes/caja.png');

  recargaImg = loadImage('./imagenes/recargando.png');

  caraImg = loadImage('./imagenes/cara1.png');

  munImg = loadImage('./imagenes/municion.png');

  fondoImg = loadImage('imagenes/fondo juego.png')

}

function setup() {

  xp = 0;
  zp = 70;
  vida = 100;
  vida1 = 100;

  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(f);
  textSize(10);

  player = new Player();
  form = new Form();
  otherPlayer = new OtherPlayer(player);
  base = new Base(15);
  base.setPlayerAtStart(player);


  ex = Math.round(random(xp,zc));
  ez = Math.round(random(xp,zp));
  

  fondo1 = new Block(77,-4,35,10,100,100);
  fondo1.fillColor = color (186, 244, 252);
  fondo2 = new Block(35,-4,78,100,100,10);
  fondo2.fillColor = color (186, 244, 252);
  fondo3 = new Block(-8,-4,35,10,100,100);
  fondo3.fillColor = color (186, 244, 252);
  fondo4 = new Block(35,-4,-8,100,100,10);
  fondo4.fillColor = color (186, 244, 252);
  fondo5 = new Block(35,-50,35,100,0.01,100);
  fondo5.fillColor = color (186, 244, 252);

  s = new Block (20,-4, 20, 10,10,10);

  sol = new Block(0,-45,0,20,20,20);
  sol.fillColor = color (255,255,0);
  
  frameRate(60);
  strokeWeight(2);
  cactus();
  crearCasas();
  crearMunicio();
}



  
  


function draw() {
  background(65, 65, 250);
  if (gameState === 0){
    form.display();
    camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
    ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 1000);
    fill(0, 0, 0, 200);
    noStroke();
    translate(-380, -380, 0);
    image(fondoImg,-300,50,1400,670);
    
  }else{

  

  base.update();
  base.display();

  player.update();
  //console.log(player.position);

  actus1.display();
  cactus2.display();
  cactus3.display();
  cactus4.display();
  cactus5.display();
  cactus6.display();
  cactus7.display();
  cactus8.display();
  cactus9.display();
  cactus10.display();
  cactus11.display();
  cactus12.display();
  cactus13.display();
  cactus14.display();
  cactus15.display();

  casa1.display(casa1Img);
  casa2.display(casa2Img);
  casa3.display(casa3Img);
  casa4.display(casa2Img);
  casa5.display(casa3Img);
  casa6.display(casa1Img);
  casa7.display(casa2Img);

  casa11.display(casa22Img);
  casa22.display(casa33Img,);
  casa33.display(casa22Img);
  casa44.display(casa22Img);
  casa55.display(casa11Img);
  casa66.display(casa11Img);
  casa77.display(casa33Img);

  casa111.display(casa11Img);
  casa222.display(casa22Img);
  casa333.display(casa33Img);
  casa444.display(casa33Img);
  casa555.display(casa33Img);
  casa666.display(casa11Img);
  casa777.display(casa11Img);

  casa1111.display(casa1Img);
  casa2222.display(casa2Img);
  casa3333.display(casa3Img);
  casa4444.display(casa2Img);
  casa5555.display(casa3Img);
  casa6666.display(casa1Img);
  casa7777.display(casa2Img);

  caja1.display(cajaImg);
  caja2.display(cajaImg);
  caja3.display(cajaImg);
  caja4.display(cajaImg);
  caja5.display(cajaImg);
  caja6.display(cajaImg);
  caja7.display(cajaImg);
  caja8.display(cajaImg);
  caja9.display(cajaImg);
  caja10.display(cajaImg);
  caja11.display(cajaImg);
  caja12.display(cajaImg);

  fondo1.display();
  fondo1.update();
  fondo2.display();
  fondo2.update();
  fondo3.display();
  fondo3.update();
  fondo4.display();
  fondo4.update();
  fondo5.display();
  fondo5.update();

  sol.display();
  sol.update();

  if (vida1 > 0){
  otherPlayer.dibujar();
  otherPlayer.bala();
  }

  mun1.display(munImg);
  mun2.display(munImg);
  mun3.display(munImg);

  distaciaPlayerBala1 = dist(player.x,player.y,player.z,otherPlayer.x,otherPlayer.y1,otherPlayer.z);
  distaciaPlayerBala2 = dist(player.x,player.y,player.z,otherPlayer.x,otherPlayer.y2,otherPlayer.z);
  distaciaPlayerBala3 = dist(player.position.x,player.position.z,otherPlayer.x1,otherPlayer.z1);

  if (distaciaPlayerBala3 <= 1&&tiempo1){
    vida-=10;
    tiempo1 = false;
    setTimeout(()=>{
      tiempo1 = true;   
    },1000)
  }

  if (distaciaPlayerBala1 <= 1&&tiempo2){
    vida1-=20;
    tiempo2 = false;
    setTimeout(()=>{
      tiempo2 = true;   
    },1000)
  }

  if (distaciaPlayerBala2 <= 1&&tiempo2){
    vida1-=10;
    tiempo2 = false;
    setTimeout(()=>{
      tiempo2 = true;   
    },1000)
  }

  if (vida <= 0){
    vida = 0;
  }
  if (vida1 <= 0){
    vida1 = 0;
  }
  
  if (player.bala1 || keyCode == 32){
    player.disparar();
    keyCode = 60;
  }

  if(keyIsDown(69)){
    player.pov.fovy = 0.3;
    player.updatePOV();
  }else{
    player.pov.fovy = 1;
    player.updatePOV();
  }




 // block2.update();
  drawAxes();

    // Heads Up Display extension by jWilliam
    push(); // this affects the frame rate
    camera(0, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
    ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 1000);
    fill(0, 0, 0, 200);
    noStroke();
    translate(-380, -380, 0);
    scale(2);
    rect(0, 0, 180, 85);
    fill('#FFFFFF');
    ellipse(190,190,5);

    if (keyIsDown(69)){
      fill('#000000');
      rect(-150,0,150,600);
      rect(390,0,150,600);
      rect(-150,300,600,100);
      rect(-150,0,600,100);
      fill('#830707')
      ellipse(190,190,10);
    }
    if (player.municion > 5){
      fill('#B88C00');
      rect(-130,80,8,20);
    }
    if (player.municion > 4){
      fill('#B88C00');
      rect(-120,80,8,20);
    }
    if (player.municion > 3){
      fill('#B88C00');
      rect(-110,80,8,20);
    }
    if (player.municion > 2){
      fill('#B88C00');
      rect(-100,80,8,20);
    }
    if (player.municion > 1){
      fill('#B88C00');
      rect(-90,80,8,20);
    }
    if (player.municion > 0){
      fill('#B88C00');
      rect(-80,80,8,20);
    }

    if (!player.tiempo){
      image(recargaImg,-70,80,20,20);
    }

    
    
    fill('#808080')
    rect(-130,50,100,10);
    fill('#F22616')
    rect(-130,50,vida,10);

    fill('#808080')
    rect(400,50,100,10);
    switch(form.nombre){
      case 1:fill('#000000')
      break;
      case 2:fill('#006400')
      break;
      case 3:fill('#8C8C8C')
      break;
      case 4:fill('#6F2A0B')
      break;
      case 5:fill('#FFCA21')
      break;
    }
    rect(400,50,vida1,10);

    

    fill(1000);
    text(' keys: a/d : izquierda/derecha', 10, 40);
    text('       w/s : adelante/atras', 10, 50);
    text('       espacio : disparar', 10, 60);
    text('       e : apuntar', 10, 70);

    if (vida === 0){
      fill('#580000');
      rect(-200,0,1000,1000);
    }
    pop();



    
  }
}

function drawAxes(){
	push();
      noStroke();
	  fill(127,0,0); // X red
	  translate(75,0.5,0.5);
	  box(150,1,1);
	pop();
	push();
      noStroke();
	  fill(0,127,0); // Y green
	  translate(0.5,75,0.5);
	  box(1,150,1);
	pop();
	push();
      noStroke();
	  fill(0,0,127); // Z blue
	  translate(0.5,0.5,75);
	  box(1,1,150);
	pop();
}

function mouseClicked() {
  if (!player.pointerLock) {
    player.pointerLock = true;
    requestPointerLock();
  } else {
    exitPointerLock();
    player.pointerLock = false;
  }
}

function cactus(){
  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  actus1 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus2 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus3 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus4 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus5 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus6 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus7 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus8 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus9 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus10 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus11 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus12 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus13 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus14 = new Cactus(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(1,2));
  cactus15 = new Cactus(xc,zc,r);

  //cajas

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja1 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja2 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja3 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja4 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja5 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja6 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja7 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja8 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja9 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja10 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja11 = new Caja(xc,zc,r);

  xc = Math.round(random(xp,zp));
  zc = Math.round(random(xp,zp));
  r = Math.round(random(2,4));
  caja12 = new Caja(xc,zc,r);


}

function crearCasas(){
  //adelante
  casa1 = new Casas(xt,zt,wk);
  zt += 10.7;

  casa2 = new Casas(xt,zt,wk);
  zt += 10.7;

  casa3 = new Casas(xt,zt,wk);
  zt += 10.7;

  casa4 = new Casas(xt,zt,wk);
  zt += 10.7;

  casa5 = new Casas(xt,zt,wk);
  zt += 10.7;

  casa6 = new Casas(xt,zt,wk);
  zt += 10.7;

  casa7 = new Casas(xt,zt,wk);
  zt += 10.7;

  //derecha
  
  wk = false;
  zt -= 10.7/2;
  xt -= 10.7/2;
  casa11 = new Casas(xt,zt,wk);
  xt -= 10.7;

  casa22 = new Casas(xt,zt,wk);
  xt -= 10.7;

  casa33 = new Casas(xt,zt,wk);
  xt -= 10.7;

  casa44 = new Casas(xt,zt,wk);
  xt -= 10.7;

  casa55 = new Casas(xt,zt,wk);
  xt -= 10.7;

  casa66 = new Casas(xt,zt,wk);
  xt -= 10.7;

  casa77 = new Casas(xt,zt,wk);
  xt -= 10.7;

  //atras

  wk = true;
  zt -= 10.7/2;
  xt += 10.7/2;
  casa111 = new Casas(xt,zt,wk);
  zt -= 10.7;

  casa222 = new Casas(xt,zt,wk);
  zt -= 10.7;

  casa333 = new Casas(xt,zt,wk);
  zt -= 10.7;

  casa444 = new Casas(xt,zt,wk);
  zt -= 10.7;

  casa555 = new Casas(xt,zt,wk);
  zt -= 10.7;

  casa666 = new Casas(xt,zt,wk);
  zt -= 10.7;

  casa777 = new Casas(xt,zt,wk);
  zt -= 10.7;

  //derecha
  
  wk = false;
  zt += 10.7/2;
  xt += 10.7/2;
  casa1111 = new Casas(xt,zt,wk);
  xt += 10.7;

  casa2222 = new Casas(xt,zt,wk);
  xt += 10.7;

  casa3333 = new Casas(xt,zt,wk);
  xt += 10.7;

  casa4444 = new Casas(xt,zt,wk);
  xt += 10.7;

  casa5555 = new Casas(xt,zt,wk);
  xt += 10.7;

  casa6666 = new Casas(xt,zt,wk);
  xt += 10.7;

  casa7777 = new Casas(xt,zt,wk);
  xt += 10.7;
}

function crearMunicio(){
  mun1 = new Mun(player);
  mun2 = new Mun(player);
  mun3 = new Mun(player);
}

