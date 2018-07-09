<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>  
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta property="fb:app_id" content="330906607033709" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.waug.com/main/" />
<title>와그WAUG – Explore More.</title>

<link rel="shortcut icon" href="/images/favicon/FAVICON_WAUG_64.ico" type="image/x-icon">    
<script src="/js/locale_js.html"></script>
<script src="/js/define_js.html"></script>
<script>

if( W_DEFINE.W_AGENTS_URL.indexOf(location.hostname) > -1 ) { 
	if (location.protocol != "http:") location.href = "http:" + window.location.href.substring(window.location.protocol.length);
}
</script>

<!--  call css files begin  -->
<link href="${pageContext.request.contextPath}/css/jquery-ui.css" rel="stylesheet">
<!-- Bootstrap -->
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/datepicker3.css?ver=2" rel="stylesheet">
<link href="${pageContext.request.contextPath}/font-awesome/css/font-awesome.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/slick.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/slick-theme.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/gray.min.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/plugins/icheck-flat.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/plugins/star-rating.css" rel="stylesheet">

<!-- Custom styles for this template -->
<link href="${pageContext.request.contextPath}/css/styles.css?ver=2.40.11" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/waug.css?ver=2.40.11" rel="stylesheet"><!--  call css files end  -->
</head>
<body>

<div id="wrapper">
	
	<!--  navigation begin  -->
	
<div class="app-install " style="display:none">
	<div class="container">
		<table>
			<tr>
				<td class="col-xs-1"><img src="${pageContext.request.contextPath}/images/ic_launcher.png" class="app-icon"></td>
				<td>
					<p class="text-highlight f24"><strong>와그 - 전 세계 특별한 액티비티 예약</strong></p>
					<p class="f18">여행을 쉽게 계획하고, 50% 할인된 가격에 예약하고 즐겨보세요.</p>
				</td>
				<td class="text-right">
					<div class="app-stores">
					<!-- 	<a href="https://itunes.apple.com/kr/app/id1109193105" target="_blank"><i class="fa fa-apple"></i></a>
						<a href="https://play.google.com/store/apps/details?id=kr.co.waug.waug" target="_blank"><i class="fa fa-android"></i></a> -->
					</div>
				</td>
				<td><a href="javascript:;"><i class="fa fa-close app-install-close"></i></a></td>
			</tr>
		</table>
	</div>
</div>
<div class="navbar navbar-inverse">
	<nav>
		<div class="navbar-header">
			<div class="container">
				<div class="row">
					<a class="header-logo" href="${pageContext.request.contextPath}/main/"><div class="navbar-brand"><img src="${pageContext.request.contextPath}/images/logo.png" class="logo"></div></a>
										<div id="navbar" class="navbar-collapse collapse">
						<div class="navbar-right">
							<font color="white" size="4">  ${sessionScope.id} 님 환영합니다.</font>
						</div>
				
					</div>
				</div>
			</div>
		</div>
		<!--/.navbar-collapse -->
	</nav>
</div>

<!--   area list layer begin -->
<!--  area list layer end -->		<!--  navigation end  -->
	

