$(function() {

	$('#checklistDate').datepicker({

		dateFormat : 'yy-mm-dd',
	});

});

$(function() {

	$('#orderDate').datepicker({
		dateFormat : 'yy-mm-dd',
	});

});
$(function() {

	$('#dispatchDate').datepicker({
		dateFormat : 'yy-mm-dd',
	});

});

$(document).ready(function() {
	$("#productWarranty").change(function() {
		toggleFields();

	});

});

function toggleFields() {
	if ($("#productWarranty").val() == 'No') {
		$("#year").hide();
	} else
		$("#year").show();

}

$(document)
		.ready(
				function() {

					$('#checklist_submit')
							.on(
									'click',
									function() {

										var checklistdate = $("#checklistDate")
												.val().split('-');
										var checklistDate = checklistdate[0]
												+ '-' + checklistdate[1] + '-'
												+ checklistdate[2]/* .slice(-2); */

										var orderdate = $("#orderDate").val()
												.split('-');
										var orderDate = orderdate[0] + '-'
												+ orderdate[1] + '-'
												+ orderdate[2]/* .slice(-2) */;

										var dispatchdate = $("#dispatchDate")
												.val().split('-');
										var dispatchDate = dispatchdate[0]
												+ '-' + dispatchdate[1] + '-'
												+ dispatchdate[2]/* .slice(-2) */;

										var orderId = $("#orderId").val();

										var docketNumber = $("#docketNumber")
												.val();
										var source = $("#source").val();
										var productName = $("#productName")
												.val();
										var productQuantity = $(
												"#productQuantity").val();
										var productWarranty = $(
												"#productWarranty").val();
										var msn = $("#msn").val();
										var warrantyPeriod = $(
												"#warrantyPeriod").val();
										var modeOfPayment = $("#modeOfPayment")
												.val();
										var courierProviderName = $(
												"#courierProviderName").val();
										var shipmentPrice = $("#shipmentPrice")
												.val();
										var salesPrice = $("#salesPrice").val();
										var entryTax = $("#entryTax").val();
										var checkPincode = $("#checkPincode")
												.val();
										var customerImage = $("#customerImage")
												.val();

										var formName = $("#formName").val();
										var dispatched = $("#dispatched").val();
										var createdBy = $("#createdBy").val();
										var invoiceToAccountant = $(
												"#invoiceToAccountant").val();

										if (productWarranty === "Yes") {
											productWarranty = true;
										} else {
											productWarranty = false;
										}

										if (checkPincode === "Yes") {
											checkPincode = true;
										} else {
											checkPincode = false;
										}

										if (customerImage === "Yes") {
											customerImage = true;
										} else {
											customerImage = false;
										}

										if (dispatched === "Yes") {
											dispatched = true;
										} else {
											dispatched = false;
										}

										if (invoiceToAccountant === "Yes") {
											invoiceToAccountant = true;
										} else {
											invoiceToAccountant = false;
										}

										var jsonParameter = {
											"orderId" : orderId,
											"docketNumber" : docketNumber,
											"checklistDate" : checklistDate,
											"orderDate" : orderDate,
											"dispatchDate" : dispatchDate,
											"source" : source,
											"productName" : productName,
											"productQuantity" : productQuantity,
											"productWarranty" : productWarranty,
											"msn" : msn,
											"warrantyPeriod" : warrantyPeriod,
											"modeOfPayment" : modeOfPayment,
											"courierProviderName" : courierProviderName,
											"shipmentPrice" : shipmentPrice,
											"salesPrice" : salesPrice,
											"entryTax" : entryTax,

											"checkPincode" : checkPincode,

											"customerImage" : customerImage,
											"formName" : formName,
											"dispatched" : dispatched,
											"invoiceToAccountant" : invoiceToAccountant,
											"createdBy" : createdBy,
											"status" : 0,

										};

										$
												.ajax({

													type : 'POST',
													contentType : 'application/json',
													url : 'addProductData',
													data : JSON
															.stringify(jsonParameter),

													success : function(result) {
														if (result.status == "SUCCESS") {
															successMsgFun(result.message);

															location.href = "home";

														} else {
															$(
																	'#checklist_submit')
																	.prop(
																			'disabled',
																			false);
														}
													}

												});

									});
				});

// show success message
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

function myFunction() {
	var finalAddress = [];
	var zipcode = document.getElementById("verifiedAdd").value;

	$
			.ajax({
				type : 'GET',

				url : 'http://maps.googleapis.com/maps/api/geocode/json?address='
						+ zipcode,

				success : function(result) {
					if (result.status == "OK") {
						var addressObject = result.results[0];
						var addressArray = addressObject.address_components;

						for (var i = 0; i < addressArray.length; i++) {
							var address = addressArray[i];
							finalAddress[i] = address.long_name;

						}
						console.log(finalAddress);
						function pdcFunc() {
							var x = finalAddress.toString()
							document.getElementById('addressVerification').innerHTML = x;
						}
						pdcFunc();

					} else {

					}
				}

			});

}
