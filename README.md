# jqueryFullscreenCycler
======================

JQuery Fullscreen Cycler is a super lightweight jquery plugin for creating fullscreen image cyclers.  The plugin is chainable with other jquery commands and is careful to make sure that images are loaded before they are shown.

## Features.
* Lightweight. Only 4k minified.
* Responsive.  Uses CSS3 to make sure that the images correctly cover the screen no matter what the size or orientation.
* Careful.  Verifies that images are loaded before fading them in.  We assume that you will be using large images for page backgrounds here so we are careful to only cycle to an image if we can be sure that it is loaded fully so that visitors with slower connections will not see a series of partly loaded images the first trip through.

## Usage
1. Add a div to your design.  We suggest adding this just under the <body> tag of your page.
```
<div id="fsCycler"></div>
```

2. Include JQuery.
```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
```

3. Include JQuery Fullscreen Cycler.
```
<script type="text/javascript" src="../src/jquery.fullscreenCycler.js"></script>
```

4. Create an array for the images you want to show.
```
var i = new Array("http://lorempixel.com/1440/900/nature/1","http://lorempixel.com/1440/900/nature/2","http://lorempixel.com/1440/900/nature/3","http://lorempixel.com/1440/900/nature/4");
```

5. Call JQuery Fullscreen Cycler for the div you added passing in the image array.
```
<script language="javascript" type="text/javascript">
  (function($) {
    $('#fsCycler').fullscreenSlider({images: i});
  })(jQuery);
</script>
```

## Options
JQuery Fullscreen Cycler has three optional parameters that can be passed to the plugin.
```
$('#fsCycler').fullscreenSlider({
  images: i,
  speed: 6, //This is the time spent holding on each image
  transitionSpeed: 2, //This is the time spent fading between images
  backgroundColor: "transparent" //This is the background color that will be shown before the first image is shown
});
```