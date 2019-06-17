'use strict';

var userDialog = document.querySelector('.setup');

var wizardsProperties = {
  firstnames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
  fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};


// Создание похожих персонажей

var similarList = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

createSimilarList(createWizards(wizardsProperties, 4));

userDialog.querySelector('.setup-similar').classList.remove('hidden');


// Открытие/закрытие окна настройки персонажа

var ESC_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userName = userDialog.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE && document.activeElement !== userName) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    closePopup();
  }
});


// Изменение персонажа

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var coatColorInput = userDialog.querySelector('[name="coat-color"]');

var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var eyesColorInput = userDialog.querySelector('[name="eyes-color"]');

var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var fireballColorInput = userDialog.querySelector('[name="fireball-color"]');

var getNextValue = function (currentValue, properties) {
  var index;
  for (var i = 0; i < properties.length; i++) {
    if (currentValue === properties[i]) {
      index = i;
      break;
    }
  }
  if (index === properties.length - 1) {
    return properties[index + 1 - properties.length];
  }
  return properties[index + 1];
};

wizardCoat.addEventListener('click', function () {
  coatColorInput.value = wizardCoat.style.fill = getNextValue(coatColorInput.value, wizardsProperties.coatColors);
});

wizardEyes.addEventListener('click', function () {
  eyesColorInput.value = wizardEyes.style.fill = getNextValue(eyesColorInput.value, wizardsProperties.eyesColors);
});

wizardFireball.addEventListener('click', function () {
  fireballColorInput.value = wizardFireball.style.background = getNextValue(fireballColorInput.value, wizardsProperties.fireballColors);
});
