$(document).ready(function() {
	pp_anchored_menu_fix();

	$(window).hashchange(pp_anchored_menu_fix);
});

function pp_anchored_menu_fix() {
	var url = $.url();
	//console.log(url.attr("path"));
	//console.log(url.attr("fragment"));

	$("ul.menu li a").each(function(index, a) {
		var link = purl(a);
		//console.log(link.attr("path"));
		//console.log(link.attr("fragment"));

		if (link.attr("path") === url.attr("path")) {
			if (link.attr("fragment") !== url.attr("fragment"))
				$(a).removeClass("active");
			else
				$(a).addClass("active");
		}
    });
}