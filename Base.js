class Base {
    constructor(size){
        this.blocks = new Array(size);
        for (let i = 0; i < size; i++) {
            this.blocks[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                let x = i * 5;
                let y = 0;
                let z = j * 5;
                this.blocks[i][j] = new Block(x, y, z, 5, 5, 5);
                this.blocks[i][j].fillColor = color(250, 222, 65);
            }
        }
        this.start = this.blocks[5][5];
    }

    update() {
        push();
            
            for (let i = 0; i < this.blocks.length; i++) {
                for (let j = 0; j < this.blocks[i].length; j++) {
                    this.blocks[i][j].update();
                }
            }
        pop();
      }
    
      display() {
        push();
            
            for (let i = 0; i < this.blocks.length; i++) {
                for (let j = 0; j < this.blocks[i].length; j++) {
                    this.blocks[i][j].display();
                }
            }
        pop();
      }

    setPlayerAtStart(player) {
        player.position = p5.Vector.add(this.start.position, createVector(0, -15, 0));
    }


}