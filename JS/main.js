class SnakeGame {
  constructor() {
    this.insect = null;
    this.snake = null;
    this.score = 0;
    this.intervalId = 0;
    this.refreshRate = 200;

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
          clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {
            this.snake.moveLeft()
            this.collisionDetection();
            this.collisionDetectionBorder();
          }, this.refreshRate);
          break;
        case "ArrowRight":

          clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {
            this.snake.moveRight()
            this.collisionDetection();
            this.collisionDetectionBorder();
          }, this.refreshRate);
          break;
        case "ArrowUp":

          clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {
            this.snake.moveUp()
            this.collisionDetection();
            this.collisionDetectionBorder();
          }, this.refreshRate);
          break;
        case "ArrowDown":

          clearInterval(this.intervalId)
          this.intervalId = setInterval(() => {
            this.snake.moveDown()
            this.collisionDetection();
            this.collisionDetectionBorder();
          }, this.refreshRate);
          break;
        }

    })
  }

  collisionDetection(){

    if (this.snake.positionX < this.insect.positionX + this.insect.width &&
      this.snake.positionX + this.snake.width > this.insect.positionX &&
      this.snake.positionY < this.insect.positionY + this.insect.height &&
      this.snake.height + this.snake.positionY > this.insect.positionY) {
      this.score +=20;


      let scoreElm = document.querySelector('#score span')
      scoreElm.innerText = this.score;
      this.insect.domElement.remove();
      this.insect = new Insect ();
      this.refreshRate -= 20;

      }
      return this.score
  };

  collisionDetectionBorder(){
    if (this.snake.positionX < 0 || this.snake.positionX > 95.5 || this.snake.positionY < 0 || this.snake.positionY > 95.5) {
      location.href = './gameover.html'
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
    const newElm = document.createElement('div');

    newElm.className = this.className;
    newElm.style.left = this.positionX + "vw";
    newElm.style.bottom = this.positionY + "vh";
    newElm.style.up = this.positionUp + "vh";
    newElm.style.width = this.width + "vw";
    newElm.style.height = this.height + "vh";

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
