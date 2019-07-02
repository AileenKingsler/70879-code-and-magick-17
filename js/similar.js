'use strict';

(function () {

  var player = document.querySelector('.setup-player');
  var coatColorInput = player.querySelector('[name="coat-color"]');
  var eyesColorInput = player.querySelector('[name="eyes-color"]');

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColorInput.value) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColorInput.value) {
      rank += 1;
    }

    return rank;
  };

  var successHandler = function (data) {
    wizards = data;
    window.similar();
  };

  var errorHandler = function (message) {
    var similar = document.querySelector('.setup-similar');
    var similarList = similar.querySelector('.setup-similar-list');

    var errorMessage = document.createElement('div');
    errorMessage.style = 'width: 100%; background-color: red; padding: 5px; text-align: center; color: #fff;';
    errorMessage.textContent = message;

    similarList.appendChild(errorMessage);

    similar.classList.remove('hidden');

    throw new Error(message);
  };

  window.backend.load(successHandler, errorHandler);

  window.similar = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

})();
