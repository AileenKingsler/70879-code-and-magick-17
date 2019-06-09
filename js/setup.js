'use strict';

var userDialog = document.querySelector('.setup');
var similarList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardsProperties = {
  firstnames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomProperties = function (properties) {
  return properties[Math.round(Math.random() * (properties.length - 1))];
};

var createWizards = function (properties, quantity) {
  var wizards = [];

  for (var i = 0; i < quantity; i++) {
    var wizard = {
      name: getRandomProperties(properties.firstnames) + ' ' + getRandomProperties(properties.lastnames),
      coatColor: getRandomProperties(properties.coatColors),
      eyesColor: getRandomProperties(properties.eyesColors)
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

userDialog.classList.remove('hidden');

createSimilarList(createWizards(wizardsProperties, 4));

userDialog.querySelector('.setup-similar').classList.remove('hidden');
