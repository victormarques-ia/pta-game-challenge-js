import * as gameFunctions from './src/Game.js';
import *  as gameSettings from './lib/gameSettings.js';
import createLoader from './lib/createLoader.js';


// ====== Controll menu game ======= //
document.addEventListener('click', (event) => {
  if (event.target.className == 'start-button') {

    const homePage = document.querySelector('#home-screen');
    homePage.style.display = 'none';

    let loader = createLoader();

    setTimeout(() => {

      document.body.removeChild(loader);

      let { value: color } = gameSettings.getColorPicker();

      let { value: soundValue } = gameSettings.getSlider();

      let { value: gameDifficult } = gameSettings.getGameDifficult();

      if (color.toUpperCase() == '#EB3434') {
        color = '#FFD700';
      }

      gameFunctions.startGame(color, soundValue, (gameDifficult * 0.1));
    }, 1000);

  } else if (event.target.className == 'settings-button') {

    
    let soundSlider = gameSettings.getSlider();
    let soundView = document.querySelector('#modal-settings-screen .settings-options .sound-slider-value');
    soundView.innerHTML = `${soundSlider.value}%`;
    soundSlider.oninput = function() {
      soundView.innerHTML = `${soundSlider.value}%`;
    }

    let difficultSlider = gameSettings.getGameDifficult();
    let difficultView = document.querySelector('#modal-settings-screen .settings-options .difficult-slider-value');
    difficultView.innerHTML = `${difficultSlider.value}%`;
    
    difficultSlider.oninput = function() {
      difficultView.innerHTML = `${difficultSlider.value}%`;
    }
    
    const settingsModal = document.querySelector('#modal-settings-screen');

    const closeButtonModal = document.querySelector('#modal-settings-screen .close-button-modal');

    settingsModal.style.display = 'block';

    closeButtonModal.onclick = () => {
      settingsModal.style.display = 'none';
    }

    window.onclick = (event) => {
      if (event.target === settingsModal) {
        settingsModal.style.display = 'none';
      }
    }

  }
});


