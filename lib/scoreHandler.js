

export function saveScore (highscore) {
  window.localStorage.setItem('highscore', highscore);
}

export function getScore () {
  if (localStorage.getItem('highscore')) {
    let highscore = localStorage.getItem('highscore');

    return highscore;
  }
}
