// ==UserScript==
// @name         Pixeldrain Unbind Arrow Keys
// @namespace    http://tampermonkey.net/
// @version      2025-09-14
// @description  Unbind arrow keys that are used for mainly used for video scrobbling!
// @author       DebNation
// @match        https://pixeldrain.com/*
// @match        https://pixeldrain.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixeldrain.com
// @grant        none
// ==/UserScript==

(function() {
  document.addEventListener("keydown", e => {
    if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.stopImmediatePropagation();
    }
  }, true);
})();