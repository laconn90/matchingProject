/************************************************************************************************
 * 
 * 
 * 									공통 적용 스크립트
 * 
 * 
 *************************************************************************************************/



// 모바일 접속 체크
function isMobile() {
	var ua = (ua || window.navigator.userAgent).toString().toLowerCase();
	if (!!ua.match(/ip(hone|od)|android.+mobile|windows (ce|phone)|blackberry|bb10|symbian|webos|firefox.+fennec|opera m(ob|in)i|polaris|iemobile|lgtelecom|nokia|sonyericsson|dolfin|uzard|natebrowser|ktf;|skt;/)) {
		return true;
	} else {
		return false;
	}
}


// 글자 바이트로 반환
function byteConvertorNum(e){
	var e=e;
	var t=0;
	var n=e.length;
	var r;
	for(i=0;i<n;i++){
		var s=e.charCodeAt(i);
		var o=e.substr(i,1).toUpperCase();
		s=parseInt(s);
		if(s==10)t+=2;
		else if((o<"0"||o>"9")&&(o<"A"||o>"Z")&&(s>255||s<0))t+=2;else t+=1
	}
	var u=parseInt(t);
	return u;
}

//메일유효 Return
function isMail(val) {
	var em = val.trim().match(/^[_\-\.0-9a-zA-Z]{2,}@[-.0-9a-zA-z]{2,}\.[a-zA-Z]{2,4}$/);
	return (em) ? true : false;
}
//메일유효 Return : obj.mail() 
String.prototype.mail = function() {
	var em = this.trim().match(/^[_\-\.0-9a-zA-Z]{2,}@[-.0-9a-zA-z]{2,}\.[a-zA-Z]{2,4}$/);
	return (em) ? true : false;
}

//url 유효 return 
String.prototype.checkurl = function() {
	var em = this.trim().match(/^http:\/\/([\w-]+\.)[\w-]+(\/[\w- ./?%=]*)?/);
	return (em) ? true : false;
}

//새창
function fn_OpenWindow(sUrl, title, w, h, scrl) {
	var x = screen.width;
	var y = screen.height;
	var w_top = (y / 2) - (h / 2);
	var h_left = (x / 2) - (w / 2);

	var pop = window.open(sUrl, title, "toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=0,scrollbars=" + scrl + ",width=" + w + ",height=" + h + ",top=" + w_top + ",left=" + h_left); 
	pop.focus();
}

//새창 위치 선정
function fn_OpenWindow2(sUrl, title, w, h, scrl, w_top, h_left) {
	var x = screen.width;
	var y = screen.height;

	var pop = window.open(sUrl, title, "toolbar=0,location=0,directories=0,status=0,menubar=0,resizable=0,scrollbars=" + scrl + ",width=" + w + ",height=" + h + ",top=" + w_top + ",left=" + h_left); 
	pop.focus();
}

//alert 후 포커스 
function fn_AlertFocus(obj, txt, type) {
	alert(txt);
	if( type == 0 ) {
		obj.value = "";
	}
	obj.focus();
}

//숫자만 가능 onkeypress="onlyNumOnKeyPress();"
function onlyNumOnKeyPress() {
  if((event.keyCode<48)||(event.keyCode>57))
      event.returnValue=false;
}
// 숫자만 가능 numberOnly="true"
$(document).on("keyup", "[numberOnly=true]", function() {
	$(this).val($(this).val().replace(/[^0-9]/gi,"") );
});

// 영문만 가능 engOnly="true"
$(document).on("keyup", "[engOnly=true]", function() {
	var val = $(this).val().replace(/[^a-zA-Z]/gi,"");
	val = val.toUpperCase();
	$(this).val(val);
});

// 영문,숫자만 가능 engNumOnly="true"
$(document).on("keyup", "[engnumonly=true]", function() {
	$(this).val($(this).val().replace(/[^A-Za-z0-9]/gi,"") );
});

//영문,숫자, 언더바, 하이픈만 가능 onlydomain="true"
$(document).on("keyup", "[onlydomain=true]", function() {
	$(this).val($(this).val().replace(/[^_a-zA-Z0-9-.]/gi,"") );
});

// 한글, 영문만 가능 onlychar="true"
$(document).on("keyup", "[onlychar=true]", function() {
	$(this).val($(this).val().replace(/[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z]/gi,"") );
});	

//숫자 불가능 numberOnly="false"
$(document).on("keyup", "[numberOnly=false]", function() {
	$(this).val($(this).val().replace(/[0-9]/gi,"") );
});


// 한글만 가능  onkeypress="onlyKoreanOnKeyPress();" style="ime-mode:deactivated"
function onlyKoreanOnKeyPress() {
	 if((event.keyCode < 12592) || (event.keyCode > 12687)){
		 event.returnValue = false;
	 }
}

// 특수문자 불가능 onkeypress="specialCharNotpress();"
function specialCharNotPress() {
	if ((event.keyCode > 32 && event.keyCode < 48) || (event.keyCode > 57 && event.keyCode < 65) || (event.keyCode > 90 && event.keyCode < 97))
		event.returnValue = false;
}

