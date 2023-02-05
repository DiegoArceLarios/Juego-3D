class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
      this.playButton = createButton("Iniciar");
      this.titleImg = createImg("imagenes/Titulo.png", "game title");
      this.titleImg.size(700,120);
      this.greeting = createElement("h2");
      this.nombreJugador = createElement("h2");
      this.nombreAleatorio;
      this.position;
      this.nombreCPU = createElement("h2");
    }
  
    setElementsPosition() {
      this.titleImg.position(335, 30);
      this.input.position(width / 2 - 110, height / 2 );
      this.playButton.position(width / 2-105, height / 2 + 180);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
      
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("input");
      this.playButton.class("button");
      this.greeting.class("greeting");
      
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        this.titleImg.hide();
        player.name = this.input.value();
        
        gameState += 1;
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }

    jugar(){
      switch(this.nombre){
        case 1:this.nombreAleatorio = "El charro negro",this.position = 200//negro
        break;
        case 2:this.nombreAleatorio = "El encapuchado",this.position = 200//verde
        break;
        case 3:this.nombreAleatorio = "El señor de la noche",this.position = 240//gris
        break;
        case 4:this.nombreAleatorio = "El desconocido",this.position = 190//cafe
        break;
        case 5:this.nombreAleatorio = "Vaquero común",this.position = 200//carnita
        break;
        default:this.nombreAleatorio = "Oponente",this.position = 140
        break; 
      }
      this.nombreJugador.html(player.name);
      this.nombreCPU.html(this.nombreAleatorio);
      this.nombreJugador.position(23,0);
      this.nombreCPU.position(width-this.position,0);
    }
  }

  