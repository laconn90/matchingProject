<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<font size ="5" color="#9933ff">축제 검색 결과</font><hr>


<button onclick="loadDoc()">축제 검색 기간</button>	
	<button onclick="loadDocPost()">만든이</button>
	
	<div id="demo"></div>
	
	
	<script type="text/javascript">
	// *비동기 요청 및 응답을 할 수 있는 js객체 (XHR)
	
		function loadDoc() {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) { // 응답완료 && 정상상태
					document.getElementById("demo").innerHTML = this.responseText;
				}
			};
			xhttp.open("GET", "ajaxTwo.jsp?name=2017.01.01 ~ 2017.12.31", true);
			xhttp.send();
		}
	
		function loadDocPost() {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) { // 응답완료 && 정상상태
					document.getElementById("demo").innerHTML = this.responseText;
				}
			};
			xhttp.open("POST", "ajaxTwo.jsp", true);
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //POST 방식일 때 꼭꼭꼭꼭꼭 사용할 것!!
			xhttp.send("name='Yieul', 'Wooyeong' all rights reserved. 2018.01.26 ");
		}
		
	</script>





	<script type="text/javascript" src="script/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=OcLe6gBkqdVz9U9fCiWj&submodules=geocoder"></script>
	<script>
      $.ajax({        
            url: 'PublicData.do',
            type: 'get',
            dataType: 'json',
            success: function(msg){
                console.log(msg.response.body.items.item);
                var myItem = msg.response.body.items.item;
                for(var i=0; i<myItem.length; i++){
                    var output = '';
                    console.log(myItem.length);
                    output += '<h3><font color="coral"> [ '+ (i+1) + '번째 서울 주요 축제 ]' +'</font></h3>';
                    output += '<h4><font color="#cc9900">'+ '장소</font> : '+myItem[i].addr1 + '<button onclick="mapLoad('+"'"+myItem[i].addr1+"'"+')">지도보기</button>'+'</h4>';
                    output += '<h4><font color="#cc9900">'+ '이름</font> : '+myItem[i].title+'</h4>';
                    output += '<h4><font color="#cc9900">'+ '연락처</font> : '+myItem[i].tel+'</h4>';
                    document.body.innerHTML += output;
                }
                
                
               
            }
        });
      
      
      
      </script>
      
    <script>
    function mapLoad(v){
      var map = new naver.maps.Map('map');
      var myaddress = v;// 도로명 주소나 지번 주소만 가능 (건물명 불가!!!!)
      naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          // 검색 결과 갯수: result.total
          // 첫번째 결과 결과 주소: result.items[0].address
          // 첫번째 검색 결과 좌표: result.items[0].point.y, result.items[0].point.x
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
          // 마커 표시
          var marker = new naver.maps.Marker({
            position: myaddr,
            map: map
          });
          // 마커 클릭 이벤트 처리
          naver.maps.Event.addListener(marker, "click", function(e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
          });
      });
    }
      </script>
      
<div id="map" style="width:40%;height:400px;"></div>

</body>
</html>