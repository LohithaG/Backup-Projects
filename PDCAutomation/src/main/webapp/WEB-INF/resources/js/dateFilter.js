var errorTitle = "<i class=\"fa fa-warning\"></i> ";
$(function() {

	$('#startDate').datepicker({
		dateFormat : 'yy-mm-dd',
	});

});
$(function() {

	$('#endDate').datepicker({
		dateFormat : 'yy-mm-dd',
	});

});

function validateForm() {

	var x = document.forms["myForm"]["startDate"].value;
	var y = document.forms["myForm"]["endDate"].value;
	var z = document.forms["myForm"]["filter"].value;

	var message = "";
	if (x == "" && y == "" && z == "none") {
		message = "select either start date, end date  or filter";

	}

	else if (x > y) {
		message = "start date is less than end date";

	}

	if (message != "") {

		$("#div_errorMessage").css('display', 'block');
		$("#div_errorMessage").html(errorTitle + message);

		return false;
	}
	return true;

}

function div_successMessage(content) {
	$('.ibox-content #DataTables_Table_0_wrapper .alert-success').remove();
	$('.ibox-content #DataTables_Table_0_wrapper .alert-danger').remove();
	var closeBtn = $('<button>').addClass('close').attr('type', 'button').attr(
			'data-dismiss', 'alert').attr('aria-hidden', 'true').append('x');
	var successDiv = $('<div>').addClass(
			'alert alert-success alert-dismissable').append(closeBtn).append(
			content);
	$('.ibox-content #DataTables_Table_0_wrapper').prepend(successDiv);
}

// show failure message
function div_errorMessage(content) {
	$('.ibox-content #DataTables_Table_0_wrapper .alert-success').remove();
	$('.ibox-content #DataTables_Table_0_wrapper .alert-danger').remove();
	var closeBtn = $('<button>').addClass('close').attr('type', 'button').attr(
			'data-dismiss', 'alert').attr('aria-hidden', 'true').append('x');
	var failureDiv = $('<div>')
			.addClass('alert alert-danger alert-dismissable').append(closeBtn)
			.append(content);
	$('.ibox-content #DataTables_Table_0_wrapper').prepend(failureDiv);
}
