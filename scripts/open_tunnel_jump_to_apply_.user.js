// ==UserScript==
// @name         跳转到申请页面
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       zhitao.mao
// @match        http://opentunnel.net/v2ray/
// @grant        none
// @updateURL    https://github.com/maozhitao12450/tampermonkeyScripts/raw/main/scripts/open_tunnel_jump_to_apply_.user.js
// ==/UserScript==

(function() {
    'use strict';
    var spans = document.querySelectorAll("body > main > div:nth-child(13) > div > div > div > div.my-2.text-center.border-3.border-top.border-white > span")
    for (const span of spans) {
        var numbers =span.textContent.trim().split("/")
        if (Number(numbers[0]) < Number(numbers[1])){
            span.parentElement.parentElement.querySelector("a").click()
            break
        }
    }
})();