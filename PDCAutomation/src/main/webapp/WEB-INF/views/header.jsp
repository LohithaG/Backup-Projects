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
<link rel="stylesheet" type="text/css" href="./resources/css/style1.css">
<title>PDCAutomation</title>
</head>
<body>
	<header>
	<div>
		<div class="row">
			<div class="col-xs-6">
				<a href="home"><img
					src="<%=request.getContextPath()%>/resources/images/icon.png"></img></a>
			</div>

			<div class="col-xs-6">
				<c:if test="${pageContext.request.userPrincipal.name != null}">
					<h5
						style="text-align: right; margin: 60px 10px 0px 60px; color: #009900;">
						<b>Welcome : ${pageContext.request.userPrincipal.name} | <a
							href=<c:url value="/j_spring_security_logout"/>> Logout</a></b>
					</h5>
				</c:if>
			</div>
		</div>
	</header>
</body>
</html>