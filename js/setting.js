document.addEventListener('DOMContentLoaded', function() {
   onLoad();
   document.getElementById('langList').value = localStorage.getItem('lang') || navigator.language || navigator.userLanguage; 
   document.getElementById('facebookLocation').value =  localStorage.getItem('position');
   document.getElementById('opacity').value = localStorage.getItem('transparency');
   document.getElementById('sizew').value = localStorage.getItem('sizew');
   document.getElementById('sizeh').value = localStorage.getItem('sizeh');
   document.getElementById('langList').addEventListener('change', (event) => {setLang(event.target.value)});
   document.getElementById('facebookLocation').addEventListener('change', (event) => {localStorage.setItem('position', event.target.value)});
   document.getElementById('opacity').addEventListener('change', (event) => {localStorage.setItem('transparency', event.target.value)});
   document.getElementById('sizew').addEventListener('change', (event) => {localStorage.setItem('sizew', event.target.value)});
   document.getElementById('sizeh').addEventListener('change', (event) => {localStorage.setItem('sizeh', event.target.value)});
});