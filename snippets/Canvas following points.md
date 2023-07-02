I have been recently thinking for starting to work on Computer Graphics programming again. I used to do it in my 5th semester of college where there was a lab and subject for this specific thing. I started with my favorite topic "Vectors". Here's something I have made.

Where one on the canvas is following the mouse point. I know the code looks messy. You can try to run it in the browser.

File: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Follow point</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body></body>
  <script src="./index.js"></script>
</html>

```

File: `index.js`
```javascript
class Point {
  xVel = 0;
  yVel = 0;
  xAcc = 0;
  yAcc = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    this.addVelocity();
    this.addAcceleration();
    context.beginPath();
    context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    context.fill();
  }

  setVelocity(xVel, yVel) {
    this.xVel = xVel;
    this.yVel = yVel;
  }

  addVelocity() {
    this.x += this.xVel;
    this.y += this.yVel;
  }

  setAcceleration(xAcc, yAcc) {
    this.xAcc = xAcc;
    this.yAcc = yAcc;
  }

  addAcceleration() {
    this.xVel += this.xAcc;
    this.yVel += this.yAcc;
    // console.log("I was called", this.xVel, this.yVel);
  }

  toString() {
    return `Pos(x: ${this.x}, y: ${this.y}), Vel(x: ${this.xVel}, y: ${
      this.yVel
    }), Len: ${this.vecLen()}`;
  }

  vecLen() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const width = window.innerWidth;

const height = window.innerHeight;
const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

var mousex = 0;
var mousey = 0;

document.addEventListener("mousemove", (e) => {
  mousex = e.clientX;
  mousey = e.clientY;
});

canvas.width = width;
canvas.height = height;
// canvas.style.backgroundColor = "gray";

const context = canvas.getContext("2d");

let x = 0;
let y = 0;

// instance point of class point
const point = new Point(500, 300, context);
const mousePoint = new Point(mousex, mousey);

function render() {
  context.clearRect(0, 0, width, height);

  context.fillText(point, 100, 100);
  context.fillText(mousePoint, 100, 120);

  // lines for both
  context.moveTo(0, 0);
  context.lineTo(mousex, mousey);
  context.stroke();
  context.moveTo(0, 0);
  context.lineTo(point.x, point.y);
  context.stroke();

  // what I want
  context.moveTo(point.x, point.y);
  context.lineTo(mousePoint.x, mousePoint.y);
  context.stroke();

  // static line x axis
  context.moveTo(point.x - 100, point.y);
  context.lineTo(point.x + 100, point.y);
  context.stroke();

  // static line y axis
  context.moveTo(point.x, point.y - 100);
  context.lineTo(point.x, point.y + 100);
  context.stroke();

  let angle = Math.atan2(mousePoint.y - point.y, mousePoint.x - point.x);

  context.fillText(`DEG: ${(angle * 180) / Math.PI}, RAD: ${angle}`, 100, 140);

  let distance = Math.sqrt(
    Math.pow(point.x - mousePoint.x, 2) + Math.pow(point.y - mousePoint.y, 2)
  );

  let newx = point.x + (Math.cos(angle) * distance) / 100;
  let newy = point.y + (Math.sign(angle) * distance) / 100;

  point.x = newx;
  point.y = newy;

  mousePoint.x = mousex;
  mousePoint.y = mousey;
  point.draw();
  mousePoint.draw();

  // y++;

  requestAnimationFrame(render);
}

requestAnimationFrame(render);

```

Maybe in near future, I will be able to showcase the output of javascript snippets right into this portfolio. I just hope so.

#canvas #html #javascript #computer-graphics

---
Thanks for reading!