<div class="wrapper-header headimage" id="main-header">
	<div class="slides" id="main-header">
		<ul>
			<img src="${pageContext.request.contextPath}/images/home2.jpg" >
		</ul>
	</div>	
	<div class="text-container">
		<div class="v-middle header-title">
			<h1>당신의 세상을 <font color="coral">연결</font> 시켜드립니다</h1>
			<div id="main-searchbar">
				<div class="searchbar">
					<div class="input-group">
						<input type="text" class="form-control" id="search-query" placeholder="당신의 취미는 무엇입니까?" data-placeholder="당신의 취미는 무엇입니까?" autocomplete="off" readonly>
						<span class="input-group-btn">
							<button type="button" class="btn btn-submit btn-search"><i class="fa fa-search"></i></button>
						</span>
					</div>
				</div>
			</div>
			<!--   area list layer begin -->
			<div class="search-details" style="display: none; z-index: 99;">
	<div class="search-cities">
		<!--<ul class="search-cities-menu" id="search_cities_menu">
			<li onclick="continentSelect(1);">아시아</li>
			<li onclick="continentSelect(2);">유럽</li>
			<li onclick="continentSelect(3);">아메리카</li>
			<li onclick="continentSelect(4);">오세아니아</li>
			<li onclick="continentSelect(5);">아프리카</li>
		</ul>-->
		
		<div class="slidemenu" id="search_cities_menu">
	      <input type="radio" name="menu" id="one" class="menu-one" checked>
	      <label for="one" onclick="continentSelect(1);">스포츠</label>   
	      <input type="radio" name="menu" id="two" class="menu-two">
	      <label for="two" onclick="continentSelect(2);">게임</label>
	      <input type="radio" name="menu" id="three" class="menu-three">
	      <label for="three" onclick="continentSelect(3);">문화생활</label>	      
	      <input type="radio" name="menu" id="four" class="menu-four">
	      <label for="four" onclick="continentSelect(4);">맛집</label>
	      <input type="radio" name="menu" id="five" class="menu-five">
	      <label for="five" onclick="continentSelect(5);">여행</label>
	      <input type="radio" name="menu" id="six" class="menu-six">
	      <label for="six" onclick="continentSelect(6);">스터디</label>     	   	         
	      <div class="slider">
	        <div class="bar"></div>
	      </div>
	    </div>
		
		<div style="padding-top: 30px">
			<table>
				<tbody>
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name="command"  value="sport">
									<tr class="continent_1" >
						<td>야구 :</td>
						<td>
								<span><a href="${pageContext.request.contextPath}/cont?key=baseball&command=sport">어린이 야구</a></span>
								<span><a href="${pageContext.request.contextPath}/cont?key=baseball&command=sport">아마추어 야구</a></span>
								<span><a href="${pageContext.request.contextPath}/cont?key=baseball&command=sport">회사원 야구</a></span>
							</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont">
						<input type="hidden" name=command  value="sport">
									<tr class="continent_1" >
						<td>농구 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=basketball&command=sport">길거리 농구</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=basketball&command=sport">풀세트 농구</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=basketball&command=sport">아재 농구</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="sport">
									<tr class="continent_1" >
						<td>축구 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=soccer&command=sport">조기 축구</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=soccer&command=sport">아마추어 축구</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=soccer&command=sport">대학생 축구</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="game">		
									
									
									<tr class="continent_2"  style="display: none;">
						<td>롤 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=lol&command=game">2인 듀오랭크</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=lol&command=game">5:5 팀랭크</a></span>
												</td>
					</tr>
					</from>
				<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="game">		
									<tr class="continent_2"  style="display: none;">
						<td>배틀그라운드 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=battleground&command=game">2인 듀오</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=battleground&command=game">4인 스쿼드</a></span>
												</td>
					</tr>
					</from>
						<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="game">	
									<tr class="continent_2"  style="display: none;">
						<td>오버워치 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=overwatch&command=game">겐트위한</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=overwatch&command=game">매너게임 정석</a></span>
												</td>
					</tr>
					</form>
									
									
						<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="culture">		
									
									<tr class="continent_3"  style="display: none;">
						<td>영화 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=movie&command=culture">대중 영화</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=movie&command=culture">예술 영화</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=movie&command=culture">독립 영화</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="culture">		
					<tr class="continent_3"  style="display: none;">
						<td>뮤지컬 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=musical&command=culture">해외 뮤지컬</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=musical&command=culture">국내 뮤지컬</a></span>
												</td>
					</tr>
					</form>
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="culture">	
					
					<tr class="continent_3"  style="display: none;">
						<td>연극 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=theater&command=culture">대극장 연극</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=theater&command=culture">소극장 연극</a></span>
												</td>
					</tr>
					</form>
							<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="restraunt">	
										
									<tr class="continent_4"  style="display: none;">
						<td>치킨 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=chicken&command=restraunt">간장 치킨</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=chicken&command=restraunt">불닭 치킨</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=chicken&command=restraunt">마늘 치킨</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=chicken&command=restraunt">새우 치킨</a></span>
												</td>
					</tr>
					</form>
						<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="food">
					
						
									<tr class="continent_4"  style="display: none;">
						<td>고기집 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=steak&command=restraunt">삼겹살</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=steak&command=restraunt">소고기</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=steak&command=restraunt">양고기</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="food">	
					
					<tr class="continent_4"  style="display: none;">
						<td>곱창 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=giblet&command=restraunt">막창</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=giblet&command=restraunt">대창</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=giblet&command=restraunt">양곱창</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="food">	
					<tr class="continent_4"  style="display: none;">
						<td>이탈리안 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=italian&command=restraunt">파스타</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=italian&command=restraunt">스테이크</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=italian&command=restraunt">리조또</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="food">
					<tr class="continent_4"  style="display: none;">
						<td>해산물 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=seafood&command=restraunt">모둠회</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=seafood&command=restraunt">매운탕</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=seafood&command=restraunt">해물탕</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="travel">
					<tr class="continent_5"  style="display: none;">
						<td>부산 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=busan&command=travel">바다 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=busan&command=travel">유흥 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=busan&command=travel">먹거리 투어</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="travel">
					<tr class="continent_5"  style="display: none;">
						<td>경주 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=gyeongju&command=travel">불국사 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=gyeongju&command=travel">경주랜드 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=gyeongju&command=travel">왕릉 투어</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="travel">
					<tr class="continent_5"  style="display: none;">
						<td>제주 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=jeju&command=travel">올레길 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=jeju&command=travel">오름 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=jeju&command=travel">해안가 투어</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="travel">
					<tr class="continent_5"  style="display: none;">
						<td>강릉 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=gangreung&command=travel">바다 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=gangreung&command=travel">맛집 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=gangreung&command=travel">절 투어</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="travel">
					<tr class="continent_5"  style="display: none;">
						<td>전주 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=jeonju&command=travel">맛집 투어</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=jeonju&command=travel">한복 체험</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="study">
					<tr class="continent_6"  style="display: none;">
						<td>영어 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=english&command=study">영어 회화</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=english&command=study">TOEIC/TEPS</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=english&command=study">ToeicSpeaking/OPIC</a></span>
												</td>
					</tr>
					</form>
					
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="study">
					<tr class="continent_6"  style="display: none;">
						<td>컴퓨터/코딩 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=computer&command=study">자바</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=computer&command=study">파이썬</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=computer&command=study">C</a></span>
												</td>
					</tr>
					</form>
							<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="study">
					
					<tr class="continent_6"  style="display: none;">
						<td>독서 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=read&command=study">소설</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=read&command=study">자기계발서</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=read&command=study">수필</a></span>
												</td>
					</tr>
					</form>
					<form action="${pageContext.request.contextPath}/cont" >
						<input type="hidden" name=command  value="study">
					<tr class="continent_6"  style="display: none;">
						<td>취업 :</td>
						<td>
													<span><a href="${pageContext.request.contextPath}/cont?key=job&command=study">면접</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=job&command=study">공기업</a></span>
													<span><a href="${pageContext.request.contextPath}/cont?key=job&command=study">인적성</a></span>
												</td>
					</tr>
					</form>
					
					
									<tr>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td style="padding-top: 30px;">곧, 더 많은취미가 추가될 예정입니다.</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</div>
			<!--  area list layer end -->	
		</div>
	</div>
