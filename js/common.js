'use strict';

(function () {

  var ESC_KEY_CODE = 27;
  var ENTER_KEY_CODE = 13;

  window.common = {
    wizardsProperties: {
      firstnames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      lastnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
      coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
      eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
      fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    },
    getRandomValue: function (properties) {
      return properties[Math.round(Math.random() * (properties.length - 1))];
    },
    getNextValue: function (currentValue, properties) {
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
    },
    isEscEvent: function (evt) {
      return evt.keyCode === ESC_KEY_CODE;
    },
    isEnterEvent: function (evt) {
      return evt.keyCode === ENTER_KEY_CODE;
    }
  };

})();
