/*! weirdthing - v0.1.0 - 2013-11-20
* https://github.com/uchu/weirdthing
* Copyright (c) 2013 Pavel Burylichev; Licensed MIT */
(function ($) {

  // Collection method.
  $.fn.wierdthing = function () {
    return this.each(function (i) {
    
        var 
            context = new webkitAudioContext();
    
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.wierdthing = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.wierdthing.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.wierdthing.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].wierdthing = function (elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
