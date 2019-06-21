'use strict';

(function () {

  var similar = document.querySelector('.setup-similar');
  var similarList = similar.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizards = function (properties, quantity) {
    var wizards = [];

    for (var i = 0; i < quantity; i++) {
      var wizard = {
        name: window.common.getRandomValue(properties.firstnames) + ' ' + window.common.getRandomValue(properties.lastnames),
        coatColor: window.common.getRandomValue(properties.coatColors),
        eyesColor: window.common.getRandomValue(properties.eyesColors)
      };
      wizards.push(wizard);
    }

    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var createSimilarList = function (wizardsList) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsList.length; i++) {
      fragment.appendChild(renderWizard(wizardsList[i]));
    }

    similarList.appendChild(fragment);
  };

  createSimilarList(createWizards(window.common.wizardsProperties, 4));

  similar.classList.remove('hidden');

})();
