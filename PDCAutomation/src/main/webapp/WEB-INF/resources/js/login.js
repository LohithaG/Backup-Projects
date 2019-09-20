function signin() {
	var username = $("#username").val();
	var password = $("#password").val();

	if ($("#sign").valid()) {

	} else {
		$(".error_login label").text("");
		return false;
	}

}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("signin").addEventListener("click", signin);
});

$(document).keypress(function(e) {
	if (e.which == 13) {
		signin();
	}
});

function centerLogin() {
	$('.account-wall-main').hide();
	$('.account-wall-main').css({
		position : 'absolute',
		left : ($(window).width() - $('.account-wall-main').outerWidth()) / 2,
		top : ($(window).height() - $('.account-wall-main').outerHeight()) / 2
	});
	setTimeout(function() {
		$('.account-wall-main').fadeIn('fast');
	}, 500);
}