const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");function a(){isBgColorChangeEnabled?bgColorChangeInterval=setInterval(()=>{r()},1e3):clearInterval(bgColorChangeInterval)}bgColorChangeInterval=null,isBgColorChangeEnabled=!1,e.removeAttribute("disabled"),t.setAttribute("disabled",!0);const r=e=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`};e.addEventListener("click",()=>{isBgColorChangeEnabled=!0,a(),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}),t.addEventListener("click",()=>{isBgColorChangeEnabled=!1,a(),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)});
//# sourceMappingURL=01-color-switcher.5dab42d8.js.map