var getSelectedTab = (tab) => {
   var settingData = {};
   $.getJSON('https://martin605.github.io/Live-Chat-Popup/json/setting.json', function(data) {
    $.each( data, function( key, val ) {
      settingData[key] = val;
    });
   settingData = data;
   settingData['Size'] = {'w':(parseInt(localStorage.getItem('sizew')) || "30"), 'h':(parseInt(localStorage.getItem('sizeh')) || "40")};
  });
   var tabId = tab.id;
   var position = "0";
   var potitionsetting = localStorage.getItem('position') || "3";
   if (potitionsetting == '1') {position = "0"} else if (potitionsetting == '2') {position = "25"} else if (potitionsetting == '3') {position = "50"};
   var transparency = parseInt(localStorage.getItem('transparency'))/10 || "0.8"; 
   $(function () {$('[data-toggle="tooltip"]').tooltip()})
   console.log(settingData);
   var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
   document.getElementById('add').addEventListener('click', () => sendMessage({ action: 'ADDPOPUP', transparency: transparency,settingData: settingData }));
   document.getElementById('fbnew').addEventListener('click', () => sendMessage({ action: 'FACEBOOKNEW',position: position, transparency: transparency,settingData: settingData }));
   document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }))
   $('#alert').hide();
   $.getJSON('https://martin605.github.io/Live-Chat-Popup/news.json', function(data) {
    let news_id = localStorage.getItem('news') || "";
    if ( news_id !== data[Object.keys(data)[0]]['id'] || localStorage.getItem('closenews') == "no" ) {
      let news = data[Object.keys(data)[0]]
      $('#alert-body').html(news[localStorage.getItem('lang')]);
      $('#alert').addClass(`alert-${news["type"]}`);
      $('#alert').show();
      localStorage.setItem('news',news['id']);
      localStorage.setItem('closenews','no');
      document.getElementById('close-alert').addEventListener('click', () => localStorage.setItem('closenews','yes'))
    }});
   onLoad();
 }

chrome.tabs.getSelected(null, getSelectedTab);