$(function () {
    var template = _.template($("#level-template").html());
    var renderLevelsFromData = function (levels) {
	_.each(levels, function (level) {
	    $(".level-container").append(template(level));
	});

	$(".level").click(function () {
	    var $level = $(this);
	    var $details = $level.find(".level-details");
	    if ($details.is(":visible")) {
		$level.removeClass("active");
		$details.slideUp();
	    } else {
		$level.addClass("active");
		$details.slideDown();
	    }
	});
    }

    $.getJSON('js/levels.json', function (data) {
	renderLevelsFromData(data.levels);
    });
});
