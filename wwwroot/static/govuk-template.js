(function () {
    "use strict";
    var e = this;
    "undefined" == typeof e.GOVUK && (e.GOVUK = {}), GOVUK.cookie = function (e, t, s) {
        return void 0 !== t ? !1 === t || null === t ? GOVUK.setCookie(e, "", {
            days: -1
        }) : GOVUK.setCookie(e, t, s) : GOVUK.getCookie(e)
    }, GOVUK.setCookie = function (e, t, s) {
        void 0 === s && (s = {});
        var i = e + "=" + t + "; path=/";
        if (s.days) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * s.days * 60 * 60 * 1e3), i = i + "; expires=" + o.toGMTString()
        }
        "https:" == document.location.protocol && (i += "; Secure"), document.cookie = i
    }, GOVUK.getCookie = function (e) {
        for (var t = e + "=", s = document.cookie.split(";"), i = 0, o = s.length; i < o; i++) {
            for (var n = s[i];
                " " == n.charAt(0);) n = n.substring(1, n.length);
            if (0 === n.indexOf(t)) return decodeURIComponent(n.substring(t.length))
        }
        return null
    }
}).call(this),
    function () {
        "use strict";
        var e = this;
        "undefined" == typeof e.GOVUK && (e.GOVUK = {}), GOVUK.addCookieMessage = function () {
            var e = document.getElementById("global-cookie-message");
            e && null === GOVUK.cookie("seen_cookie_message") && (e.style.display = "block", GOVUK.cookie("seen_cookie_message", "yes", {
                days: 28
            }))
        }
    }.call(this),
    function () {
        "use strict";
        if (window.GOVUK && GOVUK.addCookieMessage && GOVUK.addCookieMessage(), document.querySelectorAll && document.addEventListener) {
            var e, t, s = document.querySelectorAll(".js-header-toggle");
            for (e = 0, t = s.length; e < t; e++) s[e].addEventListener("click", function (e) {
                e.preventDefault();
                var t = document.getElementById(this.getAttribute("href").substr(1)),
                    s = t.getAttribute("class") || "",
                    i = this.getAttribute("class") || ""; - 1 !== s.indexOf("js-visible") ? t.setAttribute("class", s.replace(/(^|\s)js-visible(\s|$)/, "")) : t.setAttribute("class", s + " js-visible"), -1 !== i.indexOf("js-hidden") ? this.setAttribute("class", i.replace(/(^|\s)js-hidden(\s|$)/, "")) : this.setAttribute("class", i + " js-hidden")
            })
        }
    }.call(this);