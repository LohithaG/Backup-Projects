<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>PDCAutomation</title>
<link rel="icon" type="image/png" href="./resources/images/mbb.png">
<link rel="stylesheet" type="text/css" href="./resources/css/style.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">


<script type="text/javascript" src="./resources/js/jquery.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.5.3/js/bootstrapValidator.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

<script type="text/javascript" src="./resources/js/addchecklist.js"></script>

<script type="text/javascript" src="./resources/js/productWarrenty.js"></script>


<script
	src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"></script>

<script type="text/javascript" src="./resources/js/editChecklist.js"></script>
<script type="text/javascript" src="./resources/js/validations.js"></script>

<script type="text/javascript" src="./resources/js/back.js"></script>


<script>
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
</script>
</head>
<body onload="noBack()">
	<sec:authorize access="hasRole('ROLE_ACCOUNTANT')">
		<script>
			$(document).ready(function() {
				$("#docketNumber").prop("disabled", true);
				$("#checklistDate").prop("disabled", true);
				$("#orderDate").prop("disabled", true);
				$("#dispatchDate").prop("disabled", true);
				$("#source").prop("disabled", true);
				$("#productName").prop("disabled", true);
				$("#productQuantity").prop("disabled", true);
				$("#productWarranty").prop("disabled", true);
				$("#msn").prop("disabled", true);
				$("#warrantyPeriod").prop("disabled", true);
				$("#modeOfPayment").prop("disabled", true);
				$("#courierProviderName").prop("disabled", true);
				$("#shipmentPrice").prop("disabled", true);
				$("#salesPrice").prop("disabled", true);
				$("#entryTax").prop("disabled", true);
				$("#addressVerification").prop("disabled", true);
				$("#checkPincode").prop("disabled", true);
				$("#customerImage").prop("disabled", true);
				$("#formName").prop("disabled", true);
				$("#dispatched").prop("disabled", true);

			});
		</script>

	</sec:authorize>

	<sec:authorize access="hasRole('ROLE_USER')">
		<script>
			$(document).ready(function() {
				$("#invoiceToAccountant").prop("disabled", true);
			});
		</script>

	</sec:authorize>

	<sec:authorize access="hasRole('ROLE_ADMIN')">
		<script>
			$(document).ready(function() {
				$("#invoiceToAccountant").prop("disabled", true);
			});
		</script>

	</sec:authorize>
	<sec:authorize access="hasRole('ROLE_VERIFIER')">
		<script>
			$(document).ready(function() {
				$("#invoiceToAccountant").prop("disabled", true);
			});
		</script>

	</sec:authorize>
	<div id="wrapper">
		<div id="page-wrapper" class="gray-bg">
			<jsp:include page="header.jsp" />
			<div class="row wrapper border-bottom white-bg page-heading">
				<div class="col-lg-10">

					<ol class="breadcrumb">
						<li><a href="home">Home</a></li>

						<li class="active"><strong>Edit ProductCheckList</strong></li>
					</ol>
				</div>
				<div class="col-lg-2"></div>
			</div>

			<div class="ibox float-e-margins">
				<div class="ibox-content">
					<div id="DataTables_Table_0_wrapper"
						class="dataTables_wrapper no-footer">

						<div id="successmessage"></div>
						<div id="updatesuccessmessage"></div>
						<div id="errorblock"></div>

						<form class="well form-horizontal" method="post" id="contact_form">

							<input type="hidden" id="refreshed" value="no">
							<!-- Form Name -->
							<legend>Product Checklist </legend>
							<input type="hidden" id="checklistId"
								value="${productData.checklistId}">
							<!-- Text input-->
							<div class="scroll">
								<div class="form-group">
									<label class="col-md-4 control-label">Order id</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-user"></i></span> <input name="orderId"
												placeholder="132627-262351" class="form-control" type="text"
												id="orderId" value="${productData.orderId}" disabled>
										</div>
										<div class="orderIdError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label">Docket number</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-user"></i></span> <input
												name="docketNumber" placeholder="132627-262351"
												class="form-control" type="text" id="docketNumber"
												value="${productData.docketNumber}">
										</div>
										<div class="docketNumberError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-4 control-label">Checklist date</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-calendar"></i></span> <input
												name="datepicker" placeholder="Please select date"
												class="form-control" type="text" id="checklistDate"
												value="${productData.checklistDate}">
										</div>
										<div class="checklistDateError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label">Order date</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-calendar"></i></span> <input
												name="datepicker1" placeholder="Please select date"
												class="form-control" type="text" id="orderDate"
												value="${productData.orderDate}">
										</div>
										<div class="orderDateError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label">Dispatch date</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-calendar"></i></span> <input
												name="datepicker2" placeholder="Please select date"
												class="form-control" type="text" id="dispatchDate"
												value="${productData.dispatchDate}">
										</div>
										<div class="dispatchDateError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<!-- Text input-->
								<div class="form-group">
									<label class="col-md-4 control-label"> Source</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-globe"></i></span> <input name="source"
												placeholder="Amazon" class="form-control" type="text"
												id="source" autocomplete="off" value="${productData.source}">
										</div>
										<div class="sourceError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-4 control-label">Product name</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-shopping-cart"></i></span> <input
												name="productName" placeholder="CONCENTRATOR"
												class="form-control" type="text" id="productName"
												value="${productData.productName}">
										</div>
										<div class="productNameError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<!-- Text input-->


								<div class="form-group">
									<label class="col-md-4 control-label">Product quantity
									</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-envelope"></i></span> <input
												name="productQuantity" placeholder="1" class="form-control"
												type="text" id="productQuantity"
												value="${productData.productQuantity}">
										</div>
										<div class="productQuantityError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-4 control-label">Product warranty
										availability </label>
									<div class="col-md-4 selectContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-list"></i></span> <select
												name="productWarranty" class="form-control selectpicker"
												id="productWarranty">

												<option value=" ">Please select your option</option>
												<option>Yes</option>
												<option>No</option>
											</select>
										</div>
										<div class="productWarrantyError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>
								<div class="form-group" id="pmsn">
									<label class="col-md-4 control-label">Product machine
										serial number</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-shopping-cart"></i></span> <input
												name="msn" placeholder="123" class="form-control"
												type="text" id="msn" value="${productData.msn}">
										</div>
										<div class="msnError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group" id="pwarrantyPeriod">
									<label class="col-md-4 control-label"> Product warranty
									</label>
									<div class="col-md-4 selectContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-list"></i></span> <select
												name="warrantyPeriod" class="form-control selectpicker"
												id="warrantyPeriod">
												<option selected>${productData.warrantyPeriod}</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>

											</select>
										</div>
										<div class="warrantyPeriodError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label"> Payment mode</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-globe"></i></span> <select
												name="modeOfPayment" class="form-control" type="text"
												id="modeOfPayment">
												<option selected>${productData.modeOfPayment}</option>
												<option>Online</option>
												<option>CashOnDelivery</option>
											</select>
										</div>
										<div class="modeOfPaymentError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>


								<div class="form-group">
									<label class="col-md-4 control-label">Courier Provider
										name</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-globe"></i></span> <input
												name="courierProviderName" placeholder="Ems/Fedex/Gatti"
												class="form-control" type="text" id="courierProviderName"
												value="${productData.courierProviderName}">
										</div>
										<div class="courierProviderNameError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label"> Shipment price</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-usd"></i></span> <input
												name="shipmentPrice" placeholder="45" class="form-control"
												type="text" id="shipmentPrice"
												value="${productData.shipmentPrice}">
										</div>
										<div class="shipmentPriceError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label"> Sales price</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-usd"></i></span> <input
												name="salesPrice" placeholder="45" class="form-control"
												type="text" id="salesPrice"
												value="${productData.salesPrice}">
										</div>
										<div class="salesPriceError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label"> Entry tax</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-usd"></i></span> <input name="entryTax"
												placeholder="45" class="form-control" type="text"
												id="entryTax" value="${productData.entryTax}">
										</div>
										<div class="entryTaxError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-md-4 control-label"> Check pincode </label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-map-marker"></i></span><select
												name="checkPincode" class="form-control selectpicker"
												id="checkPincode">
												<option>Please select your option</option>
												<option>Yes</option>
												<option>No</option>

											</select>
										</div>
										<div class="checkPincodeError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label">Whatsapp
										product image </label>
									<div class="col-md-4 selectContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-user"></i></span> <select
												name="customerImage" class="form-control selectpicker"
												id="customerImage">
												<option>Please select your option</option>
												<option>Yes</option>
												<option>No</option>

											</select>
										</div>
										<div class="customerImageError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label">Form name </label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-file"></i></span> <input name="formName"
												placeholder="Form Name" class="form-control" type="text"
												id="formName" value="${productData.formName}">
										</div>
										<div class="formNameError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>


								<div class="form-group">
									<label class="col-md-4 control-label"> Dispatch </label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-globe"></i></span><select
												name="dispatched" class="form-control selectpicker"
												id="dispatched">
												<option>Please select your option</option>
												<option>Yes</option>
												<option>No</option>

											</select>
										</div>
										<div class="dispatchedError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>


								<div class="form-group">
									<label class="col-md-4 control-label"> Invoice to the
										accountant</label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-globe"></i></span> <select
												name="invoiceToAccountant" class="form-control selectpicker"
												id="invoiceToAccountant">
												<option>Please select your option</option>
												<option>Yes</option>
												<option>No</option>

											</select>
										</div>
										<div class="invoiceToAccountantError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>

								<div class="form-group">
									<label class="col-md-4 control-label">Created by </label>
									<div class="col-md-4 inputGroupContainer">
										<div class="input-group">
											<span class="input-group-addon"><i
												class="glyphicon glyphicon-user"></i></span> <input name=""
												createdBy" placeholder="Enter user name"
												class="form-control" type="text" id="createdBy"
												value="${productData.createdBy}" disabled>
										</div>
										<div class="createdByError"
											style="color: rgba(255, 0, 0, 0.7); background-color: aliceblue; padding-right: 15px;"></div>
									</div>
								</div>



								<!-- Success message -->


								<!-- Button -->
								<div class="form-group">
									<label class="col-md-4 control-label"></label>
									<div class="col-md-4">
										<input type="button" class="btn btn-warning"
											id="editchecklist_submit" value="Save"> <span
											class="glyphicon glyphicon-send"
											style="position: absolute !important; color: white !important; left: 4.9em !important; top: 8px !important;"></span>

										<button type="button" class="btn btn-warning"
											style="background-color: #26ad28; border-color: #26ad28;"
											onclick="window.location.href='home'">
											Cancel&nbsp;<span class=" glyphicon glyphicon-home"></span>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<jsp:include page="footer.jsp" />
		</div>
	</div>
</body>
</html>
