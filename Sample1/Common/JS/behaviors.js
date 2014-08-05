jQuery(document).ready(function () {

	//Start Image Carousel code
	var ic = $('#banners'),
	 items = null,
	 insertBuffer = [],
	 item = null;

	function emptyCarouselBuffer() {
		insertBuffer.sort(function () { return 0.5 - Math.random(); });
		while (insertBuffer.length > 0) {
			$('#banners').append(insertBuffer.pop());
		}
	}

	if (ic) {
		items = $('.BannerOuterContent', ic).detach().toArray();
		var bannerlength = items.length;
		while (items.length > 0) {
			item = items.shift(); //Take first item off array

			//Does item match insert buffer?
			if (insertBuffer && insertBuffer[0]) {
				if ($(item).attr('title') === $(insertBuffer[0]).attr('title')) {
					//Match - add it to the buffer
					insertBuffer[insertBuffer.length] = item;
				}
				else {
					//No match. Dump the buffer
					emptyCarouselBuffer();

					//Add the item as the first entry in the new buffer.
					insertBuffer[insertBuffer.length] = item;
				}
			}
			else {
				insertBuffer[insertBuffer.length] = item;
			}
		}
		emptyCarouselBuffer();
		var imageCarousel = document.getElementById("banners");
		if (imageCarousel != null) {
			if (navigator.userAgent != "SITEARCHIVER" && bannerlength > 1) {
				$('#banners').scroller({ transition: 'fade', perPage: 1, itemClass: 'BannerOuterContent', leftButton: '<div id="left-button"><span>&laquo;</span></div>', rightButton: '<div id="right-button"><span>&raquo;</span></div>', dotCounter: true, auto: true, animateSpeed: SLIDE_SPEED, autoSpeed: SLIDE_DELAY });
			}
		}
	}
	//End Image Carousel code
	$("#bottomNav2 ul li:last").addClass("last");
	$(".HomepageNewsWrapper ul li:last-child div").addClass("last");
	//Start external link check

	$('a').each(function (index) {
		var TWsites = [
				'/',
				'#',
				'?',
				'mailto:',
				'javascript:',
				'triwest-dev.triwps.com',
				'triwest-qa.triwps.com',
				'triwestqa.triwps.com',
				'staging.triwest.com',
				'triwest.qualtrics.com',
				'www.triwest.com',
				'recruiter.triwest.com',
				'triwest.com',
				'triwest-dev',
				'triwest-qa',
				'netsub.triwest.com',
				'eSeminarList.aspx',
				'WebinarRegistration.aspx',
				'netsub-qa.triwest.com',
				'govt-qa.triwps.com',
				'govt.triwest.com',
				'searchresults.aspx',
				'secure.triwest.com',
				'SearchProvider.aspx',
				'triwest.server.tracorp.com',
				'DirectoryHelp.aspx',
				'Default.aspx',
				'ProviderDetails.aspx',
				'MakePayment.aspx',
				'AuthRefDetaill.aspx',
				'PaperlessPreferences.aspx',
				'../twmap',
		'm.triwest.com',
                'inbox.aspx'
				];

		if ($(this).attr("href") != undefined) {

			var fullLink = $(this).attr("href");
			var linkIs = $(this).attr("href");
			if (linkIs.startsWith("http://")) {
				var temp1 = linkIs.substring(7);
				if (temp1.indexOf("/") != -1) {

					linkIs = temp1.substring(0, temp1.indexOf("/"));
				}
				else {
					linkIs = temp1;
				}
			}
			else if (linkIs.startsWith("https://")) {
				var temp2 = linkIs.substring(8);
				if (temp2.indexOf("/") != -1) {
					linkIs = temp2.substring(0, temp2.indexOf("/"));
				}
				else {
					linkIs = temp2;
				}
			}
			else if (linkIs.startsWith("/")) {
				linkIs = linkIs.substring(0, 1);
			}
			else if (linkIs.startsWith("?")) {
				linkIs = linkIs.substring(0, 1);
			}
			else if (linkIs.startsWith("#")) {
				linkIs = linkIs.substring(0, 1);
			}
			else if (linkIs.startsWith("mailto:")) {
				linkIs = linkIs.substring(0, 7);
			}
			else if (linkIs.startsWith("javascript:")) {
				linkIs = linkIs.substring(0, 11);
			}
			else if (linkIs.startsWith("searchresults.aspx")) {
				linkIs = linkIs.substring(0, 18);
			}
			else if (linkIs.startsWith("eSeminarList.aspx")) {
				linkIs = linkIs.substring(0, 17);
			}
			else if (linkIs.startsWith("WebinarRegistration.aspx")) {
				linkIs = linkIs.substring(0, 24);
			}
			else if (linkIs.startsWith("SearchProvider.aspx")) {
				linkIs = linkIs.substring(0, 19);
			}
			else if (linkIs.startsWith("DirectoryHelp.aspx")) {
				linkIs = linkIs.substring(0, 19);
			}
			else if (linkIs.startsWith("Default.aspx")) {
				linkIs = linkIs.substring(0, 12);
			}
			else if (linkIs.startsWith("ProviderDetails.aspx")) {
				linkIs = linkIs.substring(0, 20);
			}
			else if (linkIs.startsWith("AuthRefDetaill.aspx")) {
				linkIs = linkIs.substring(0, 19);
			}
			else if (linkIs.startsWith("../twmap")) {
				linkIs = linkIs.substring(0, 8);
			}
			var baseUrl = linkIs;

			function objConv(a) {
				var o = {};
				for (var i = 0; i < a.length; i++) {
					o[a[i]] = '';
				}
				return o;
			}

			if (baseUrl in objConv(TWsites)) {
			} else {
				$(this).click(function (e) {
					e.preventDefault();
					document.getElementById('buttons').innerHTML = "<a class=\"btnBack\" href=\"" + fullLink + "\" id=\"btn_proceed\" title=\"Proceed\" target=\"_blank\" onclick=\"javascript:$.modal.close();\" onkeypress=\"javascript:$.modal.close();\">Proceed</a> <a class=\"btnBack\" title=\"Cancel\" onclick=\"javascript:$.modal.close();\" onkeypress=\"javascript:$.modal.close();\">Cancel</a>";
					//$("#btn_proceed").attr("href", fullLink);
					$("#ExitWarning").modal({
						overlayCss: { background: "#000000" },
						opacity: 70,
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
				});
			}
		}
	});

});