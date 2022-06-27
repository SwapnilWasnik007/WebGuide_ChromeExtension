// document.body.style.backgroundColor = 'orange';

// fetch(chrome.runtime.getURL('/Modal.html')).then(r => r.text()).then(html => {
//     document.body.insertBefore('beforeend', html);
//     // not using innerHTML as it would break js event listeners of the page
//   });

// var modal = document.getElementById("myModal");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }


$("#modal1").modal("show");