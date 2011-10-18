NoiseGen
========

A simple jQuery plugin to generate background noise dynamically (with support for a fallback background image for browsers that don't support the canvas API).

Usage
=====

Just call `$(".foo").noiseGen()`. You can also pass an object specifying some configuration options (read more on this later). An example is worth a thousand words:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>NoiseGen Example</title>
    <link rel="stylesheet" type="text/css" href="../jqcloud/jqcloud.css" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js"></script>
    <script type="text/javascript" src="../noisegen.js"></script>
    <script type="text/javascript">
      $(document).ready(function() {
        $("body").noiseGen({ opacity: 0.1, fallbackImage: "bkgnd.png", width: 64, height: 64 });
      });
    </script>
  </head>
  <body>
    <h1>NoiseGen Example</h1>
    <p>The background noise in this page is dynamically generate through JavaScript.</p>
  </body>
</html>
```


Options
-------

Options currently supported and their default values are:

* fallbackImage [default: false]: either false or a string containing the URL of an image to be used as background when the browser doesn't support the Canvas element.
* opacity [default: 0.2]: the background opacity. Float value ranging from 0 to 1.
* width [default: 32]: the generated background image width in pixels.
* height [default: 32]: the generated background image height in pixels.
* depth [default: 60]: the depth of the background noise. Range: 1 to 255.