class Avenger {

  constructor () {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.yVelocity = 0;
    this.gravity = 2;
  }

  selectAvenger() {
    if (selectSkin.value() === "america") {
      this.character = captamerica;
    }
    if (selectSkin.value() === "ironman") {
      this.character = ironman;
    }
    if (selectSkin.value() === "thor") {
      this.character = thor;
    }
    if (selectSkin.value() === "hulk") {
      this.character = hulk;
    }
    if (selectSkin.value() === "widow") {
      this.character = widow;
    }
    // console.log(this.character);
  }

   draw() {
     image(this.character, this.x, this.y, this.size, this.size);
   }
 }