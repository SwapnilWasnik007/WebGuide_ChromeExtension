
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
//https://localhost:44314/WebGuideAdmin?url=https://www.google.com/

var BASE_URL = "https://localhost:44314/WebGuideAdmin?url=";
var agrs = document.URL;
var rData = [];

httpGetAsync(BASE_URL + agrs, (result) => {
    rData = JSON.parse(result);
    console.log(rData);

    let initialObject = {
        title: 'Welcome',
        intro: 'Click Next to navigate through the page tutorial'
    };
    let finalSteps = rData.map(x => {
        const ele = (x.item_Id == '') ?
            (x.item_Classes == '' ? null : document.getElementsByClassName(x.item_Classes).item(0))
            : document.getElementById(x.item_Id);
        if (ele != null) {
            return {
                title: "Web Guider",
                element: ele,
                intro: x.item_Description
            }
        }
    });
    finalSteps.splice(0, 0, initialObject);
    console.log(finalSteps);

    setTimeout(() => {
        introJs().setOptions({
            steps: finalSteps
        }).start();
    }, 1000);
});


// document.addEventListener("readystatechange", function () {
    
// }, false);




