//centro = (675,300)
var canvas;
//var mapaGroup = [];
//var mapaGroup = createGroup();
var mapaGroup;
var personaje;
var vistaImg, vista;
var x, y;

function preload(){
   vistaImg = loadImage ("./vista1.png");
}

function setup(){
   canvas = createCanvas(windowWidth,windowHeight);
   vista = createSprite(675,300);
   vista.addImage ("ver",vistaImg);
   personaje = createSprite(675,300,20,20);
   mapaGroup = new Group();

}

function draw(){
   background("white");
   resizeCanvas(windowWidth,windowHeight);
   createMapa(width/2, height/2);
   createMapa(695, 120);
   createMapa(715, 140);
   createMapa(735, 160);
   createMapa(755, 180);
   createMapa(775, 200);
   createMapa(795, 220);
   createMapa(815, 240);
   createMapa(835, 260);
   createMapa(855, 280);
   createMapa(875, 300);
   createMapa(855, 320);
   createMapa(835, 340);
   createMapa(815, 360);
   createMapa(795, 380);
   createMapa(775, 400);
   createMapa(755, 420);
   createMapa(735, 440);
   createMapa(715, 460);
   createMapa(695, 480);
   createMapa(675, 500);
   createMapa(655, 480);
   createMapa(635, 460);
   createMapa(615, 440);
   createMapa(595, 420);
   createMapa(575, 400);
   createMapa(555, 380);
   createMapa(535, 360);
   createMapa(515, 340);
   createMapa(495, 320);
   createMapa(475, 300);
   createMapa(495, 280);
   createMapa(515, 260);
   createMapa(535, 240);
   createMapa(555, 220);
   createMapa(575, 200);
   createMapa(595, 180);
   createMapa(615, 160);
   createMapa(635, 140);
   createMapa(655, 120);
   createMapa(675, 100);

   personaje.rotation = World.mouseX/3.65;
   vista.rotation = World.mouseX/3.65;
   /*vista.depth = mapaGroup [mapaGroup.lenght-1].depth+1;
   personaje.depth = vista.depth+1;*/

   controls();
   fondo();
   drawSprites();
}

function createMapa(x, y){
   var mapa = createSprite (x, y, 20, 20);

   mapaGroup.add(mapa);
   
}

function controls(){
   if (keyDown("W")){
      personaje.position.y -=2;
      vista.position.y -=2;
   }
   if (keyDown("A")){
      personaje.position.x -=2;
      vista.position.x -=2;
   }
   if (keyDown("S")){
      personaje.position.y +=2;
      vista.position.y +=2;
   }
   if (keyDown("D")){
      personaje.position.x +=2;
      vista.position.x +=2;
   }
}


function fondo(){
   var ys = [];
   var xs = [];
   var sumax = 0;
   var sumay = 0;
   var promedioG = [];
   var canva = windowWidth;
   var cuadrosx, cuadrosy;
   var suma2;
   
   for (var i=0; i <= 40; i++){
      if (mapaGroup[i].isTouching(vista)){
         var y1 = mapaGroup[i].position.y - personaje.position.y;
         if (y1 < 0){
            y1 = y1*-1;
         }
         sumay = sumay + y1;
         ys.push(y1);         
      }
   }
   for (var i=0; i <= 40; i++){
      if (mapaGroup[i].isTouching(vista)){
         var x1 = mapaGroup[i].position.x - personaje.position.x;
         if (x1 < 0){
            x1 = x1*-1;
         }
         sumax = sumax + x1;
         xs.push(x1);   
      }
   }
   cuadrosy = ys.length;
   cuadrosx = xs.length;
   if (sumay > sumax){
      for (var i = 0; i <= cuadrosy; i++){
         console.log("ciclo for sumay");
         var promedio = (ys[i-1]*canva)/sumay;
         if (promedioG[0] === undefined){
            partesFondo(promedio/2,promedio);
         }else{
            for(var i; i <= promedioG.lenght; i++){
               suma2 = promedioG[i-1];
            }
            partesFondo(suma2+(promedio/2),promedio);
         }
         promedioG.push(promedio);
      }
   }  else if (sumax >= sumay){
      console.log("ciclo for sumax");
      for (var i; i <= cuadrosx; i++){
         var promedio = (xs[i-1]*canva)/sumax;
         if (promedioG[0] === undefined){
            partesFondo(promedio/2,promedio);
         }else{
            for(var i; i <= promedioG.lenght; i++){
               suma2 = promedioG[i-1];
            }
            partesFondo(suma2+(promedio/2),promedio);
         }
         promedioG.push(promedio);
      }
   }  



}

