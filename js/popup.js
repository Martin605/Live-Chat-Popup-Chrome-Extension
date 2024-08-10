var setNews = (data) => {
  // let news_id = chrome.storage.local.get('news') || "";
  // if (news_id !== data[Object.keys(data)[0]]['id'] || chrome.storage.local.get('closenews') == "no") {
  //   let news = data[Object.keys(data)[0]]
  //   $('#alert-body').html(news[chrome.storage.local.get('lang')]);
  //   $('#alert').addClass(`alert-${news["type"]}`);
  //   $('#alert').show();
  //   chrome.storage.local.set({'news': news['id']});
  //   chrome.storage.local.set({'closenews': 'no'});
  //   document.getElementById('close-alert').addEventListener('click', () => chrome.storage.local.set({'closenews': 'yes'}))
  // }
};

chrome.windows.getCurrent(w => {
  chrome.tabs.query({active: true, windowId: w.id}, tabs => {
    const tabId = tabs[0].id;
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('add').addEventListener('click', sendMessage(generatSettingData('ADDPOPUP')));
    // document.getElementById('fbnew').addEventListener('click', () => sendMessage(
    //   generatSettingData('FACEBOOKNEW')
    // ));
    document.getElementById('reset').addEventListener('click', () => sendMessage({
      action: 'RESET'
    }))
    $('#alert').hide();
    $.getJSON(chrome.runtime.getURL(`news.json`), function(data) {
      setNews(data);
    });
    // $.getJSON('https://martin605.github.io/Live-Chat-Popup/news.json', function (data) {
    //   setNews(data);
    // });
    onLoad();
  });
});