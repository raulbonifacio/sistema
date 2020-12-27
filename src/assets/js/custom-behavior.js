const $ = require("jquery");

$(document).ready(function () {
	$(".url-path-activable").each(function (_, e) {
		if (location.pathname.startsWith($(e).attr("href"))) {
			$(e).addClass("active");
		}
	});


	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
});
