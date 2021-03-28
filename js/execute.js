var update = true;
var transparency = "0.8";
var position = "0";
var settingData = {};

// create div in video
function createDIV(elmnt) {
  removeDIV();
  var iDiv = document.createElement('div');
  iDiv.id = "popupChat";
  elmnt.prepend(iDiv);
  iDiv.style.width = `${settingData['Size']['w']}rem`;
  iDiv.style.height = `${settingData['Size']['h']}rem`;
  var iDivT = document.createElement('div');
  iDivT.id = "popupChatT";
  iDivT.style.width = "100%";
  iDivT.style.height = "2rem";
  iDivT.style.backgroundColor = `rgba(0,0,0,${transparency})`;
  iDivT.style.textAlign = 'right';
  iDivT.innerHTML = `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><a href="javascript: void(0)" onclick="document.getElementById('popupChat').remove();"><span class="material-icons">close</span></a>`
  iDiv.append(iDivT);
  dragElement(iDiv);
  return iDiv;
}
// remove div in video
function removeDIV() {
  try {
    document.getElementById("popupChatD").remove();
  } catch (e) {}
  try {
    document.getElementById("popupChat").remove();
  } catch (e) {}
}
// Update Chat div (Facebook live only)
function autoUpdateChat(query) {
  setTimeout(function () {
    updateChat(query);
    autoUpdateChat(query);
  }, 400)
}
// Update Chat div setting (Facebook live only)
function updateChatBox(query) {
  var popupChat = document.createElement('div');
  popupChat.id = "popupChatD";
  popupChat.style.width = "100%";
  popupChat.style.height = "400px";
  popupChat.style.overflowY = "scroll";
  document.getElementById('popupChat').append(popupChat);
  autoUpdateChat(query);
}
// Update Chat div setting (Youtube and Twitch)
function updateChat(query) {
  try {
    var popupChat = document.getElementById('popupChatD');
    var chat = document.querySelector(query)
    if (popupChat.innerHTML !== chat.innerHTML) {
      popupChat.innerHTML = chat.innerHTML;
      popupChat.scrollTo({
        top: popupChat.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  } catch (err) {
    console.log(err.message)
  }
}
// let Chat div draggable
function dragElement(elmnt) {
  elmnt.style.position = 'absolute';
  elmnt.style.width = `${settingData['Size']['w']}rem`;
  elmnt.style.height = `${settingData['Size']['h']}rem`;
  elmnt.style.zIndex = '500';
  elmnt.style.overflowAnchor = 'auto';
  elmnt.style.opacity = transparency;
  elmnt.closeDragElement;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  document.getElementById(elmnt.id + "T").onmousedown = dragMouseDown;
  let chatBox = document.getElementById('popupChat');
  chatBox.style.top = "0px";
  chatBox.style.left = "0px";

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    try {
      document.getElementById('popupChatIF').style.pointerEvents = "none";
    } catch {}
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
    try {
      document.getElementById('popupChatIF').style.pointerEvents = "auto";
    } catch {}
  }
}
//reset Facebook div 
function resetFacebookA(query) {
  setTimeout(function () {
    if (document.querySelector(query) == null) {
      location.reload();
    };
    resetFacebookA(query);
  }, 1000)
}
//reset remove div when url change
function resetA(vurl) {
  setTimeout(function () {
    if (window.location.href != vurl) {
      removeDIV();
    } else {
      resetA(vurl);
    }
  }, 1000)
}

function loadPageVar(sVar) {
  return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

function get_last(query) {
  let videos = document.querySelectorAll(query)
  return videos[videos.length - 1]
}
const facebookNewVideoEvent = () => {
  function hide(query) {
    document.querySelectorAll(query).forEach(function (Item) {
      Item.style.display = "none";
    })
  }

  function toFullscreen(query) {
    document.querySelectorAll(query).forEach(function (Item) {
      Item.style.height = "100vh";
      Item.style.width = "100vw";
    })
  }

  function bgnone(query) {
    document.querySelectorAll(query).forEach(function (Item) {
      Item.style.backgroundColor = "rgba(0, 0, 0, 0)";
    })
  }

  function removeTop(query) {
    document.querySelectorAll(query).forEach(function (Item) {
      Item.style.top = "0";
    })
  }
  for (let item = 0; item < settingData["Facebook"]["Static"]["hide"].length; item++) {
    hide(settingData["Facebook"]["Static"]["hide"][item])
  }
  for (let item = 0; item < settingData["Facebook"]["Static"]["removeTop"].length; item++) {
    removeTop(settingData["Facebook"]["Static"]["removeTop"][item])
  }
  for (let item = 0; item < settingData["Facebook"]["Static"]["toFullscreen"].length; item++) {
    toFullscreen(settingData["Facebook"]["Static"]["toFullscreen"][item])
  }
  for (let item = 0; item < settingData["Facebook"]["Static"]["bgnone"].length; item++) {
    bgnone(settingData["Facebook"]["Static"]["bgnone"][item])
  }

  function positionChange() {
    if (document.querySelector('.j9ispegn.pmk7jnqg.cbu4d94t.n7fi1qx3.j83agx80.i09qtzwb.cwj9ozl2.datstx6m') !== null) {
      document.querySelectorAll('.j9ispegn.pmk7jnqg.cbu4d94t.n7fi1qx3.j83agx80.i09qtzwb.cwj9ozl2.datstx6m').forEach(function (Item) {
        Item.style.height = "25rem";
        Item.style.bottom = String(50 - Number(position)) + 'vh';
        Item.style.opacity = transparency;
      })
    } else {
      document.querySelectorAll('.j83agx80.cbu4d94t.bkyfam09').forEach(function (Item) {
        Item.style.marginTop = position + 'vh';
        Item.style.height = "25rem";
        Item.style.opacity = transparency;
      })
    }
  }
  document.querySelectorAll('.ll8tlv6m.j83agx80.pfnyh3mw.i1fnvgqd.tr9rh885.wkznzc2l.sjgh65i0.dhix69tm').forEach(function (Item) {
    Item.addEventListener('click', function () {
      positionChange()
    })
  });
  positionChange();
  document.querySelectorAll('*[role="complementary"]').forEach(function (Item) {
    Item.style.flexShrink = "5000";
  })
  document.querySelectorAll('body').forEach(function (Item) {
    Item.style.overflow = 'hidden';
  })
  document.querySelectorAll('.l9j0dhe7.tkr6xdv7.buofh1pr.eg9m0zos').forEach(function (Item) {
    Item.style.overflowX = 'hidden';
  })
  document.querySelectorAll('.bp9cbjyn.i09qtzwb.jeutjz8y.j83agx80.btwxx1t3.pmk7jnqg.dpja2al7.pnx7fd3z.e4zzj2sf.k4urcfbm.tghn160j').forEach(function (Item) {
    Item.style.width = 'calc( 100% - 22rem )';
  })
  let FullscreenBtn = settingData["Facebook"]["Static"]["FullscreenBtn"]
  get_last(FullscreenBtn["btn"] + "." + FullscreenBtn["on"]).onclick = function () {
    fullscreen()
  }

  function fullscreen() {
    let FullscreenBtn = settingData["Facebook"]["Static"]["FullscreenBtn"]
    document.querySelector('body').requestFullscreen();
    let a = get_last(FullscreenBtn["btn"] + "." + FullscreenBtn["on"]);
    a.classList.remove(FullscreenBtn["on"]);
    a.classList.add(FullscreenBtn["off"]);
    a.onclick = function () {
      exitfullscreen()
    }
  }

  function exitfullscreen() {
    let FullscreenBtn = settingData["Facebook"]["Static"]["FullscreenBtn"]
    document.exitFullscreen();
    let a = get_last(FullscreenBtn["btn"] + "." + FullscreenBtn["off"]);
    a.classList.remove(FullscreenBtn["off"]);
    a.classList.add(FullscreenBtn["on"]);
    a.onclick = function () {
      fullscreen()
    }
  }
  document.querySelectorAll('.cwj9ozl2.j83agx80.cbu4d94t.buofh1pr.ni8dbmo4.stjgntxs').forEach(function (Item) {
    Item.style.display = "contents";
  })
  bgnone('.pfnyh3mw.km676qkl.discj3wi.hv4rvrfc.ihqw7lf3.dati1w0a.du4w35lb.cwj9ozl2.lzcic4wl.btwxx1t3.j83agx80');
  resetFacebookA('*[data-pagelet="TahoeVideo"]');
};
const facebookVideoEvent = () => {
  if (document.querySelector(settingData["Facebook"]["UI"]["chat"]) !== null) {
    // Facebook Old UI(live)
    let fbui = settingData["Facebook"]["UI"]
    var fbDiv = createDIV(document.querySelector(fbui["video"]).parentElement);
    updateChatBox(fbui["chat"]);
    resetFacebookA(fbui["chat"]);
  } else if (document.querySelector(settingData["Facebook"]["UI_gamming"]["video"]) !== null) {
    // Facebook Old UI(gaming live)
    let fbui = settingData["Facebook"]["UI_gamming"]
    var fbDiv = createDIV(document.querySelector(fbui["video"]));
    updateChatBox(fbui["chat"]);
    resetFacebookA(fbui["video"]);
  } else if (document.querySelector(settingData["Facebook"]["NewUI_gamming"]["chat"]) !== null) {
    // Facebook New UI(gaming live)
    let fbui = settingData["Facebook"]["NewUI_gamming"]
    var fbDiv = createDIV(get_last(fbui["video"]).parentElement);
    updateChatBox(fbui["chat"]);
    resetFacebookA(fbui["chat"]);
  } else {
    // Facebook New UI(live)
    let fbui = settingData["Facebook"]["NewUI"]
    var fbDiv = createDIV(get_last(fbui["video"]).parentElement);
    updateChatBox(fbui["chat"]);
    resetFacebookA(fbui["chat"]);
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
  createDIV(document.querySelector(settingData["YouTube"]["video"]));
  iF("popupChatIF", settingData["YouTube"]["chat"].replace("${loadPageVar('v')}", loadPageVar('v')));
  resetA(window.location.href);
};
const twLiveEvent = () => {
  createDIV(document.querySelector(settingData["Twitch"]["video"].split("'").join('"')));
  iF("popupChatIF", settingData["Twitch"]["chat"].replace("${window.location.pathname}", window.location.pathname));
  resetA(window.location.href);
}
const reset = () => {
  location.reload();
};
const onMessage = (message) => {
  transparency = message.transparency;
  settingData = message.settingData;
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