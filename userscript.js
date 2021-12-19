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

  // CUSTOMIZABLE VARIABLES
  //
  // Maximum number of attempts made before new content loads.
  // If it only scrolls down once for you, increase the number of attempts.
  const MAX_ATTEMPTS_WHILE_LOADING = 15;
  // Time delay in milliseconds to ensure the last scroll-down works correctly.
  // If it stops scrolling right before it should, increase the delay.
  const LAST_SCROLL_DELAY = 3000;

  let lastScrollHeight = 0;
  let updatedScrollHeight = -1;
  let autoScroll;
  let attempt = 0;

  const setScrollHeight = () => {
    updatedScrollHeight = document.documentElement.scrollHeight;
    if (updatedScrollHeight !== lastScrollHeight) {
      lastScrollHeight = updatedScrollHeight;
      document.documentElement.scrollTop = updatedScrollHeight;
    } else if (attempt >= MAX_ATTEMPTS_WHILE_LOADING) {
      setTimeout(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollHeight;
        clearInterval(autoScroll);
      }, LAST_SCROLL_DELAY);
    } else if (updatedScrollHeight === lastScrollHeight) attempt += 1;
  };
  autoScroll = window.setInterval(setScrollHeight, 100);
})();
