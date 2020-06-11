var update = true;
var transparency = "0.8"; 
var position = "0";
function createDIV(elmnt) {
   var iDiv = document.createElement('div');
   iDiv.id = "popupChat";
   elmnt.prepend(iDiv);
   iDiv.style.width = "300px"; iDiv.style.height = "400px";
   var iDivT = document.createElement('div');
   iDivT.id = "popupChatT"; iDivT.style.width = "100%"; iDivT.style.height = "2rem";
   iDivT.style.backgroundColor = `rgba(0,0,0,${transparency})`; iDivT.style.textAlign = 'right';
   iDivT.innerHTML = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><a href="" onclick="removeDIV()"><span class="material-icons">close</span></a>'
   iDiv.append(iDivT);
   dragElement(iDiv);
  return iDiv;
}
function removeDIV() { var iDiv = document.getElementById("popupChatD"); elmnt.remove(); }
function autoUpdateChat(query) { setTimeout(function() { updateChat(query); autoUpdateChat(query); }, 400) }
function updateChatBox(query) {
  var popupChat = document.createElement('div');
  popupChat.id = "popupChatD";
  popupChat.style.width = "100%";
  popupChat.style.height = "400px";
  popupChat.style.overflowY = "scroll";
  document.getElementById('popupChat').append(popupChat);
  autoUpdateChat(query);
}
function updateChat(query) {
  try {
  var popupChat = document.getElementById('popupChatD');
  var chat = document.querySelector(query)
  if (popupChat.innerHTML !== chat.innerHTML) {
    popupChat.innerHTML = chat.innerHTML;
    popupChat.scrollTo({top: popupChat.scrollHeight, left: 0, behavior: 'smooth'});
  }} catch(err) {console.log(err.message)}
}
function dragElement(elmnt) {
   elmnt.style.position= 'absolute';
   elmnt.style.width = "300px";
   elmnt.style.height = "400px";
   elmnt.style.zIndex = '500';
   elmnt.style.overflowAnchor = 'auto';
   elmnt.style.opacity = transparency;
   elmnt.closeDragElement;
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById(elmnt.id + "T").onmousedown = dragMouseDown;
  let chatBox = document.getElementById('popupChat');chatBox.style.top = "0px";chatBox.style.left = "0px";
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function resetFacebookA(query) {
  setTimeout(function() { 
    if (document.querySelector(query)==null ) {
      location.reload();  
    };
    resetFacebookA(query);
  }, 1000) 
}
function resetA(vurl) {setTimeout(function() {if (window.location.href.match(vurl) ) {location.reload();}; resetA(vurl);}, 1000)}
function loadPageVar (sVar) {return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));}
function get_last(query) {
  let videos = document.querySelectorAll(query)
  return videos[videos.length-1]
}
const facebookNewVideoEvent = () => {
  function hide(query) {
    document.querySelectorAll(query).forEach(function(Item) {Item.style.display = "none";})
 }
 function toFullscreen(query) {
    document.querySelectorAll(query).forEach(function(Item) {
       Item.style.height = "100vh";
       Item.style.width = "100vw";})
 }
 function bgnone(query) {
    document.querySelectorAll(query).forEach(function(Item) {Item.style.backgroundColor = "rgba(0, 0, 0, 0)";})
 }
 function removeTop(query) {
    document.querySelectorAll(query).forEach(function(Item) {Item.style.top = "0";})
 }
   hide('.b7li7apb.n7fi1qx3.byvelhso.hzruof5a.pmk7jnqg.j9ispegn.kr520xx4');
   hide('*[role="banner"]');   hide('.j83agx80.rgmg9uty.pmk7jnqg.rnx8an3s.fcg2cn6m');
   removeTop('.j83agx80.cbu4d94t.jgljxmt5.l9j0dhe7.be9z9djy')
   toFullscreen('.j83agx80.cbu4d94t.jgljxmt5.l9j0dhe7.be9z9djy');
   toFullscreen('*[role="main"]');   toFullscreen('video');
   toFullscreen('*[data-pagelet="TahoeVideo"]');
   toFullscreen('.j83agx80.cbu4d94t.d2edcug0');
   bgnone('.pphwfc2g');   hide('.discj3wi.dati1w0a.qt6c0cv9.hv4rvrfc.pfnyh3mw.cbu4d94t.j83agx80');
   hide('.s1tcr66n');
   bgnone('.cwj9ozl2.j83agx80.cbu4d94t.buofh1pr.ni8dbmo4.stjgntxs');
   bgnone('.j9ispegn.pmk7jnqg.cbu4d94t.n7fi1qx3.j83agx80.i09qtzwb.cwj9ozl2.datstx6m');
   bgnone('.pfnyh3mw.km676qkl.discj3wi.hv4rvrfc.ihqw7lf3.dati1w0a.du4w35lb.cwj9ozl2.lzcic4wl.btwxx1t3.j83agx80');
   function positionChange() {
    if (document.querySelector('.j9ispegn.pmk7jnqg.cbu4d94t.n7fi1qx3.j83agx80.i09qtzwb.cwj9ozl2.datstx6m') !== null ) {
      document.querySelectorAll('.j9ispegn.pmk7jnqg.cbu4d94t.n7fi1qx3.j83agx80.i09qtzwb.cwj9ozl2.datstx6m').forEach(function(Item) {
      Item.style.height = "25rem";Item.style.bottom=String(50-Number(position))+'vh';Item.style.opacity=transparency;})
    } else {
      document.querySelectorAll('.j83agx80.cbu4d94t.bkyfam09').forEach(function(Item) {
      Item.style.marginTop=position+'vh';Item.style.height = "25rem";Item.style.opacity=transparency;})
    }
   }
   document.querySelectorAll('.ll8tlv6m.j83agx80.pfnyh3mw.i1fnvgqd.tr9rh885.wkznzc2l.sjgh65i0.dhix69tm').forEach(function(Item) {Item.addEventListener('click', function() {positionChange()})});
   positionChange(); 
   bgnone('*[role="complementary"]');
   document.querySelectorAll('*[role="complementary"]').forEach(function(Item) {Item.style.flexShrink = "5000";})
   bgnone('.j83agx80.cbu4d94t.jgljxmt5.l9j0dhe7.be9z9djy');
   toFullscreen('.j83agx80.cbu4d94t.jgljxmt5.l9j0dhe7.be9z9djy');
   hide('.oi732d6d.ik7dh3pa.d2edcug0.qv66sw1b.c1et5uql.a8c37x1j.muag1w35.enqfppq2.jq4qci2q.a3bd9o3v.knj5qynh.py34i1dx');
   hide('.discj3wi.dati1w0a.qt6c0cv9.hv4rvrfc.pfnyh3mw.cbu4d94t.j83agx80');
   document.querySelectorAll('body').forEach(function(Item) {Item.style.overflow='hidden';})
   document.querySelectorAll('.l9j0dhe7.tkr6xdv7.buofh1pr.eg9m0zos').forEach(function(Item) {Item.style.overflowX='hidden';})
   document.querySelectorAll('.bp9cbjyn.i09qtzwb.jeutjz8y.j83agx80.btwxx1t3.pmk7jnqg.dpja2al7.pnx7fd3z.e4zzj2sf.k4urcfbm.tghn160j').forEach(function(Item) {Item.style.width='calc( 100% - 22rem )';})
   get_last('.hu5pjgll.eb18blue.sp_2byT6Vfk4cs.sx_b73173').onclick = function() {fullscreen()}
   function fullscreen() { 
      document.querySelector('body').requestFullscreen(); 
      let a = get_last('.hu5pjgll.eb18blue.sp_2byT6Vfk4cs.sx_b73173');
      a.classList.remove("sx_b73173");a.classList.add("sx_5ce2be");
      a.onclick = function() {exitfullscreen()}
   }
   function exitfullscreen() {
      document.exitFullscreen();
      let a = get_last('.hu5pjgll.eb18blue.sp_2byT6Vfk4cs.sx_5ce2be');
      a.classList.remove("sx_5ce2be");a.classList.add("sx_b73173");
      a.onclick = function() {fullscreen()}
   }
   document.querySelectorAll('.cwj9ozl2.j83agx80.cbu4d94t.buofh1pr.ni8dbmo4.stjgntxs').forEach(function(Item) {Item.style.display="contents";} )
   bgnone('.pfnyh3mw.km676qkl.discj3wi.hv4rvrfc.ihqw7lf3.dati1w0a.du4w35lb.cwj9ozl2.lzcic4wl.btwxx1t3.j83agx80');
   resetFacebookA('*[data-pagelet="TahoeVideo"]');
 };
