# jQueryFullscreenCycler

jQuery Fullscreen Cycler is a super lightweight jQuery plugin for creating fullscreen image cyclers.  The plugin is chainable with other jQuery commands and is careful to make sure that images are loaded before they are shown.

## Features
* Lightweight. Only 4K minified.
* Responsive.  Uses CSS3 to make sure that the images correctly cover the screen no matter what the size or orientation.
* Careful.  Verifies that images are loaded before fading them in.  We assume that you will be using large images for page backgrounds so we are careful to only cycle to an image if we can be sure that it is loaded fully so that visitors with slower connections will not see a series of partly loaded images the first trip through.
* SEO and Memory footprint aware.  The plugin does not load the images until after the DOM is loaded allowing Google and Bing to see a fast page load time.  To keep the memory footprint small we only have two images loaded in the DOM at any time.  The others should be cached in the browser so that they load rapidly when requested again.
* Options.  We allow a single image to be used which will not fire the cycler code but will just create the CSS for the background image.  Speed of cycle and speed of fade are also options along with the background color to show while the first image is loading as well as the max number of times to cycle.

## Usage
1. Add a div to your design.  We suggest adding this just under the body tag of your page.
```
<div id="fsCycler"></div>
```

2. Include jQuery.
```
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
```

3. Include jQuery Fullscreen Cycler.
```
<script type="text/javascript" src="../src/jquery.fullscreenCycler.js"></script>
```

4. Create an array for the images you want to show.
```
var i = new Array("http://lorempixel.com/1440/900/nature/1","http://lorempixel.com/1440/900/nature/2","http://lorempixel.com/1440/900/nature/3","http://lorempixel.com/1440/900/nature/4");
```

5. Call jQuery Fullscreen Cycler for the div you added passing in the image array.
```
<script language="javascript" type="text/javascript">
  (function($) {
    $('#fsCycler').fullscreenSlider({images: i});
  })(jQuery);
</script>
```

## Options
jQuery Fullscreen Cycler has three optional parameters that can be passed to the plugin.
```
$('#fsCycler').fullscreenSlider({
  images: i,
  speed: 6.5, 
  maxCycles: 4,
  transitionSpeed: 2, 
  backgroundColor: "transparent"
});
```

*`speed:`* The time (in seconds) spent displaying each image (default is 6, but you can use decimals to get more exact times on the cycles)  
*`maxCycles:`* (optional) Max number of cycles before going back to the first image (default is none)  
*`transistionSpeed:`* The time (in seconds) spent fading between images (default: 2)  
*`backgroundColor:`* The background color that will be shown before the first image is shown  

## Feature Requests
* More transitions.  Currently the transition is a fade, but it would be trivial to add in other transitions, however this would certainly increase the size of the project so we would need to consider each addition carefully.
