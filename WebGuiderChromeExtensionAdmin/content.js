

var labelCount = 1;

chrome.storage.local.get(['webGuidFlag'], function (result) {
  if (result.webGuidFlag == 'true') {

    let elementsToSkip = ['myForm', 'btnCancel', 'btnOpenForm'];
    const sideSection = document.createElement('div');
    sideSection.innerHTML = `<button Id="btnOpenForm" class="open-button" >Selected Items</button>
        
        <div class="chat-popup" id="myForm">
          <form class="form-container">
            <h1>Chat</h1>
        
            <label for="msg"><b>Message</b></label>
            <textarea placeholder="Type message.." name="msg" required></textarea>
        
            <button type="button" Id="btnCancel" class="btn cancel" >Close</button>
          </form>
        </div>
        <style>
        /* Button used to open the chat form - fixed at the bottom of the page */
        .open-button {
          background-color: #555;
          color: white;
          padding: 16px 20px;
          border: none;
          cursor: pointer;
          opacity: 0.8;
          position: fixed;
          bottom: 23px;
          right: 28px;
          width: 280px;
        }
        
        /* The popup chat - hidden by default */
        .chat-popup {
          display: none;
          position: fixed;
          bottom: 0;
          right: 15px;
          border: 3px solid #f1f1f1;
          z-index: 9;
        }
        
        /* Add styles to the form container */
        .form-container {
          max-width: 300px;
          padding: 10px;
          background-color: white;
        }
        
        /* Full-width textarea */
        .form-container textarea {
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          border: none;
          background: #f1f1f1;
          resize: none;
          min-height: 200px;
        }
        
        /* When the textarea gets focus, do something */
        .form-container textarea:focus {
          background-color: #ddd;
          outline: none;
        }
        
        /* Set a style for the submit/send button */
        .form-container .btn {
          background-color: #04AA6D;
          color: white;
          padding: 16px 20px;
          border: none;
          cursor: pointer;
          width: 100%;
          margin-bottom:10px;
          opacity: 0.8;
        }
        
        /* Add a red background color to the cancel button */
        .form-container .cancel {
          background-color: red;
        }
        
        /* Add some hover effects to buttons */
        .form-container .btn:hover, .open-button:hover {
          opacity: 1;
        }
        </style>
        <script>
        console.log(document.getElementById("btnOpenForm"));

        document.getElementById("btnOpenForm").addEventListener("click", (e) => {
            document.getElementById("myForm").style.display = "block";
        });

        document.getElementById("btnCancel").addEventListener("click", (e) => {
            document.getElementById("myForm").style.display = "none";
        });

        function openForm() {
          document.getElementById("myForm").style.display = "block";
        }
        
        function closeForm() {
          document.getElementById("myForm").style.display = "none";
        }
        </script>`;

    document.body.appendChild(sideSection);

    document.addEventListener("click", (e) => {
      if (elementsToSkip.includes(e.target.id)) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();

      //Highlight the selected element
      e.target.style.outline = "solid Black 5px";
      let canvasInformation = "";
      let tutorialObject = {};
      
      html2canvas(e.srcElement).then(canvas => {
        canvasInformation = canvas.toDataURL();

        tutorialObject["item_Id"] = e.target.id;
        tutorialObject["item_Classes"] = e.target.className;
        tutorialObject["item_CanvasData"] = canvasInformation;
        tutorialObject["url"] = document.URL;

        chrome.storage.local.get(['WebGuideData'], function (result) {
          if (Object.keys(result).length > 0) {
            let oldObject = result.WebGuideData;
            let parsedJson = JSON.parse(oldObject);
            parsedJson.data.push(tutorialObject);

            chrome.storage.local.set({ WebGuideData: JSON.stringify(parsedJson) });
          }
          else {
            chrome.storage.local.set({ WebGuideData: JSON.stringify({ "data": [tutorialObject] }) });
          }
        });
      });
    }, true);
  }
  else {
    //console.log(result.webGuidFlag);
  }
});







