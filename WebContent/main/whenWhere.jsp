<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", Arial, Helvetica, sans-serif}
</style>
<body class="w3-light-grey">

<!-- Navigation Bar -->
<div class="w3-bar w3-white w3-large">
  <a href="#" class="w3-bar-item w3-button w3-red w3-mobile"><i class="fa fa-bed w3-margin-right"></i>일정</a>
  <a href="#about" class="w3-bar-item w3-button w3-mobile">주의사항</a>
</div>
<!-- Header -->
<header class="w3-display-container w3-content" style="max-width:100%;">
<img class="w3-image" src="${pageContext.request.contextPath}/images/where.png" alt="The Hotel" style="width:100%; height=100%;">
  <div class="w3-display-left w3-padding w3-col l6 m8">
    <div class="w3-container w3-red">
      <h2><i class="fa fa-bed w3-margin-right"></i>날짜와 장소를 선택해주세요</h2>
    </div>
    <div class="w3-container w3-white w3-padding-16">
      <form action="${pageContext.request.contextPath}/cont" >
      <input type="hidden" name="command"  value="whenwhere">
        <div class="w3-row-padding" style="margin:0 -16px;">
          <div class="w3-half w3-margin-bottom">
            <label><i class="fa fa-calendar-o"></i> 날짜</label>
            <select name="spot" class="w3-input w3-border">
               <option value="spot1">오늘
                <option value="spot1">내일
                <option value="spot1">모레
            </select>
            
          </div>
          <div class="w3-half">
            <label><i class="fa fa-calendar-o"></i> 지역</label>
            <select name="spot" class="w3-input w3-border">
               <option value="spot1">서울
                <option value="spot1">인천
                <option value="spot1">부산
                <option value="spot1">광주
                <option value="spot1">대전
            </select>
                
          </div>
        </div>
        <div class="w3-row-padding" style="margin:8px -16px;">
          <div class="w3-half w3-margin-bottom">
            <label><i class="fa fa-male"></i> 성인</label>
            <input class="w3-input w3-border" type="number" value="1" name="Adults" min="1" max="6">
          </div>
        </div>
        <button class="w3-button w3-dark-grey" type="submit"><i class="fa fa-search w3-margin-right"></i> 매칭 시작</button>
      </form>
    </div>
  </div>
</header>
<hr>

<!-- Page content -->


  <div class="w3-row-padding" id="about">
    <div class="w3-col l4 m7">
      <h3><font color="red">주의사항</font></h3>
      <h6>1. 철저한 검증과 신뢰를 바탕으로 매칭이 이루어집니다.<br>
            2. 약속 일정을 어길시에 페널티가 적용됩니다.<br>
            3. 귀하의 잘못으로 일어난 불미스러운 사건은 당사가 책임지지 않습니다.<br><br><br>
            
            주소 : 서울특별시 종로구 새문안로5가길 32 <br>
            연락처 : 02-724-1114 <br>
            찾아오시는 길은 오른쪽 지도를 참고해주십시오
            
            
      </h6>
    <p>We accept: <i class="fa fa-credit-card w3-large"></i> <i class="fa fa-cc-mastercard w3-large"></i> <i class="fa fa-cc-amex w3-large"></i> <i class="fa fa-cc-cc-visa w3-large"></i><i class="fa fa-cc-paypal w3-large"></i></p>
    </div>
    <div class="w3-col l8 m5">
    <img class="w3-image" src="${pageContext.request.contextPath}/images/where3.png" alt="The Hotel" style="width:100%; height=100%;">
     <!--  <div id="googleMap" style="width:100%;height:400px;" class="w3-grayscale"></div>--> 
    </div>
  </div>
  

  <div class="w3-panel w3-red w3-leftbar w3-padding-32">
    <h6><i class="fa fa-info w3-deep-orange w3-padding w3-margin-right"></i> 문제가 생겼을시에 저희에게 연락을 주시면 신속히 처리해 드리겠습니다.</h6>
  </div>



<!-- End page content -->
</div>

<!-- Footer -->
<footer class="w3-padding-32 w3-black w3-center w3-margin-top">
  <h5>Find Us On</h5>
  <div class="w3-xlarge w3-padding-16">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
  <p>Powered by 사이 월드</a></p>
</footer>
<%
String id = (String)session.getAttribute("id");
String key = (String)session.getAttribute("key");
System.out.println("---------------------------------");
System.out.println("whenwhere 에까지는 session값 유지되나"+id);
System.out.println("whenwhere 에까지는 session값 유지되나"+key);

%>

</body>
</html>