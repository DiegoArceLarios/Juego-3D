class Maze {
    constructor(size) {
      this.blocks = new Array(size);
  
      for (let i = 0; i < size; i++) {
        this.blocks[i] = new Array(size);
        for (let j = 0; j < size; j++) {
          let x = i * 5;
          let y = 0;
          let z = j * 5;
          this.blocks[i][j] = new Block(x, y, z, 5, 5, 5);
          this.blocks[i][j].fillColor = color(0, 0, 51);
        }
      }
  
      this.start = this.blocks[1][1];
      this.blocks[1][1].fillColor = color(234, 222, 116);
      var m = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      for (let i = 1; i < size - 1; i++)
        for (let j = 1; j < size - 1; j++)
          if (m[i][j]) this.blocks[i][j].moveDown(),this.blocks[i][j].fillColor = color(127);
          else this.blocks[i][j].fillColor = color(234, 222, 116);
      this.blocks[3][3].fillColor = color(234, 222, 116);
    }
  
  
    update() {
      for (let i = 0; i < this.blocks.length; i++) {
        for (let j = 0; j < this.blocks[i].length; j++) {
          this.blocks[i][j].update();
        }
      }
    }
  
    display() {
      for (let i = 0; i < this.blocks.length; i++) {
        for (let j = 0; j < this.blocks[i].length; j++) {
          this.blocks[i][j].display();
        }
      }
    }
  
    setPlayerAtStart(player) {
      player.position = p5.Vector.add(this.start.position, createVector(0, -15, 0));
    }
  }