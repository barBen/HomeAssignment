const express = require('express')
const fs = require('fs');
const app = express()
require('express-ws')(app)

const PORT = 3000;

let points: any[];
let rectangles: any[];
 
enum ShapeType {
  POINT = 'Point',
  RECTANGLE = 'Rectangle'
}

app.use('/', express.static('static'));

app.ws('/render', (ws: any) => {
  ws.on('message', () => {
    points.map((point) => {
      setTimeout(() => ws.send(JSON.stringify({
        type: ShapeType.POINT,
        shape: point,
      })), point.ts);
    });
    rectangles.map((rectangle) => {
      setTimeout(() => ws.send(JSON.stringify({
        type: ShapeType.RECTANGLE,
        shape: rectangle,
      })), rectangle.ts);
    })
  })
})


app.listen(PORT, () => {
  points = JSON.parse(fs.readFileSync('Point.json'));
  rectangles = JSON.parse(fs.readFileSync('Rect.json'));
  console.log(`app listening on port ${PORT}`)
})