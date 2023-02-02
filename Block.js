class Block {
    constructor(x, y, z, w, h, d) {
      this.position = createVector(x, y, z);
      this.dimensions = createVector(w, h, d);
      this.fillColor = color(random(150, 200));
      this.visited = false;
    }
  
    update() {
      let playerLeft = player.position.x - player.dimensions.x / 2;
      let playerRight = player.position.x + player.dimensions.x / 2;
      let playerTop = player.position.y - player.dimensions.y / 2;
      let playerBottom = player.position.y + player.dimensions.y / 2;
      let playerFront = player.position.z - player.dimensions.z / 2;
      let playerBack = player.position.z + player.dimensions.z / 2;
  
      let boxLeft = this.position.x - this.dimensions.x / 2;
      let boxRight = this.position.x + this.dimensions.x / 2;
      let boxTop = this.position.y - this.dimensions.y / 2;
      let boxBottom = this.position.y + this.dimensions.y / 2;
      let boxFront = this.position.z - this.dimensions.z / 2;
      let boxBack = this.position.z + this.dimensions.z / 2;
  
      let boxLeftOverlap = playerRight - boxLeft;
      let boxRightOverlap = boxRight - playerLeft;
      let boxTopOverlap = playerBottom - boxTop;
      let boxBottomOverlap = boxBottom - playerTop;
      let boxFrontOverlap = playerBack - boxFront;
      let boxBackOverlap = boxBack - playerFront;
  
      if (((playerLeft > boxLeft && playerLeft < boxRight || (playerRight > boxLeft && playerRight < boxRight)) && ((playerTop > boxTop && playerTop < boxBottom) || (playerBottom > boxTop && playerBottom < boxBottom)) && ((playerFront > boxFront && playerFront < boxBack) || (playerBack > boxFront && playerBack < boxBack)))) {
        let xOverlap = max(min(boxLeftOverlap, boxRightOverlap), 0);
        let yOverlap = max(min(boxTopOverlap, boxBottomOverlap), 0);
        let zOverlap = max(min(boxFrontOverlap, boxBackOverlap), 0);
  
        if (xOverlap < yOverlap && xOverlap < zOverlap) {
          if (boxLeftOverlap < boxRightOverlap) {
            player.position.x = boxLeft - player.dimensions.x / 2;
          } else {
            player.position.x = boxRight + player.dimensions.x / 2;
          }
        } else if (yOverlap < xOverlap && yOverlap < zOverlap) {
          if (boxTopOverlap < boxBottomOverlap) {
            player.position.y = boxTop - player.dimensions.y / 2;
            player.velocity.y = 0;
            player.grounded = true;
          } else {
            player.position.y = boxBottom + player.dimensions.y / 2;
          }
        } else if (zOverlap < xOverlap && zOverlap < yOverlap) {
          if (boxFrontOverlap < boxBackOverlap) {
            player.position.z = boxFront - player.dimensions.x / 2;
          } else {
            player.position.z = boxBack + player.dimensions.x / 2;
          }
        }
      }
    }
  
    display(textura) {
      push();
      noStroke();
      translate(this.position.x, this.position.y, this.position.z);
      fill(this.fillColor);
      if (textura !== undefined){
        texture(textura);
      }
      box(this.dimensions.x, this.dimensions.y, this.dimensions.z);
      pop();
    }
  
    moveDown() {
      this.position.y += 5;
    }
  }