</div>
	
<div id="content">
	<div class="container" style="width:1450px;">
		<!-- begin area list  -->
		<div class="row">
			<div class="row row_title">
				<div>인기있는 취미 <font color="coral">BEST8</font></div>
				<p class="sub">가장 많은 분들이 찾는 취미를 추천해요</p>
			</div>
			<div class="col-md-12 arealist">
							<div class="col-md-3 item  item-head">
					<a href="http://www.yagooshop.com/shop/main/index.php" title="야구">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best1.jpg">
								<div class="v-middle area-title">
									<div class="title">야구</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item  item-head">
					<a href="http://lol.inven.co.kr/" title="롤">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best2.jpg">
								<div class="v-middle area-title">
									<div class="title">리그 오브 레전드</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item  item-head">
					<a href="http://www.soccerboom.co.kr/index.html" title="축구">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best3.jpg">
								<div class="v-middle area-title">
									<div class="title">축구</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item  item-head">
					<a href="http://www.cgv.co.kr/" title="영화">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best4.jpg">
								<div class="v-middle area-title">
									<div class="title">영화</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="http://www.hanampig.co.kr/new/" title="고기집">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best5.jpg">
								<div class="v-middle area-title">
									<div class="title">고기집</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="http://www.hanatour.com/" title="제주도">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best6.jpg">
								<div class="v-middle area-title">
									<div class="title">제주도</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="https://www.opentutorials.org/" title="코딩">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best7.jpg">
								<div class="v-middle area-title">
									<div class="title">컴퓨터 / 코딩</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="http://www.themusical.co.kr/" title="뮤지컬">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="../images/best8.jpg">
								<div class="v-middle area-title">
									<div class="title">뮤지컬</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
						</div>
		</div>
		<div class="row text-center space-top-8">
			<button class="btn-form-submit btn-morecity" >더 많은 취미를 보고싶다면?</button>
		</div>
		<!--  end area list  -->	
	
		
	</div>
	
