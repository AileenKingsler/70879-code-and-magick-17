'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var userName = userDialog.querySelector('.setup-user-name');

  var initialCoords = {
    x: getComputedStyle(userDialog).left,
    y: getComputedStyle(userDialog).top
  };

  var onPopupEscPress = function (evt) {
    if (window.common.isEscEvent(evt) && document.activeElement !== userName) {
      window.dialogDisplay.closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (window.common.isEnterEvent(evt)) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    window.dialogDisplay.closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (window.common.isEnterEvent(evt)) {
      window.dialogDisplay.closePopup();
    }
  });

  window.dialogDisplay = {
    closePopup: function () {
      userDialog.classList.add('hidden');
      userDialog.style.top = initialCoords.y;
      userDialog.style.left = initialCoords.x;
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

})();
