var getSelectedTab = (tab) => {
   var tabId = tab.id;
   var position = "0";
   var potitionsetting = localStorage.getItem('position') || "3";
   if (potitionsetting == '1') {position = "0"} else if (potitionsetting == '2') {position = "25"} else if (potitionsetting == '3') {position = "50"};
   var transparency = parseInt(localStorage.getItem('transparency'))/10 || "0.8"; 
   $(function () {$('[data-toggle="tooltip"]').tooltip()})
   var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
   document.getElementById('add').addEventListener('click', () => sendMessage({ action: 'ADDPOPUP', transparency: transparency }));
   document.getElementById('fbnew').addEventListener('click', () => sendMessage({ action: 'FACEBOOKNEW',position: position, transparency: transparency }));
   document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }))
   console.log(position,transparency)
   onLoad();
 }

chrome.tabs.getSelected(null, getSelectedTab);