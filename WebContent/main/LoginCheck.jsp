<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@page import="model.domain.PersonVO"%>
 <%@page import="model.PersonDAO"%> 
 <%@page import="java.util.ArrayList"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>



<%
/*  ArrayList<PersonVO> all = PersonDAO.selectIdPw();
System.out.println(session.getAttribute("id"));
System.out.println(all.get(0).getId());//jwy627
System.out.println(session.getAttribute("id").equals(all.get(0).getId()));
System.out.println("----------------------------------------------");
System.out.println(all.size());
System.out.println(session.getAttribute("pw"));
System.out.println(all.get(0).getPw());
session.getAttribute("pw").equals(all.get(0).getPw());  */
//session.getAttribute("id").equals(all.get(i).getId(0)));
//session.getAttribute("pw").equals(all.get(0).getPw());

/*  ArrayList<PersonVO> all = PersonDAO.selectIdPw();
for( int i=0; i<all.size();i++){
	if(session.getAttribute("id").equals(all.get(i).getId()) && session.getAttribute("pw").equals(all.get(i).getPw())){
		System.out.println("야 성공했다");
		request.getRequestDispatcher("SuccessView.jsp").forward(request,response);
		break;
	}else {
		//request.getRequestDispatcher("failView.html").forward(request,response);
		System.out.println("야 실패했다");	
	}
	
}     */

ArrayList<PersonVO> all = PersonDAO.selectIdPw();
Boolean flag = false;
for( int i=0; i<all.size();i++){
	if(session.getAttribute("id").equals(all.get(i).getId()) && session.getAttribute("pw").equals(all.get(i).getPw())){
		//System.out.println("야 성공했다");
		flag = true;
	}else{
	}
}    
	if(flag){
		System.out.println("야 성공했다");
		request.getRequestDispatcher("SuccessView.jsp").forward(request,response);
	}else {
		System.out.println("야 실패했다");	
		request.getRequestDispatcher("failView.jsp").forward(request,response);
	}




   



%>


<%-- <c:forEach items="${requestScope.data.id}" var="data1">
</c:forEach> --%>


<%-- <c:forEach items="${requestScope.data.id}" var="data1">
		<c:if test="${sessionScope.id}==${data1}">
		"ok"<br>
		</c:if>
	</c:forEach>
 --%>


</body>
</html>