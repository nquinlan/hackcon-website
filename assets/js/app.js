$(document).ready(function() {
	$(".more-down").click(function () {
		$('html, body').animate({ scrollTop: $("#about").offset().top }, "fast");
	})
});
