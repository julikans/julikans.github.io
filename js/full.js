$(function(){
	var effects = 'animated bounce';
	var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

	$('a.button').click(function() {
		$(this).addClass(effects).one(effectsEnd, function() {
			$(this).removeClass(effects);
		});
	});
});