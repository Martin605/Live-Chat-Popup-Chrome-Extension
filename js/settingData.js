// var temp = {}
// $.getJSON('https://martin605.github.io/Live-Chat-Popup/json/setting.json', function (data) {
//   temp = data;
// });

function generatSettingData(action) {
    var output = {
      'action': action,
      'position': "0",
      'transparency': parseInt(localStorage.getItem('transparency')) / 10 || "0.8",
      'background_transparency': localStorage.getItem('background_transparency') / 10 || "0",
      'transparency_type': localStorage.getItem('transparency_type') || "false",
      'settingData': {
        "Twitch":{
          "video":"*[data-test-selector='video-player__video-container']",
          "chat":"https://www.twitch.tv/popout${window.location.pathname}/chat?popout="
           },
        "YouTube":{
          "video":"#movie_player",
          "chat":"https://www.youtube.com/live_chat?is_popout=1&v=${loadPageVar('v')}"
          }
        }
    };
    var potitionsetting = localStorage.getItem('position') || "3";
    if (potitionsetting == '1') {
      output.position = "0"
    } else if (potitionsetting == '2') {
      output.position = "25"
    } else if (potitionsetting == '3') {
      output.position = "50"
    };
    output['settingData']['Size'] = {
      'w': (parseInt(localStorage.getItem('sizew')) || "30"),
      'h': (parseInt(localStorage.getItem('sizeh')) || "40")
    };
    switch (localStorage.getItem('transparency_type')) {
      case "full":
        break;
      case "hide_background":
        output['settingData']['css'] = {
          "youtube" : `/* Background colors*/
          body {
            overflow: hidden;
            
            background-color: rgba(25,25,25,${output.background_transparency});
          }
          /* Transparent background. */
          yt-live-chat-renderer {
            background-color: rgba(25,25,25,${output.background_transparency}) !important;
          }
          yt-live-chat-message-input-renderer,
          yt-live-chat-header-renderer,
          yt-live-chat-text-message-renderer,
          yt-live-chat-text-message-renderer[is-highlighted] {
            background-color: rgba(25,25,25,${output.background_transparency}) !important;
          }
          yt-live-chat-text-message-renderer[author-type="owner"],
          yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] {
            background-color: rgba(25,25,25,${output.background_transparency}) !important;
          }
          yt-live-chat-text-message-renderer[author-type="moderator"],
          yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] {
            background-color: rgba(25,25,25,${output.background_transparency}) !important;
          }
          yt-live-chat-text-message-renderer[author-type="member"],
          yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] {
            background-color: rgba(25,25,25,${output.background_transparency}) !important;
          }
          
          yt-live-chat-author-chip #author-name {
            background-color: rgba(25,25,25,${output.background_transparency}) !important;
          }
          /* Hide scrollbar. */
          yt-live-chat-item-list-renderer #items{
            overflow: hidden !important;
          }
          yt-live-chat-item-list-renderer #item-scroller{
            overflow: hidden !important;
          }`,
          "twitch":`body {
            background-color: rgba(24,24,24,${output.background_transparency}) !important;
            overflow: hidden;
        }
        .stream-chat-header,
        .tw-root--theme-light, 
        .tw-root--theme-dark,
        .tw-c-background-base,
        .tw-c-background-alt,
        .tw-c-background-alt-2,
        .stream-chat, 
        .chat-room {
            background-color: rgba(24,24,24,${output.background_transparency}) !important;
        }
        
        /* ----------------------------------------
         * Remove the header, scrollbar and footer section
         * ---------------------------------------- */
        .stream-chat-header.tw-flex,
        .channel-leaderboard,
        .chat-input.tw-block,
        .simplebar-track {
            display: none !important;
        }
        
        /* ----------------------------------------
         * Chat Container Spacing
         * ---------------------------------------- */
        .chat-list {
            padding: 20px;
            padding-bottom: 10px;
        }
        .chat-line__status,
        .chat-line__moderation, 
        .chat-line__message {
            padding: 6px 4px !important;
        }
        
        /* ----------------------------------------
         * Chat Font Size, Color
         * CSS-Based Outside Stroke: https://www.petercarrero.com/examples/stroke/
         * ---------------------------------------- */
        .chat-line__status[data-a-target="chat-welcome-message"] {
            display: none;
        }
        .user-notice-line p,
        .chat-line__status,
        .chat-line__moderation, 
        .chat-line__message {
            color: #e7e7e7 !important;
        }
        a {
            color: #0fa5e5 !important;
        }
        .chat-author__intl-login {
            opacity: 1;
        }`
        }
        break;
      case "only_message":
        output['settingData']['css'] = {
          "youtube" : `/* Background colors*/
          body {
            overflow: hidden;
            background-color: rgba(0,0,0,0);
          }
          /* Transparent background. */
          yt-live-chat-renderer {
            background-color: transparent !important;
          }
          yt-live-chat-text-message-renderer,
          yt-live-chat-text-message-renderer[is-highlighted] {
            background-color: transparent !important;
          }
          yt-live-chat-text-message-renderer[author-type="owner"],
          yt-live-chat-text-message-renderer[author-type="owner"][is-highlighted] {
            background-color: transparent !important;
          }
          yt-live-chat-text-message-renderer[author-type="moderator"],
          yt-live-chat-text-message-renderer[author-type="moderator"][is-highlighted] {
            background-color: transparent !important;
          }
          yt-live-chat-text-message-renderer[author-type="member"],
          yt-live-chat-text-message-renderer[author-type="member"][is-highlighted] {
            background-color: transparent !important;
          }
          
          yt-live-chat-author-chip #author-name {
            background-color: transparent !important;
          }
          /* Outlines */
          yt-live-chat-renderer * {
            text-shadow: -2px -2px #000000,-2px -1px #000000,-2px 0px #000000,-2px 1px #000000,-2px 2px #000000,-1px -2px #000000,-1px -1px #000000,-1px 0px #000000,-1px 1px #000000,-1px 2px #000000,0px -2px #000000,0px -1px #000000,0px 0px #000000,0px 1px #000000,0px 2px #000000,1px -2px #000000,1px -1px #000000,1px 0px #000000,1px 1px #000000,1px 2px #000000,2px -2px #000000,2px -1px #000000,2px 0px #000000,2px 1px #000000,2px 2px #000000;
            font-size: 18px !important;
            line-height: 18px !important;
          }
          yt-live-chat-text-message-renderer #content,
          yt-live-chat-legacy-paid-message-renderer #content {
            overflow: initial !important;
          }
          /* Hide scrollbar. */
          yt-live-chat-item-list-renderer #items{
            overflow: hidden !important;
          }
          yt-live-chat-item-list-renderer #item-scroller{
            overflow: hidden !important;
          }
          /* Hide header and input. */
          yt-live-chat-header-renderer,
          yt-live-chat-message-input-renderer {
            display: none !important;
          }
          /* Reduce side padding. */
          yt-live-chat-text-message-renderer,
          yt-live-chat-legacy-paid-message-renderer {
              padding-left: 4px !important;
            padding-right: 4px !important;
          }
          yt-live-chat-paid-message-renderer #header {
              padding-left: 4px !important;
            padding-right: 4px !important;
          }
          /* Avatars. */
          yt-live-chat-text-message-renderer #author-photo,
          yt-live-chat-paid-message-renderer #author-photo,
          yt-live-chat-legacy-paid-message-renderer #author-photo {
            
            width: 24px !important;
            height: 24px !important;
            border-radius: 24px !important;
            margin-right: 6px !important;
          }
          /* Hide badges. */
          yt-live-chat-text-message-renderer #author-badges {
            display: none !important;
            vertical-align: text-top !important;
          }
          /* Timestamps. */
          yt-live-chat-text-message-renderer #timestamp {
            
            color: #999999 !important;
            font-size: 16px !important;
            line-height: 16px !important;
          }
          /* Badges. */
          yt-live-chat-text-message-renderer #author-name[type="owner"],
          yt-live-chat-text-message-renderer #author-name.owner,
          yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {
            color: #ffd600 !important;
          }
          yt-live-chat-text-message-renderer #author-name[type="moderator"],
          yt-live-chat-text-message-renderer #author-name.moderator,
          yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {
            color: #5e84f1 !important;
          }
          yt-live-chat-text-message-renderer #author-name[type="member"],
          yt-live-chat-text-message-renderer #author-name.member,
          yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {
            color: #0f9d58 !important;
          }
          /* Channel names. */
          yt-live-chat-text-message-renderer #author-name {
            color: #cccccc !important;
            font-size: 20px !important;
            line-height: 20px !important;
          }
          yt-live-chat-text-message-renderer #author-name::after {
            content: ":";
            margin-left: 2px;
          }
          /* Messages. */
          yt-live-chat-text-message-renderer #message,
          yt-live-chat-text-message-renderer #message * {
            color: #ffffff !important;
            font-size: 18px !important;
            line-height: 18px !important;
          }
          
          /* SuperChat/Fan Funding Messages. */
          yt-live-chat-paid-message-renderer #author-name,
          yt-live-chat-paid-message-renderer #author-name *,
          yt-live-chat-legacy-paid-message-renderer #event-text,
          yt-live-chat-legacy-paid-message-renderer #event-text * {
            color: #ffffff !important;
            font-size: 20px !important;
            line-height: 20px !important;
          }
          yt-live-chat-paid-message-renderer #purchase-amount,
          yt-live-chat-paid-message-renderer #purchase-amount *,
          yt-live-chat-legacy-paid-message-renderer #detail-text,
          yt-live-chat-legacy-paid-message-renderer #detail-text * {
            color: #ffffff !important;
            font-size: 18px !important;
            line-height: 18px !important;
          }
          yt-live-chat-paid-message-renderer #content,
          yt-live-chat-paid-message-renderer #content * {
            color: #ffffff !important;
            font-size: 18px !important;
            line-height: 18px !important;
          }
          yt-live-chat-paid-message-renderer {
            margin: 4px 0 !important;
          }
          yt-live-chat-legacy-paid-message-renderer {
            background-color: #0f9d58 !important;
            margin: 4px 0 !important;
          }
          yt-live-chat-text-message-renderer a,
          yt-live-chat-legacy-paid-message-renderer a {
            text-decoration: none !important;
          }
          yt-live-chat-text-message-renderer[is-deleted],
          yt-live-chat-legacy-paid-message-renderer[is-deleted] {
            display: none !important;
          }
          yt-live-chat-ticker-renderer {
            background-color: transparent !important;
            box-shadow: none !important;
          }
          
          yt-live-chat-ticker-paid-message-item-renderer,
          yt-live-chat-ticker-paid-message-item-renderer *,
          yt-live-chat-ticker-sponsor-item-renderer,
          yt-live-chat-ticker-sponsor-item-renderer * {
            color: #ffffff !important;
          }
          yt-live-chat-mode-change-message-renderer, 
          yt-live-chat-viewer-engagement-message-renderer, 
          yt-live-chat-restricted-participation-renderer {
            display: none !important;
          }
          yt-live-chat-banner-manager {
            display: none !important;
          }
          @keyframes anim {
          0% { opacity: 0; }
          0.6578947368421052% { opacity: 1; transform: none;}
          99.3421052631579% { opacity: 1; transform: none;}
          100% { opacity: 0; }
          }
          yt-live-chat-text-message-renderer,
          yt-live-chat-legacy-paid-message-renderer {
            animation: anim 30400ms;
            animation-fill-mode: both;
          }
          
          yt-live-chat-action-panel-renderer, 
          yt-live-chat-renderer #action-panel {
            display: none !important;
          }`,
          "twitch":`body {
            color: #FFFFFF!important;
            margin: 0 auto!important;
            overflow: hidden!important;
            text-shadow:
                -1px -1px 1px #000000,
                -1px  1px 1px #000000,
                 1px -1px 1px #000000,
                 1px  1px 1px #000000!important;
        }
        
        html, body,
        .room-selector, .room-selector__header,
        .twilight-minimal-root, .tw-root--theme-light,
        .popout-chat-page, .chat-room, .tw-c-background-alt,
        .chat-container, .ember-chat-container {
            background: rgba(0,0,0,0)!important;
            background-color: rgba(0,0,0,0)!important;
        }
        
        /*
        Badge Removal
        To remove additional badge types - moderator, bits, etc - just make a copy of the one of the following badge selectors and replace the word inbetween the quotes with the hover text
        img.badge[alt="Broadcaster"],
        img.badge[alt="Moderator"],
        img.badge[alt="Subscriber"],*/
        img.badge[alt="Twitch Prime"],
        img.badge[alt="Turbo"],
        img.badge[alt="Verified"]
        {
            display: none!important;
        }
        
        /**
         * Remove the header section
         */
        .ember-chat .chat-room {
            top: 0!important;
        }
        
        .ember-chat .chat-header, .room-selector__header {
            display: none!important;
        }
        
        .ember-chat .chat-messages .chat-line.admin {
            display: none!important;
        }
        
        /**
         * Remove the footer section
         */
        
        .ember-chat .chat-room, .chat-input {
            display: none!important;
            bottom: -112px!important;
        }

        .chat-container, .ember-chat-container {
            color: #FFFFFF!important;
        }
        
        /**
         * Make the chat text white (optional) [thanks to @iggy12345]
        **/
        /*.chat-line__message {
            color: #FFFFFF;
        }*/
        
        /**
         * Small fix to remove the "Stream Chat" Header and the Gift/Cheer Leaderboard header
         * https://gist.github.com/Bluscream/83083d0cd483b3563b5e2b4d55519003#gistcomment-3803252
        **/
        .stream-chat-header, .channel-leaderboard {
          display: none !important;
        }`
        }
        break;
      default:
        output['settingData']['css'] = {"youtube":"","twitch":""};
        output.transparency = 1;
        break;
    }
    return output;
}