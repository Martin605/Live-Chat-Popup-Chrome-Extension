var tabId = 0;
var getSelectedTab = (tab) => {
   tabId = tab.id;
}
document.addEventListener('DOMContentLoaded', function () {
   onLoad();
   chrome.tabs.getSelected(null, getSelectedTab);
   var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
   function setNext(target) {
      target.nextElementSibling.value = target.value;
   }
   function settingUpdate  (valueName, event) {
      setNext(event.target);
      localStorage.setItem(valueName, event.target.value);
      let settingData = generatSettingData('UPDATE');
      sendMessage(settingData);
   }
   function settingOnLoad(valueName, localName) {
      document.getElementById(valueName).value = localStorage.getItem(localName);
      setNext(document.getElementById(valueName));
   }
   document.getElementById('langList').value = localStorage.getItem('lang') || navigator.language || navigator.userLanguage;
   settingOnLoad('facebookLocation', 'position');
   settingOnLoad('opacity', 'transparency');
   settingOnLoad('sizew', 'sizew');
   settingOnLoad('sizeh', 'sizeh');
   // Language setting
   document.getElementById('langList').addEventListener('change', (event) => {
      setLang(event.target.value)
   });
   // Location setting
   document.getElementById('facebookLocation').addEventListener('change', (event) => {
      settingUpdate('position', event);
   });
   // opacity setting
   document.getElementById('opacity').addEventListener('change', (event) => {
      settingUpdate('transparency', event);
   });
   // sizew setting
   document.getElementById('sizew').addEventListener('change', (event) => {
      settingUpdate('sizew', event);
   });
   // sizeh setting
   document.getElementById('sizeh').addEventListener('change', (event) => {
      settingUpdate('sizeh', event);
   });
   // back button
   if ( window.history.length < 2) {
      document.getElementById('backBtn').hidden = true;
   } else {
      document.getElementById('backBtn').addEventListener('click', (event) => {
         history.back();
      });      
   }
});
chrome.tabs.getSelected(null, getSelectedTab);