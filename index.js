function randomNumber(min, max) {
  return Math.round(Math.random() * (max-min) + min)
}

class Square {
  posX = randomNumber(0, process.stdout.columns)
  posY = randomNumber(0, process.stdout.rows)

  directionX = 1
  directionY = 1

  constructor(width, height) {
    this.width = width
    this.height = height
  }

  rerender() {
    console.clear()

    const canvasWidth = process.stdout.columns;
    const canvasHeight = process.stdout.rows;

    for(let y = 0; y < canvasHeight; y++) {

      for(let x = 0; x < canvasWidth; x++) {
        if(
          x >= this.posX && this.posX+this.width >= x
          &&
          y >= this.posY && this.posY+this.height > y
        ) {
          process.stdout.write('#')
        }
        else {
          process.stdout.write(' ')
        }
      }
    }

    if(this.posX + this.width >= canvasWidth) {
      this.directionX = -1
    }

    if(this.posX <= 0) {
      this.directionX = 1
    }

    if(this.posY + this.height >= canvasHeight) {
      this.directionY = -1
    }

    if(this.posY <= 0) {
      this.directionY = 1
    }

    this.posX += 1 * this.directionX
    this.posY += 1 * this.directionY
  }
}

const square = new Square(5, 5)

setInterval(() => square.rerender(), 1000/30)
