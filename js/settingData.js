var temp = {}
$.getJSON('https://martin605.github.io/Live-Chat-Popup/json/setting.json', function (data) {
  temp = data;
});

function generatSettingData(action) {
    var output = {
      'action': action,
      'position': "0",
      'transparency': parseInt(localStorage.getItem('transparency')) / 10 || "0.8",
      'settingData': temp
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
    return output;
}