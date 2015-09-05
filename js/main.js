$(function () {
    var template = _.template($("#level-template").html());

    $.getJSON('js/levels.json', function (data) {
	_.each(data.levels, function (level) {
	    $(".level-container").append(template(level));
	});
    });
});
