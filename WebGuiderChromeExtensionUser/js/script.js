$(document).ready(function(){
    $("#btn").click(function(){ 
      chrome.tabs.executeScript(null, { file: 'js/funcion.js' });    
      window.close();
    });
  });