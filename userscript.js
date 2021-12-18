// ==UserScript==
// @name        Load All Content By Scrolling
// @namespace   Load All Content By Scrolling
// @match       https://www.youtube.com/playlist?list=*
// @grant       none
// @version     1.0
// @author      kyosukyuu
// @description Continually scrolls down to load content
// ==/UserScript==

(() => {
  "use strict";

  // change this number to edit the number of times you want it to be run at the very least
  const RUN_AT_LEAST = 7;

  let lastScrollHeight = 0;
  let updatedScrollHeight = -1;
  let autoScroll;
  let counter = 0;
  let slowCounter;

  const setScrollHeight = () => {
    updatedScrollHeight = document.documentElement.scrollHeight;
    slowCounter = counter;
    if (updatedScrollHeight !== lastScrollHeight) {
      lastScrollHeight = updatedScrollHeight;
      document.documentElement.scrollTop = updatedScrollHeight;
      counter += 1;
    } else if (
      updatedScrollHeight === lastScrollHeight &&
      counter >= RUN_AT_LEAST &&
      slowCounter === counter
    )
      clearInterval(autoScroll);
  };

  autoScroll = window.setInterval(setScrollHeight, 100);
})();
