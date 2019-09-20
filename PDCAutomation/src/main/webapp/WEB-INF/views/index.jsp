<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page session="true"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>PDCAutomation</title>

<link rel="stylesheet" type="text/css" href="./resources/css/style.css ">

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">

<link rel="icon" type="image/png" href="./resources/images/mbb.png">
<link rel="stylesheet" type="text/css"
	href="./resources/css/msgbox.css ">
<link rel="stylesheet" href="./resources/css/bootstrap.css">

<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css">

<script
	src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
<script type="text/javascript" src=" ./resources/js/jquery.js "></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- <script src="https://code.jquery.com/jquery-1.12.4.js"></script> -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script
	src="https://cdn.datatables.net/1.10.13/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="./resources/js/back.js"></script>
<script type="text/javascript" src="./resources/js/datatablesconfig.js "></script>


<script type="text/javascript" src="./resources/js/filter.js"></script>
<script type="text/javascript" src="./resources/js/dateFilter.js"></script>
<script type="text/javascript" src="./resources/js/msgbox.js"></script>
<script type="text/javascript" src="./resources/js/deleteCheckList.js"></script>

<script type="text/javascript" src="./resources/js/editChecklist.js"></script>

<script type="text/javascript" src="./resources/js/common.js"></script>
<script type="text/javascript" src="./resources/js/back.js"></script>

</head>

