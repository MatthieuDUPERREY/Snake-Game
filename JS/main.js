class SnakeGame {
  constructor() {
    this.redSquare = null;
    this.snake = [];

  }

  startSnakeGame(){
    this.snake = new Snake ();
    this.attachEventListeners();
  }

  attachEventListeners() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          // Left pressed
          console.log("left")
          this.snake.moveLeft()
          break;
        case "ArrowRight":
          // Right pressed
          console.log("right")
          this.snake.moveRight()
          break;
        case "ArrowUp":
          // Up pressed
          console.log("up")
          this.snake.moveUp()
          break;
        case "ArrowDown":
          // Down pressed
          console.log("down")
          this.snake.moveDown()
          break;
      }
    });
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
}

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


class RedSquare extends Square {
  constructor() {
    const width = 10;
    const height = 10;
    const positionX = Math.floor(Math.random() * (100 - width + 1)); // generate random number between 0 and (100-width)
    const positionY = 90;

    super("red-square", width, height, positionX, positionY);
  }

}


const snake = new SnakeGame ();
snake.startSnakeGame();
