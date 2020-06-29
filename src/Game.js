
// ======== Global variables ======== //
let canvas;
let ctx;

// ======== Game start procress ======== //
export function startGame () {
  
  // Creating canvas
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.insertBefore(canvas, document.body.childNodes[0]);
} 