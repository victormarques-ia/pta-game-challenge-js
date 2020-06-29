import * as gameFunctions from '../src/Game.js';
import * as gameSettings from './gameSettings.js';

function endScreen (gameDifficult) {

  const endModal = document.querySelector('#modal-end-screen');
  endModal.style.display = 'block';

  document.addEventListener('click', (event) => {

    if (event.target.className == 'go-home-button') {
      location.reload();
    } else if (event.target.className == 'restart-button') {
      
      endModal.style.display = 'none';
      let { value: gameDifficult } = gameSettings.getGameDifficult();
      gameFunctions.resetGame((gameDifficult * 0.1));
    }

  });
}

export default endScreen;