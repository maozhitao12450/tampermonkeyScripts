// ==UserScript==
// @name         创建账号并复制到剪贴板
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       zhitao.mao
// @match        http://opentunnel.net/v2ray/server-*
// @grant        none
// @updateURL    https://github.com/maozhitao12450/tampermonkeyScripts/raw/main/scripts/opentunnel_jump_to_create.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("#username").value = Math.random().toString(36).slice(-8)
    document.querySelector("#bh").value = "www.bing.com"

    var interval1 = setInterval(function(){
    var text = document.querySelector("body > main > div.row.g-2 > div.col-md-6 > div:nth-child(2) > button")
    if (text){
        text.click()
        clearInterval(interval1)
    }
    }, 100);
    var interval = setInterval(function(){
    var text = document.querySelector("#copyhttp")
        if (text){
            text.click()
            clearInterval(interval)
            alert("复制完成")
        }
    }, 100);

})();