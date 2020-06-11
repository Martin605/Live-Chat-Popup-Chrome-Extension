var langList = ['en-US','zh-TW'];

function onLoad() {
    var lang = localStorage.getItem('lang') || navigator.language || navigator.userLanguage; 
    if (langList.indexOf(lang) < -1) {lang="en-US"}
    setLang(lang);
}

function setLang(langCode) {
    localStorage.setItem('lang', langCode);
    $("html").attr('lang', langCode)
    $.getJSON(chrome.extension.getURL(`lang/${langCode}.json`), function(data) {
        $("#lang").text(data.name)
        $("title").html(data["_title"]);
        $("[data-translate]").html(function () {
            var key = $(this).data("translate");
            if (data.hasOwnProperty(key)) {
                return data[key];
            }
        });
        $("[data-titletranslate]").attr("data-original-title",function () {
            var key = $(this).data("titletranslate");
            if (data.hasOwnProperty(key)) {
                return data[key];
            }
        });
    });
}
