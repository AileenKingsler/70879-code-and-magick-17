'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var SHADOW_SHIFT = 10;
  var CLOUD_PADDING = 20;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var HISTOGRAM_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_GAP = 50;
  var FONT_GAP = 20;
  var contentX = CLOUD_X + CLOUD_PADDING;
  var contentY = CLOUD_Y + CLOUD_PADDING;
  var histogramY = contentY + FONT_GAP * 2 + 5;
  var nameY = histogramY + FONT_GAP + HISTOGRAM_HEIGHT + 5;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomSaturate = function () {
    return 'saturate(' + Math.random() * 100 + '%)';
  };

  var drawHistogram = function (ctx, name, x, y, width, height) {
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.filter = 'none';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, 1)';
      ctx.filter = getRandomSaturate();
    }

    ctx.fillRect(x, y, width, height);
  };

  var drawText = function (ctx, name, time, left, nameTop, timeTop) {
    ctx.fillStyle = '#000';
    ctx.fillText(name, left, nameTop);
    ctx.fillText(Math.round(time), left, timeTop);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', contentX, contentY);
    ctx.fillText('Список результатов:', contentX, contentY + FONT_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var columnHeight = (HISTOGRAM_HEIGHT * times[i]) / maxTime;
      var timeY = histogramY + HISTOGRAM_HEIGHT - columnHeight;
      var columnX = contentX + (COLUMN_WIDTH + COLUMN_GAP) * i;
      var columnY = timeY + FONT_GAP;

      drawHistogram(ctx, players[i], columnX, columnY, COLUMN_WIDTH, columnHeight);
      drawText(ctx, players[i], times[i], columnX, nameY, timeY);
    }
  };

})();
