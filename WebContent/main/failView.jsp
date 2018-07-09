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
<title>ìê·¸WAUG â Explore More.</title>

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
	
	
<div class="app-install " style="display:none">
	<div class="container">
		<table>
			<tr>
				<td class="col-xs-1"><img src="images/ic_launcher.png" class="app-icon"></td>
				<td>
					<p class="text-highlight f24"><strong>와그 - 전 세계 특별한 액티비티 예약</strong></p>
					<p class="f18">여행을 쉽게 계획하고, 50% 할인된 가격에 예약하고 즐겨보세요.</p>
				</td>
				<td class="text-right">
					<div class="app-stores">
						<a href="https://itunes.apple.com/kr/app/id1109193105" target="_blank"><i class="fa fa-apple"></i></a>
						<a href="https://play.google.com/store/apps/details?id=kr.co.waug.waug" target="_blank"><i class="fa fa-android"></i></a>
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
					<a class="header-logo" href="main/"><div class="navbar-brand"><img src="images/logo.png" class="logo"></div></a>
										<div id="navbar" class="navbar-collapse collapse">
						<div class="navbar-right">
									
							<button type="button" onclick="location.href='new.html'"  class="navbar-brand border" name="btn-login"><span>회원가입</span></button>
							<button type="button" onclick="location.href='login.html'"  class="navbar-brand border" name="btn-login"><span>로그인</span></button>
						<!-- 	<a class="navbar-brand toggle-app-install" href="javascript:;"><span><i class="fa fa-mobile"></i>Waug App</span></a>
													<a class="navbar-brand" href="http://post.naver.com/my.nhn?memberNo=8627427" target="_blank"><span>Blog</span></a> -->
						
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
			<h1><font : "black">다시 시도해 주세요.</font></h1><br>
			<button type="button" onclick="location.href='index.html'"  class="navbar-brand border" name="btn-login"><span>메인페이지로 돌아가기</span></button>
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
		
		</div>
	</div>
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
					<a href="area/?idx=12" title="오사카">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best1.jpg">
								<div class="v-middle area-title">
									<div class="title">야구</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item  item-head">
					<a href="area/?idx=13" title="도쿄">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best2.jpg">
								<div class="v-middle area-title">
									<div class="title">리그 오브 레전드</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item  item-head">
					<a href="area/?idx=44" title="홍콩">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best3.jpg">
								<div class="v-middle area-title">
									<div class="title">축구</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item  item-head">
					<a href="area/?idx=96" title="타이페이">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best4.jpg">
								<div class="v-middle area-title">
									<div class="title">영화</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="area/?idx=49" title="싱가포르">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best5.jpg">
								<div class="v-middle area-title">
									<div class="title">고기집</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="area/?idx=15" title="괌">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best6.jpg">
								<div class="v-middle area-title">
									<div class="title">제주도</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="area/?idx=20" title="보라카이">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best7.jpg">
								<div class="v-middle area-title">
									<div class="title">컴퓨터 / 코딩</div>
									<p class="subtitle">더 알아보기</p>
								</div>
							</div>
						</div>
					</a>
				</div>
							<div class="col-md-3 item ">
					<a href="area/?idx=6" title="방콕">
						<div class="item-area sns-effect-opacity sns-effect-scale">
							<div class="text-container">
								<img src="images/best8.jpg">
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
			<button class="btn-form-submit btn-morecity" >더 많은 여행지 (+ 81 Cities)</button>
		</div>
		<!--  end area list  -->		
	
		
	</div>
	
</div>

<div id="video-player-main" class="videoplayer full-screen"></div>

	<footer id="footer">
		<div class="footer_top">
			<div class="container">
				<ul>
					<li class="col-md-2 m-n"><a href="page/aboutus.html">와그트래블 소개</a></li>
					<li class="col-md-2 m-n"><a href="page/agreement.html">이용약관</a></li>
					<li class="col-md-2 m-n"><a href="page/privacy.html">개인정보취급방침</a></li>
					<li class="col-md-2 m-n"><a href="page/refund.html">취소환불규정</a></li>
					<li class="col-md-2 m-n"><a href="page/contactus.html">파트너 신청</a></li>
					<li class="col-md-2 m-n"><a href="page/faq.html">자주 묻는 질문</a></li>
				</ul>
			</div>
		</div>
		<div class="container" style="margin-top:72px">
			<div class="row">
				<div class="col-md-4 space-top-3"><img class="logo" src="images/logo.png"></div>
			</div>
			<div class="row">
				<div class="col-md-4" style="margin-top:45px;">
					<ul>
						<li>
							<span>&copy; 2015-2018 WAUG Travel Inc.</span></br>
							<span>All Rights Reserved. </span>
						</li>
					</ul>
				</div>
				
				<div class="col-md-8 footer_right">
					<ul>
						<li>SEOUL</li>
						<li>사업자등록번호 113-86-94943</li>
						<li>통신판매업신고 2017-서울마포-0310							┃<a href="http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2017313020130200311&area1=&area2=&currpage=1&searchKey=04&searchVal=1138694943&stdate=&enddate=" target="_blank">사업자정보확인</a></li>
					</ul>

					<div class="col-md-12 footer_comment">
						<div>
							주식회사 와그트래블 | 대표 선우윤
							</div>
							<p>대한민국 : 서울특별시 마포구 월드컵북로 22 (동교동 205-6) 영준빌딩 8층</p>
							<p>日本 : 101-0053 3F, Daiichitoei Bldg., 11-2 Kanda Mitoshirocho, Chiyoda-Ku, Tokyo, Japan</p>
							<p>주식회사 와그트래블은 통신판매의 당사자가 아닌 통신판매 중개자이기 때문에 상품 거래정보 및 거래 등에 대해 책임을 지지 않습니다.</p>
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
<script src="js/jquery-ui.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<!-- bootstrap date picker -->
<script src="js/bootstrap-datepicker.js"></script>
<!-- bootstrap date picker korean patch -->
<script src="js/bootstrap-datepicker.ko.js"></script>
<script src="js/plugins/jquery.timepicker.js?ver=1.1"></script>
<!-- ㅡmatch height -->
<script src="js/jquery.matchHeight.js"></script>
<!-- masonry -->
<script src="js/masonry.pkgd.min.js"></script>
<!-- slick slider -->
<script src="js/slick.min.js"></script>
<!-- icheck -->
<script src="js/plugins/icheck.min.js"></script>
<!-- grayscale -->
<script src="js/jquery.gray.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="js/ie10-viewport-bug-workaround.js"></script>
<!--  kakao sdk  -->
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<!--  daum find postcode  -->
<script src="https://spi.maps.daum.net/imap/map_js_init/postcode.v2.js"></script>
<!-- responsive  imagemap  -->
<script src="js/jquery.rwdImageMaps.min.js"></script>
<script src="js/jquery.form.js"></script>
<script src="js/plugins/jquery.tmpl.min.js"></script>
<!-- star rating -->
<script src="js/plugins/star-rating.js"></script>
<!--  google map  -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBv1fdUIL5pkmbH7lujl-Ym0JR-M5C3oWg&language=ko"></script>
<script src="js/common.js?ver=2.40.11"></script>
<!-- custom scripts -->
<script src="js/waug.js?ver=2.40.11"></script>


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
<script async src="//www.googletagmanager.com/gtag/js?id=AW-826288939"></script>
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