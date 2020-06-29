import Player from './entities/Player.js';
import Enemy from './entities/Enemy.js';
import Text from './entities/Text.js';
import Background from './entities/Background.js';

import createSound from '../lib/createSound.js';
import endScreen from '../lib/endScreen.js';
import randomIntRange from '../lib/randomInt.js';
import * as scoreHandler from '../lib/scoreHandler.js';

// ======== Global variables ======== //
let canvas;
let ctx;
let gameSound;
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let backgroundImage;
let enemys = [];
let gameSpeed;
let keys = {};
let myReq;

// ======== Key listeners ======== //
document.addEventListener('keydown', (event) => {
  keys[event.code] = true; 
});

document.addEventListener('keyup', (event) => {
  keys[event.code] = false;
});

// ======== Start game procress ======== //
export function startGame (color, soundValue, gameDifficult) {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  canvas.style.position = 'absolute';
  document.body.insertBefore(canvas, document.body.childNodes[0]);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "24px Notable"

  gameSpeed = gameDifficult;
  gravity = 1;
  score = 0;
  
  highscore = scoreHandler.getScore() || 0;


  player = new Player (25, canvas.height - 150, 64, 64, color);
  scoreText = new Text('Score: ' + score, 25, 25, 'left', '#212121', '24');
  highscoreText = new Text('Highscore: ' + highscore, canvas.width - 150, 25, 'right', '#212121', '24');
  backgroundImage = new Background(0, 0, canvas.width, canvas.height, '../public/background.jpg');
  gameSound = new createSound('../public/game-sound.mp3', soundValue);

  gameSound.play();

  myReq = requestAnimationFrame(updateGemeArea)
}

// ======= Game Functions ======= //
function SpawnEnemy () {
  let size = randomIntRange(32, 64);
  let type = randomIntRange(0, 1);
  let enemy = new Enemy(canvas.width + size, canvas.height - size, size, size, '#EB3434', gameSpeed);

  if (type == 1) {
    enemy.posY -= player.originalHeight - 10;
  }

  enemys.push(enemy);
}



let initialSpawnTimer = 200;
let spawTimer = initialSpawnTimer;

export function resetGame (gameDifficult) {
  enemys = [];
  score = 0;
  spawTimer = initialSpawnTimer;
  gameSpeed = gameDifficult;
  scoreHandler.saveScore(highscore)
  gameSound.play();
  myReq = requestAnimationFrame(updateGemeArea);
}

function crashWithEnemy (enemy) {
  if (player.posX < enemy.posX + enemy.width && 
    player.posX + player.width > enemy.posX && 
    player.posY < enemy.posY + enemy.height &&
    player.posY + player.height > enemy.posY
    ) {
      gameSound.stop();
      cancelAnimationFrame(myReq);
      endScreen();
  }
}

function updateGemeArea () {
  myReq = requestAnimationFrame(updateGemeArea);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  backgroundImage.speedX = -1;
  backgroundImage.animateBackground(ctx);
  spawTimer--;
  if (spawTimer <= 0) {
    SpawnEnemy();
    spawTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawTimer < 60) {
      spawTimer = 60;
    }
  }

  for (let i = 0; i < enemys.length; i++) {
    let enemy = enemys[i];

    if (enemy.posX + enemy.width < 0) {
      enemys.splice(i, 1);
    }

    crashWithEnemy(enemy);

    enemy.updateEnemy(ctx, gameSpeed);
  }

  player.animatePlayer(keys, gravity, canvas, ctx);

  score++;
  scoreText.text =  "Score: " + score;
  scoreText.drawText(ctx);

  if (score > highscore) {
    highscore = score;
    highscoreText.text = 'Highscore: ' + highscore;
  }

  highscoreText.drawText(ctx);

  gameSpeed += 0.003;
}

