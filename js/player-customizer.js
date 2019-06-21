'use strict';

(function () {

  var player = document.querySelector('.setup-player');

  var wizardCoat = player.querySelector('.setup-wizard .wizard-coat');
  var coatColorInput = player.querySelector('[name="coat-color"]');

  var wizardEyes = player.querySelector('.setup-wizard .wizard-eyes');
  var eyesColorInput = player.querySelector('[name="eyes-color"]');

  var wizardFireball = player.querySelector('.setup-fireball-wrap');
  var fireballColorInput = player.querySelector('[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    coatColorInput.value = wizardCoat.style.fill = window.common.getNextValue(coatColorInput.value, window.common.wizardsProperties.coatColors);
  });

  wizardEyes.addEventListener('click', function () {
    eyesColorInput.value = wizardEyes.style.fill = window.common.getNextValue(eyesColorInput.value, window.common.wizardsProperties.eyesColors);
  });

  wizardFireball.addEventListener('click', function () {
    fireballColorInput.value = wizardFireball.style.background = window.common.getNextValue(fireballColorInput.value, window.common.wizardsProperties.fireballColors);
  });

})();
