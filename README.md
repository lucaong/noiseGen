NoiseGen
========

A simple jQuery plugin to generate background noise dynamically (with support for a fallback background image for browsers that don't support the canvas API). It works creating a canvas element through JavaScript and using it as the background-image CSS property.

You can see a [demo here](http://www.lucaongaro.eu/demos/noisegen/).


Install
=======

As with most jQuery plugin, you just need to:

* Make sure to import the jQuery library in your project.
* Place the file `noisegen.0.1.4.js` somewhere within your project and import it in your HTML code.


Usage
=====

Just call `$(...).noiseGen()` to add a noisy background to selected elements. You can also pass an object set some configuration options such as a fallback image for not supported browsers or the color range of the noise (read more on this later). An example is worth a thousand words:

```javascript

// Dynamically generate background noise for the body element.
// If canvas is not supported, use "bkgnd.png" as the background-image instead
$(document).ready({
  $("body").noiseGen({ fallbackImage: "bkgnd.png" });
});

```


Options
-------

Options currently supported and their default values are:

* **fallbackImage** (default: `false`): either false or a string containing the URL of an image to be used as background when the browser doesn't support the Canvas element.
* **opacity** (default: `0.2`): the background opacity. Float value ranging from 0 to 1, or alternatively an object specifying `from` and `to` property for random opacity values.
* **width** (default: `50`): the generated background image width in pixels.
* **height** (default: `50`): the generated background image height in pixels.
* **grainDimension** (default: `1`): the dimension of noise grains in pixels. It can be a number for square grains, or an object specifying `grainDimension.width` and `grainDimension.height` for rectangular grains
* **fromColor** (default: `"000000"`): starting point of the color gradient from which each grain's color will be randomly taken
* **toColor** (default: `"606060"`): ending point of the color gradient from which each grain's color will be randomly taken
* **independentChannels** (default: `false`): if true, each RGB channel will vary independently, and fromColor and toColor will represent boundaries rather than endpoints for the gradient. The result is thus a multi-color noise pattern.
* **useCache** (default: `false`): if true, it uses HTML5 localStorage (if available) to locally cache the generated background image so it isn't generated at each request.

Moreover, two additional options specify the shape of the statistical distribution from which the color of each noise grain is generated:

* **distribution** (default: `"bell"`): the shape of the distribution. It can be `"uniform"`, `"triangular"` or `"bell"`. Alternatively, it can be a positive integer indicating the number of uniform distributions to be added up (obtaining a Bates distribution).
* **bias** (default: `0`): if `bias > 0` the resulting distribution will be biased in favor of `fromColor`, while if `bias < 1` it will biased in favor of `toColor`. In other words, this parameter affects the skewness of the noise distribution.

An example setting all options with custom values is:

```javascript
$("body").noiseGen({
  fallbackImage: "bkgnd.png",
  opacity: {
    from: 0.2,
    to: 0.5
  },
  width: 64,
  height: 64,
  grainDimension: {
    width: 5,
    height: 1
  },
  fromColor: "0099CC",
  toColor: "10AADD",
  independentChannels: true,
  distribution: "uniform",
  bias: 5,
  useCache: true
});
```


Changelog
=========

**v0.1.4** - Add support for multiple layered background-image (thanks to [mdarens](https://github.com/mdarens))
**v0.1.3** - Add support for random opacity (kudos to [OpenGrid](https://github.com/OpenGrid))