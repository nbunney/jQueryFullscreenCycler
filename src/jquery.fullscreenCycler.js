(function ( $ ) {

  //Make sure these are available in the callback functions
  var settings;
  var curSlide = 1;
  var curHolder = 1;
  var obj;

  $.fn.fullscreenSlider = function( options ) {
    obj = this;
    if (typeof options != 'object') return this;
    if (!options.images.length) return this;

    //Handle the options that the user requested.
    settings = $.extend({
      speed: 6,
      transitionSpeed: 2,
      backgroundColor: "transparent",
      images: new Array()
    }, options );

    //Clear out the holder and then set up the CSS and append the first image holder.
    this.html('').css('position', 'absolute').css('top', '0px').css('left', '0px').css('width', '100%').css('height', '100%').css('z-index', '-1').append('<div id="fsImage1"></div>').css('backgroundColor', settings.backgroundColor);
    $('#fsImage1').css('position', 'absolute').css('background-position', 'center top').css('background-repeat', 'no-repeat').css('-webkit-background-size', 'cover').css('-moz-background-size', 'cover').css('-o-background-size', 'cover').css('background-size', 'cover').css('width', '100%').css('height', '100%').css('z-index', '-1');
    //Place the image in the holder

    //This will make sure that the first image is loaded fully before we do anything else.  This is a callback so it should not block the execution of other scripts.
    $('<img/>').attr('src', settings.images[0]).load(function() {
      $(this).remove(); // prevent memory leaks
      $('#fsImage1').css('background-image', 'url('+settings.images[0]+')');

      //If we only have one image then leave it static and we are done.
      if(settings.images.length > 1){ //If we have more then...
        //Append the second holder
        obj.append('<div id="fsImage2"></div>');
        //Start loading the second image as soon as possible but do so only after placing it behind the loaded image
        $('#fsImage2').css('z-index', '-2').css('background-image', 'url('+settings.images[1]+')').css('position', 'absolute').css('background-position', 'center top').css('background-repeat', 'no-repeat').css('-webkit-background-size', 'cover').css('-moz-background-size', 'cover').css('-o-background-size', 'cover').css('background-size', 'cover').css('width', '100%').css('height', '100%');
        setTimeout(changePic, (settings.speed * 1000));
      }
    });

    //Make this a chainable jquery function
    return this;
  };

	function changePic(){ //This is called repeatedly to change the image
	  //wait until we can validate that the current slide is fully loaded before showing it.
    $('<img/>').attr('src', settings.images[curSlide]).load(function() {
      $(this).remove(); // prevent memory leaks
      //Fade the front image out.
      $('#fsImage'+curHolder).fadeOut((settings.transitionSpeed*1000), function(){  //Would like to add other options here for the transition.  Sliding to a direction would be easy...
        curSlide++;
        if (curHolder==1) newHolder=2; else newHolder=1;
        //Move the other image to the front.
        $('#fsImage'+newHolder).css('z-index', '-1');
        //Move the faded out image behind the other image and start loading the new image in there.
        if (curSlide >= settings.images.length) curSlide=0;
        $('#fsImage'+curHolder).css('z-index', '-2').css('background-image', 'url('+settings.images[curSlide]+')').css('opacity', '1').css('display', 'block');
        curHolder = newHolder;
        setTimeout(changePic, (settings.speed * 1000));
      });
    });
	}


}( jQuery ));