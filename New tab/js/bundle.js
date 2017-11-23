! function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s
}({
    1: [function(require, module, exports) {
        "use strict";

        function calculate(e, value) {
            if (calculatable && 13 === e.which && value.match(/\n/g).length < 20) {
                var arrayValue = value.split("\n"),
                    arrayLength = arrayValue.length;
                try {
                    isNaN(eval(arrayValue[arrayLength - 2])) || (arrayValue[arrayLength - 2].indexOf("+") > -1 || arrayValue[arrayLength - 2].indexOf("-") > -1 || arrayValue[arrayLength - 2].indexOf("*") > -1 || arrayValue[arrayLength - 2].indexOf("/") > -1) && (draftDom.value = draftDom.value.slice(0, -1) + "=" + eval(arrayValue[arrayLength - 2]) + "\n", ga("send", "event", "calculate", "enter", draftDom.value))
                } catch (err) {
                    ga("send", "event", "error", "calculateError", err)
                }
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = calculate
    }, {}],
    2: [function(require, module, exports) {
        "use strict";

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }

        function draftInteraction() {
            function saveDraft(id, value) {
                for (var noteListData = JSON.parse(localStorage.noteList), i = noteListData.length - 1; i >= 0; i -= 1)
                    if (noteListData[i].id === Number(id)) {
                        noteListData[i].text = value, noteListData[i].timeStamp = (new Date).getTime();
                        break
                    }
                localStorage.noteList = JSON.stringify(noteListData)
            }
            var _this = this;
            draftDom.onkeyup = function(e) {
                var value = e.target.value,
                    activeNoteListItem = d.querySelector(".noteListItem.active");
                if (activeNoteListItem) {
                    var id = activeNoteListItem.id;
                    saveDraft(id, value), (0, _calculate2["default"])(e, value, _this)
                } else {
                    var createdNotesCount = 1;
                    (0, _newNoteItem2["default"])(createdNotesCount)
                }
                d.querySelector(".noteListItem.active .noteListItem-text").innerText = value.split("\n")[0]
            }, draftDom.onclick = function() {
                (0, _initIconMenuInteraction.hideSettingsMenu)()
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = draftInteraction;
        var _calculate = require("./calculate"),
            _calculate2 = _interopRequireDefault(_calculate),
            _initIconMenuInteraction = require("./initIconMenuInteraction"),
            _newNoteItem = require("./newNoteItem"),
            _newNoteItem2 = _interopRequireDefault(_newNoteItem)
    }, {
        "./calculate": 1,
        "./initIconMenuInteraction": 8,
        "./newNoteItem": 17
    }],
    3: [function(require, module, exports) {
        "use strict";

        function getFontFamilyList() {
            chrome.fontSettings.getFontList(function(fontList) {
                var optionList = "";
                fontList.map(function(font) {
                    return optionList += '<option name="' + font.fontId + '">' + font.fontId + "</option>", !1
                }), d.querySelectorAll(".selector-fontFamily")[0].innerHTML = optionList
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = getFontFamilyList
    }, {}],
    4: [function(require, module, exports) {
        "use strict";
        ! function(i, s, o, g, r, a, m) {
            i.GoogleAnalyticsObject = r, i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date, a = s.createElement(o), m = s.getElementsByTagName(o)[0], a.async = 1, a.src = g, m.parentNode.insertBefore(a, m)
        }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-58674735-1", "auto"), ga("set", "checkProtocolTask", function() {}), ga("require", "displayfeatures"), ga("send", "pageview", "/index.html")
    }, {}],
    5: [function(require, module, exports) {
        "use strict";

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }

        function init() {
            Draft.noteList = localStorage.getItem("noteList"), Draft.draft = localStorage.getItem("draft"), Draft.draftCount = localStorage.getItem("draftCount"), Draft.rated = localStorage.getItem("rated"), Draft.log = localStorage.getItem("log_" + appVersion), Draft.fontFamily = localStorage.getItem("fontFamily"), Draft.fontSize = localStorage.getItem("fontSize"), Draft.fontColor = localStorage.getItem("fontColor"), Draft.fontColorPad = localStorage.getItem("fontColorPad"), Draft.backgroundColor = localStorage.getItem("backgroundColor"), Draft.backgroundColorPad = localStorage.getItem("backgroundColorPad"), Draft.bookmark = localStorage.getItem("bookmark"), (0, _initCustomization2["default"])(), (0, _initNoteList2["default"])(), (0, _initLog2["default"])(), (0, _logoInteraction2["default"])(), (0, _draftInteraction2["default"])(), (0, _initIconMenuInteraction.initIconMenuInteraction)()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = init;
        var _initCustomization = require("./initCustomization"),
            _initCustomization2 = _interopRequireDefault(_initCustomization),
            _initLog = require("./initLog"),
            _initLog2 = _interopRequireDefault(_initLog),
            _initNoteList = require("./initNoteList"),
            _initNoteList2 = _interopRequireDefault(_initNoteList),
            _initIconMenuInteraction = require("./initIconMenuInteraction"),
            _logoInteraction = require("./logoInteraction"),
            _logoInteraction2 = _interopRequireDefault(_logoInteraction),
            _draftInteraction = require("./draftInteraction"),
            _draftInteraction2 = _interopRequireDefault(_draftInteraction)
    }, {
        "./draftInteraction": 2,
        "./initCustomization": 6,
        "./initIconMenuInteraction": 8,
        "./initLog": 9,
        "./initNoteList": 10,
        "./logoInteraction": 14
    }],
    6: [function(require, module, exports) {
        "use strict";

        function initCustomization() {
            function initFontFamily() {
                null !== Draft.fontFamily && (draftDom.style.fontFamily = Draft.fontFamily)
            }

            function initFontSize() {
                null !== Draft.fontSize && (draftDom.style.fontSize = Draft.fontSize + "px")
            }

            function initFontColor() {
                null !== Draft.fontColor && (draftDom.style.color = Draft.fontColor, noteListMenuDom.style.color = Draft.fontColor, wrapperLogDom.style.color = Draft.fontColor, wrapperFeedbackDom.style.color = Draft.fontColor, menu.style.color = Draft.fontColor)
            }

            function initBackgroundColor() {
                null !== Draft.backgroundColor && (d.body.style.backgroundColor = Draft.backgroundColor, noteListMenuDom.style.backgroundColor = Draft.backgroundColor, wrapperLogDom.style.backgroundColor = Draft.backgroundColor, wrapperFeedbackDom.style.backgroundColor = Draft.backgroundColor, menu.style.backgroundColor = Draft.backgroundColor)
            }
            initFontFamily(), initFontSize(), initFontColor(), initBackgroundColor()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = initCustomization
    }, {}],
    7: [function(require, module, exports) {
        "use strict";

        function initCustomize() {
            function initFontFamily() {
                null !== Draft.fontFamily ? setTimeout(function() {
                    d.querySelectorAll('.selector-fontFamily option[name="' + Draft.fontFamily + '"]')[0].selected = "selected"
                }, 100) : setTimeout(function() {
                    d.querySelectorAll('.selector-fontFamily option[name="Arial"]')[0].selected = "selected"
                }, 100)
            }

            function initFontSize() {
                null !== Draft.fontSize && (d.querySelector(".fontSize-number").innerText = Draft.fontSize, d.querySelector(".fontSize-rangeChanger").value = Draft.fontSize)
            }

            function colorPadInition(colorPad) {
                if (null !== Draft[colorPad + "Pad"]) {
                    var colorPadDom = d.querySelector("." + colorPad),
                        colorPadItemDoms = colorPadDom.querySelectorAll(".colorPadItem"),
                        colorPadItemLength = colorPadItemDoms.length,
                        colorPadNumber = Draft[colorPad + "Pad"];
                    (0, _library.removeClass)(colorPadDom.querySelector(".colorPadItem.active"), "active"), (0, _library.addClass)(colorPadItemDoms[colorPadNumber], "active");
                    var activeColorPad = colorPadItemDoms[colorPadNumber];
                    Number(Draft[colorPad + "Pad"]) === colorPadItemLength - 1 && (activeColorPad.style.backgroundColor = Draft[colorPad], activeColorPad.nextElementSibling.value = Draft[colorPad])
                }
            }

            function initFontColor() {
                colorPadInition("fontColor")
            }

            function initBackgroundColor() {
                colorPadInition("backgroundColor")
            }
            initFontFamily(), initFontSize(), initFontColor(), initBackgroundColor()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = initCustomize;
        var _library = require("./library")
    }, {
        "./library": 12
    }],
    8: [function(require, module, exports) {
        "use strict";

        function initIconMenuInteraction() {
            menuIconList.addEventListener("click", function(e) {
                var target = e.target;
                if ((0, _library.hasClass)(target, "icon-noteList")) {
                    var noteListMenuDom = d.querySelector(".noteListMenu");
                    (0, _library.toggleClass)(noteListMenuDom, "active"), (0, _library.toggleClass)(iconNoteListDom, "active"), (0, _library.hasClass)(noteListMenuDom, "active") ? localStorage.noteListMenuStatus = 1: localStorage.noteListMenuStatus = 0, ga("send", "event", "iconNoteList", "click", appVersion)
                } else(0, _library.hasClass)(target, "icon-settings") ? ((0, _library.hasClass)(menu, "active") ? hideSettingsMenu() : ((0, _library.addClass)(menu, "active"), (0, _library.addClass)(iconSettingsDom, "active")), ga("send", "event", "iconSettings", "click", appVersion)) : (0, _library.hasClass)(target, "feedback") && ((0, _popover.showPopover)("feedback"), ga("send", "event", "iconFeedback", "click", appVersion))
            })
        }

        function hideSettingsMenu() {
            var menu = d.querySelector(".menu");
            if ((0, _library.hasClass)(menu, "active")) {
                var activeMenuItem = document.querySelector(".menuItem-list-item.groupItem.active");
                (0, _library.removeClass)(menu, "active"), (0, _library.removeClass)(iconSettingsDom, "active"), activeMenuItem && (0, _library.removeClass)(activeMenuItem, "active")
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.initIconMenuInteraction = initIconMenuInteraction, exports.hideSettingsMenu = hideSettingsMenu;
        var _popover = require("./popover"),
            _library = require("./library")
    }, {
        "./library": 12,
        "./popover": 20
    }],
    9: [function(require, module, exports) {
        "use strict";

        function initLog() {
            function setRated() {
                "true" !== Draft.rated && (null !== Draft.rated ? Number(Draft.draftCount) > 40 && (d.querySelector(".wrapperFeedback").style.display = "block") : localStorage.rated = !1)
            }

            function setLog() {
                null === Draft.log && (d.querySelector(".wrapperLog").style.display = "block")
            }
            setRated(), setLog()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = initLog
    }, {}],
    10: [function(require, module, exports) {
        "use strict";

        function initNoteList() {
            function init() {
                var noteItems = "",
                    noteList = Draft.noteList;
                if (null !== noteList && "[]" !== noteList) {
                    noteList = JSON.parse(noteList), noteList.sort(function(a, b) {
                        return b.timeStamp - a.timeStamp
                    });
                    for (var i = 0, l = noteList.length; l > i; i += 1) noteItems += '\n        <li class="noteListItem" id="' + noteList[i].id + '">\n          <div class="noteListItem-text">' + noteList[i].text + '</div>\n          <div class="noteListItem-deleteIcon">×</div>\n          <div class="noteListItem-deleteSquare">Delete</div>\n        </li>';
                    (0, _library.append)(noteListDom, noteItems), draftDom.value = noteList[0].text
                } else {
                    var text = "";
                    null !== Draft.draft && (text = Draft.draft), console.log(), draftDom.value = text;
                    var timeStamp = (new Date).getTime(),
                        newNoteList = [{
                            id: 1,
                            timeStamp: timeStamp,
                            text: text
                        }];
                    localStorage.noteList = JSON.stringify(newNoteList), localStorage.createdNotesCount = 1, localStorage.noteListMenuStatus = 1;
                    var newNoteItemHTML = '\n        <li class="noteListItem" id="1">\n          <div class="noteListItem-text">' + text + '</div>\n          <div class="noteListItem-deleteIcon">×</div>\n          <div class="noteListItem-deleteSquare">Delete</div>\n        </li>';
                    (0, _library.append)(noteListDom, newNoteItemHTML)
                }(0, _library.addClass)(d.querySelector(".noteListItem"), "active"), Number(localStorage.noteListMenuStatus) && ((0, _library.addClass)(noteListMenuDom, "active"), (0, _library.addClass)(iconNoteListDom, "active"))
            }

            function setDraftCount() {
                if (null !== Draft.draftCount) {
                    var draftCount = Number(Draft.draftCount);
                    draftCount += 1, localStorage.setItem("draftCount", draftCount)
                } else localStorage.setItem("draftCount", 1)
            }
            init(), setDraftCount()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = initNoteList;
        var _library = require("./library")
    }, {
        "./library": 12
    }],
    11: [function(require, module, exports) {
        "use strict";

        function fontFamily(value) {
            localStorage.setItem("fontFamily", value), ga("send", "event", "customize", "fontFamily", value)
        }

        function fontSize(value) {
            localStorage.setItem("fontSize", value), ga("send", "event", "customize", "fontSize", value)
        }

        function fontColor(value) {
            localStorage.setItem("fontColor", value), ga("send", "event", "customize", "fontColor", value)
        }

        function fontColorPad(value) {
            localStorage.setItem("fontColorPad", value)
        }

        function backgroundColor(value) {
            localStorage.setItem("backgroundColor", value), ga("send", "event", "customize", "backgroundColor", value)
        }

        function backgroundColorPad(value) {
            localStorage.setItem("backgroundColorPad", value)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.fontFamily = fontFamily, exports.fontSize = fontSize, exports.fontColor = fontColor, exports.fontColorPad = fontColorPad, exports.backgroundColor = backgroundColor, exports.backgroundColorPad = backgroundColorPad
    }, {}],
    12: [function(require, module, exports) {
        "use strict";

        function hasClass(target, className) {
            return target.className.indexOf(className) > -1
        }

        function addClass(target, className) {
            return target.className += " " + className, target
        }

        function removeClass(target, className) {
            var regex = new RegExp(className, "g");
            return target.className = target.className.replace(regex, "").trim(), target
        }

        function toggleClass(target, className) {
            var targetClassName = target.className;
            return hasClass(target, className) ? target.className = targetClassName.replace(className, "").trim() : target.className += " " + className, target
        }

        function remove(target) {
            return target.parentNode.removeChild(target), target
        }

        function isColor(value) {
            var hexColorRegex = /^#[0-9a-f]{3}([0-9a-f]{3})?$/,
                rgbColorRegex = /^rgb\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*\\)$/,
                rgbaColorRegex = /^rgba\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*((0.[1-9])|[01])\\s*\\)$/,
                hslColorRegex = /^hsl\\(\\s*(0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*\\)$/;
            return hexColorRegex.test(value) || rgbColorRegex.test(value) || rgbaColorRegex.test(value) || hslColorRegex.test(value)
        }

        function indexInSameClassName(node, className, parentNode) {
            for (var nodes = parentNode.getElementsByClassName(className), num = 0, i = 0; i < nodes.length; i += 1) {
                if (nodes[i] === node) return num;
                num += 1
            }
            return -1
        }

        function append(dom, html) {
            dom.insertAdjacentHTML("beforeend", html)
        }

        function prepend(dom, html) {
            dom.insertAdjacentHTML("afterbegin", html)
        }

        function getArrayItemById(array, id) {
            var elementPos = array.map(function(x) {
                return x.id
            }).indexOf(Number(id));
            return array[elementPos]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hasClass = hasClass, exports.addClass = addClass, exports.removeClass = removeClass, exports.toggleClass = toggleClass, exports.remove = remove, exports.isColor = isColor, exports.indexInSameClassName = indexInSameClassName, exports.append = append, exports.prepend = prepend, exports.getArrayItemById = getArrayItemById
    }, {}],
    13: [function(require, module, exports) {
        "use strict";

        function log() {
            var rateGood = function() {
                    ga("send", "event", "rate", "rateGood", Draft.draftCount), d.querySelector(".wrapperFeedback").style.opacity = "0";
                    var popoverRateGood = '<div class="popoverWrapper active fadeInDown"><div class="popover giveFiveStarPopover"><p class="popoverTip">Please give us a 5 Star Rating!</p><img src="img/slice/5star.png" alt="" class="fiveStar scaleOutIn"></div></div>';
                    d.body.insertAdjacentHTML("beforeend", popoverRateGood), localStorage.rated = !0, setTimeout(function() {
                        location.href = "https://chrome.google.com/webstore/detail/new-tab-draft/nmfjkeiebceinkbggliapgfdjphocpdh/reviews"
                    }, 1300)
                },
                rateBad = function() {
                    ga("send", "event", "rate", "rateBad", Draft.draftCount), localStorage.rated = !0, d.getElementById("rateBad").style.display = "none", d.getElementById("rateGood").style.display = "none", d.querySelector(".inputFeedbackBad").style.display = "block", d.querySelector(".submitFeedbackBad").style.display = "block"
                },
                submitFeedbackBad = function() {
                    var inputFeedbackBadValue = d.querySelector(".inputFeedbackBad").value,
                        wrapperFeedback = d.querySelector(".wrapperFeedback");
                    ga("send", "event", "feedback-fromRateSurvey", inputFeedbackBadValue, appVersion), wrapperFeedback.innerHTML = "<p>Thanks for letting us know! We'll try and get it fixed as soon as possible.</p>", setTimeout(function() {
                        wrapperFeedback.style.opacity = 0
                    }, 2e3), localStorage.rated = !0
                },
                showNewDesign = function() {
                    (0, _library.addClass)(menuIconList, "active shining"), setTimeout(function() {
                        (0, _library.removeClass)(menuIconList, "active shining")
                    }, 5e3)
                },
                showLogo = function() {
                    (0, _library.addClass)(logoDom, "shining"), setTimeout(function() {
                        (0, _library.removeClass)(logoDom, "shining")
                    }, 5e3)
                },
                closeLog = function() {
                    var wrapperLogDom = d.querySelector(".wrapperLog");
                    ga("send", "event", "closeLog", "click", appVersion), (0, _library.addClass)(wrapperLogDom, "fadeOutUpShort"), setTimeout(function() {
                        (0, _library.remove)(wrapperLogDom)
                    }, 500), localStorage.setItem("log_" + appVersion, !0)
                };
            d.querySelector(".messageArea").addEventListener("click", function(e) {
                var target = e.target;
                "rateGood" === target.id ? rateGood() : "rateBad" === target.id ? rateBad() : (0, _library.hasClass)(target, "submitFeedbackBad") ? submitFeedbackBad() : (0, _library.hasClass)(target, "closeLog") ? closeLog() : (0, _library.hasClass)(target, "logTest-blur") ? ((0, _noBehaveProtect.blurDraft)(), ga("send", "event", "logTest", "blur", appVersion)) : (0, _library.hasClass)(target, "logTest-FacebookPage") ? ga("send", "event", "logTest", "facebookPage", appVersion) : (0, _library.hasClass)(target, "logTest-GooglePlus") ? ga("send", "event", "logTest", "googlePlus", appVersion) : (0, _library.hasClass)(target, "logTest-newDesign") ? (showNewDesign(), ga("send", "event", "logTest", "newDesign", appVersion)) : (0, _library.hasClass)(target, "logTest-logo") && (showLogo(), ga("send", "event", "logTest", "logo", appVersion))
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = log;
        var _library = require("./library"),
            _noBehaveProtect = require("./noBehaveProtect")
    }, {
        "./library": 12,
        "./noBehaveProtect": 18
    }],
    14: [function(require, module, exports) {
        "use strict";

        function logoInteraction() {
            logoDom.addEventListener("click", function() {
                ga("send", "event", "logo", "click", appVersion)
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = logoInteraction
    }, {}],
    15: [function(require, module, exports) {
        "use strict";

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }
        var _ga = require("./ga"),
            _variables = (_interopRequireDefault(_ga), require("./variables")),
            _menu = (_interopRequireDefault(_variables), require("./menu")),
            _menu2 = _interopRequireDefault(_menu),
            _init = require("./init"),
            _init2 = _interopRequireDefault(_init),
            _popover = require("./popover"),
            _noBehaveProtect = require("./noBehaveProtect"),
            _log = require("./log"),
            _log2 = _interopRequireDefault(_log),
            _noteList = require("./noteList"),
            _noteList2 = _interopRequireDefault(_noteList);
        (0, _init2["default"])(), (0, _menu2["default"])(), (0, _popover.popover)(), (0, _noBehaveProtect.noBehaveProtect)(), (0, _log2["default"])(), (0, _noteList2["default"])()
    }, {
        "./ga": 4,
        "./init": 5,
        "./log": 13,
        "./menu": 16,
        "./noBehaveProtect": 18,
        "./noteList": 19,
        "./popover": 20,
        "./variables": 25
    }],
    16: [function(require, module, exports) {
        "use strict";

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) return obj;
            var newObj = {};
            if (null != obj)
                for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
            return newObj["default"] = obj, newObj
        }

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }

        function menuInteraction() {
            var menu = d.getElementById("menu"),
                menuItemInteraction = function(target) {
                    var parentNode = target.parentNode;
                    if ((0, _library.hasClass)(target, "menuItem-title") && ga("send", "event", "menuItem", "click", target.innerText), (0, _library.hasClass)(target, "menuItem-title") && (0, _library.hasClass)(parentNode, "groupItem")) {
                        var activeMenuItem = d.querySelector(".menuItem.active");
                        activeMenuItem && (0, _library.removeClass)(d.querySelector(".menuItem.active"), "active"), (0, _library.toggleClass)(parentNode, "active")
                    } else if ((0, _library.hasClass)(target, "menuItem-list-title") && (0, _library.hasClass)(parentNode, "groupItem")) {
                        customizeLoaded === !1 && "Font & Background" === target.innerText && ((0, _fontFamilyList2["default"])(), (0, _initCustomize2["default"])(), customizeLoaded = !0);
                        var activeMenuListItem = d.querySelector(".menuItem-list.active");
                        activeMenuListItem && (0, _library.removeClass)(activeMenuListItem, "active"), (0, _library.toggleClass)(parentNode, "active")
                    }
                },
                fontFamilyInteraction = function(target) {
                    if ((0, _library.hasClass)(target, "selector-fontFamily")) {
                        var targetValue = target.value;
                        render.fontFamily(targetValue), inputData.fontFamily(targetValue)
                    }
                },
                rangeInputInteraction = function(target) {
                    if ((0, _library.hasClass)(target, "fontSize-rangeChanger")) {
                        var targetValue = target.value;
                        render.fontSize(targetValue), inputData.fontSize(targetValue)
                    }
                },
                removeClosestActiveColorPad = function(target) {
                    var activeItem = target.closest(".sublist-item").getElementsByClassName("colorPadItem active")[0];
                    (0, _library.removeClass)(activeItem, "active")
                },
                chooseColorInteraction = function(target) {
                    if ((0, _library.hasClass)(target, "colorPadItem") && !(0, _library.hasClass)(target, "active")) {
                        removeClosestActiveColorPad(target), (0, _library.addClass)(target, "active");
                        var targetValue = getComputedStyle(target).getPropertyValue("background-color"),
                            sublistTitle = target.closest(".sublist-item").getElementsByClassName("sublist-title")[0],
                            number = (0, _library.indexInSameClassName)(target, "colorPadItem", sublistTitle.parentNode),
                            name = sublistTitle.getAttribute("name");
                        render[name](target, targetValue), inputData[name](targetValue), inputData[name + "Pad"](number)
                    }
                },
                detectColorPad = function(target, className) {
                    var targetValue = target.value;
                    if ("colorPadInput" === className && (0, _library.isColor)(targetValue)) {
                        var colorPadItem = target.parentNode.getElementsByClassName("colorPadItem")[0];
                        colorPadItem.style.backgroundColor = targetValue, removeClosestActiveColorPad(target), (0, _library.addClass)(colorPadItem, "active");
                        var sublistTitle = target.closest(".sublist-item").getElementsByClassName("sublist-title")[0],
                            name = sublistTitle.getAttribute("name"),
                            number = sublistTitle.parentNode.getElementsByClassName("colorPadItem").length - 1;
                        render[name](target, targetValue), inputData[name](targetValue), inputData[name + "Pad"](number)
                    }
                },
                triggerColorPicker = function(target) {
                    (0, _library.hasClass)(target, "colorPadItem-customize") && target.nextElementSibling.nextElementSibling.click()
                },
                colorPickerInteraction = function(target) {
                    if ((0, _library.hasClass)(target, "colorPicker")) {
                        var targetValue = target.value,
                            sublistTitle = target.closest(".sublist-item").getElementsByClassName("sublist-title")[0],
                            name = sublistTitle.getAttribute("name"),
                            number = sublistTitle.parentNode.getElementsByClassName("colorPadItem").length - 1;
                        render[name](target, targetValue, "colorPicker"), inputData[name](targetValue), inputData[name + "Pad"](number)
                    }
                },
                saveDraft = function(target) {
                    (0, _library.hasClass)(target, "saveDraftItem") && (0, _saveFile2["default"])()
                },
                saveDraftShortcut = function() {
                    d.onkeydown = function(e) {
                        (e.metaKey || e.ctrlKey) && 83 === e.keyCode && (e.preventDefault(), d.querySelector(".saveDraftItem").click())
                    }
                };
            saveDraftShortcut();
            var shareTo = function(target) {
                    if ((0, _library.hasClass)(target, "shareItem")) {
                        var id = target.id;
                        share[id](), ga("send", "event", "share", "click", id)
                    }
                },
                moreShare = function(argument) {
                    var target = argument,
                        inputMoreShare = d.querySelectorAll(".input-more-share")[0],
                        inputMoreShareValue = inputMoreShare.value;
                    (0, _library.hasClass)(target, "submit-moreShare") && inputMoreShareValue.length > 0 && (share.sendMoreShare(inputMoreShareValue), inputMoreShare.value = "")
                },
                disableExtension = function(target) {
                    (0, _library.hasClass)(target, "disableExtensionItem") && (0, _popover.showPopover)("disableExtension")
                };
            menu.addEventListener("click", function(e) {
                var target = e.target;
                menuItemInteraction(target), triggerColorPicker(target), chooseColorInteraction(target), saveDraft(target), shareTo(target), moreShare(target), disableExtension(target)
            }), menu.addEventListener("input", function(e) {
                var target = e.target,
                    className = target.className;
                detectColorPad(target, className), rangeInputInteraction(target, className), colorPickerInteraction(target)
            }), menu.addEventListener("change", function(e) {
                var target = e.target,
                    className = target.className;
                fontFamilyInteraction(target, className)
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = menuInteraction;
        var _library = require("./library"),
            _saveFile = require("./saveFile"),
            _saveFile2 = _interopRequireDefault(_saveFile),
            _inputData = require("./inputData"),
            inputData = _interopRequireWildcard(_inputData),
            _renderCustomizeChange = require("./renderCustomizeChange"),
            render = _interopRequireWildcard(_renderCustomizeChange),
            _share = require("./share"),
            share = _interopRequireWildcard(_share),
            _popover = require("./popover"),
            _fontFamilyList = require("./fontFamilyList"),
            _fontFamilyList2 = _interopRequireDefault(_fontFamilyList),
            _initCustomize = require("./initCustomize"),
            _initCustomize2 = _interopRequireDefault(_initCustomize)
    }, {
        "./fontFamilyList": 3,
        "./initCustomize": 7,
        "./inputData": 11,
        "./library": 12,
        "./popover": 20,
        "./renderCustomizeChange": 21,
        "./saveFile": 22,
        "./share": 23
    }],
    17: [function(require, module, exports) {
        "use strict";

        function newNoteItem(createdNotesCount) {
            function addNewToDom() {
                var activeNoteListItem = d.querySelector(".noteListItem.active");
                activeNoteListItem && (0, _library.removeClass)(activeNoteListItem, "active");
                var newNoteItemHTML = '\n      <li class="noteListItem active" id=' + createdNotesCount + '>\n        <div class="noteListItem-text"></div>\n        <div class="noteListItem-deleteIcon">×</div>\n        <div class="noteListItem-deleteSquare">Delete</div>\n      </li>';
                (0, _library.prepend)(noteListDom, newNoteItemHTML), 1 !== createdNotesCount && (draftDom.value = "")
            }

            function addNewToLocalStorage() {
                var noteListData = JSON.parse(localStorage.noteList),
                    timeStamp = (new Date).getTime(),
                    newNote = {
                        id: createdNotesCount,
                        timeStamp: timeStamp,
                        text: ""
                    };
                noteListData.push(newNote), localStorage.noteList = JSON.stringify(noteListData), localStorage.createdNotesCount = createdNotesCount, draftDom.focus()
            }
            var noteListDom = d.querySelector(".noteList");
            ga("send", "event", "newNoteItem", "click", appVersion), addNewToDom(createdNotesCount), addNewToLocalStorage(createdNotesCount)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = newNoteItem;
        var _library = require("./library")
    }, {
        "./library": 12
    }],
    18: [function(require, module, exports) {
        "use strict";

        function noBehaveProtect() {
            var setNoBehaveProtect = function() {
                    noBehaveProtector = setInterval(blurDraft, 6e5)
                },
                resetNoBehaveProtect = function() {
                    clearInterval(noBehaveProtector), setNoBehaveProtect(), (0, _library.hasClass)(draftDom, "blurIn") && (0, _library.addClass)((0, _library.removeClass)(draftDom, "blurIn"), "blurOut")
                };
            d.addEventListener("mousemove", function() {
                resetNoBehaveProtect()
            }), d.addEventListener("keydown", function() {
                resetNoBehaveProtect()
            }), setNoBehaveProtect()
        }

        function blurDraft() {
            (0, _library.addClass)((0, _library.removeClass)(draftDom, "blurOut"), "blurIn"), clearInterval(noBehaveProtector)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.noBehaveProtect = noBehaveProtect, exports.blurDraft = blurDraft;
        var _library = require("./library"),
            noBehaveProtector = void 0
    }, {
        "./library": 12
    }],
    19: [function(require, module, exports) {
        "use strict";

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }

        function noteListInteraction() {
            function readNoteData(id) {
                for (var noteListData = JSON.parse(localStorage.noteList), i = noteListData.length - 1; i >= 0; i -= 1)
                    if (noteListData[i].id === Number(id)) {
                        draftDom.value = noteListData[i].text;
                        break
                    }
            }

            function deleteNote(id) {
                for (var noteListData = JSON.parse(localStorage.noteList), i = noteListData.length - 1; i >= 0; i -= 1) noteListData[i].id === Number(id) && (noteListData.splice(i, 1), localStorage.noteList = JSON.stringify(noteListData))
            }
            noteListMenuDom.addEventListener("click", function(e) {
                var target = e.target,
                    activeNoteListItem = d.querySelector(".noteListItem.active"),
                    id = target.parentNode.id;
                if ((0, _library.hasClass)(target, "noteListItem-text") && (readNoteData(id), (0, _library.removeClass)(activeNoteListItem, "active"), (0, _library.toggleClass)(target.parentNode, "active"), draftDom.focus()), (0, _library.hasClass)(target, "newNote")) {
                    var createdNotesCount = Number(localStorage.createdNotesCount) + 1;
                    (0, _newNoteItem2["default"])(createdNotesCount)
                }(0, _library.hasClass)(target, "noteListItem-deleteIcon") && ! function() {
                    deleteNote(id);
                    var parentNode = target.parentNode;
                    (0, _library.addClass)(parentNode, "shrink"), setTimeout(function() {
                        var isActive = (0, _library.hasClass)(parentNode, "active");
                        (0, _library.remove)(parentNode);
                        var firstNoteListItem = d.querySelector(".noteListItem");
                        if (isActive && firstNoteListItem) {
                            (0, _library.addClass)(firstNoteListItem, "active");
                            var noteList = JSON.parse(localStorage.noteList);
                            draftDom.value = (0, _library.getArrayItemById)(noteList, firstNoteListItem.id).text
                        }
                        firstNoteListItem || (draftDom.value = "", draftDom.focus())
                    }, 300)
                }()
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = noteListInteraction;
        var _library = require("./library"),
            _newNoteItem = require("./newNoteItem"),
            _newNoteItem2 = _interopRequireDefault(_newNoteItem)
    }, {
        "./library": 12,
        "./newNoteItem": 17
    }],
    20: [function(require, module, exports) {
        "use strict";

        function popover() {
            var closePopover = function(target) {
                    var dom = target.parentNode;
                    (0, _library.addClass)((0, _library.removeClass)(dom, "fadeInDown"), "fadeOutUp");
                    var popoverWrapper = dom.parentNode;
                    popoverWrapper.style.opacity = 0, setTimeout(function() {
                        (0, _library.removeClass)(dom, "fadeOutUp"), (0, _library.removeClass)(popoverWrapper, "active")
                    }, 1e3)
                },
                submitFeedback = function(target) {
                    var popoverFeedbackTextarea = d.querySelector(".popoverFeedbackTextarea"),
                        popoverFeedbackTextareaValue = popoverFeedbackTextarea.value,
                        popoverFeedbackContactValue = d.querySelector(".popoverFeedbackContact").value;
                    closePopover(target), popoverFeedbackTextarea.value = "", ga("send", "event", "feedback-fromFeedbackIcon", popoverFeedbackTextareaValue, popoverFeedbackContactValue)
                };
            d.querySelector(".popoverArea").addEventListener("click", function(e) {
                var target = e.target;
                (0, _library.hasClass)(target, "submitFeedback") && submitFeedback(target), (0, _library.hasClass)(target, "closePopover") && (ga("send", "event", "closePopover", "close", target.title), closePopover(target))
            })
        }

        function showPopover(name) {
            var dom = d.querySelector("." + name + "Popover"),
                popoverWrapper = dom.parentNode;
            (0, _library.addClass)(popoverWrapper, "active"), popoverWrapper.style.opacity = 1, (0, _library.addClass)(dom, "fadeInDown")
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.popover = popover, exports.showPopover = showPopover;
        var _library = require("./library")
    }, {
        "./library": 12
    }],
    21: [function(require, module, exports) {
        "use strict";

        function fontFamily(value) {
            draftDom.style.fontFamily = value
        }

        function fontSize(value) {
            draftDom.style.fontSize = value + "px", d.querySelector(".fontSize-number").innerText = value
        }

        function fontColor(target, value, colorPicker) {
            draftDom.style.color = value, noteListMenuDom.style.color = value, wrapperLogDom.style.color = value, wrapperFeedbackDom.style.color = value, menu.style.color = value, "colorPicker" === colorPicker && (target.previousElementSibling.value = value, target.previousElementSibling.previousElementSibling.style.backgroundColor = value)
        }

        function backgroundColor(target, value, colorPicker) {
            d.body.style.backgroundColor = value, noteListMenuDom.style.backgroundColor = value, wrapperLogDom.style.backgroundColor = value, wrapperFeedbackDom.style.backgroundColor = value, menu.style.backgroundColor = value, "colorPicker" === colorPicker && (target.previousElementSibling.value = value, target.previousElementSibling.previousElementSibling.style.backgroundColor = value)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.fontFamily = fontFamily, exports.fontSize = fontSize, exports.fontColor = fontColor, exports.backgroundColor = backgroundColor
    }, {}],
    22: [function(require, module, exports) {
        "use strict";

        function saveFile() {
            var textToSave = draftDom.value,
                textFileAsBlob = new Blob([textToSave], {
                    type: "text/plain"
                }),
                date = new Date,
                fileDate = date.toLocaleTimeString() + " " + date.toLocaleDateString(),
                fileNameToSaveAs = "Draft at " + fileDate,
                downloadLink = d.createElement("a");
            downloadLink.download = fileNameToSaveAs, downloadLink.innerHTML = "Download File", null != window.URL && (downloadLink.href = window.URL.createObjectURL(textFileAsBlob)), downloadLink.click()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = saveFile
    }, {}],
    23: [function(require, module, exports) {
        "use strict";

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                "default": obj
            }
        }

        function toTwitter() {
            var shareLink = d.createElement("a");
            shareLink.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(draftDom.value), shareLink.target = "_blank", shareLink.click()
        }

        function sendMoreShare(value) {
            ga("send", "event", "moreShare", "click", value), (0, _toast2["default"])("success", "Draft team has received your feedback :D")
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.toTwitter = toTwitter, exports.sendMoreShare = sendMoreShare;
        var _toast = require("./toast"),
            _toast2 = _interopRequireDefault(_toast)
    }, {
        "./toast": 24
    }],
    24: [function(require, module, exports) {
        "use strict";

        function toast(type, text) {
            "success" === type && (toastDom.innerText = text, (0, _library.addClass)((0, _library.removeClass)(toastDom, "moveUp"), "moveDown"), setTimeout(function() {
                (0, _library.addClass)((0, _library.removeClass)(toastDom, "moveDown"), "moveUp")
            }, 3e3))
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports["default"] = toast;
        var _library = require("./library")
    }, {
        "./library": 12
    }],
    25: [function(require, module, exports) {
        "use strict";
        window.d = document, window.wrapper = d.querySelector(".wrapper"), window.draftDom = d.querySelector(".draft"), window.menu = d.querySelector("#menu"), window.menuIconList = d.querySelector(".menuIconList"), window.iconNoteListDom = d.querySelector(".icon-noteList"), window.iconSettingsDom = d.querySelector(".icon-settings"), window.iconFeedbackDom = d.querySelector(".icon-feedback"), window.logoDom = d.querySelector(".logo"), window.wrapperLogDom = d.querySelector(".wrapperLog"), window.wrapperFeedbackDom = d.querySelector(".wrapperFeedback"), window.toastDom = d.querySelector(".toast"), window.noteListMenuDom = d.querySelector(".noteListMenu"), window.columnSelection = d.getElementById("columnSelection"), window.Draft = {}, window.calculatable = !0, window.customizeLoaded = !1, window.appVersion = chrome.app.getDetails().version, window.noteListDom = d.querySelector(".noteList")
    }, {}]
}, {}, [15]);