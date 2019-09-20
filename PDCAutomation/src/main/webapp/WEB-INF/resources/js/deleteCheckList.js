function deleteList(checklistid) {

	var id = checklistid;

	$.MessageBox({
		buttonDone : "Yes",
		buttonFail : "No",
		message : "Are you sure,You want to delete this record!"
	}).done(function() {

		$.ajax({
			type : 'DELETE',

			url : 'deleteProductData?checklistId=' + id,

			success : function(result) {
				if (result.status == "SUCCESS") {
					successMsgFun(result.message);
					location.href = "home";
				} else {
					$('#deletechecklist_submit').prop('disabled', false);
					failureMsgFun(result.message);
				}
			}

		});

	}).fail(function() {

	});
}
function successMsgFun(content) {
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
function failureMsgFun(content) {
	$('.ibox-content #DataTables_Table_0_wrapper .alert-success').remove();
	$('.ibox-content #DataTables_Table_0_wrapper .alert-danger').remove();
	var closeBtn = $('<button>').addClass('close').attr('type', 'button').attr(
			'data-dismiss', 'alert').attr('aria-hidden', 'true').append('x');
	var failureDiv = $('<div>')
			.addClass('alert alert-danger alert-dismissable').append(closeBtn)
			.append(content);
	$('.ibox-content #DataTables_Table_0_wrapper').prepend(failureDiv);
}