export default class Actor {
  constructor({
    position = { x: 0, y: 0 },
    size = { width: 0, height: 0 },
    context,
    texture,
    textureScale = 1,
  }) {
    this.x = position.x;
    this.y = position.y;
    this.width = size.width;
    this.height = size.height;
    this.c = context;
    this.texture = new Image();
    this.texture.src = texture;
    this.textureScale = textureScale;
    this.hitbox = new Hitbox(
      { x: this.x, y: this.y },
      { width: this.width, height: this.height },
      this.c
    );
    // this.hitbox.c = this.c;
  }

  draw() {
    this.c.fillStyle = "red";
    this.c.fillRect(this.x, this.y, this.width, this.height);
    this.c.drawImage(this.texture, this.x, this.y, this.width, this.height);
    this.hitbox.draw();
  }
}

class Hitbox {
  constructor({
    position = { x: 0, y: 0 },
    size = { width: 0, height: 0 },
    context,
  }) {
    this.x = position.x;
    this.y = position.y;
    this.width = size.width;
    this.height = size.height;
    this.c = context;
  }
  draw() {
    // console.log(this.c);
    this.c.fillStyle = "green";
    this.c.fillRect(this.x - 5, this.y - 5, this.width, this.height);
  }
}
