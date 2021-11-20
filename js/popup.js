var setNews = (data) => {
  let news_id = localStorage.getItem('news') || "";
  if (news_id !== data[Object.keys(data)[0]]['id'] || localStorage.getItem('closenews') == "no") {
    let news = data[Object.keys(data)[0]]
    $('#alert-body').html(news[localStorage.getItem('lang')]);
    $('#alert').addClass(`alert-${news["type"]}`);
    $('#alert').show();
    localStorage.setItem('news', news['id']);
    localStorage.setItem('closenews', 'no');
    document.getElementById('close-alert').addEventListener('click', () => localStorage.setItem('closenews', 'yes'))
  }
};

var getSelectedTab = (tab) => {
  var tabId = tab.id;
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('add').addEventListener('click', () => sendMessage(
    generatSettingData('ADDPOPUP')
  ));
  // document.getElementById('fbnew').addEventListener('click', () => sendMessage(
  //   generatSettingData('FACEBOOKNEW')
  // ));
  document.getElementById('reset').addEventListener('click', () => sendMessage({
    action: 'RESET'
  }))
  $('#alert').hide();
  $.getJSON(chrome.extension.getURL(`news.json`), function(data) {
    setNews(data);
  });
  // $.getJSON('https://martin605.github.io/Live-Chat-Popup/news.json', function (data) {
  //   setNews(data);
  // });
  onLoad();
}

chrome.tabs.getSelected(null, getSelectedTab);