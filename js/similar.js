'use strict';

(function () {

  var similar = document.querySelector('.setup-similar');
  var similarList = similar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var createSimilarList = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }

    similarList.appendChild(fragment);

    similar.classList.remove('hidden');
  };

  var errorHandler = function (message) {
    var errorMessage = document.createElement('div');
    errorMessage.style = 'width: 100%; background-color: red; padding: 5px; text-align: center; color: #fff;';
    errorMessage.textContent = message;

    similarList.appendChild(errorMessage);

    similar.classList.remove('hidden');

    throw new Error(message);
  };

  window.backend.load(createSimilarList, errorHandler);

})();
