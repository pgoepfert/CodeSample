$(document).ready(function () {
	if (!document.addEventListener) {
		$('input, textarea').placeholder();
	}
	$("#sampleForm").validationEngine('attach', {promptPosition:"centerRight"});

});