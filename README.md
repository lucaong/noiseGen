NoiseGen
========

A jQuery plugin to generate background noise dynamically (with support for a fallback background image for browsers that don't support the canvas API).

Usage
-----

    <!DOCTYPE html>
    <html>
      <head>
        <title>NoiseGen Example</title>
        <link rel="stylesheet" type="text/css" href="../jqcloud/jqcloud.css" />
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js"></script>
        <script type="text/javascript" src="../noisegen.js"></script>
        <script type="text/javascript">
          $(document).ready(function() {
            $("body").noiseGen({ opacity: 0.2, fallbackImage: "bkgnd.png", width: 64, height: 64 });
          });
        </script>
      </head>
      <body>
        <h1>NoiseGen Example</h1>
        <p>The background noise in this page is dynamically generate through JavaScript.</p>
      </body>
    </html>