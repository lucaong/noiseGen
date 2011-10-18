/*!
 * noiseGen Plugin for jQuery
 *
 * Version 0.1.1
 *
 * Copyright 2011, Luca Ongaro
 * Licensed under the MIT license.
 *
 */

(function($) {
  "use strict";
  $.fn.noiseGen = function(options) {
    var defaultOptions = {
      width: 32,
      height: 32,
      opacity: 0.2,
      fallbackImage: false,
      grainDimension: 1,
      fromColor: "000000",
      toColor: "606060",
      independentChannels: false,
      s: 1,
      n: 1
    },
    canvas = document.createElement("canvas");
    options = $.extend(defaultOptions, options);
    
    // Detect canvas support
    if (!canvas.getContext || !canvas.getContext("2d")) {
      // Canvas not supported :(
      if (!!options.fallbackImage) {
        // Fallback image provided, set it as background
        return this.css("background-image", "url(" + options.fallbackImage + ")");
      } else {
        // Fallback background image not provided, just return maintaining chainability
        return this;
      }
    } else {
      // Canvas supported :)
      var ctx = canvas.getContext("2d"),
      x = 0,
      y = 0,
      // Utility functions
      utils = {
        // Generate random numbers from a parametric distribution
        parametricRandom: function(n, s) {
          var i, r = 0;
          for (i = 0; i < n; i++) {
            r += Math.random();
          }
          return Math.pow(r/i, s);
        },
        // Translate hexadecimal values into three separate RGB channels
        hexToRGB: function(hex) {
          hex = parseInt(hex, 16);
          return {
            red: ((hex & 0xff0000) >> 16),
            green: ((hex & 0x00ff00) >> 8),
            blue: ((hex & 0x0000ff))
          };
        },
        // Map a value ranging from 0 to 1 into another range
        mapToRange: function(n, from, to) {
          return Math.floor(n * (to - from)) + from;
        }
      };
      canvas.width = options.width;
      canvas.height = options.height;
      // If grainDimension is a number, then use that as the value for grainDimension.width and grainDimension.height
      if (typeof options.grainDimension === 'number') {
        options.grainDimension = { width: options.grainDimension, height: options.grainDimension };
      }
      // Paint canvas
      while (x < canvas.width) {
        while (y < canvas.height) {
          var fromRGB = utils.hexToRGB(options.fromColor),
          toRGB = utils.hexToRGB(options.toColor),
          r, g, b;
          if (!options.independentChannels) {
            // RGB channels are not independent
            var rand = utils.parametricRandom(options.n, options.s);
            r = utils.mapToRange(rand, fromRGB.red, toRGB.red);
            g = utils.mapToRange(rand, fromRGB.green, toRGB.green);
            b = utils.mapToRange(rand, fromRGB.blue, toRGB.blue);
          } else {
            // RGB channels are independent
            r = utils.mapToRange(utils.parametricRandom(options.n, options.s), fromRGB.red, toRGB.red);
            g = utils.mapToRange(utils.parametricRandom(options.n, options.s), fromRGB.green, toRGB.green);
            b = utils.mapToRange(utils.parametricRandom(options.n, options.s), fromRGB.blue, toRGB.blue);
          }
          ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + options.opacity + ")";
          ctx.fillRect(x, y, options.grainDimension.width, options.grainDimension.height);
          y += options.grainDimension.height;
        }
        y = 0;
        x += options.grainDimension.width;
      }
      return this.css("background-image", "url(" + canvas.toDataURL("image/png") + ")");
    }
  };
})(jQuery);