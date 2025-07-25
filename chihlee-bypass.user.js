// ==UserScript==
// @name         致理磨課師防切出偵測
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  防止致理磨課師平台偵測分頁切換
// @author       kenchou2006
// @match        *://moocs.chihlee.edu.tw/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kenchou2006/CLUT-MOOCs-Bypass/main/chihlee-bypass.user.js
// @downloadURL  https://raw.githubusercontent.com/kenchou2006/CLUT-MOOCs-Bypass/main/chihlee-bypass.user.js
// ==/UserScript==

(function() {
    'use strict';

    Object.defineProperty(document, 'visibilityState', {
        get: () => 'visible',
        configurable: true
    });
    Object.defineProperty(document, 'hidden', {
        get: () => false,
        configurable: true
    });

    window.addEventListener('visibilitychange', function(e) {
        e.stopImmediatePropagation();
    }, true);

    window.addEventListener('blur', function(e) {
        e.stopImmediatePropagation();
    }, true);

    window.addEventListener('focus', function(e) {
        e.stopImmediatePropagation();
    }, true);

    window.onblur = null;
    window.onfocus = null;

    console.log("✅ 致理磨課師防偵測腳本已啟用");

})();