// 한글, 영어 단어 및 공백만 가능
// 한글, 영어 단어 및 공백외에 글자가 입력된 경우 true를 리턴
function onlyKoreanEnglishWord(word) {
	var regExp = /[^가-힣a-zA-Z]/gi;
	if(regExp.test(word)) {
		return false;
	}
	
	return true;
}

// php number_format을 javscript로 
function number_format(number, decimals, dec_point, thousands_sep) {
	//  discuss at: http://phpjs.org/functions/number_format/
	// original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// improved by: davook
	// improved by: Brett Zamir (http://brett-zamir.me)
	// improved by: Brett Zamir (http://brett-zamir.me)
	// improved by: Theriault
	// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// bugfixed by: Michael White (http://getsprink.com)
	// bugfixed by: Benjamin Lupton
	// bugfixed by: Allan Jensen (http://www.winternet.no)
	// bugfixed by: Howard Yeend
	// bugfixed by: Diogo Resende
	// bugfixed by: Rival
	// bugfixed by: Brett Zamir (http://brett-zamir.me)
	//  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	//  revised by: Luke Smith (http://lucassmith.name)
	//    input by: Kheang Hok Chin (http://www.distantia.ca/)
	//    input by: Jay Klehr
	//    input by: Amir Habibi (http://www.residence-mixte.com/)
	//    input by: Amirouche
	//   example 1: number_format(1234.56);
	//   returns 1: '1,235'
	//   example 2: number_format(1234.56, 2, ',', ' ');
	//   returns 2: '1 234,56'
	//   example 3: number_format(1234.5678, 2, '.', '');
	//   returns 3: '1234.57'
	//   example 4: number_format(67, 2, ',', '.');
	//   returns 4: '67,00'
	//   example 5: number_format(1000);
	//   returns 5: '1,000'
	//   example 6: number_format(67.311, 2);
	//   returns 6: '67.31'
	//   example 7: number_format(1000.55, 1);
	//   returns 7: '1,000.6'
	//   example 8: number_format(67000, 5, ',', '.');
	//   returns 8: '67.000,00000'
	//   example 9: number_format(0.9, 0);
	//   returns 9: '1'
	//  example 10: number_format('1.20', 2);
	//  returns 10: '1.20'
	//  example 11: number_format('1.20', 4);
	//  returns 11: '1.2000'
	//  example 12: number_format('1.2000', 3);
	//  returns 12: '1.200'
	//  example 13: number_format('1 000,50', 2, '.', ' ');
	//  returns 13: '100 050.00'
	//  example 14: number_format(1e-8, 8, '.', '');
	//  returns 14: '0.00000001'

	number = (number + '')
	.replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
					sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
							dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
									s = '',
									toFixedFix = function(n, prec) {
								var k = Math.pow(10, prec);
								return '' + (Math.round(n * k) / k)
								.toFixed(prec);
							};
							// Fix for IE parseFloat(0.55).toFixed(0) = 0;
							s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
							.split('.');
							if (s[0].length > 3) {
								s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
							}
							if ((s[1] || '')
									.length < prec) {
								s[1] = s[1] || '';
								s[1] += new Array(prec - s[1].length + 1)
								.join('0');
							}
							return s.join(dec);
}


/*
 * get url particular param
 * 
 * @usage : var param = getURLParamVal('technology');
 */
function getURLParamVal(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}



/*
 * querystring에서 특정 파라미터 제외하기
 * exc : 제외하고자 하는 파라미터 이름. ;로 구분
 * 
 * @usage : getQueryStringExcept('aidx;page_no')
 */
function getQueryStringExcept(exc, first) {
	if( exc != '' ) {
		var arr_exc = exc.split(';'); 
		
		// exception check
		for( var i = 0; i < arr_exc.length; i++ ) {
			var querystring = ( i === 0 ) ? location.search.substring(1) : return_query.substring(1);
			var return_query = '';
			var arr_qs = querystring.split('&');
			for( var j = 0; j < arr_qs.length; j++ ) { 
				if( arr_qs[j].indexOf(arr_exc[i]) < 0 ) {
					if( arr_qs[j] ) return_query += '&' + arr_qs[j];
				}
			}
		}
		if( first == true ) return_query = '?'+return_query.substring(1);
	}
	
	return return_query;
}

//저장된 쿠키값 읽어오기
function getCookie(name) {
//	<![CDATA[
	var nameOfCookie = name + "=";
	var x = 0; 

	while(x<=document.cookie.length){
		var y = (x+nameOfCookie.length);
		if(document.cookie.substring(x,y) == nameOfCookie){
			if((endOfCookie=document.cookie.indexOf(";",y))==-1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y,endOfCookie));
		}
		x = document.cookie.indexOf("",x)+1;  //날짜지정
		if(x==0) break;
	}
	return "";
//	]]>
} 

//저장된 쿠키값 셋팅
function setCookie( name, value, expiredays ) { 
	var todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
} 

/*
 * remove duplicate value from array
 */
function arr_unique(arr_orig) {
	var arr_new = [];
	$.each(arr_orig, function(i, el){
	    if($.inArray(el, arr_new) === -1) arr_new.push(el);
	});
	return arr_new;
}

