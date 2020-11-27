const $ = require("jquery");

$(document).ready(function () {
	$(".url-path-activable").each(function (_, e) {
		if (location.pathname.startsWith($(e).attr("href"))) {
			$(e).addClass("active");
		}
	});

	$("#back-button").on("click", function () {
		history.back();
	});

	$("#forward-button").on("click", function () {
		history.forward();
	});

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
});
