class SnakeGame {
  constructor() {
    this.insect = null;
    this.snake = null;
    this.score = 0;
    /* this.intervalId = 0;
    this.refreshRate = 200; */

  }

  startSnakeGame(){
    this.snake = new Snake();
    this.insect = new Insect();
    this.square = new Square();
    this.attachEventListeners();
  }

  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          // Left pressed
          console.log("left")
          this.snake.moveLeft()
          /* clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {

          }, this.refreshRate); */
          break;
        case "ArrowRight":
          // Right pressed
          console.log("right")

          this.snake.moveRight()
          /* clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {

          }, this.refreshRate); */
          break;
        case "ArrowUp":
          // Up pressed
          console.log("up")

          this.snake.moveUp()
         /*  clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {

          }, this.refreshRate); */
          break;
        case "ArrowDown":
          // Down pressed
          console.log("down")

          this.snake.moveDown()
          /* clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {

          }, this.refreshRate); */
          break;
        }
      this.collisionDetection();
      this.collisionDetectionBorder();
    })
  }

  collisionDetection(){

    if (this.snake.positionX < this.insect.positionX + this.insect.width &&
      this.snake.positionX + this.snake.width > this.insect.positionX &&
      this.snake.positionY < this.insect.positionY + this.insect.height &&
      this.snake.height + this.snake.positionY > this.insect.positionY) {
      this.score +=20;


      let scoreElm = document.querySelector('#score span')
      console.log(scoreElm)
      scoreElm.innerText = this.score;
      this.insect.domElement.remove();
      this.insect = new Insect ();
      /* this.refreshRate -= 50; */

      }
      return this.score
  };

  collisionDetectionBorder(){
    if (this.snake.positionX < 0 || this.snake.positionX > 95.5 || this.snake.positionY < 0 || this.snake.positionY > 95.5) {
      location.replace(`${location.origin}/Snake-Game/gameover.html`)
    }
  }
}

class Square {
  constructor(className, width, height, positionX, positionY, positionUp) {

    this.className = className;

    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;
    this.positionUp = positionUp;

    this.domElement = this.createDomElement();
  }

  createDomElement() {
    // create dom element
    const newElm = document.createElement('div');

    // set id and css
    newElm.className = this.className;
    newElm.style.left = this.positionX + "vw";
    newElm.style.bottom = this.positionY + "vh";
    newElm.style.up = this.positionUp + "vh";
    newElm.style.width = this.width + "vw";
    newElm.style.height = this.height + "vh";

    // append to the dom
    const boardElm = document.getElementById("board"); //
    boardElm.appendChild(newElm);

    return newElm;
  }
};

class Snake extends Square {
  constructor() {
    const width = 5;
    const height = 5;
    const positionX = 50 - width / 2;
    const positionY = 50 - width / 2;

    super("snake", width, height, positionX, positionY);
  }


  moveLeft() {
    this.positionX-=4;
    this.domElement.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX+=4;
    this.domElement.style.left = this.positionX + "vw";
  }
  moveUp() {
    this.positionY+=4;
    this.domElement.style.bottom = this.positionY + "vh";

  }

  moveDown() {
    this.positionY-=4;
    this.domElement.style.bottom = this.positionY + "vh";

  }

}




class Insect extends Square {
  constructor() {
    const width = 5;
    const height = 5;
    const positionX = Math.floor(Math.random() * (100 - width + 1));
    const positionY = Math.floor(Math.random() * (85 - width + 1));

    super("insect", width, height, positionX, positionY);
  }

}




const snake = new SnakeGame ();
snake.startSnakeGame();
