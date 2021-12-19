# Load-Infinite-Scroll-Items

Continually scrolls down to load content.

Intended to be used as a userscript.

## Notes

Edit the URL on `line 4`, where it starts with `// @match`, with the URL you want the script to run on.

Adjust the `MAX_ATTEMPTS_WHILE_LOADING` variable if it only scrolls down once for you. The attempts increase as a page is loading more content.

Adjust the `LAST_SCROLL_DELAY` variable if it stops scrolling right before it should, increase the delay.