const facebookVideoEvent = () => {
  if ( document.querySelector('._3b-9._j6a') !== null ) {
    // Facebook Old UI(live)
  var fbDiv = createDIV(document.querySelector('._ox1').parentElement);
  updateChatBox('._3b-9._j6a');
  resetFacebookA('._3b-9._j6a');
 } else if ( document.querySelector('._53j5') !== null ) {
    // Facebook Old UI(gaming live)
  var fbDiv = createDIV(document.querySelector('._53j5'));
  updateChatBox('.stjgntxs.ni8dbmo4.tgvbjcpo.buofh1pr.j83agx80');
  resetFacebookA('._53j5');
 } else if ( document.querySelector('.rq0escxv.j83agx80.cbu4d94t.eg9m0zos.fh5enmmv.k4urcfbm') !== null ) {
  // Facebook New UI(gaming live)
  var fbDiv = createDIV(get_last('.bp9cbjyn.i09qtzwb.jeutjz8y.j83agx80.btwxx1t3.pmk7jnqg.dpja2al7.pnx7fd3z.e4zzj2sf.k4urcfbm.tghn160j').parentElement);
  updateChatBox('.rq0escxv.j83agx80.cbu4d94t.eg9m0zos.fh5enmmv.k4urcfbm');
  resetFacebookA('.rq0escxv.j83agx80.cbu4d94t.eg9m0zos.fh5enmmv.k4urcfbm');
 } else {
  // Facebook New UI(live)
  var fbDiv = createDIV(get_last('.bp9cbjyn.i09qtzwb.jeutjz8y.j83agx80.btwxx1t3.pmk7jnqg.dpja2al7.pnx7fd3z.e4zzj2sf.k4urcfbm.tghn160j').parentElement);
  updateChatBox('.eg9m0zos.datstx6m');
  resetFacebookA('.eg9m0zos.datstx6m');
  }
}
function iF(id, url) {
  var iFDiv = document.getElementById("popupChat");
  var iF = document.createElement('iframe');
  iF.id = id;
  iF.src = url;
  iF.style.width = "100%";
  iF.style.height = "100%";
  iF.style.backgroundColor = "rgba(0,0,0,0)";
  iFDiv.appendChild(iF);
}
const ytLiveEvent = () => {
  createDIV(document.querySelector('#movie_player'));
  iF("ytpopupChat", "https://www.youtube.com/live_chat?is_popout=1&v=" + loadPageVar("v"));
  resetA(window.location.href);
 };
const twLiveEvent = () => {
  createDIV(document.querySelector('*[data-test-selector="video-player__video-container"]'));
  iF("twpopupChat", "https://www.twitch.tv/popout" + window.location.pathname + "/chat?popout=");
}
const reset = () => {
   location.reload();
 };
const onMessage = (message) => {
   transparency = message.transparency; 
   switch (message.action) {
     case 'ADDPOPUP':
       if (window.location.href.match('https://www.facebook.com/.*/videos/.*')) {
         facebookVideoEvent();
       } else if (window.location.href.match('https://www.youtube.com/watch.*')) {
         ytLiveEvent();
       } else if (window.location.href.match('https://www.twitch.tv/.*')) {
         twLiveEvent();
       }
       break;
     case 'FACEBOOKNEW':
      position = message.position;
      if (window.location.href.match('https://www.facebook.com/.*/videos/.*')) {
      facebookNewVideoEvent();
    }
       break;
     case 'RESET':
       update = false;
       reset();
       break;
     default:
       break;
   }
 }

chrome.runtime.onMessage.addListener(onMessage);