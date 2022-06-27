
//Intro js
function initialSetup() {
    const introJSScript = document.createElement("script");
    introJSScript.src = chrome.extension.getURL("intro.js");

    const introJSCss = document.createElement("link");
    introJSCss.href = chrome.extension.getURL("intro.css");;

    const introCustomScript = document.createElement("script");
    introCustomScript.src = chrome.extension.getURL("intro_custom.js");

    document.body.appendChild(introJSScript);
    document.body.appendChild(introJSCss);
    document.body.appendChild(introCustomScript);
}

initialSetup();



//Bakcup: Display Html Popup
// const modal = document.createElement("dialog");
// modal.id = "myModal";
// modal.setAttribute(
// "style",`
// height: 0 px;
// border: none;
// top: 0 px;
// border-radius:20px;
// background-color:White;
// position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
// `
// );
// modal.innerHTML = `<iframe id="popup-content"; style="height:100%">
// </iframe>
// <div style="position:absolute; top:0px; left:5px;">
// <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
// </div>`;
// document.body.appendChild(modal);
// const dialog = document.getElementById("myModal");
// dialog.showModal();
// const iframe = document.getElementById("popup-content");
// iframe.src = chrome.extension.getURL("modal.html");
// iframe.frameBorder = 0;
// dialog.querySelector("button").addEventListener("click", () => {
// dialog.close();
// });