</div>

<div id="video-player-main" class="videoplayer full-screen"></div>

	<footer id="footer">
		<div class="footer_top">
			<div class="container">
			</div>
		</div>
		<div class="container" style="margin-top:72px">
			<div class="row">
				<div class="col-md-4 space-top-3"><img class="logo" src="${pageContext.request.contextPath}/images/logo.png"></div>
			</div>
			<div class="row">
				<div class="col-md-4" style="margin-top:45px;">
					<ul>
						<li>
							<span>&copy; 2018 SAI World Inc.</span></br>
							<span>All Rights Reserved. </span>
						</li>
					</ul>
				</div>
				
				<div class="col-md-8 footer_right">
					<ul>
						<li>사이 월드</li>
						<li>사업자등록번호 113-86-94943</li>
						<li>통신판매업신고 2017-서울 광화문-0310							┃<a href="http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2017313020130200311&area1=&area2=&currpage=1&searchKey=04&searchVal=1138694943&stdate=&enddate=" target="_blank">사업자정보확인</a></li>
					</ul>

					<div class="col-md-12 footer_comment">
						<div>
							주식회사 사이월드 | 대표 정이을, 장우영
							</div>
							<p>대한민국 : 서울특별시 종로구 새문안로5가길 32 / 한국생산성본부 건물 7층</p>
							<p>주식회사 사이월드는 귀하의 잘못으로 일어난 사건에 대해 책임을 지지 않습니다.</p>
						</div>
				</div>		
			</div>
		</div>		
	</footer>
	<!-- /container -->

</div> <!-- end #wrapper  -->

<!-- modal divs begin -->
<div class="modal" id="modal-join" tabindex="-1" role="dialog"  aria-hidden="true" aria-labelledby="modal-join"></div>
<div class="modal" id="modal-email" tabindex="-1" role="dialog"  aria-hidden="true" aria-labelledby="modal-email"></div>
<div class="modal" id="modal-email_insert" tabindex="-1" role="dialog"  aria-hidden="true" aria-labelledby="modal-email_insert"></div>
<div class="modal" id="modal-login" tabindex="-1" role="dialog"  aria-hidden="true" aria-labelledby="modal-login"></div>
<div class="modal" id="modal-find-pwd" tabindex="-1" role="dialog"  aria-hidden="true" aria-labelledby="modal-find-pwd"></div>
<!-- modal divs end -->

