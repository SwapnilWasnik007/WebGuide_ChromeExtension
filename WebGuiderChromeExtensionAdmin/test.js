window.onload = function () {
    function startWebGuideCapture() {
        chrome.storage.local.set({ webGuidFlag: "true" }, function () {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.reload(tabs[0].id);
            });
            window.close();
        });
    }

    function stopWebGuideCapture() {
        chrome.storage.local.set({ webGuidFlag: "false" }, function () {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.reload(tabs[0].id);
            });
            window.close();
        });
    }

    chrome.storage.local.get(['webGuidFlag'], function (result) {
        var webGuideBtn = document.getElementById('webGuideBtn');
        if (result.webGuidFlag == 'true') {
            document.getElementById('btnEnableWebGuide').classList.add('disableBtn');
            document.getElementById('btnEnableWebGuide').classList.remove('button1');
            document.getElementById('btnDisableWebGuide').classList.remove('disableBtn');
            document.getElementById('btnDisableWebGuide').classList.add('button1');

            document.getElementById('btnEnableWebGuide').onclick = "";
            document.getElementById('btnDisableWebGuide').onclick = stopWebGuideCapture;
        }
        else {
            document.getElementById("btnDisableWebGuide").classList.add('disableBtn');
            document.getElementById("btnDisableWebGuide").classList.remove('button1');
            document.getElementById('btnEnableWebGuide').classList.remove('disableBtn');
            document.getElementById('btnEnableWebGuide').classList.add('button1');

            document.getElementById('btnDisableWebGuide').onclick = "";
            document.getElementById('btnEnableWebGuide').onclick = startWebGuideCapture;
        }
    });
}


// When the button is clicked, inject setPageBackgroundColor into current page
document.getElementById('btnApply').addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.executeScript({
            code: `chrome.storage.local.get(['WebGuideData'], function (result) {
                let data = result.WebGuideData;
                if(!document.getElementById('tutorialDataString')){
                    const datadiv = document.createElement('div');
                    datadiv.innerText = data;
                    datadiv.id = 'tutorialDataString';
                    datadiv.style.display = 'none';
            
                    document.body.appendChild(datadiv);
                }
                else{
                    document.getElementById('tutorialDataString').innerText = data
                }
            });`,
        });
    });
});

document.getElementById('btnReset').addEventListener("click", () => {
    chrome.storage.local.remove(['WebGuideData']);
});

function setPageBackgroundColor() {

    document.body.style.backgroundColor = "red";
    // chrome.storage.sync.get("color", ({ color }) => {
    //   document.body.style.backgroundColor = "green";
    // });
}

function applySelectionInWebApp() {
    chrome.storage.local.get(['WebGuideData'], function (result) {
        let data = result.WebGuideData;
        const datadiv = document.createElement('div');
        datadiv.innerText = data;

        document.body.appendChild(datadiv);
    });
}
    //document.getElementById('btnApply').onclick = applySelectionInWebApp;