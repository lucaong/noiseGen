NoiseGen
========

A simple jQuery plugin to generate background noise dynamically (with support for a fallback background image for browsers that don't support the canvas API).

You can see a (quite ugly) [demo here](http://www.lucaongaro.eu/demos/noisegen/).


Install
=======

As with any jQuery plugin you just need to:

* Make sure to import the jQuery library in your project.
* Place the file `noisegen.0.1.2.js` somewhere within your project and import it in your HTML code.


Usage
=====

Just call `$(".foo").noiseGen()` to add a noisy background to elements of class `foo`. You can also pass an object specifying some configuration options (read more on this later). An example is worth a thousand words:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>NoiseGen Example</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js"></script>
    <script type="text/javascript" src="path/to/noisegen-0.1.2.js"></script>
    <script type="text/javascript">
      $(document).ready(function() {
        $("body").noiseGen({ opacity: 0.1, fallbackImage: "bkgnd.png", width: 64, height: 64 });
      });
    </script>
  </head>
  <body>
    <h1>NoiseGen Example</h1>
    <p>The background noise in this page is dynamically generated through JavaScript.</p>
  </body>
</html>
```


Options
-------

Options currently supported and their default values are:

* `fallbackImage` [default: `false`]: either false or a string containing the URL of an image to be used as background when the browser doesn't support the Canvas element.
* `opacity` [default: `0.2`]: the background opacity. Float value ranging from 0 to 1.
* `width` [default: `32`]: the generated background image width in pixels.
* `height` [default: `32`]: the generated background image height in pixels.
* `grainDimension` [default: `1`]: the dimension of noise grains in pixels. It can be a number for square grains, or an object specifying `grainDimension.width` and `grainDimension.height` for rectangular grains
* `fromColor` [default: `"000000"`]: starting point of the color gradient from which each grain's color will be randomly taken
* `toColor` [default: `"606060"`]: ending point of the color gradient from which each grain's color will be randomly taken
* `independentChannels` [default: `false`]: if true, each RGB channel will vary independently, and fromColor and toColor will represent boundaries rather than endpoints for the gradient.

Moreover, two additional options affect the shape of the statistical distribution from which the color of each noise grain is generated:

* `n` [default: 1]: the distribution is obtained first as a sum of `n` uniform distributions ranging from 0 to 1. Therefore, if `n = 1` the resulting distribution is uniform, and if `n` takes higher values the distribution approaches a normal distribution.
* `s` [default: 1]: each random value extracted from the distribution is then elevated to the `s` power. Thus, if `s < 1` the resulting distribution will be skewed to the left, while if `s > 1` it will be skewed to the right. In other words, if `s < 1` more grains will have colors similar to `toColor`, while if `s > 1` most grains will be closer to `fromColor`

An example setting all options with custom values is:

```javascript
$("body").noiseGen({
  fallbackImage: "bkgnd.png",
  opacity: 0.7,
  width: 64,
  height: 64,
  grainDimension: {
    width: 5,
    height: 1
  },
  fromColor: "0099CC",
  toColor: "10AADD",
  independentChannels: true,
  n: 3,
  s: 0.3
});
```