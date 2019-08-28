// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import navBar from './modules/navbar';
import slickSlider from './modules/slick-slider';

(($) => {
  // When DOM is ready
  $(() => {
    navBar.mobileMenu();
    slickSlider.slider();
  });
})(jQuery);