<body onload="noBack()">

	<sec:authorize access="hasRole('ROLE_USER')">
		<script>
			$(document).ready(function() {

				$(this).find('.btn.btn-danger').hide();
			});
		</script>

	</sec:authorize>
	<sec:authorize access="hasRole('ROLE_VERIFIER')">
		<script>
			$(document).ready(function() {
				$('#add_checklist').hide();
				/*  $('#download').hide(); */

			});
		</script>

	</sec:authorize>

	<sec:authorize access="hasRole('ROLE_ACCOUNTANT')">
		<script>
			$(document).ready(function() {
				/* $(this).find('.btn.btn-danger').hide(); */

				$('#add_checklist').hide();
				/* $('#download').hide(); */
			});
		</script>

	</sec:authorize>

	<sec:authorize access="hasRole('ROLE_ADMIN')">
		<script>
			$(document).ready(function() {

				/* $(this).find('.btn.btn-warning1').hide(); */

			});
		</script>

	</sec:authorize>


	<div id="wrapper">
		<div id="page-wrapper" class="gray-bg">
			<jsp:include page="header.jsp" />


			<div id="div_errorMessage" class="isa_error"
				style="display: none; background-color: antiquewhite; color: brown; padding-top: 6px; padding-bottom: 11px; padding-left: 127px; margin-right: 739px; margin-left: 66px;">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				<span id="errorMessage">${message}</span>
			</div>
			<div>
				<div>
					<a href="./Product checklist report"><button type="button"
							id="download" class="button">Download</button></a> <a
						style="text-align: right;" href="addCheckList" id="add_checklist"><button
							type="button" class="button">Add ProductCheckList</button></a>


				</div>
				<div>

					<br>
					<form action="getfilter" method="get" name="myForm"
						onsubmit="return validateForm()">
						<b> Start Date:</b> <input type="text" name="startDate"
							id="startDate"> &nbsp <b>End Date:</b> <input type="text"
							name="endDate" id="endDate"> <input type="hidden"
							id="refreshed" value="no"> <b>Filter:</b> <select
							name="filter" id="filter" onchange="changeFunc()">
							<option value="none">Select</option>
							<option value="create">Create</option>
							<option value="verify">Verify</option>
							<option value="approve">Approved</option>
						</select> <input type="submit" value="Apply" id="search_submit">
					</form>
					<div class="ibox float-e-margins" style="margin-bottom: 60px;">
						<div class="ibox-content">
							<div id="DataTables_Table_0_wrapper"
								class="dataTables_wrapper no-footer">
								<div id="successmessage"></div>
								<div id="updatesuccessmessage"></div>
								<div id="errorblock"></div>
								<br>
								<table id="productCheclists"
									class="table table-striped table-bordered table-hover dataTables-example dataTable dtr-inline display"
									cellspacing="0" width="95%">
									<thead>
										<tr>
											<!-- <th >CheckListId</th> -->
											<th>OrderId</th>
											<th>Product Name</th>

											<th>Checklist Date</th>

											<th>Details / Edit / Delete</th>
										</tr>
									</thead>
									<tbody>
										<c:forEach var="checkList" items="${allCheckList.checkLists}"
											varStatus="status">
											<%-- <input type="hidden" id="statusvalue" value="${checkList.status}"> --%>
											<sec:authorize access="hasRole('ROLE_USER')">
												<tr class="status">
													<%-- <td>${checkList.checklistId}</td> --%>
													<td>${checkList.orderId}</td>
													<td>${checkList.productName}</td>
													<td>${checkList.checklistDate}</td>
													<td>
														<button type="button" class="btn btn-info btn-md"
															onclick="updatelist('${checkList.checklistId}')"
															data-toggle="modal" title="View Checklist"
															data-target="#myModal"
															style="background-color: #06960a; border-color: #06960a;">
															<span class="glyphicon glyphicon-eye-open"></span>
														</button> <c:if test="${checkList.status==0}">
															<a
																href="editCheckList?checklistId=${checkList.checklistId}">
																<button type="button" class="btn btn-warning"
																	title="Edit Checklist" style="width: 39px !important;">
																	<span class="glyphicon glyphicon-edit"></span>
																</button>
															</a>

														</c:if> <c:if test="${checkList.status==1}">
															<a title="verified"> <img
																src="<%=request.getContextPath()%>/resources/images/verify.png"></img></a>
														</c:if> <c:if test="${checkList.status==2}">
															<a style="margin-right: 6px" title="Approved"> <img
																src="<%=request.getContextPath()%>/resources/images/invoice.jpg"></img>
															</a>

														</c:if> 
													</td>
												</tr>

											</sec:authorize>

											<sec:authorize access="hasRole('ROLE_ADMIN')">

												<tr class="status">
													<%-- <td>${checkList.checklistId}</td> --%>
													<td>${checkList.orderId}</td>
													<td>${checkList.productName}</td>
													<td>${checkList.checklistDate}</td>

													<td>
														<button type="button" class="btn btn-info btn-md"
															onclick="updatelist('${checkList.checklistId}')"
															data-toggle="modal" title="View Checklist"
															data-target="#myModal"
															style="background-color: #06960a; border-color: #06960a;">
															<span class="glyphicon glyphicon-eye-open"></span>
														</button> <a
														href="editCheckList?checklistId=${checkList.checklistId}">
															<button type="button" class="btn btn-warning"
																title="Edit Checklist" style="width: 39px !important;">
																<span class="glyphicon glyphicon-edit"></span>
															</button>
													</a>


														<button type="button" class="btn btn-danger"
															id="deletelist"
															onclick="deleteList('${checkList.checklistId}')"
															title="Delete Checklist">
															<span class="glyphicon glyphicon-trash"></span>
														</button> <c:if test="${checkList.status==1}">
															<a title="verified"> <img
																src="<%=request.getContextPath()%>/resources/images/verify.png"></img></a>
														</c:if> <c:if test="${checkList.status==2}">
															<a style="margin-right: 6px" title="Approved"> <img
																src="<%=request.getContextPath()%>/resources/images/invoice.jpg"></img>
															</a>

														</c:if>
													</td>
												</tr>

											</sec:authorize>

											<sec:authorize access="hasRole('ROLE_ACCOUNTANT')">

												<tr class="status">
													<%-- <td>${checkList.checklistId}</td> --%>
													<td>${checkList.orderId}</td>
													<td>${checkList.productName}</td>
													<td>${checkList.checklistDate}</td>

													<td>
														<button type="button" class="btn btn-info btn-md"
															onclick="updatelist('${checkList.checklistId}')"
															data-toggle="modal" title="View Checklist"
															data-target="#myModal"
															style="background-color: #06960a; border-color: #06960a;">
															<span class="glyphicon glyphicon-eye-open"></span>
														</button> <a
														href="editstatusCheckList?checklistId=${checkList.checklistId}">
															<button type="button" class="btn btn-warning"
																title="Edit Checklist" style="width: 39px !important;">
																<span class="glyphicon glyphicon-edit"></span>
															</button>
													</a>



													</td>
												</tr>

											</sec:authorize>

											<sec:authorize access="hasRole('ROLE_VERIFIER')">

												<tr class="status">
													<%-- <td>${checkList.checklistId}</td> --%>
													<td>${checkList.orderId}</td>
													<td>${checkList.productName}</td>
													<td>${checkList.checklistDate}</td>

													<td>
														<button type="button" class="btn btn-info btn-md"
															onclick="updatelist('${checkList.checklistId}')"
															data-toggle="modal" title="View Checklist"
															data-target="#myModal"
															style="background-color: #06960a; border-color: #06960a;">
															<span class="glyphicon glyphicon-eye-open"></span>
														</button> <a
														href="verifyCheckList?checklistId=${checkList.checklistId}">
															<button type="button" class="btn btn-warning"
																title="Edit Checklist" style="width: 39px !important;">
																<span class="glyphicon glyphicon-edit"></span>
															</button>
													</a>


														<button type="button" class="btn btn-danger"
															id="deletelist"
															onclick="deleteList('${checkList.checklistId}')"
															title="Delete Checklist">
															<span class="glyphicon glyphicon-trash"></span>
														</button>
													</td>
												</tr>

											</sec:authorize>
										</c:forEach>
									</tbody>
								</table>
								<div class="modal fade" id="myModal" role="dialog">
									<div class="modal-dialog">

										<!-- Modal content-->
										<div class="modal-content"
											style="width: 180%; margin-left: -38%;">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal">&times;</button>
												<h4 class="modal-title">Checklist</h4>
											</div>
											<div class="modal-body" style="background-color: whitesmoke;">
												<form id="view">
													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label">Order id</label> <input
																type="text" id="orderId" class="form-control">
														</div>
														<div class="col-xs-4">
															<label class=" control-label">Docket number</label> <input
																type="text" id="docketNumber" class="form-control">
														</div>
														<div class="col-xs-4">
															<label class=" control-label">Checklist date</label> <input
																type="text" id="checklistDate" class="form-control">
														</div>
													</div>
													<br>
													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label">Order date</label> <input
																type="text" id="orderDate" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Dispatch date</label> <input
																type="text" id="dispatchDate" class="form-control">
														</div>
														<div class="col-xs-4">
															<label class=" control-label"> Source</label> <input
																type="text" id="source" class="form-control">
														</div>
													</div>
													<br>
													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label"> Product name</label> <input
																type="text" id="productName" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Product quantity</label> <input
																type="text" id="productQuantity" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Product warranty</label> <input
																type="text" id="productWarranty" class="form-control">
														</div>
													</div>
													<br>
													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label">Product machine
																serial number</label> <input type="text" id="msn"
																class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Warranty period</label> <input
																type="text" id="warrantyPeriod" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Mode of payment</label> <input
																type="text" id="modeOfPayment" class="form-control">
														</div>
													</div>
													<br>
													<div class="row">

														<div class="col-xs-4">
															<label class=" control-label">Courier provider
																name</label> <input type="text" id="courierProviderName"
																class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Shipment price</label> <input
																type="text" id="shipmentPrice" class="form-control">
														</div>
														<div class="col-xs-4">
															<label class=" control-label">Sales price</label> <input
																type="text" id="salesPrice" class="form-control">
														</div>
													</div>
													<br>

													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label">Entry tax</label> <input
																type="text" id="entryTax" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Check pincode</label> <input
																type="text" id="checkPincode" class="form-control">
														</div>
														<div class="col-xs-4">
															<label class=" control-label">What's app product
																image</label> <input type="text" id="customerImage"
																class="form-control">
														</div>
													</div>
													<br>
													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label">Form name</label> <input
																type="text" id="formName" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Dispatch</label> <input
																type="text" id="dispatched" class="form-control">
														</div>

														<div class="col-xs-4">
															<label class=" control-label">Invoice to
																accountant</label> <input type="text" id="invoiceToAccountant"
																class="form-control">
														</div>
													</div>
													<br>
													<div class="row">
														<div class="col-xs-4">
															<label class=" control-label">Created by</label> <input
																type="text" id="createdBy" class="form-control">
														</div>
													</div>

												</form>
											</div>
											<div class="modal-footer" style="background-color: silver;">
												<button type="button" class="btn btn-default"
													style="background-color: #24de5e;" data-dismiss="modal">Close</button>
											</div>
										</div>

									</div>
								</div>
								<jsp:include page="footer.jsp" />
							</div>
</body>
</html>