</body>
</html>

<!--  call script files begin  -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- jQuery UI -->
<script src="${pageContext.request.contextPath}/js/jquery-ui.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<!-- bootstrap date picker -->
<script src="${pageContext.request.contextPath}/js/bootstrap-datepicker.js"></script>
<!-- bootstrap date picker korean patch -->
<script src="${pageContext.request.contextPath}/js/bootstrap-datepicker.ko.js"></script>
<script src="${pageContext.request.contextPath}/js/plugins/jquery.timepicker.js?ver=1.1"></script>
<!-- ㅡmatch height -->
<script src="${pageContext.request.contextPath}/js/jquery.matchHeight.js"></script>
<!-- masonry -->
<script src="${pageContext.request.contextPath}/js/masonry.pkgd.min.js"></script>
<!-- slick slider -->
<script src="${pageContext.request.contextPath}/js/slick.min.js"></script>
<!-- icheck -->
<script src="${pageContext.request.contextPath}/js/plugins/icheck.min.js"></script>
<!-- grayscale -->
<script src="${pageContext.request.contextPath}/js/jquery.gray.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="${pageContext.request.contextPath}/js/ie10-viewport-bug-workaround.js"></script>
<!--  kakao sdk  -->
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<!--  daum find postcode  -->
<script src="https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js"></script>
<!-- responsive  imagemap  -->
<script src="${pageContext.request.contextPath}/js/jquery.rwdImageMaps.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.form.js"></script>
<script src="${pageContext.request.contextPath}/js/plugins/jquery.tmpl.min.js"></script>
<!-- star rating -->
<script src="${pageContext.request.contextPath}/js/plugins/star-rating.js"></script>
<!--  google map  -->
<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBv1fdUIL5pkmbH7lujl-Ym0JR-M5C3oWg&language=ko"></script> -->
<script src="${pageContext.request.contextPath}/js/common.js?ver=2.40.11"></script>
<!-- custom scripts -->
<script src="${pageContext.request.contextPath}/js/waug.js?ver=2.40.11"></script>


<!-- 공통 적용 스크립트 , 모든 페이지에 노출되도록 설치. 단 전환페이지 설정값보다 항상 하단에 위치해야함 --> 
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script> 
<script type="text/javascript"> 
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_48e4e540bb96";
if (!_nasa) var _nasa={};
wcs.inflow();
wcs_do(_nasa);
</script>

<!-- Global site tag (gtag.js) - Google AdWords: 826288939 -->
<!-- <script async src="//www.googletagmanager.com/gtag/js?id=AW-826288939"></script> -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-826288939');
</script>

<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-66503371-1', 'auto');
	ga('require', 'linkid', 'linkid.js');
	ga('send', 'pageview');
</script>


<script>
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '330906607033709',
			version    : 'v2.7',
            status : true, // check login status 
            cookie : true, // enable cookies to allow the server to access the session 
            xfbml  : true,  // parse XFBML 
            oauth : true,
			popup : false,
			display : 'async'
		});
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	if(!isMobile()) {
		Kakao.init('cf339f5970faa960c1cb26667339b647');
	}
</script><!--  call script files end  -->

<script src='//vtag19.midas-i.com/vat-tag?cmp_no=3419&depth=1'></script>

<!--  메인 페이지 트래커 ---->
<!-- 
<script type="text/javascript" src="//static.criteo.net/js/ld/ld.js" async="true"></script>
<script type="text/javascript">
window.criteo_q = window.criteo_q || [];
window.criteo_q.push(
        { event: "setAccount", account: 43678 },
        { event: "setSiteType", type: "d" },
        { event: "viewHome" }
);
</script>
 -->