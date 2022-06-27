chrome.webn.onUpdated.addListener(function (tabId , info) {
    if (info.status === 'complete') {
        alert("abcd");
    }
});