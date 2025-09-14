// ==UserScript==
// @name         Pixeldrain Unbind Arrow Keys
// @namespace    http://tampermonkey.net/
// @version      2025-09-14
// @description  Unbind arrow keys which are binded for switching next and previous item in album
// @author       DebNation
// @match        https://pixeldrain.com/*
// @match        https://pixeldrain.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixeldrain.com
// @grant        GM_openInTab
// @license      MIT
// ==/UserScript==

(function() {
  document.addEventListener("keydown", e => {
    if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.stopImmediatePropagation();
    }
  }, true);
})();
