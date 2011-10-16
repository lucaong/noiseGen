(function($) {
  return $.fn.noiseGen = function(options) {
    var defaultOptions = {
      width: 32,
      height: 32,
      opacity: 0.2,
      fallbackImage: false
    },
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    x = 0,
    y = 0,
    options = $.extend(defaultOptions, options);
    if (!ctx) {
      if (!!options.fallbackImage) {
        return this.css("background-image", "url(" + options.fallbackImage + ")");
      } else {
        return this;
      }
    } else {
      canvas.width = options.width;
      canvas.height = options.height;
      while (x < canvas.width) {
        y = 0;
        while (y < canvas.height) {
          number = Math.floor(Math.random() * 60);
          ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + options.opacity + ")";
          ctx.fillRect(x, y, 1, 1);
          y++;
        }
        x++;
      }
      return this.css("background-image", "url(" + canvas.toDataURL("image/png") + ")");
    }
  };
})(jQuery);