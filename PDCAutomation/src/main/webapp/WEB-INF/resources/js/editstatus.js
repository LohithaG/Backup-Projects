$(document)
		.ready(
				function() {

					$('#accountant_submit')
							.on(
									'click',
									function() {

										var checklistId = $("#checklistId")
												.val();

										var checklistdate = $("#checklistDate")
												.val().split('-');
										var checklistDate = checklistdate[0]
												+ '-' + checklistdate[1] + '-'
												+ checklistdate[2];

										var orderdate = $("#orderDate").val()
												.split('-');
										var orderDate = orderdate[0] + '-'
												+ orderdate[1] + '-'
												+ orderdate[2];

										var dispatchdate = $("#dispatchDate")
												.val().split('-');
										var dispatchDate = dispatchdate[0]
												+ '-' + dispatchdate[1] + '-'
												+ dispatchdate[2];

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
											"checklistId" : checklistId,
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
											"status" : 2

										};

										$('#accountant_submit').prop(
												'disabled', true);

										$
												.ajax({
													type : 'PUT',
													contentType : 'application/json',
													url : 'updateProductData',
													data : JSON
															.stringify(jsonParameter),

													success : function(result) {
														if (result.status == "SUCCESS") {
															successMsgFun(result.message);
															location.href = "home";
														} else {
															$(
																	'#accountant_submit')
																	.prop(
																			'disabled',
																			false);
															failureMsgFun(result.message);
														}
													}

												});
									});
				});

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

$(document).ready(function() {

	if ('${productData.productWarranty}' == "false")
		$("#productWarranty").val('No');
	else
		$("#productWarranty").val('Yes');

	if ('${productData.customerImage}' == "false")
		$("#customerImage").val('No');
	else
		$("#customerImage").val('Yes');

	if ('${productData.dispatched}' == "false")
		$("#dispatched").val('No');
	else
		$("#dispatched").val('Yes');

	if ('${productData.invoiceToAccountant}' == "false")
		$("#invoiceToAccountant").val('No');
	else
		$("#invoiceToAccountant").val('Yes');

	if ('${productData.checkPincode}' == "false")
		$("#checkPincode").val('No');
	else
		$("#checkPincode").val('Yes');

});
