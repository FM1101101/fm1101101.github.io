! function (e, i) {
    "use strict";
    if (e.hasOwnProperty("lightwidget")) return !1;
    var t = function (e) {
        if (e.indexOf("{") > -1) return JSON.parse(e);
        var i = e.split(":");
        return {
            widgetId: i[2].replace("instansive_", "").replace("lightwidget_"),
            size: i[1]
        }
    };
    e.addEventListener("message", function (e) {
        if (-1 === ["lightwidget.com", "dev.lightwidget.com", "cdn.lightwidget.com", "instansive.com"].indexOf(e.origin.replace(/^https?:\/\//i, ""))) return !1;
        var r = t(e.data);
        if (r.size <= 0) return !1;
        [].forEach.call(i.querySelectorAll('iframe[src*="lightwidget.com/widgets/' + r.widgetId + '"],iframe[src*="instansive.com/widgets/' + r.widgetId + '"]'), function (e) {
            e.style.height = r.size + "px"
        })
    }, !1), e.lightwidget = {}
}(window, document);
