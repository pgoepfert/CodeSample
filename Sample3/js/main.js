$(function() {
	$(".fancybox").fancybox({
		'type': 'image'
	});
$(".recentWork img").hover(
	function () {
		var height = $(this).height();
		$(this).stop().animate({ marginTop: -(height - 100) }, 1000);
	},
	function () {
		$(this).stop().animate({ marginTop: "0px" }, 1000);
	});
});
/*var $th = $(this);
var height = $th.height();
function(){
	$th.stop().animate({marginTop:-(height - 100)}, 1000);
},
function(){
	$th.stop().animate({marginTop:'0px'}, 1000);
}
);*/