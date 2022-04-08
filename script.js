$(function () {
	var container = $(".whatsapp__container");
	var active = "whatsapp__container--active";

	$("#whatsapp").click(function (e) {
		e.stopPropagation();
		container.toggleClass(active);

		if (container.hasClass(active)) {
			$(document).click(function () {
				container.removeClass(active);
			});
		}
	});
});
