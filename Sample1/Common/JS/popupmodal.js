var ShowMeLater = "";
function AskMeLater() {
    ShowMeLater = true;
}
function runBeneMessage() {
    $("#popBeneMessage").modal({
        zIndex: 999,
        opacity: 70,
        overlayId: "overlay",
        containerId: "popBeneMessageContainer",
        closeHTML: "<a class=\"close\" href=\"#\" onclick=\"_gaq.push(['_trackEvent', 'be_popup_openletter', 'close_btn']);BeneMessage();\" onkeypress=\"_gaq.push(['_trackEvent', 'be_popup_openletter', 'close_btn']);BeneMessage();\" title=\"Close\"></a>",
        onOpen: function (dialog) {
            dialog.overlay.fadeIn("normal", function () {
                dialog.container.slideDown("normal", function () {
                    dialog.data.fadeIn("normal");
                });
            });
        },
        onClose: function (dialog) {
            dialog.data.fadeOut("normal", function () {
                dialog.container.slideUp("normal", function () {
                    dialog.overlay.fadeOut("normal", function () {
                        $.modal.close(); // must call this!

                    });
                });
            });
        }
    });
}
function runCutTheCord() {
    $('#CutTheCordModal').modal({
        zIndex: 999,
        opacity: 70,
        overlayId: 'overlay',
        containerId: 'CutTheCordModalContainer',
        closeHTML: '',
        onOpen: function (dialog) {
            dialog.overlay.fadeIn('normal', function () {
                dialog.container.slideDown('normal', function () {
                    dialog.data.fadeIn('normal');
                });
            });
        },
        onClose: function (dialog) {
            dialog.data.fadeOut('normal', function () {
                dialog.container.slideUp('normal', function () {
                    dialog.overlay.fadeOut('normal', function () {
                        $.modal.close(); // must call this!
                    });
                });
            });
        }
    });
}
function runProviderMessage() {
    $("#popProviderMessage").modal({
        zIndex: 999,
        opacity: 70,
        overlayId: "overlay",
        containerId: "popProviderMessageContainer",
        closeHTML: "<a class=\"close\" href=\"#\" onclick=\"ProviderModal();\" onkeypress=\"ProviderModal();\" title=\"Close\"></a>",
        onOpen: function (dialog) {
            dialog.overlay.fadeIn("normal", function () {
                dialog.container.slideDown("normal", function () {
                    dialog.data.fadeIn("normal");
                });
            });
        },
        onClose: function (dialog) {
            dialog.data.fadeOut("normal", function () {
                dialog.container.slideUp("normal", function () {
                    dialog.overlay.fadeOut("normal", function () {
                        $.modal.close(); // must call this!
                    });
                });
            });
        }
    });
}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }

    var domainName = document.domain.substring(document.domain.indexOf('.', 0));
    if (domainName == ".triwps.com" || domainName == ".triwest.com") {

        document.cookie = name + "=" + value + expires + "; path=/; domain=" + domainName;
    }
    else {
        document.cookie = name + "=" + value + expires + "; path=/;";
    }
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
function getMetaPortal() {
    var m = document.getElementsByTagName('meta');
    for (var i in m) {
        if (m[i].name == "portal") {
            return m[i].content;
        }
    }
}

function BeneMessage() {
    var visits = readCookie("seenBeneDecision");
    var cookieDate = new Date(readCookie("dateBeneDecision"));
    switch (visits) {
        case null:
            switch (getMetaPortal()) {
                case "BU":

                    createCookie("seenBeneDecision", "1", 60);
                    createCookie("dateBeneDecision", Date(), 60);

                    break;

                default:
                    break;
            }

            break;
    }
}
function ProviderModal() {

    var visits = readCookie("seenDataAccuracy");
    var cookieDate = new Date(readCookie("dateDataAccuracy"));
    if (visits == null) {
        if (getMetaPortal() == "PU") {

            if (ShowMeLater == true) {
                createCookie("seenDataAccuracy", "1", 5);
                createCookie("dateDataAccuracy", Date(), 5);
            }
            else {
                createCookie("seenDataAccuracy", "1", 60);
                createCookie("dateDataAccuracy", Date(), 60);
            }
        }

    }
}
function cookieModal() {
//    if (navigator.cookieEnabled == true) {
//        var url = window.location.pathname + window.location.search;

//        if (getMetaPortal() == "BU" && readCookie("seenBeneDecision") == null && (window.location.pathname == "/en/beneficiary/" || window.location.pathname == "/en/pagetypes/portal.aspx?id=5&epslanguage=en")) {
//            setTimeout("runBeneMessage()", 500);
//        }
//        if (getMetaPortal() == "PU" && readCookie('seenDataAccuracy') == null && (window.location.pathname.toLowerCase() == "/en/provider/" || url == "/en/PageTypes/Portal.aspx?id=28&epslanguage=en")) {
//            setTimeout("runCutTheCord()", 500);
//        }
 //   }

}