var directionsService = new google.maps.DirectionsService();
/*
 * 	좌표로 지도 가져오기 
 */
function getGoogleMapbyGeo(pos_y,pos_x, target_id ) {
	var mapOptions = { //구글 맵 옵션 설정
		zoom : 14, //기본 확대율
		center: new google.maps.LatLng(pos_y, pos_x),
		streetViewControl: false,
		zoomControl: false,
		draggable: true,
		scrollwheel : true, //마우스 휠로 확대 축소 사용 여부
		mapTypeControl : false //맵 타입 컨트롤 사용 여부
	};
	map = new google.maps.Map(document.getElementById(target_id), mapOptions); //구글 맵을 사용할 타겟
	
//	var image = 'http://m.waug.co.kr/img/logo.png'; //마커 이미지 설정
 
	var marker = new google.maps.Marker({ //마커 설정
		map : map,
		position : map.getCenter(), //마커 위치
	});
}

/*
 * 	현재 위치 가져오기
 */
function geoFindMe() {
	var output = document.getElementById(target_id);

	if (!navigator.geolocation){
		output.innerHTML = "<p>사용자의 브라우저는 지오로케이션을 지원하지 않습니다.</p>";
		return;
	}

	function success(position) {
		var latitude  = position.coords.latitude;
		var longitude = position.coords.longitude;

		output.innerHTML = '<p>위도 : ' + latitude + '° <br>경도 : ' + longitude + '°</p>';
		var img = new Image();
		img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=17&size=300x300&sensor=false";

		output.appendChild(img);
	};

	function error() {
		output.innerHTML = "사용자의 위치를 찾을 수 없습니다.";
	};

	output.innerHTML = "<p>Locating…</p>";

	navigator.geolocation.getCurrentPosition(success, error);
}

/**
 * check int type
 * @param n
 * @returns {Boolean}
 */
function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

/**
 * check float type 
 * @param n
 * @returns {Boolean}
 */
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

/**
 * pagination
 */
 // go go!
function page_go_to(page, is_ajax, func) {
	 if( is_ajax ) {
		 var fn = window[func];
		 fn(page);
	 }else {
		 location.href = "?page="+page+getQueryStringExcept('page');
	 }
 }
/**
 * 페이지 내비게이션 html tag
 * @param total_cnt 총 게시물 수
 * @param page 현재 페이지 번호
 * @param per_page 페이지당 게시물수
 * @param paging_cnt 페이지 번호 노출 수
 * @param total_page_cnt 총 페이지 수
 * @param is_ajax ajax 활용: false 면 일반 링크 이동
 * @param func is_ajax = true 인 경우 호출할 함수. 해당 함수 변수는 page값 할당됨
 * @returns {String}
 */
function pagination(total_cnt, page, per_page, paging_cnt, total_page_cnt, is_ajax, func) {
	if( !page ) page = 1;
	if( !per_page ) per_page = 10;
	if( !paging_cnt ) paging_cnt = 10;
	
	var html = '';
	total_page_cnt = ( total_page_cnt ) ? total_page_cnt : Math.ceil( total_cnt / per_page );
	var first_page = ( page == 1 ) ? 1 : (Math.floor( (page - 1) / paging_cnt ) * paging_cnt) + 1;
	var last_page = first_page + paging_cnt - 1;
	if( total_page_cnt < last_page ) last_page = total_page_cnt;
	
	html = '<div class="page-navigation">';
	html += '<div class="btn-group">';
			
	html += '<a href="javascript:;" class="btn" '+( page == 1 ? ' disabled' : ' onclick="page_go_to(1, '+is_ajax+', \''+func+'\')"' )+'>';
	html += '<i class="fa fa-angle-double-left"></i>';
	html += '</a>';

	html += '<a href="javascript:;" class="btn" '+( first_page == 1 ? ' disabled' : ' onclick="page_go_to('+(first_page-1)+', '+is_ajax+', \''+func+'\')"' )+'>';
	html += '<i class="fa fa-angle-left"></i>';
	html += '</a>';

	for( var i = first_page; i <= last_page; i++ ) { 
		html += '<a href="javascript:;" class="btn '+( page == i ? ' active' : ''  )+'" onclick="page_go_to('+i+', '+is_ajax+', \''+func+'\')">'+i+'</a>';
	}

	html += '<a href="javascript:;" class="btn" '+( last_page < total_page_cnt ? ' onclick="page_go_to('+(last_page+1)+', '+is_ajax+', \''+func+'\')"' : ' disabled' )+'>';
	html += '<i class="fa fa-angle-right"></i>';
	html += '</a>';
	
	html += '<a href="javascript:;" class="btn" '+( ( page == total_page_cnt || total_page_cnt == 0 ) ? ' disabled' : ' onclick="page_go_to('+total_page_cnt+', '+is_ajax+', \''+func+'\')"' )+'>';
	html += '<i class="fa fa-angle-double-right"></i>';
	html += '</a>';

	html += '</div>';
	html += '</div>';
	return html;
}

function is_ie() {
	if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
		return true;
	else return false;
}