function partesFondo(x,w){
   console.log("activacion de partes fondo");
   for (var i = 0; i <= 40; i++){
      if (mapaGroup[i].isTouching(vista)){
         var image;
         //Puedes usar un switch
         if (i === 1){
            image = loadImage("./fondo/fondo2.png");
         }
         if (i === 2){
            image = loadImage("./fondo/fondo3.png");
         }
         if (i === 3){
            image = loadImage("./fondo/fondo4.png");
         }
         if (i === 4){
            image = loadImage("./fondo/fondo5.png");
         }
         if (i === 5){
            image = loadImage("./fondo/fondo6.png");
         }
         if (i === 6){
            image = loadImage("./fondo/fondo7.png");
         }
         if (i === 7){
            image = loadImage("./fondo/fondo8.png");
         }
         if (i === 8){
            image = loadImage("./fondo/fondo9.png");
         }
         if (i === 9){
            image = loadImage("./fondo/fondo10.png");
         }
         if (i === 10){
            image = loadImage("./fondo/fondo11.png");
         }
         if (i === 11){
            image = loadImage("./fondo/fondo12.png");
         }
         if (i === 12){
            image = loadImage("./fondo/fondo13.png");
         }
         if (i === 13){
            image = loadImage("./fondo/fondo14.png");
         }
         if (i === 14){
            image = loadImage("./fondo/fondo15.png");
         }
         if (i === 15){
            image = loadImage("./fondo/fondo16.png");
         }
         if (i === 16){
            image = loadImage("./fondo/fondo17.png");
         }
         if (i === 17){
            image = loadImage("./fondo/fondo18.png");
         }
         if (i === 18){
            image = loadImage("./fondo/fondo19.png");
         }
         if (i === 19){
            image = loadImage("./fondo/fondo20.png");
         }
         if (i === 20){
            image = loadImage("./fondo/fondo21.png");
         }
         if (i === 21){
            image = loadImage("./fondo/fondo22.png");
         }
         if (i === 22){
            image = loadImage("./fondo/fondo23.png");
         }
         if (i === 23){
            image = loadImage("./fondo/fondo24.png");
         }
         if (i === 24){
            image = loadImage("./fondo/fondo25.png");
         }
         if (i === 25){
            image = loadImage("./fondo/fondo26.png");
         }
         if (i === 26){
            image = loadImage("./fondo/fondo27.png");
         }
         if (i === 27){
            image = loadImage("./fondo/fondo28.png");
         }
         if (i === 28){
            image = loadImage("./fondo/fondo29.png");
         }
         if (i === 29){
            image = loadImage("./fondo/fondo30.png");
         }
         if (i === 30){
            image = loadImage("./fondo/fondo31.png");
         }
         if (i === 31){
            image = loadImage("./fondo/fondo32.png");
         }
         if (i === 32){
            image = loadImage("./fondo/fondo33.png");
         }
         if (i === 33){
            image = loadImage("./fondo/fondo34.png");
         }
         if (i === 34){
            image = loadImage("./fondo/fondo35.png");
         }
         if (i === 35){
            image = loadImage("./fondo/fondo36.png");
         }
         if (i === 36){
            image = loadImage("./fondo/fondo37.png");
         }
         if (i === 37){
            image = loadImage("./fondo/fondo38.png");
         }
         if (i === 38){
            image = loadImage("./fondo/fondo39.png");
         }
         if (i === 39){
            image = loadImage("./fondo/fondo40.png");
         }
         if (i === 40){
            image = loadImage("./fondo/fondo2.png");
         }
         
         mapaGroup[i].addImage(image);
         /*
         push();
         imageMode(CENTER);
         image(image,x,windowHeight/2,w,windowHeight);
         pop();
         */
      }
      


   }
   

}


