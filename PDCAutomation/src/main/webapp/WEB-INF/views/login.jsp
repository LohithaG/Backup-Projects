<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<!-- <META HTTP-EQUIV="REFRESH" CONTENT="5"> -->
<link rel="stylesheet" type="text/css" href="./resources/css/style1.css">
<link rel="icon" type="image/png" href="./resources/images/mbb.png">
<title>PDCAutomation</title>
<script type="text/javascript" src="./resources/js/back.js"></script>
</head>

<jsp:include page="header1.jsp" />
<!-- onload="noBack()" onload='document.loginForm.username.focus();' window.onbeforeunload='Navigate();' -->
<body>


	<style type="text/css">
body {
	overflow: hidden;
}
</style>
	<div id="login-box">
		<h3
			style="color: blue; font-family: verdana; font-size: 50; text-align: center">LOGIN
		</h3>

		<c:if test="${not empty error}">
			<div class="error">${error}</div>
		</c:if>
		<c:if test="${not empty msg}">
			<div class="msg">${msg}</div>
		</c:if>
		<form name='loginForm'
			action="<c:url value='j_spring_security_check' />" method='POST'>

			<table align="center">
				<tr>
					<td><b>Username:</b></td>
					<td><input type='text' name='username'></td>
				</tr>
				<tr>
					<td><b>Password:</b></td>
					<td><input type='password' name='password' /></td>
				</tr>
				<tr>
					<td><br></td>
					<td align="left"><br> <input name="submit" type="submit"
						class="btn-primary" value="Sign in" /></td>
				</tr>
			</table>

			<%--  <input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" />
 --%>
		</form>
		<jsp:include page="footer.jsp" />
	</div>

</body>
</html>

