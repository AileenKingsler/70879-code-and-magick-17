'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similar = document.querySelector('.setup-similar');
  var similarList = similar.querySelector('.setup-similar-list');

  var createWizards = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    similarList.innerHTML = '';

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(createWizards(wizardsList[i]));
    }

    similarList.appendChild(fragment);

    similar.classList.remove('hidden');
  };

})();
