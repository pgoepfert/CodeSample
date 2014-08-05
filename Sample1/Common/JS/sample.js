// JScript File 

if (top.document.URL != self.document.URL && top.document.URL.indexOf('/en/secure/') == -1)
{
	parent.window.location = self.document.URL;
}


function doClearEmail(theText) {
	if (theText.value == theText.defaultValue) {
		theText.value = ""
	}
}
function doBackEmail(theText) {
	if (theText.value == "") {
		theText.value = "Your Email Address";
	}
}
function doClearSrch(theText) {
	if (theText.value == theText.defaultValue) {
		theText.value = ""
	}
}
function doBackSrch(theText) {
	if (theText.value == "") {
		theText.value = " Search";
	}
}
function provEnewsReg() {
	var emailAddress = document.getElementById("txtemail")
	window.location.href =  "/provider/providerEnewsRegistration/default.aspx?email=" + emailAddress.value;
}
function bookmark() {
	if (window.external) {
		window.external.AddFavorite("http://www.triwest.com/en/provider/", "TriWest.com Provider Connection")
	}
	else {
		alert("Sorry! Your browser doesn't support this function.");
	}
}

function saveToDesktop() {
	if (ActiveXObject) {
		// Create desktop shortcut 
		WshShell = new ActiveXObject("WScript.Shell");
		strDesktop = WshShell.SpecialFolders("Desktop");
		oShellLink = WshShell.CreateShortcut(strDesktop + "\\TriWest Provider Connection.lnk");
		oShellLink.TargetPath = "http://www.triwest.com/en/provider/";
		oShellLink.WindowStyle = 1;
		oShellLink.Description = "TriWest.com Provider Connection";
		oShellLink.WorkingDirectory = strDesktop;
		oShellLink.Save();
	}
}
function getUrl() {

document.getElementById("sendtofriend").href.innerHTML="mailto:?subject=TriWest%20Healthcare%20Alliance%20-%20Page Referred&#38;Body=" + window.location.href;
}
function externalLinks() {
	var LocPath1 = location.pathname;
	var LocPath2 = LocPath1.split("/");
	var LocPath = LocPath2[1];
	//document.write(LocPath2);

	if (LocPath == "") {
		LocPath = "corporate";
	}
	//alert(LocPath);
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		//alert(anchor.href);

		if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") {
			anchor.target = "_blank";
		}

		if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "frame") {
			var newLink = "/" + LocPath + '/frames.aspx?page=' + anchor.href;
			anchor.href = anchor.href.replace(anchor.href, newLink);
		}

		//alert(anchor.getAttribute("href") + "*" + anchor.pathname.replace("/","").substr(0,6) + "*" + anchor.getAttribute("rel"));
		if (anchor.getAttribute("href") && anchor.pathname.replace("/", "").substr(0, 6) == "unauth" && anchor.getAttribute("rel") != "external") {
			var newLink = "/" + LocPath + '/frames.aspx?page=' + anchor.href;
			anchor.href = anchor.href.replace(anchor.href, newLink);
		}
		// END FOR LOOP
	}
	// END IF
}

//FUNCTION TO AUTO-FIND TD HEIGHT & PLACE THAT HEIGHT ON DIV NAV
function doDivHeight() {
	var divNavs = new Array('interiorNav', 'conditionNav', 'healthyNav', 'healthyHomeNav', 'lifeNav', 'echoNav', 'familyNav', 'accountingNav', 'RecruiterNav', 'CorporateNav');

	//var divNav = document.getElementById('interiorNav');
	//var divNav2 = document.getElementById('conditionNav');

	var divTD = document.getElementById('rightMain').offsetHeight;
	for (i = 0; i < divNavs.length; i++) {
		var divNav = document.getElementById(divNavs[i]);
		if (divNav != null) {
			divNav.style.height = divTD + "px";
		}
	}

}
// END HEIGHT ON DIV


function changeFont(FontType) {
	var fontSize = '12px';
	var MaxFont = '21px';
	var MinFont = '9px';
	var divName = "";
	if (document.getElementById("Wrap") != undefined) { divName = 'Wrap'; }
	if (document.getElementById("Wrapper") != undefined) { divName = 'Wrapper'; }
	
	var fs = document.getElementById(divName).style.fontSize;

	fs = fontSize;
	switch (FontType) {
		case ("down"):
			document.getElementById(divName).style.fontSize = (isNaN(parseFloat(fs)) ? fontSize : (parseFloat(fs) - 2) + fs.substring(parseFloat(fs).toString().length));
			break;

		case ("up"):
			document.getElementById(divName).style.fontSize = (isNaN(parseFloat(fs)) ? fontSize : (parseFloat(fs) + 2) + fs.substring(parseFloat(fs).toString().length));
			break;

		case ("default"):
			document.getElementById(divName).style.fontSize = fontSize;

			break;
	}
}

function CallPrint(printDiv) {
	if (document.getElementById("Wrap") != undefined) { divName = 'Wrap'; }

	var prtContent = document.getElementById(divName);
	var WinPrint = window.open('', '', 'left=0,top=0,width=640,height=480,toolbar=0,scrollbars=1,status=0');
	WinPrint.document.write(prtContent.innerHTML + '\n<h5>Copyright 2011 - TriWest Healthcare Alliance</h5>');
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	//WinPrint.close();
	//prtContent.innerHTML=strOldOne;
}
function redirectToDropDownValue(id) {
	var selectedValue = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
	window.location.href = selectedValue;
}
//End user notification of site not supporting Opera & IE6 browsers
$(document).ready(function () {
	if (($.browser.msie && $.browser.version <= 6) || ($.browser.opera && $.browser.version > 0)) {
		$("#notifyUserHTML").show();
	}
});


