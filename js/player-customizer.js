'use strict';

(function () {

  var player = document.querySelector('.setup-player');

  var wizardCoat = player.querySelector('.setup-wizard .wizard-coat');
  var coatColorInput = player.querySelector('[name="coat-color"]');

  var wizardEyes = player.querySelector('.setup-wizard .wizard-eyes');
  var eyesColorInput = player.querySelector('[name="eyes-color"]');

  var wizardFireball = player.querySelector('.setup-fireball-wrap');
  var fireballColorInput = player.querySelector('[name="fireball-color"]');

  var form = document.querySelector('.setup-wizard-form');

  wizardCoat.addEventListener('click', function () {
    coatColorInput.value = wizardCoat.style.fill = window.common.getNextValue(coatColorInput.value, window.common.wizardsProperties.coatColors);
    window.debounce(window.similar);
  });

  wizardEyes.addEventListener('click', function () {
    eyesColorInput.value = wizardEyes.style.fill = window.common.getNextValue(eyesColorInput.value, window.common.wizardsProperties.eyesColors);
    window.debounce(window.similar);
  });

  wizardFireball.addEventListener('click', function () {
    fireballColorInput.value = wizardFireball.style.background = window.common.getNextValue(fireballColorInput.value, window.common.wizardsProperties.fireballColors);
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.dialogDisplay.closePopup, window.backend.error);
  });

})();
