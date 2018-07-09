var pathname = location.pathname;
var _hash = window.location.hash;
var icon_loading = '<i class="fa fa-circle-o-notch fa-spin"></i>';

$(function () {
	/*
	 * common	 
	 */


	/**
	 * 금액 표시용 텍스트 반환
	 * @param number $price
	 * @param string $symbol
	 * @return string
	 */
	get_price_text = function (price, symbol) {
		var str = (isFloat(price) === true) ? number_format(price, 2) : number_format(price);
		if (symbol) str = symbol + ' ' + str;
		return str;
	}

	$("#go-to-site").change(function () {
		location.href = "http://" + $(this).val();
	});

	// 인쇄 버튼 클릭
	$(".do-print").click(function () {
		$(this).hide();
		window.print();
		$(this).show();
	});

	$(".slider-scroll").slick({
		infinite: false,
		slidesToShow: 3,
	});

	/*
	 *  video player
	 */
	$(document).on("click", ".btn-video-play", function () {
		var target = $(this).data("target");
		if (target) {
			// set styles
			var player_width = $(target).parent().width();
			var player_height = parseInt(player_width / 2.5);
			if (!$(target).hasClass("full-screen")) {
				$(target).css({
					'width': player_width + 'px',
					'height': player_height + 'px',
				});
			}

			var html = '';
			var params = [];
			var url = $(this).data("video-url");
			if (url.indexOf("https://youtu.be/") > -1) {
				url = url.replace("https://youtu.be/", "https://youtube.com/embed/");
			}
			var fullscreen = (typeof $(this).data("fullscreen") == "undefined") ? 1 : $(this).data("fullscreen");
			var autoplay = (typeof $(this).data("autoplay") == "undefined") ? 1 : $(this).data("autoplay");

			if (fullscreen) params.push("rel=0");
			if (autoplay) params.push("autoplay=1");
			url = url + "?" + params.join("&");

			html += '<div class="video-player" style="width:100%;height:100%">';
			html += '<a class="video-player-close" data-target="' + target + '"><i class="fa fa-close"></i></a>';
			html += '<iframe width="100%" height="100%" src="' + url + '" allowfullscreen></iframe>';
			html += '</div>';

			$(target).html(html);
			$(target).show("fade");
		}
	});
	$(document).on("click", ".video-player-close", function () {
		var target = $(this).data("target");
		$(target).html('').hide();
		return false;
	});
	$(document).on("keydown", function (e) {
		var donot = false;
		if (e.keyCode == 27 || e.keyCode === 8) { // escape key maps to keycode `27`, backspace = 8
			var videoplayer = $(".videoplayer").css("display");
			if (videoplayer == 'block') {
				$(".video-player-close").trigger("click");
				donot = true;
			}
		}
		if (donot === true) {
			e.preventDefault();
			return false;
		}
	});
	/* end video player */

	// responsive image map
	$('img[usemap]').rwdImageMaps();

	$('.i-checks').iCheck({
		checkboxClass: 'icheckbox_flat-pink',
		radioClass: 'iradio_flat-pink',
	});

	$(".toggle-app-install, .app-install-close").click(function () {
		var obj = $(".app-install");
		if( obj.css("display") == "none" ) {
			if( is_ie() ) {
				$(".navbar").css("margin-top", "147px");
				if( $("#booking").length ) {
					var map_top = $('#good-map').offset().top;
					var booking_top = $('#booking').position().top + 147;
					if( ($('#booking').height() + booking_top) < map_top )
					$('#booking').css("top", booking_top);
				}
			}
			if( $('.sticky').length && $('.sticky').css("position") == "fixed" ) $('.sticky').css("top", "217px");
			obj.show("blind", 150);
		}else {
			if( is_ie() ) {
				$(".navbar").css("margin-top", "0");
				if( $("#booking").length ) $('#booking').css("top", ($('#booking').position().top - 147));
			}
			if( $('.sticky').length && $('.sticky').css("position") == "fixed" ) $('.sticky').css("top", "70px");
			obj.hide("blind", 150);
		}
	});

	/*
	 * 	검색
	 */
	$(".header-cities").click(function (e) {
		var left = $(this).position().left + 110; // add logo width
		$('.search-details').addClass("header").css("left", left + 'px').toggle();
		$(document).on('click', function (event) {
			var sities_menu = document.getElementById("search_cities_menu").id;
			if(event.target.parentNode.id == sities_menu){
				
			}
			else{
				$('.search-details').removeClass("header").hide();
				$('.search-details').addClass("header").css("left", 0 + 'px');
			}
		});
		e.stopPropagation();
	});
	$("#search-query").click(function (e) {
		var this_obj = $(this);
		if ($('.search-details').css("display") == "none") this_obj.attr("placeholder", '');
		else this_obj.attr("placeholder", this_obj.data("placeholder"));

		$('.search-details').toggle();
		$(document).on('click', function (event) {
			var sities_menu = document.getElementById("search_cities_menu").id;
			if(event.target.parentNode.id == sities_menu){

			}
			else{
				$('.search-details').hide();
				this_obj.attr("placeholder", this_obj.data("placeholder"));
			}
		});
		e.stopPropagation();
	});
	$(".btn-morecity").click(function (e) {
		$('.search-details').addClass("modal").toggle();
		$(document).on('click', function(event) {
			var sities_menu = document.getElementById("search_cities_menu").id;
			if(event.target.parentNode.id == sities_menu){

			}
			else{
				$(".search-details").removeClass("modal").hide();
			}
		});
		e.stopPropagation();
	});

	// 검색 취소 버튼 클릭
	$("#btn-search-reset").click(function () {
		$("#search-results").html('').hide();
		$(".search-no-result").hide();
	});

	// 검색 버튼 클릭
	$("#btn-search").click(function (event) {
		event.preventDefault();
		$("#search-query").trigger("change");
	});

	// auto complete for search 
	$("#search-query").on('change input', function () {
		var query = $(this).val().trim();
		if (query != '') {
			var html = '';
			var params = {
				method_name: 'getSearchResult',
				class_name: 'site',
				q: query,
				search_key: $("#search_key").val(),
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: "json",
				type: "post",
				success: function (data) {
					var type = '';
					var name = '';
					var target_url = '';
					html += '<ul class="list-group">';

					if (data.items.length > 0) {
						$(".search-no-result").hide();
					} else {
						$(".search-no-result").show();
					}

					$.each(data.items, function (index, item) {
						if (type != item.type) {
							html += '<li class="list-group-item"><label>' + item.type + '</label></li>';
						}
						type = item.type;
						switch (item.tb_name) {
							case 'area': // 지역 
								target_url = "../area/?idx=" + item.idx;
								break;
							case 'good': // 상품 
								target_url = "../good/?idx=" + item.idx;
								break;
							case 'magazine': // 매거진 
								target_url = "../magazine/?idx=" + item.idx;
								break;
						}
						name = item.name.replace(query, '<b>' + query + '</b>');
						html += '<li class="list-group-item search-result-link" onclick="location.href=\'' + target_url + '\'">' + name + '</li>';
					});
					html += '</ul>';
					$("#search-results").html(html);
					if ($("#search-results").css("display") == "none") $("#search-results").show();
				}
			});
		} else {
			$("#search-results").html('');
			$(".search-no-result").hide();
		}
	});

	// 카테고리 상단 텍스트 검색
	$(document).on("submit", ".frm-search", function () {
		var q = $(this).find("input[type='text']").val();
		var url = location.pathname + "?q=" + q + getQueryStringExcept('q');
		location.href = url;
		return false;
	});
	$(".frm-search i").click(function () {
		$(".frm-search").trigger("submit");
	});
	// 검색초기
	$(document).on("click", ".btn-search-reset", function () {
		location.href = location.pathname + "?idx=" + getURLParamVal('idx');
		return false;
	});


	/*
	 * 												팝업 popup - 서버 이전 2017.11.27 추가
	*/
	closePop = function() {
		if ( $("#chk_maindiv_close:checked").length > 0 ){ 
			setCookie( "pop_server_check", "done" , 1 ); 
		}
		$("#pop_server_check").hide();
	}
	if (getCookie("pop_server_check")) $("#pop_server_check").hide();

	/*
	 * 비밀번호 재설정 
	 * */
	$("#btn_new_pwd").click(function () {
		if ($("#mem_newpwd").val() != $("#mem_newpwd2").val()) {
			alert(W_TXT.ERR_PWD_NOT_MATCH);
			$("#mem_newpwd2").focus();
			return false;
		}

		var params = {
			method_name: 'memberNewPwdUpdate',
			mem_newpwd: $("#mem_newpwd").val(),
			token: $(this).data("token"),
		}
		$.ajax({
			url: '../inc/api.php',
			data: params,
			dataType: "json",
			type: "post",
			success: function (data) {
				alert(data.msg);

				if (data.result == true) {
					location.replace('/');
				}
			}
		});
	});


	// 회원 가입 모달 호출
	$("[name=btn-join]").click(function (e) {
		e.preventDefault();

		var url = "../common/join.html";
		$("#modal-join").load(url).modal("show");
	});

	// 로그인 모달 호출
	$("[name=btn-login]").click(function (e) {
		e.preventDefault();

		call_modal_login();
	});
	function call_modal_login() {
		var url = "../common/login.html";
		$("#modal-login").load(url).modal("show");
	}

	// 상단 대표 이미지 헤더 없는 경우 네비바 포지션 변경
	if ($(".wrapper-header").length == 0) {
		$("#navsub").addClass("no-header");
	}

	// 지역, 상품 높이 자동으로 맞춤 
	if ($('.item-area img').length) { // 이미지
		$('.item-area img').matchHeight();
	}
	if ($('.item-good img').length) { // 이미지
		$('.item-good img').matchHeight();
	}
	if ($('.item-good .good-info').length) { // 정보영역
		$('.item-good .good-info').matchHeight();
	}

	// 검색 
	$("#s_area").change(function () {
		$(this).closest("form").submit();
	});
	$(".dropdown img.flag").addClass("flagvisibility");

	$(".dropdown dt a").click(function () {
		$(".dropdown dd ul").toggle();
	});

	$(".dropdown dd ul li a").click(function () {
		var text = $(this).html();
		$(".dropdown dt a span").html(text);
		$(".dropdown dd ul").hide();
		$("#result").html("Selected value is: " + getSelectedValue("sample"));
	});

	function getSelectedValue(id) {
		return $("#" + id).find("dt a span.value").html();
	}

	$(document).bind('click', function (e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("dropdown"))
			$(".dropdown dd ul").hide();
	});

	

	/*										COMMON start 												*/

	if (pathname.indexOf("/common") > -1) {

		// 필터 그룹 선택
		$(".filter_group").click(function () {
			var obj = $(this);
			setTimeout(function () {
				obj.siblings().removeClass("active");

				var filter_idx = [];
				$(".filter_group.active").each(function () {
					filter_idx.push($(this).data("value"));
				});
				var url = location.pathname + "?filter=" + filter_idx.join() + getQueryStringExcept('filter;page_no');
				location.replace(url);
			}, 25);
		});

		// 카테고리: 국내/해외 선택
		$("#select-area-type").change(function () {
			var params = {
				class_name: 'site',
				method_name: 'getArea',
				mode: 'list',
				where: ' and is_national = ' + $(this).val(),
				orderby: ' order by title',
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: 'json',
				type: 'post',
				success: function (data) {
					var html = '<option value="">--------------------</option>';
					if (data.items.length > 0) {
						$.each(data.items, function (index, item) {
							html += '<option value="' + item.area_idx + '">' + item.title + '</option>';
						});
						$("#select-area").html(html);
					}
				}
			});
		});

		// 카테고리 : 지역 선택
		$("#select-area").change(function () {
			var arr_aidx = $("#aidx").val().split(',');
			if ($(this).val() && $.inArray($(this).val(), arr_aidx) < 0) {
				var aidx = $("#aidx").val() + (($("#aidx").val()) ? ',' : '') + $(this).val();
				location.replace(pathname + "?aidx=" + aidx + getQueryStringExcept('aidx;page_no'));
			}
		});

		// 카테고리 : 선택된 지역 목록 폭 지정
		var selected_area_width = 0;
		$(".item-selected-area").each(function () {
			selected_area_width += $(this).width() + 30 + 6; // padding left/right, margin-right
		});
		$(".selected-area-list").width(selected_area_width);

		// 카테고리 : 선택된 지역 삭제
		$("[name=btn-selected-area-remove]").click(function () {
			var remove_val = $(this).parent().data("idx");
			var arr_aidx = $("#aidx").val().split(',');
			arr_aidx = jQuery.grep(arr_aidx, function (a) {
				return a != remove_val;
			});
			location.replace(pathname + "?aidx=" + arr_aidx.join() + getQueryStringExcept('aidx;page_no'));
		});
	}

	/*										COMMON END 												*/

	/************************************************************************************************
	 * 
	 * 										메인 
	 * 
	 *************************************************************************************************/
	if (pathname.indexOf("/main") > -1) {
		
		//메인 헤더 이미지 슬라이더
	    setHeaderFade();

	    function setHeaderFade() {	    	
	    	var li_length = $('.slides > ul > li').length;
	    	var min_duration = 6;	    	
	    	var max_duration = min_duration * li_length;
	    	
	    	if(li_length > 2){
	    		$(".slides > ul > li").css({
	    			'-webkit-animation-name': 'slides_animation_'+li_length,
	    			'-o-animation-name': 'slides_animation_'+li_length,
	    			'animation-name': 'slides_animation_'+li_length,
	    		});
    		}else{
    			$(".slides > ul > li").css({
	    			'-webkit-animation-name': 'slides_animation_3',
	    			'-o-animation-name': 'slides_animation_3',
	    			'animation-name': 'slides_animation_3',
	    		});
    		}
	    	
	    	$(".slides > ul > li").css({	    		
	    		'-webkit-animation-duration': max_duration+'.0s',
    	    	'-moz-animation-duration': max_duration+'.0s',
    	    	'-o-animation-duration': max_duration+'.0s',
    	    	'animation-duration': max_duration+'.0s',
    	    	'-webkit-animation-delay': '0.0s',
    			'-moz-animation-delay': '0.0s',
    			'-o-animation-delay': '0.0s',
    			'animation-delay': '0.0s',
	    	});
	    	
	    	for( var i = 1 ; i < li_length; i++ ){
	    		$(".slides > ul > li").eq(i).css({
	    	    	'-webkit-animation-delay':  (i * min_duration) + '.0s',
	    			'-moz-animation-delay': (i * min_duration) + '.0s',
	    			'-o-animation-delay': (i * min_duration) + '.0s',
	    			'animation-delay': (i * min_duration) + '.0s',
	    		});
	    	}
	    }
	    
		// 추천 지역 높이 자동으로 맞춤 
		var featured_content_height = $(".wrapper-page").find(".featured-content.normal").height();
		var featured_content_long = (featured_content_height * 2) + 10;
		$(".featured-content.long").height(featured_content_long);
		$(".featured-content.wide").height(featured_content_height);

		// 슬라이더
		$(".slick-main-banner").slick({
			lazyLoad: 'ondemand',
			infinite: true,
			centerMode: false,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
		});
		
		$('.slider-nav').slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			focusOnSelect: false,
			arrow: true,
			prevArrow: '<img src="../images/btn/arrow-prev-gray.png" class="main-good-slider-prev">',
			nextArrow: '<img src="../images/btn/arrow-next-gray.png" class="main-good-slider-next">',
		});

		// filter search button click 
		$("#btn-search-filter").click(function () {
			var filter_idx = [];
			$(".filter_group.active").each(function () {
				filter_idx.push($(this).data("value"));
			});
			var area_idx = ($("#select-filter-area-n").hasClass("hide")) ? (($("#select-filter-area-in").hasClass("hide")) ? '' : $("#select-filter-area-in").val()) : $("#select-filter-area-n").val();
			location.href = "../common/sresult-filter.html?aidx=" + area_idx + "&filter=" + filter_idx.join();
		});

		// 필터 그룹 선택
		$(".filter_group").click(function () {
			var obj = $(this);
			obj.siblings().removeClass("active");

			setTimeout(function () {
				// 필터 검색 국내/해외 클릭 시 지역 선택 노출
				switch (obj.text()) {
					case "국내":
						$("#select-filter-area-n").removeClass("hide");
						$("#select-filter-area-in").addClass("hide");
						break;
					case "해외":
						$("#select-filter-area-n").addClass("hide");
						$("#select-filter-area-in").removeClass("hide");
						break;
				}
			}, 25);
		});

		//배너 태그 클릭 
		$(".main-banner-tags").find(".tag").click(function (e) {
			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			// 노출 삭제
			if ($(".banner-item").hasClass("show")) {
				$(".banner-item").removeClass("show");
				$(".banner-item").addClass("hide");
			}

			$($(this).data("target")).removeClass("hide").addClass("show"); // 대상 배너 아이템 노출
		});

		// 지역 탭 클릭
		$('.main-area-tab a').click(function (e) {
			e.preventDefault();

			$(this).siblings().removeClass("active");
			$(this).addClass("active");

			$(".tab-content > .tab-pane").removeClass("active");
			$($(this).attr("href")).addClass("active");

			return false;
		});
		
		//  중지 bubbling up the DOM tree 
		$(".app-stores").find("a").click(function(e) {
			e.stopPropagation();
		});

	}

	/*										메인 END 												*/

	/************************************************************************************************
	 * 
	 * 										지역 
	 * 
	 *************************************************************************************************/
	if (pathname.indexOf("/area") > -1) {

		// 슬라이더
		$(".slick-area").slick({
			lazyLoad: 'ondemand',
			infinite: false,
			centerMode: false,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
		});

		// 정렬 순서 셀렉트
		$("#select_sort").on("change", function () {
			var url = pathname + "?s_sort=" + $(this).val() + getQueryStringExcept('s_sort');
			location.replace(url);
		});

		//달력선택시
		$(".wrapper-dates .reserdate").click(function () {
			if ($(this).hasClass("on") == false) {
				$("#calendar-side .reserdate").removeClass("on");
				$("#calendar-side .alldate").removeClass("on");
				$(this).addClass("on");

				var url = pathname + "?s_date=" + $(this).attr("data-date") + getQueryStringExcept('s_date');
				location.replace(url);
			}
		});

		$(".wrapper-dates .alldate").click(function () {
			if ($(this).hasClass("on") == false) {
				$("#calendar-side .reserdate").removeClass("on");
				$(this).addClass("on");

				var url = pathname + getQueryStringExcept('s_date', true);
				location.replace(url);
			}
		});

		// 카테고리 선택 시
		$(".good-ca").click(function () {
			var url = pathname + "?cat=" + $(this).data("idx") + "&scl=" + $("#scroll").scrollLeft() + getQueryStringExcept('cat;scl');
			location.replace(url);
		});

		// 카테고리 스크롤 이동
		$("#scroll").scrollLeft($("#scroll").data("scl"));


	}


	/*										지역 END 												*/


	/************************************************************************************************
	 * 
	 * 										큐레이션  
	 * 
	 *************************************************************************************************/
	if (pathname.indexOf("/curation") > -1) {
		$(".slick-curation").slick({
			lazyLoad: 'ondemand',
			infinite: true,
			centerMode: false,
			autoplay: false,
			dots: true
		}).on('afterChange', function (event, slick, currentSlide) {
			//	  console.log(currentSlide);

			// 현재 슬라이드 이미지 DB 인덱스
			var image_idx = $("[data-slick-index=" + currentSlide + "] > img").attr("data-idx");
			// 뷰 카운팅 업데이트 처리
			var formdata = new FormData();
			formdata.append("class_name", "front");
			formdata.append("method_name", "updateCurationSliderView");
			formdata.append("idx", image_idx);

			$.ajax({
				url: '../inc/api.php',
				data: formdata,
				dataType: "json",
				processData: false,
				contentType: false,
				type: "POST",
				success: function (data) {
					//  console.log(data);
				}
			});
		});
	}
	/*																			큐레이션 END 																	*/


	/************************************************************************************************
	 * 
	 * 										상품 
	 * 
	 *************************************************************************************************/
	if (pathname.indexOf("/good") > -1) {
		/*
		 * 										상품 상세 페이지 
		 */

		if (_hash.indexOf("vp") > -1) {
			window.location.hash = '';
			$(".btn-video-play").trigger("click");
		}

		// 앱 다운 박스mouseenter
		$(document).on("mouseenter", ".balloon-box-good", function () {
			$("#app-qrcode").show();
		});
		// 앱 다운 박스mouseleave
		$(document).on("mouseleave", ".balloon-box-good", function () {
			$("#app-qrcode").hide();
		});

		// font family set clear
		$(".info-content").find("div, span, p").each(function () {
			$(this).css("font-family", "inherit");
		});

		// a link target
		$(".info-content").find("a").each(function (idx, obj) {
			if ($(obj).attr("target") === undefined || $(obj).attr("target") != "_blank") $(obj).attr("target", "_blank");
		});

		$("#btn-modal-course").click(function () {
			$("#modal-course").load(
				"../good/modal-course.html",
				{
					good_idx: $(this).data("idx"),
				}
			);
		});

		// 슬라이더 
		$('.slider-good-images').slick({
			lazyLoad: 'ondemand',
			infinite: true,
			centerMode: false,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false,
			prevArrow: '<img src="../images/btn/arrow-prev.png" class="slider-prev">',
			nextArrow: '<img src="../images/btn/arrow-next.png" class="slider-next">',
		});

		// 로그인하지 않았을 경우 예약하기클릭하면 로그인 창 호출 
		$(".need-login").click(function () {
			alert(W_TXT.NEED_LOGIN);
			call_modal_login();
		});
		
		check_select_date = function () {
			if ($('#good_info_sel_idx').val() == API_IDX.MAALTALK || $('#good_info_sel_idx').val() == API_IDX.GBWIFI ) {
				if (!$("#s_date").val() || !$("#e_date").val()) {
					alert(W_TXT.CHOOSE_ORDERDATE);
					return false;
				} else if ($("#s_date").val() == '대여일' || $("#e_date").val() == '반납일') {
					alert(W_TXT.CHOOSE_ORDERDATE);
					return false;
				} else if ($("#s_date").val() >= $("#e_date").val()) {
					alert(W_TXT.CHOOSE_RIGHT_DATE);
					return false;
				}
			} else if (!$("#s_date").val()) {
				alert(W_TXT.CHOOSE_ORDERDATE);
				return false;
			}
		}

		//출국 공항 선택
		check_select_airp = function () {
			//날짜 체크
			if (check_select_date === false) return false;
			if ($('#airp').length > 0) {
				if ($('#airp').val() == '') {
					alert(W_TXT.CHOOSE_AIRPORT);
					return false;
				}
			}
		}

		//이용 날짜 계산
		calc_use_date = function () {
			if ($('#s_date').val() != '' && $('#e_date').val() != '') {
				var s_date = new Date($('#s_date').val());
				var e_date = new Date($('#e_date').val());

				var btMs = e_date.getTime() - s_date.getTime() ;
	    		var btDay = btMs / (1000*60*60*24) ;
				var result = btDay + 1 //1박 2일이면 2를 반환해야 하므로 1을 더함
				if (result < 1) {
					return 0;
				} else if (!isNaN(result)) {
					return result;
				}
			}
			return 0;
		}

		// 수량 감소
		downItemCount = function (idx) {

			if (check_select_date() === false) return false;

			//말톡 또는 글로벌WIFI 예약일 경우 공항 선택이 필요
			if ($('#good_info_sel_idx').val() == API_IDX.MAALTALK || $('#good_info_sel_idx').val() == API_IDX.GBWIFI) {
				if (check_select_airp() === false) return false;
			}
			var obj = $("#option_cnt_" + idx);
			var good_cnt = parseInt(obj.val());
			var pax_min = obj.data("pax-min");
			var sub_amount = (good_cnt > 0 && good_cnt - 1 < pax_min) ? pax_min : 1;
			var is_addon = obj.data("is_addon");

			good_cnt = good_cnt - sub_amount;
			if (good_cnt <= 0) good_cnt = 0;

			obj.val(good_cnt);
			sumItemPrice();

			if (good_cnt == 0 && !is_addon) {
				var siblings_remain = false;
				obj.parents(".option-item").find("[name=option_cnt]").each(function () {
					if ($(this).val() > 0) siblings_remain = true;
				});
				if (!siblings_remain) {
					$("[name=option_cnt]:disabled").each(function (index, obj2) {
						$(obj2).attr("disabled", false);
						$(obj2).parents(".option-item").find("[type=button], .option_timeslot").attr("disabled", false);
					});
				}
			}
		}

		// 수량 증가
		upItemCount = function (idx) {
			if (check_select_date() === false) return false;

			//말톡 또는 글로벌 예약일 경우 공항 선택이 필요
			if ($('#good_info_sel_idx').val() == API_IDX.MAALTALK || $('#good_info_sel_idx').val() == API_IDX.GBWIFI) {
				if (check_select_airp() === false) return false;
			}
			var obj = $("#option_cnt_" + idx);
			var good_cnt = parseInt(obj.val());
			var max_good_cnt = parseInt(obj.data("cnt"));
			var pax_max = obj.data("pax-max");
			var pax_min = obj.data("pax-min");
			var add_amount = (good_cnt == 0 && pax_min > 0) ? pax_min : 1;
			var is_addon = obj.data("is_addon");

			if (!is_addon) {
				$("[name=option_cnt][data-is_addon=false][data-option-idx!=" + obj.data("option-idx") + "]").each(function (index, obj2) {
					$(obj2).attr("disabled", true);
					$(obj2).parents(".option-item").find("[type=button], .option_timeslot").attr("disabled", true);
				});
			}

			if (max_good_cnt <= good_cnt) return false;
			if (pax_max != '' && pax_max <= good_cnt) return false;

			obj.val(good_cnt + add_amount);
			sumItemPrice();
		}

		// 총 금액 계산
		sumItemPrice = function () {
			var good_total_price = 0;
			$("[name=option_cnt]").each(function (index, obj) {
				var count = parseInt($(obj).val());
				var price = parseInt($(obj).data("price"));
				var new_price = price * count;
				good_total_price += new_price;
			});

			$("#good_total_price").text(get_price_text(good_total_price));
		}
		
		/*
		* desc : HTML 액티비티 부분 구성하기
		*/
		if ($('#activity_html').length > 0) {

			//상품 판매 업체 IDX
			//(말톡 API를 위해 만들었음)
			var good_info_sel_idx = ($('#good_info_sel_idx').val() != '') ? $('#good_info_sel_idx').val() : '""';

			//공통
			var locale_code = ($('#locale_code').val() != '') ? $('#locale_code').val() : '""';
			var good_info_start_date = ($('#good_info_start_date').val() != '') ? $('#good_info_start_date').val() : '""';
			var good_info_end_date = ($('#good_info_end_date').val() != '') ? $('#good_info_end_date').val() : '""';
			var good_info_week_disabled = ($('#good_info_week_disabled').val() != '') ? $('#good_info_week_disabled').val() : '""';
			var good_info_disabled_date = ($('#good_info_disabled_date').val() != '') ? $('#good_info_disabled_date').val() : '""';
			var good_info_specific_date = ($('#good_info_specific_date').val() != '') ? $('#good_info_specific_date').val() : '""';

			/*
			* 말톡 또는 글로벌 IDX일 경우
			* 말톡 IDX = API_IDX.MAALTALK
			* 글로벌WIFI IDX = API_IDX.GBWIFI
			*/
			switch (good_info_sel_idx) {
				case API_IDX.GBWIFI :
				case API_IDX.MAALTALK:
					var html = '';
					html += '<!-- 대여일 -->';
					html += '<div class="booking-calendar col-md-6">';
					html += '<i class="fa fa-calendar"></i>';
					html += '<input type="text" name="s_date" id="s_date" value="대여일"';

					html += ' data-date-format="yyyy-mm-dd" data-date-language=' + locale_code;
					html += ' data-date-autoclose="true" ';
					html += ' data-date-start-date=' + good_info_start_date;
					html += ' data-date-end-date=' + good_info_end_date;
					html += ' data-date-days-of-week-disabled=' + good_info_week_disabled;
					html += ' data-date-dates-disabled=' + good_info_disabled_date;
					html += ' data-date-dates-specific=' + good_info_specific_date + ' readonly>';
					html += '<i class="fa fa-angle-down"></i> </div>';

					html += '<!-- 반납일 -->';
					html += '<div class="booking-calendar col-md-6">';
					html += '<i class="fa fa-calendar"></i>';
					html += '<input type="text" name="e_date" id="e_date" value="반납일"';

					html += ' data-date-format="yyyy-mm-dd" data-date-language=' + locale_code;
					html += ' data-date-autoclose="true" ';
					html += ' data-date-start-date=' + good_info_start_date;
					html += ' data-date-end-date=' + good_info_end_date;
					html += ' data-date-days-of-week-disabled=' + good_info_week_disabled;
					html += ' data-date-dates-disabled=' + good_info_disabled_date;
					html += ' data-date-dates-specific=' + good_info_specific_date + ' readonly>';
					html += '<i class="fa fa-angle-down"></i> </div>';

					$('#activity_html').attr('style', 'padding-bottom: 32px;');

					break;
				default:
					var html = '<div class="booking-calendar">';
					html += '<i class="fa fa-calendar"></i>';
					html += '<input type="text" name="s_date" id="s_date"';
	
					html += ' data-date-format="yyyy-mm-dd" data-date-language=' + locale_code;
					html += ' data-date-autoclose="true" ';
					html += ' data-date-start-date=' + good_info_start_date;
					html += ' data-date-end-date=' + good_info_end_date;
					html += ' data-date-days-of-week-disabled=' + good_info_week_disabled;
					html += ' data-date-dates-disabled=' + good_info_disabled_date;
					html += ' data-date-dates-specific=' + good_info_specific_date + ' readonly>';
					html += '<i class="fa fa-angle-down"></i> </div>';
			}

			$('#activity_html').html(html);

			var good_info_chk_open = $('#good_info_chk_open').val();
			var m_level = $('#m_level').val();

			//말톡 또는 글로벌와이파이 IDX인 경우와 아닌 경우 클래스 속성 부여
			if ( (good_info_sel_idx == API_IDX.MAALTALK || good_info_sel_idx == API_IDX.GBWIFI) && (good_info_chk_open == "Y" || m_level > 8)) {
				$('#s_date').attr('class', 'datepicker');
				$('#e_date').attr('class', 'datepicker');
			} else {
				$('#s_date').attr('class', 'datepicker');
			}

		}
		/*
		 * activity HTML 폼 구성 end
		 */

		// 이용 날짜 선택
		if ($('#s_date').length > 0) {
			//말톡과 글로벌WIFI가 아닌 상품일 경우
			if( $('#good_info_sel_idx').val() != API_IDX.MAALTALK && $('#good_info_sel_idx').val() != API_IDX.GBWIFI ){
				load_option_box(); // 옵션 선택 selectbox 표시
				var date_dates_specific = $('#s_date').data("date-dates-specific"); // 판매 지정일
				var date_dates_specific_arr = date_dates_specific.split(",");
				var date_dates_disabled = $('#s_date').data("date-dates-disabled"); // 판매 제외일
				var date_dates_disabled_arr = date_dates_disabled.split(",");
				$('#s_date.datepicker').datepicker({
					format: "yyyy-mm-dd",
					startDate: $('#s_date').attr("data-date-start-date"),
					endDate: $('#s_date').attr("data-date-end-date"),
					autoclose: true,
					todayHighlight: true,
					daysOfWeekDisabled: $('#s_date').attr("data-date-days-of-week-disabled"),
					datesDisabled: date_dates_disabled_arr,
					beforeShowDay: function (date) { // 특정일지정
						if (date_dates_specific_arr != '') {
							var month = (date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
							var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
							var formattedDate = date.getFullYear() + "-" + month + "-" + day;
							if ($.inArray(formattedDate, date_dates_specific_arr) == -1) {
								return {
									enabled: false
								};
							} else {
								return {
									enabled: true
								};
							}
							return false;
						}
					},
					templates: {
						leftArrow: '<span class="glyphicon glyphicon-menu-left"><span>',
						rightArrow: '<span class="glyphicon glyphicon-menu-right"><span>',
					}
				}).on("changeDate", function (e) { // 이용날짜 변경 시 데이터 처리  
					// 로그인
					if ($(".need-login").length) {
						call_modal_login();
					} else {
						if (check_select_date() === false) return false;

						$("#good_total_price").text("0");
						load_option_data();
					}
				});
			}else{
				/*
				 * date : 20170707
				 * author : 김지홍
				 * desc : 말톡 와이파이는 이용날짜와 반납날짜가 필요
				 *
				 */
				var s_date_isChanged = false; //시작 날짜 선택 여부
				var e_date_isChanged = false; //반납 날짜 선택 여부

				var date_dates_specific = $('#s_date').data("date-dates-specific"); // 판매 지정일
				var date_dates_specific_arr = date_dates_specific.split(",");
				var date_dates_disabled = $('#s_date').data("date-dates-disabled"); // 판매 제외일
				var date_dates_disabled_arr = date_dates_disabled.split(",");

				airport_select(); // 공항 선택 selectbox 표시
				$('#s_date.datepicker').datepicker({
					format: "yyyy-mm-dd",
					startDate: $('#s_date').attr("data-date-start-date"),
					endDate: $('#s_date').attr("data-date-end-date"),
					autoclose: true,
					todayHighlight: true,
					daysOfWeekDisabled: $('#s_date').attr("data-date-days-of-week-disabled"),
					datesDisabled: date_dates_disabled_arr,
					beforeShowDay: function (date) { // 특정일지정
						if (date_dates_specific_arr != '') {
							var month = (date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
							var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
							var formattedDate = date.getFullYear() + "-" + month + "-" + day;
							if ($.inArray(formattedDate, date_dates_specific_arr) == -1) {
								return {
									enabled: false
								};
							} else {
								return {
									enabled: true
								};
							}
							return false;
						}
					},
					templates: {
						leftArrow: '<span class="glyphicon glyphicon-menu-left"><span>',
						rightArrow: '<span class="glyphicon glyphicon-menu-right"><span>',
					}
				}).on("changeDate", function (e) { // 이용날짜 변경 시 데이터 처리  
					// 로그인
					if ($(".need-login").length) {
						call_modal_login();
					} else {
						s_date_isChanged = true;
						getEndDatepicker(); //대여일을 선택하면 반납일 선택 가능

						$("#good_total_price").text("0");
						$("#option-item-title").html('');
						$("#option-item-price").html('');
						$(".good-option-inputuse").hide();
						$(".booking-total").hide();

						if(s_date_isChanged && e_date_isChanged){
							load_option_box();
							load_option_data();
						}
					}
				});

				date_dates_specific = $('#e_date').data("date-dates-specific"); // 판매 지정일
				date_dates_specific_arr = date_dates_specific.split(",");
				date_dates_disabled = $('#e_date').data("date-dates-disabled"); // 판매 제외일
				date_dates_disabled_arr = date_dates_disabled.split(",");
				$('#e_date.datepicker').datepicker({
					format: "yyyy-mm-dd",
					startDate: $('#e_date').attr("data-date-start-date"),
					endDate: $('#e_date').attr("data-date-end-date"),
					autoclose: true,
					todayHighlight: true,
					daysOfWeekDisabled: $('#e_date').attr("data-date-days-of-week-disabled"),
					datesDisabled: date_dates_disabled_arr,
					beforeShowDay: function (date) { // 특정일지정
						if (date_dates_specific_arr != '') {
							var month = (date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
							var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
							var formattedDate = date.getFullYear() + "-" + month + "-" + day;
							if ($.inArray(formattedDate, date_dates_specific_arr) == -1) {
								return {
									enabled: false
								};
							} else {
								return {
									enabled: true
								};
							}
							return false;
						}
					},
					templates: {
						leftArrow: '<span class="glyphicon glyphicon-menu-left"><span>',
						rightArrow: '<span class="glyphicon glyphicon-menu-right"><span>',
					}
				}).on("changeDate", function (e) { // 이용날짜 변경 시 데이터 처리				
					// 로그인
					if ($(".need-login").length) {
						call_modal_login();
					} else {
						$("#good_total_price").text("0");
						e_date_isChanged = true;

						if(s_date_isChanged && e_date_isChanged){
							load_option_box();
							load_option_data();
						}
					}
				});
				
				getEndDatepicker = function(){
					$("#e_date").val('반납일');
					var item_cnt = $("#item_cnt").val();
					var availableDay = new Date($('#s_date').val()); // 판매 가능 수량에 따른 판매 가능 날짜
					availableDay.setDate(availableDay.getDate() + Number(item_cnt) - 1);
					
					$("#e_date.datepicker").datepicker('setStartDate', $("#s_date").val());
					$("#e_date.datepicker").datepicker('setEndDate', availableDay);
				}

				var item_cnt = $("#item_cnt").val();
				if(item_cnt == 0){
					alert('매진된 상품입니다.');
				}

				//달력을 선택하고 빈곳을 클릭할때 오늘날짜가 선택되는 버그 방지
				var s_date = '';
				var e_date = '';
				$('#s_date').click(function(){
						s_date = $(this).val();
				});
				$('#s_date').focusout(function(){
					if( !Date.parse(s_date) ) {						
						$(this).val('대여일');
					}
				});
				$('#e_date').click(function(){
					e_date = $(this).val();
				});
				$('#e_date').focusout(function(){
					if( !Date.parse(e_date) ){
						$(this).val('반납일'); 
					}
				});
			}
		}

		//공항 선택 박스 표시
		function airport_select(){
			var html = '';
			html += '<label>출국 공항 선택</label>';
			html += '<select name="airp" id="airp">';
			html += '<option value="">선택해주세요.</option>';
			html += '<option value="icn1">인천 제1터미널</option>';
			html += '<option value="icn2">인천 제2터미널</option>';
			html += '<option value="gmp">김포</option>';
			html += '<option value="pus">김해</option>';
			html += '</select>';
			$("#airport_select").html(html);
			$("#airport_select").attr('style', 'margin-bottom : 24px;');
			$("#option-item-price").html('');
			$(".good-option-inputuse").hide();
			$(".booking-total").hide();
		}

		/* 
		 * ----------------------------
		 * 옵션 데이터 가져오기 함수 정의 시작
		 * ----------------------------
		 * Date : 2017-08-17
		 * Desc : 상품 주문시 날짜 및 옵션 선택 UI 변경
		 * 
		 * <Flow>
		 * 1. 날짜 선택
		 * 2. 옵션 선택
		 * 3. 수량 선택
		 */
		var data_arr; //해당 날짜에 선택 가능한 옵션 데이터 저장

		function load_option_box(){
			var html = '';
			html += '<label>옵션 선택</label>';
			html += '<select id="parent_option" onchange="setChildOption();">';
			html += '<option>옵션을 선택해 주세요.</option>';

			$("#option-item-title").html(html);
			$("#option-item-title").attr('style', 'margin-bottom: 24px;');
			$("#option-item-title").show();
			$("#option-item-detail").html('');
			$("#option-item-price").html('');
			$(".good-option-inputuse").hide();
			$(".booking-total").hide();
		}

		//옵션 데이터 불러오기 및 기본 옵션 표시
		load_option_data = function (option_idx) {
			var params = {
				good_idx: $("#good_idx").val(),
				option_idx: option_idx,
				s_date : $("#s_date").val(),
				get_opt_per_day: $("#get_opt_per_day").val(),
				method_name: 'goodOptionLoad'
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: "json",
				type: "post",
				success: function (data) {
					if (data.result == false) {
						alert(data.msg);
						return false;
					}
					var html = '';

					data_arr = data;

					html += '<label>옵션 선택</label>';
					html += '<select id="parent_option" onchange="setPriceOption();">';
					html += '<option>옵션을 선택해 주세요.</option>';
					$.each(data_arr.items, function(index, item){
						html += '<option value="'+index+'">'+item.title+'</option>';
					});

					$("#airport_select").attr('style', '');
					$("#option-item-title").html(html);
					$("#option-item-title").attr('style', 'margin-bottom: 24px;');
					$("#option-item-title").show();
					$("#option-item-price").html('');
					$(".good-option-inputuse").hide();
					$(".booking-total").hide();
				}
			});
		}
		 
		//옵션 선택 시 가격 표시
		setPriceOption = function(){
			var html = '';
			var idx = $("#parent_option option:selected").index();
			
			html += '<label>수량 선택</label>';
			html += '<div id="sub-option-title" class="good-option-content clearfix">';
			$.each(data_arr.items, function (index, item) {
				html += '<div id="price_option_title_'+index+'" style="font-size: 14px; font-weight: 700; display: none; "><span>'+item.title+'</span></div>';
				$.each(item.items, function (index2, item2) {
					html += '<div id="price_option_'+index+'-'+index2+'" name="price_option_'+index+'" style="padding: 10px 0; display: none;">';
						html += '<div class="clearfix space-top-1">';
							html += '<div class="pull-left">';
								html += '<span>'+item2.category+' '+item2.category_desc+'</span>';
							html += '</div>';
							html += '<div class="pull-right">';
								html +=	'<span class="good-option-price">'+item2.price_text+'</span>';
								html +=	'<button type="button" class="btn count-down" onclick="downItemCount('+item2.idx+')">-</button>';
								html +=	'<input name="option_cnt" id="option_cnt_'+item2.idx+'" type="text" value="0" data-option-idx="'+item.idx+'" data-item-idx="'+item2.idx
										 +'" data-cnt="'+item2.cnt+'" data-price="'+item2.price+'" data-pax-min="'+item2.pax_min+'" data-pax-max="'+item2.pax_max+'" readonly>';
								html +=	'<button type="button" class="btn count-up" onclick="upItemCount('+item2.idx+')">+</button>'
							html +=	'</div>';
						html +=	'</div>';
					html += '</div>';
					
				});

				if(item.timeslot.length > 0){
					html += '<div id="time_option_'+index+'" style="display: none;" >';
						html +=	'<div class="clearfix space-top-1">';
							html +=	'<div class="pull-left">';
								html +=	'<span>'+item.timeslot_label+'</span>';
							html += '</div>';
							html +=	'<div class="pull-right">';
								html +=	'<select name="timeslot['+item.idx+']">';
									html +=	'<option value="">선택</option>';
									$.each(item.timeslot, function (index2, timeslot) {
										html +=	'<option value="'+timeslot.idx+'">'+timeslot.timeslot+'</option>';
									});
								html +=	'</select>';
							html +=	'</div>';
						html +=	'</div>';
					html +=	'</div>';
				}
				
			});

			$("#option-item-price").html(html);
			$("#option-item-price").show();
			$(".good-option-inputuse").show();
			$(".booking-total").show();

			//옵션을 아무것도 선택하지 않을 경우 수량 선택 숨기기
			if(idx < 1){
				$("#option-item-price").html('');
				$(".good-option-inputuse").hide();
				$(".booking-total").hide();
				$("#good_total_price").html(0);
			}

			var parent_option = document.getElementById("parent_option");
			var poption_value = parent_option.options[parent_option.selectedIndex].value;

			var child_option = idx;
			var coption_value = idx;

			$("#price_option_title_"+poption_value).show();
			$("[name=price_option_"+poption_value+"]").each(function(){
				$(this).show();
			});
			$("#time_option_"+poption_value).each(function(){
				$(this).show();
			});

			//말톡 또는 글로벌WIFI 일 경우, 버튼 속성 부여
			if ( (good_info_sel_idx == API_IDX.MAALTALK || good_info_sel_idx == API_IDX.GBWIFI ) && (good_info_chk_open == "Y" || m_level > 8)) {
				$('.count-up').attr('disabled', true);
				$('.count-down').attr('disabled', true);

				//이용날짜 계산 후 옵션수량값 변경
				$('input[name="option_cnt"]').val(calc_use_date());
			}
			sumItemPrice();
		}
		/* 
		 * ----------------------------
		 * 옵션 데이터 가져오기 함수 정의 끝
		 * ----------------------------
		 */

		//옵션 선택 드랍다운 클릭(선택)시 얼럿 노출
		if($("#parent_option").click(function(){
			if( ! Date.parse($("#s_date").val()) ) {
				alert('날짜를 선택해주세요.');
			}
		}) );

		// 카트 담기, 예약하기
		$("#btn-add-cart, #btn-order").click(function () {
			var button = $(this);
			var btn_label = button.html();
			var obj_id = $(this).attr("id");
			var method_name = (obj_id == 'btn-add-cart') ? 'goodCartAddend' : 'goodOrder';

			if (check_select_date() === false) return false;
			if (check_select_airp() === false) return false;	

			var total_cnt = 0;
			var arr_good_option_idx = [];
			var arr_good_option_item_idx = [];
			var arr_good_option_cnt = [];
			var arr_timeslot = [];
			var select_time = false;
			$("[name=option_cnt]").each(function (index, obj) {
				var count = $(obj).val();
				var option_idx = $(obj).data("option-idx");
				var item_idx = $(obj).data("item-idx");
				if (count > 0) {
					arr_good_option_idx.push(option_idx);
					arr_good_option_item_idx.push(item_idx);
					arr_good_option_cnt.push(count);
					if ($('[name="timeslot[' + option_idx + ']"]').length) {
						var time = $('[name="timeslot[' + option_idx + ']"]').val();
						select_time = time ? true : false;
						arr_timeslot.push(time);
					} else {
						select_time = true;
						arr_timeslot.push('');
					}
					total_cnt += count;
				}
			});

			if (total_cnt <= 0) {
				alert(W_TXT.CHOOSE_OPTION);
				return false;
			}
			if (!select_time) {
				alert(W_TXT.SELECT_OPTION_TIME);
				return false;
			}

			// 옵션 입력항목 
			var option_input_label = $("[name=option_input_val]").attr("placeholder");
			var option_input_val = ($("[name=option_input_val]").length > 0) ? $("[name=option_input_val]").val() : '';
			if ($("[name=option_input_val]").length && !option_input_val) {
				alert(option_input_label + W_TXT.ENTER_SOMETHING);
				return false;
			}

			var params = {
				method_name: method_name,
				good_idx: $("#good_idx").val(),
				option_input_val: option_input_val,
				good_option_idx: arr_good_option_idx,
				option_item_idx: arr_good_option_item_idx,
				good_option_cnt: arr_good_option_cnt,
				timeslot: arr_timeslot,
			}

			//말톡 wifi 또는 글로벌 wifi 일 경우 
			var good_info_sel_idx = ($('#good_info_sel_idx').val() != '') ? $('#good_info_sel_idx').val() : '';
			if ( (good_info_sel_idx == API_IDX.MAALTALK || good_info_sel_idx == API_IDX.GBWIFI) ) {
				var endDt = $('#e_date').val(); // 반납일
				var airp = $("#airp").val(); //공항
				var country = $("#good_info_country").val(); //나라(포켓)
				params['e_date'] = endDt;
				params['airp'] = airp;
				params['country'] = country;
			}

			if (obj_id == 'btn-add-cart') params['order_date'] = $("#s_date").val();
			else params['s_date'] = $("#s_date").val();
			button.attr("disabled", true);
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: "json",
				type: "post",
				beforeSend: function () {
					button.html(icon_loading + ' ' + W_TXT.IN_PROGRESS);
				},
				success: function (data) {
					if (obj_id == 'btn-add-cart') {
						if (data.result == false) {
							button.attr("disabled", false).html(btn_label);
							alert(data.msg);
							return false;
						} else {
							if (confirm(data.msg)) {
								location.href = "../my/cart.html";
							} else {
								location.href = "../area/?idx=" + $("#area_idx").val();
							}
						}
					} else {
						if (data.result == false) {
							button.attr("disabled", false).html(btn_label);
							alert(data.msg);
							return false;
						} else {
							$("#booking").find("input, select").each(function () {
								var val = $(this).attr("value") ? $(this).attr("value") : "";
								$(this).val(val);
							});

							location.href = '../order/info.html?order_num=' + data.order_num;
						}
					}
				},
				error: function (e) {
					alert('오류! 고객센터로 연락바랍니다.');
				}

			});
		});

	}

	/*										상품 END 												*/


	/************************************************************************************************
	 * 
	 * 										주문  
	 * 
	 *************************************************************************************************/
	if (pathname.indexOf("/order") > -1) {

		// 시간 선택
		$(".timepicker").timepicker({
			'timeFormat': 'H:i',
			'useSelect': true,
			'noneOption': true,
		});

		// email select 
		$("select[name='email_agency']").change(function () {
			if ($(this).val()) {
				$(this).parent().prev().attr("readonly", true).val($(this).val());
			} else {
				$(this).parent().prev().attr("readonly", false);
			}
		});

		// 우편번호 찾기 호출 버튼 클릭 
		$(".find-zipcode").click(function () {
			execDaumPostcode();
		});

		// 배송 정보 : 주문자 정보와 동일 클릭 시 
		$("#chk-same-orderer").click(function () {
			if ($(this).is(":checked")) {
				// 이름 
				$("[name*='info_24[name][]']").val($("[name$='info_1']").val());
				// 휴대전화번호 
				$("[name*='info_2[]']").each(function (idx, obj) {
					$("[name*='info_24[mobile][]']").eq(idx).val($(obj).val());
				});
				// 유선 전화번호 
				$("[name*='info_3[]']").each(function (idx, obj) {
					$("[name*='info_24[tel][]']").eq(idx).val($(obj).val());
				});
			} else {
				// 이름 
				$("[name*='info_24[name][]']").val('');
				// 휴대전화번호 
				$("[name*='info_2[]']").each(function (idx, obj) {
					if (idx > 0)
						$("[name*='info_24[mobile][]']").eq(idx).val('');
				});
				// 유선 전화번호 
				$("[name*='info_3[]']").each(function (idx, obj) {
					$("[name*='info_24[tel][]']").eq(idx).val('');
				});
			}
		});

		// 날짜 선택 
		$(".datepicker").datepicker({
			format: 'yyyy-mm-dd',
			language: _locale_code,
			keyboardNavigation: false,
			forceParse: false,
			autoclose: true,
			templates: {
				leftArrow: '<span class="glyphicon glyphicon-triangle-left"></span>',
				rightArrow: '<span class="glyphicon glyphicon-triangle-right"></span>'
			},
			startDate: $("#depart_start_date").val(),
		});

		// 출국일 메세지 표시 
		$("[name*=info_10]").each(function () {
			if ($(this).length > 0) {
				var html = '<div style="margin:0 0 5px 3%">(' + $("#depart_start_date").val() + W_TXT.HINT_DEPARTURE_DATE + ')</div>';
				$(this).before(html);
			}
		});
		//여권 번호 영숫자만 입력, 영문은 대문자로 변환
		$(document).on("keyup", "[title='여권번호']", function() {
			var val = $(this).val().replace(/[^a-zA-Z0-9\s]/gi,"");
			val = val.toUpperCase();
			$(this).val(val);
		});

		/* 
		 * 예약자 정보 입력 완료 이벤트
		 * @author : 김지홍
		 * @desc : 예약자 정보 입력 완료 클릭 시 이벤트.
		 * @date : 2017-08-25
		 */
		$("#btn-info-write").click(function (e) {
			e.preventDefault();

			//유효값(validation) 체크 시작			
			var validate = false;
			$("#frm-order-info [required]").each(function (index, obj) {
				
				if($(obj).css("display") == "none" || $(obj).parent().css("display") == "none") {
					return true; // continue;
				}

				var type = $(obj).attr("type");		
				var name = $(obj).attr("name");
				var value = $(obj).val();
				if (type == undefined) type = $(obj).prop('tagName').toLowerCase();
				if (type == 'checkbox' || type == 'radio') value = $("[name='" + name + "']").is(":checked");
				if (type == "select" && !$(obj).find(":selected").attr("value")) value = "";

				//1. 해당 오브젝트에 입력한 값이 없을 경우
				if (!value || typeof value == 'undefined') {
					alert($(obj).attr("title") + W_TXT.ENTER_SOMETHING);
					$(obj).focus();
					validate = false;
					return false;

				//2. 휴대전화번호 검사
				} else if( type == 'tel' && (name.indexOf("info_2") != -1) ){
					if($(obj).siblings().eq(0).find("select option:selected").index() == 0){ //010이 선택되었을 경우
						if( value.length < 4 ){							
							fn_AlertFocus(obj, W_TXT.CHK_PHONE_NUM_COUNT, 0);							
							validate = false;
							return false;
						}
					}else{
						if( value.length < 3 ){							
							fn_AlertFocus(obj, W_TXT.CHK_PHONE_NUM_COUNT, 0);
							validate = false;
							return false;
						}
					}
				//3. 이메일 검사
				} else if( type == 'email' && (name.indexOf("info_8") != -1) ){
					if( !isMail(value) ){
						fn_AlertFocus(obj, W_TXT.CHK_EMAIL_VALIDATION, 0);
						validate = false;
						return false;
					}
				//4. 여권번호 검사
				} else if( type == 'text' && ($(obj).attr("title").indexOf("여권번호") != -1) ){
					if( value.length != 9 && value.length != 10 ){
						fn_AlertFocus(obj, W_TXT.CHK_PASSPORT_VALIDATION, 0);
						validate = false;
						return false;
					}else{
						nA = new Array(11);
						for(var i = 1; i < value.length ; i++){
							nA[i] = value.substring((i-1),i);
						}
						
						if( !isNaN(nA[1]) ){ //1번째는 문자
							fn_AlertFocus(obj, W_TXT.CHK_PASSPORT_VALIDATION, 0);
							validate = false;
							return false;
						}
						
						for(var i = 3; i < value.length; i++){
							if( isNaN(nA[i]) ){ // 3번째부터 숫자
								fn_AlertFocus(obj, W_TXT.CHK_PASSPORT_VALIDATION, 0);
								validate = false;
								return false;
							}
						}
					}
				//영문 only 재검사
				} else if( ($(obj).attr('engonly') == 'true') ){
					var check = /[^a-zA-Z\s]/;
					if( check.test(value) ){
						fn_AlertFocus(obj, W_TXT.CHK_IS_ENG_ONLY, 0);
						validate = false;
						return false;
					}
				} else{
					validate = true;
				}				
				
			});
			if (validate === false) return false;
			// ---- 유효값 체크 끝

			var options = {
				url: '../inc/api.php',
				dataType: "json",
				type: 'post',
				beforeSubmit: function (arr, form, options) {
					arr.push({ name: 'method_name', value: 'setOrderInfoData' });
				},
				success: function (data) {
					if (data.result == false) {
						alert(data.msg);
						return false;
					} else {
						location.href = '../order/order.html?order_num=' + $("#order_num").val();
					}
				}
			}
			$("#frm-order-info").ajaxSubmit(options);
			return false;
		});
		/* ---- 예약자 정보 입력 완료 이벤트 끝 ---- */


		update_order_price = function () {
			var symbol = $("#total_price").data("symbol");
			var total_price = $("#total_price").val();
			var use_point = ($("[name=use_point]").val()) ? parseInt($("[name=use_point]").val()) : 0;
			var coupon_discount = ($("#coupon_discount").val()) ? parseInt($("#coupon_discount").val()) : 0;
			var order_price = total_price - use_point - coupon_discount;

			$("#display_total_price").text(get_price_text(order_price, symbol));
		}
		
		$("#select_coupon").change(function() {
			var input = $(this).find("option:selected").data("input");
			var code = $(this).find("option:selected").data("code");
			var obj_input = $("#new_coupon");
			if( input == true ) {
				obj_input.show();
			}else {
				obj_input.hide();
			}
			obj_input.val(code);
		});

		// 쿠폰 적용
		$("#btn-apply-coupon").click(function () {
			var amount = 0;

			var params = {
				method_name: 'order_apply_coupon',
				coupon_code: $("#new_coupon").val(),
				coupon_idx: $("#select_coupon").val(),
				order_num: $("#order_num").val(),
				env: 'web',
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: 'json',
				type: 'post',
				success: function (data) {
					alert(data.msg);
					if (data.result !== false) {
						amount = data.amount;
						$("#coupon_code").val($("#new_coupon").val());
						$("[name=use_point]").val(0);
						$("#display_use_point").text(number_format(0));
					} else {
						$("#coupon_code").val('');
					}
					$("#select_coupon option:first-child").prop("selected", true);
					$("#new_coupon").val("");
					$("#coupon_discount").val(amount);
					$("#display_coupon_discount").text(get_price_text(amount));
					update_order_price();
				}
			});
		});

		// 간편 결제 카드 설정
		$("#btn-rebill-card-add").click(function () {
			$("form[name='orderForm']").attr("action", "/danal/rebill/Order.html");
			window.open("about:blank", "winName");
			$("form[name='orderForm']").attr("target", "winName");
			$("form[name='orderForm']").submit();
		});

		// 간편 결제 카드 삭제
		$("#btn-rebill-card-remove").click(function () {
			if (!confirm(W_TXT.CONFIRM_REBILL_KEY_DEL)) return false;

			$.ajax({
				url: '/inc/api.php',
				data: {
					method_name: 'deleteDanalRebillKey',
				},
				dataType: 'json',
				type: 'post',
				success: function (data) {
					alert(data.msg);
					if (data.result) {
						location.reload();
					}
				}
			});
			return false;
		});

		// 결제 수단 선택 : 사용할 포인트 선택 
		// 모두 사용 버튼
		$("[name=use_point_all]").click(function () {
			var total_price = $("#total_price").val();
			var use_point = ($("[name=use_point]").val()) ? parseInt($("[name=use_point]").val()) : 0;
			var coupon_discount = ($("#coupon_discount").val()) ? parseInt($("#coupon_discount").val()) : 0;
			var usable_point = ($("#usable_point").val()) ? parseInt($("#usable_point").val()) : 0; // 사용 가능한 포인트
			var order_price = total_price - coupon_discount;

			use_point = usable_point;
			if (use_point > order_price) use_point = order_price;

			$("[name=use_point]").val(use_point);
			$("#display_use_point").text(number_format(use_point));
			update_order_price();
		});

		$("[name=use_point]").change(function () {
			var total_price = $("#total_price").val();
			var use_point = ($(this).val()) ? parseInt($(this).val()) : 0;
			var coupon_discount = ($("#coupon_discount").val()) ? parseInt($("#coupon_discount").val()) : 0;
			var usable_point = ($("#usable_point").val()) ? parseInt($("#usable_point").val()) : 0; // 사용 가능한 포인트
			var order_price = total_price - coupon_discount;

			if (use_point > usable_point) use_point = usable_point;
			if (use_point > order_price) use_point = order_price;

			$(this).val(use_point);
			$("#display_use_point").text(number_format(use_point));
			update_order_price();
		});

		// 개인정보 제공 동의 : 전문보기
		$("#btn-show-order-agree").click(function () {
			$("#layer-order-agree").removeClass("hide");
		});
		$("#btn-order-agree-close").click(function () {
			$("#layer-order-agree").addClass("hide");
		});

		// 결제하기 클릭
		$("#btn-order-pay").click(function () {
			var button = $(this);
			var btn_label = button.html();
			var total_price = $("#total_price").val();
			var use_point = ($("[name=use_point]").val()) ? parseInt($("[name=use_point]").val()) : 0;
			var pay_method = $("[name='pay_method']:checked").val();
			var order_num = $("#order_num").val();
			var coupon_discount = ($("#coupon_discount").val()) ? parseInt($("#coupon_discount").val()) : 0;
			var order_price = total_price - coupon_discount - use_point;

			if (!$("#chk-order-agree").is(":checked")) {
				alert(W_TXT.CHECK_AGREE_PI_3RD);
				return false;
			}

			if (!pay_method) {
				alert(W_TXT.CHOOSE_PAY_METHOD);
				return false;
			}

			if (order_price > 0 && pay_method != "direct") {
				if (pay_method == "dcredit") {
					$("form[name='orderForm']").attr("action", "/danal/dcredit/Ready.php");
				} else if (pay_method == "teledit") { // 휴대폰 소액 결제
					$("form[name='orderForm']").attr("action", "../danal/teledit/ready.php");
				} else if (pay_method == "realbank") { // 계좌이체
					$("form[name='orderForm']").attr("action", "../danal/wiretransfer/ready.php");
				} else if (pay_method == "keyin") { // 신용카드
					$("form[name='orderForm']").attr("action", "/danal/keyin/Ready.php");
				} else if (pay_method == "rebill") { // WAUG PAY
					if ($("#btn-rebill-card-add").length > 0) {
						alert(W_TXT.NOT_ISSUED_REBILL_KEY);
						return false;
					}
					$("form[name='orderForm']").attr("action", "/danal/rebill/Order.html");
				} else if (pay_method == "vaccount") { // 가상 계좌
					$("form[name='orderForm']").attr("action", "/danal/vaccount/Ready.php");
				} else if (pay_method == "ipn") {
					$("form[name='orderForm']").attr("action", "/danal/ipn/Ready.php");
				} else if (pay_method == "bank") {
					button.attr("disabled", true);
					var params = {
						method_name: 'paymentBankAddend',
						order_num: order_num,
						use_point: use_point,
						coupon_code: $("#coupon_code").val(),
					}
					$.ajax({
						url: '../inc/api.php',
						data: params,
						dataType: "json",
						type: "post",
						beforeSend: function () {
							button.html(icon_loading + ' ' + W_TXT.IN_PROGRESS);
						},
						success: function (data) {
							if (data.result == false) {
								alert(data.msg);
								button.attr("disabled", false).html(btn_label);
							} else {
								location.href = '../order/success.html?order_num=' + order_num;
							}
						}
					});
					return false;
				}
			} else {
				button.attr("disabled", true);
				var params = {
					method_name: 'paymentDirect',
					order_num: order_num,
					use_point: use_point,
					coupon_code: $("#coupon_code").val(),
				}
				$.ajax({
					url: '../inc/api.php',
					data: params,
					dataType: "json",
					type: "post",
					beforeSend: function () {
						button.html(icon_loading + ' ' + W_TXT.IN_PROGRESS);
					},
					success: function (data) {
						if (data.result == false) {
							alert(data.msg);
							if (data.err_code == 'order_success') {
								location.replace('../order/success.html?order_num=' + order_num);
							} else if (data.err_code == 'main') {
								location.replace('../main');
							}
							button.attr("disabled", false).html(btn_label);
						} else {
							location.replace('../order/success.html?order_num=' + order_num);
						}
					},
					error: function (e) {
						console.log(e);
					}
				});
				return false;
			}

			window.open("about:blank", "winName");
			$("form[name='orderForm']").attr("target", "winName");

			$("form[name='orderForm']").submit();
		});

		// 티켓 정보 모달창 호출
		$("[name=btn-modal-ticket]").click(function () {
			$("#modal-ticket").load(
				"../my/modal-my-ticket.html",
				{
					idx: $(this).data("idx"),
					cancelrequest: $(this).data("cancelrequest"),
				}
			);
		});
	}



	/*										주문 END 												*/



	/************************************************************************************************
	 * 
	 * 										마이페이지  
	 * 
	 *************************************************************************************************/
	if (pathname.indexOf("/my") > -1) {
		// 로그인 체크
		if ($("[name=btn-login]").length) {
			alert(W_TXT.NEED_LOGIN);
			location.href = '/';
		}

		// 이미지 변경
		$("#input_profile_img").on("change", function () {
			var formdata = new FormData();
			formdata.append("method_name", "memberProfileUpdate");
			if ($("#input_profile_img")[0].files[0] == undefined) {
				return false;
			}
			formdata.append("profile_img", $("#input_profile_img")[0].files[0]);

			$.ajax({
				url: '../inc/api.php',
				data: formdata,
				dataType: "json",
				processData: false,
				contentType: false,
				type: "POST",
				success: function (data) {
					if (data.result == false) {
						alert(data.msg);
						return false;
					}
					location.reload();
				}
			});
		});
		// 기본 이미지로 설정
		$("#btn_profile_img_init_update").click(function () {
			var formdata = new FormData();
			formdata.append("method_name", "memberProfileInit");

			$.ajax({
				url: '../inc/api.php',
				data: formdata,
				dataType: "json",
				processData: false,
				contentType: false,
				type: "POST",
				success: function (data) {
					if (data.result == false) {
						alert(data.msg);
						return false;
					}
					location.reload();
				}
			});
		});

		// 주소 찾기
		$("#address").click(function () {
			$("#btn-modal-find-address").trigger("click");
		});
		$("#btn-modal-find-address").click(function () {
			$("#modal-find-address").load("../my/modal-find-address.html");
		});

		// 사용자 정보 저장
		$("#frm-profile").submit(function () {
			var btn = $(this).find("button[type=submit]");

			if ($("#email").val() && isMail($("#email").val()) === false) {
				alert(W_TXT.FORMAT_WRONG_EMAIL);
				$("#email").focus();
				return false;
			}

			if ( onlyKoreanEnglishWord($("#name").val()) === false) {
				alert(W_TXT.ERR_NAME_DATA);
				$("#name").focus();
				return false;
			}
			
			if ($("#email").val()) {
				var arr_email = $("#email").val().split("@");
				$("#email_id").val(arr_email[0]);
				$("#email_host").val(arr_email[1]);
			}

			btn.attr("disabled", true);

			var options = {
				url: '../inc/api.php',
				dataType: 'json',
				type: 'post',
				beforeSubmit: function (arr, form, options) {
					arr.push({ name: 'method_name', value: 'setUserInfo' });
				},
				success: function (data) {
					alert(data.msg);
					if (data.result === false) {
						btn.attr("disabled", false);
						return false;
					} else {
						location.reload();
					}
				},
				error: function () {
					btn.attr("disabled", false);
				}
			}
			$(this).ajaxSubmit(options);
			return false;
		});

		// 바우처 파일 다운로드 클릭
		$(document).on("click", "[name=btn-download-voucher]", function () {
			var links = $(this).data("link").split(";");
			$.each(links, function (i, obj) {
				var data = obj.split("::");
				var idx = data[0];
				var link = data[1];

				window.open(link);
				$.ajax({
					url: 'api.php',
					data: {
						class_name: "site",
						method_name: 'set_voucher_download_count',
						idx: idx,
					},
					dataType: 'json',
					type: 'post',
					success: function (data) { }
				});
			});
		});

		if ($("#good-static-map").length > 0) {
			var latitude = $("#good-static-map").data("latitude");
			var longitude = $("#good-static-map").data("longitude");
			if (latitude && longitude) {
				var width = $(".container").width();
				var height = parseInt(width / 4);
				var html = '<img src="//maps.googleapis.com/maps/api/staticmap?key=AIzaSyB5hPDfBIX-DgUJgJmCTxpn2oTJoigStZY&center=' + latitude + ',' + longitude + '&size=' + width + 'x' + height + '&zoom=13&markers=color:red|' + latitude + ',' + longitude + '" alt="googlemap">';
				$("#good-static-map").html(html);
			}
		}

		$("#btn-order-cancel").click(function () {
			if (!confirm(W_TXT.CONFIRM_ORDER_CANCEL)) return false;

			var params = {
				method_name: 'cancelBankOrder',
				order_num: $(this).data('order-num'),
				good_idx: $(this).data('good-idx'),
				order_good_idx: $(this).data('order-good-idx'),
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: "json",
				type: "POST",
				success: function (data) {
					alert(data.msg);
					if (data.result == false) {
						return;
					}
					location.replace('../my/order.html');
				}
			});
		});

		// 티켓 정보 모달창 호출
		$(document).on("click", "[name=btn-modal-ticket]", function () {
			$("#modal-ticket").load(
				"../my/modal-my-ticket.html",
				{
					idx: $(this).data("idx"),
				}
			);
		});

		/*
		 * 					카트 
		 */

		$("[name=cart_idx]").on("ifChanged", function () {
			var symbol = $("#total-price").data("symbol");
			var total_price = parseInt($("#total-price").data("value"));
			var this_row = $(this).closest("tr");
			var this_price = parseInt(this_row.find("[name=good-price]").val());
			var is_all_checked = 0;
			// 전체선택/해제 처리 
			$("[name=cart_idx]").each(function () {
				is_all_checked = ($(this).is(":checked")) ? is_all_checked + 1 : is_all_checked - 1;
			});
			if (is_all_checked == $("[name=cart_idx]").length) $("#chk-cart-list-all").iCheck("check");
			else $("#chk-cart-list-all").iCheck("uncheck");

			// 가격 합
			if ($(this).is(":checked")) {
				total_price += this_price;
			} else {
				total_price -= this_price;
			}
			$("#total-price").text(get_price_text(total_price, symbol));
			$("#total-price").data("value", total_price);
		});

		// 전체 선택/해제 처리 
		$("#chk-cart-list-all").on('ifClicked', function (event) {
			var obj = $(this);
			var symbol = $("#total-price").data("symbol");
			var total_price = 0;
			setTimeout(function () {
				if (obj.is(":checked")) {
					$("[name=cart_idx]").each(function () {
						$(this).iCheck("check");
					});
					$("[name=good-price]").each(function () {
						total_price += parseInt($(this).val());
					});
				} else {
					$("[name=cart_idx]").each(function () {
						$(this).iCheck("uncheck");
					});
				}
				$("#total-price").text(get_price_text(total_price, symbol));
				$("#total-price").data("value", total_price);
			}, 5);
		});

		// 선택 삭제 
		$("#btn-remove-selected").click(function () {
			var cart_idx = [];
			$("[name=cart_idx]:checked").each(function () {
				cart_idx.push($(this).val());
			});

			if (cart_idx.length <= 0) {
				alert(W_TXT.SELECT_DEL_GOOD);
				return false;
			}

			if (!confirm(W_TXT.CONFIRM_CART_GOOD_DEL)) return false;

			var params = {
				method_name: 'goodCartDelete',
				cart_idx: cart_idx.join()
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: "json",
				type: "post",
				success: function (data) {
					if (data.result == false) {
						alert(data.msg);
						return false;
					}
					location.reload();
				}
			});
		});

		// 선택 주문 
		$("#btn-buy-selected").click(function () {
			var button = $(this);
			var btn_label = button.html();
			var cart_idx = [];
			$("[name=cart_idx]:checked").each(function () {
				cart_idx.push($(this).val());
			});

			if (cart_idx.length <= 0) {
				alert(W_TXT.CHOOSE_GOOD);
				return false;
			}

			if (!confirm(W_TXT.CONFIRM_ORDER_SELECTED_GOOD)) return false;

			button.attr("disabled", true);
			var params = {
				method_name: 'goodCartOrder',
				cart_idx: cart_idx.join()
			}
			$.ajax({
				url: '../inc/api.php',
				data: params,
				dataType: "json",
				type: "post",
				beforeSend: function () {
					button.html(icon_loading + ' ' + W_TXT.IN_PROGRESS);
				},
				success: function (data) {
					if (data.result == true) {
						location.href = "../order/info.html?order_num=" + data.order_num;
						return false;
					} else {
						if (data.msg) alert(data.msg);
						button.attr("disabled", false).html(btn_label);
					}
				}
			});
		});
		
		my_coupon_list = function(page) {
			page = page || 1;
			var usable = $(".btn-my-coupon-list.active").data("usable");
			var per_page = 10;
			var container = $("#tb-coupon-list");
			
			$.ajax({
				url: '/inc/api.php',
				dataType: 'json',
				type: 'post',
				data: {
					method_name: 'getMemCouponList',
					usable: usable,
					page: page,
					per_page: per_page,
				},
				beforeSend: function() {
					html = '<tr><td colspan="3" class="text-center">'+icon_loading+' '+W_TXT.LOADING+'</td></tr>';
					container.html(html);
				},
				success: function(data) {
					$("#total_usable").text(data.total_usable);
					$("#total_used").text(data.total_used);
					var objTmpl = ( data.total == "0" || data.result == false ) ? $("#tmpl-coupon-list-no-data") : $("#tmpl-coupon-list");
					container.html(objTmpl.tmpl(data));
					// pagination
					var paging = pagination(data.total, page, per_page, 10, null, true, 'my_coupon_list');
					$("#pagination").html(paging);
				}
			});
		}

		$(".btn-my-coupon-list").click(function() {
			var usable = $(this).data("usable");
			var frmCoupon = $("#frmCoupon");
			
			if( !$(this).hasClass("active") ) $(this).addClass("active");
			$(this).siblings().removeClass("active");
			if( usable == 1 ) frmCoupon.show();
			else frmCoupon.hide();
			my_coupon_list();
		});
		$(".btn-my-coupon-list[data-usable=1]").trigger("click");
		
		$("#frmCoupon").on("submit", function() {
			var button = $(this).find("[type=submit]");
			var btn_label = button.html();
			var code = $("[name=code]");
			
			$.ajax({
				url: '../inc/api.php',
				data: {
					method_name: 'insertMemCoupon',
					code: code.val(),
				},
				dataType: 'json',
				type: 'post',
				beforeSend: function() {
					button.attr("disabled", true);
					button.html(icon_loading);
				},
				success: function(data) {
					alert(data.msg);
					if( data.result == false ) {
						button.attr("disabled", false).html(btn_label);
						return false;
					}else {
						my_coupon_list();
						code.val("");
						button.attr("disabled", false).html(btn_label);
					}
				}
			});
			return false;
		});

	}
	/*										마이페이지 END 												*/

	/************************************************************************************************
	 * 
	 * 										매거진  
	 * 
	 *************************************************************************************************/


	// 매거진 내비게이션
	$("#btn-mgz-prev, #btn-mgz-next").click(function () {
		if ($(this).data("idx") == '') {
			if ($(this).attr("id") == "btn-mgz-prev") {
				alert(W_TXT.NO_PREV_ARTICLE);
				return false;
			} else {
				alert(W_TXT.NO_NEXT_ARTICLE);
				return false;
			}
		} else {
			location.href = '../magazine/?idx=' + $(this).data("idx");
		}
	});


	/*										매거진 END 												*/


	/************************************************************************************************
	 * 
	 * 										제휴문의  
	 * 
	 *************************************************************************************************/

	// 제휴문의 등록
	$("#btn-contactus-submit").click(function (e) {
		e.preventDefault();

		var options = {
			url: '../inc/api.php',
			dataType: 'json',
			type: 'post',
			beforeSubmit: function (arr, form, options) {
				arr.push({ name: 'method_name', value: 'adWrite' });
			},
			success: function (data) {
				alert(data.msg);
				if (data.result != false) {
					location.reload();
				}
			}
		}
		$("#frm-contactus").ajaxSubmit(options);
	});

	/*										제휴문의 END 												*/

	// 리뷰 쓰기 버튼 클릭
	$("#btn-review-write, [name=btn-review-update]").click(function () {
		if ($(this).hasClass("need-login")) {
			return false;
		} else {
			$("#modal-review").load(
				"../good/modal-review.html",
				{
					good_idx: $(this).data("goodidx"),
					c_idx: $(this).data("idx"),
				}
			);
		}
	});
	
	// 리뷰 이미지 클릭
	$(".comment-content-space").click(function (e) {
		$("#modal-review-image").load(
			"../good/modal-review-image.html",
			{
				good_idx: $("#btn-review-write").data("goodidx"),
				c_idx: $(this).data("idx"),
			}
		).modal("show");
		e.preventDefault();
	});

	// 마이페이지 리뷰 목록 : 리뷰 삭제
	$(document).on("click", "#btn-review-delete", function () {
		var idxs = [];
		$(".list-checkbox").find("input[type=checkbox]:checked").each(function () {
			idxs.push($(this).val());
		});
		deleteComment(idxs);
	});

	// qna 쓰기 버튼 클릭
	$("#btn-qna-write, [name=btn-qna-update]").click(function () {
		if ($(this).hasClass("need-login")) {
			return false;
		} else {
			$("#modal-qna").load(
				"../good/modal-qna.html",
				{
					good_idx: $(this).data("goodidx"),
					c_idx: $(this).data("idx"),
				}
			);
		}
	});

	// 마이페이지 Q&A 목록 : Q&A 삭제
	$(document).on("click", "#btn-qna-delete", function () {
		var idxs = [];
		$(".list-checkbox").find("input[type=checkbox]:checked").each(function () {
			idxs.push($(this).val());
		});
		deleteQna(idxs);
	});
	// Q&A 삭제
	deleteQna = function (idxs) {
		if (idxs == '') {
			alert(W_TXT.SELECT_DEL_ARTICLE);
			return false;
		}
		if (!confirm(W_TXT.CONFIRM_ARTICLE_DEL)) return false;
		var params = {
			method_name: 'goodQnaDelete',
			good_qna_idx: idxs
		}
		$.ajax({
			url: '../inc/api.php',
			data: params,
			dataType: "json",
			type: "post",
			success: function (data) {
				if (data.result == false) {
					alert(data.msg);
					return false;
				}
				location.reload();
			}
		});
	}

	// wishlist
	$(document).on("click", ".i-wish", function () {
		var obj = $(this);
		var params = {
			method_name: 'toggleWishList',
			good_idx: $(this).data("idx"),
		}
		$.ajax({
			url: '../inc/api.php',
			data: params,
			dataType: 'json',
			type: 'post',
			success: function (data) {
				if (data.result == false) {
					alert(data.msg);
					return false;
				} else {
					obj.toggleClass("wished");
					if (pathname.indexOf("my/wishlist") > -1) {
						obj.closest(".item").remove();
					}
				}
			}
		});
	});

	// 전체 선택/해제 처리 
	$(".select-all").find("input[type=checkbox]").on('ifClicked', function (event) {
		var obj = $(this);
		var checkbox = $(".list-checkbox").find("input[type=checkbox]");
		setTimeout(function () {
			if (obj.is(":checked")) {
				checkbox.each(function () {
					$(this).iCheck("check");
				});
			} else {
				checkbox.each(function () {
					$(this).iCheck("uncheck");
				});
			}
		}, 5);
	});
	$(".list-checkbox").find("input[type=checkbox]").on("ifChanged", function () {
		var checkbox = $(".list-checkbox").find("input[type=checkbox]");
		var checkbox_all = $(".select-all").find("input[type=checkbox]");
		var is_all_checked = 0;
		checkbox.each(function () {
			is_all_checked = ($(this).is(":checked")) ? is_all_checked + 1 : is_all_checked - 1;
		});
		if (is_all_checked == checkbox.length) checkbox_all.iCheck("check");
		else checkbox_all.iCheck("uncheck");
	});
	
	areaFocus();
	
	navFix(false);
});

function goodMore(goodcount, goodcm) {

	var e1 = document.getElementById("more_good");
	var start;
	if (e1.value) {
		start = parseInt(e1.value);
	}
	else {
		e1.value = 10;
		start = parseInt(e1.value);
	}
	var end = parseInt(e1.value) + 10;
	if (goodcm == "more") {
		for (; start < ((end < goodcount) ? end : goodcount); start++) {
			document.getElementById("good_" + start).style.display = "block";
			if (start == goodcount - 1) {
				$("#more_good").hide();
				$("#close_good").show();
			}
		}
		e1.value = end;
	}
	else if (goodcm == "close") {
		for (var a = 10; a < goodcount; a++) {
			document.getElementById("good_" + a).style.display = "none";
		}
		$("#close_good").hide();
		$("#open_good").show();
		document.getElementById("main_good_more_focus").scrollIntoView(true);
	}
	else {
		for (var a = 10; a < goodcount; a++) {
			document.getElementById("good_" + a).style.display = "block";
		}
		$("#open_good").hide();
		$("#close_good").show();
	}
	navFix(true);

}

function navFix(good_more){
	
	good_more = good_more || false;
	
	if(good_more == false){
		var $sticky = $('.sticky');
		var $stickyrStopper = $('.sticky-stopper');
		if (!!$sticky.offset()) { // make sure ".sticky" element exists
			
			var generalSidebarHeight = $sticky.innerHeight();
			var stickyTop = $sticky.offset().top;
			var stickOffset = 70;
			var stickyStopperPosition = $stickyrStopper.offset().top;
			var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
			var diff = stopPoint + stickOffset;
			
			$(window).scroll(function(){ // scroll event
				var windowTop = $(window).scrollTop(); // returns number
				
				if (stopPoint < windowTop) {
					$sticky.css({ position: 'absolute', top: diff });
				} else if (stickyTop < windowTop+stickOffset) {
					var top = stickOffset;
					if( $(".app-install").css("display") == "block" ) top = stickOffset + 147;
					$sticky.css({ position: 'fixed', top: top });
				} else {
					$sticky.css({position: 'absolute', top: 'auto'});
				}
			});
			
			if( $("#close_good").length ) $("#close_good").val(stickyTop);
		}
	}
	else{
		var $sticky = $('.sticky');
		var $stickyrStopper = $('.sticky-stopper');
		
		var first_start_point = document.getElementById("close_good").value;
		if (!!$sticky.offset()) { // make sure ".sticky" element exists
			
			var generalSidebarHeight = $sticky.innerHeight();
			var stickOffset = 70;
			var stickyStopperPosition = $stickyrStopper.offset().top;
			var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
			var diff = stopPoint + stickOffset;
			
			$(window).scroll(function(){ // scroll event
				var windowTop = $(window).scrollTop(); // returns number
				if (stopPoint < windowTop) {
					$sticky.css({ position: 'absolute', top: diff });
				} else if (first_start_point < windowTop+stickOffset) {
					var top = stickOffset;
					if( $(".app-install").css("display") == "block" ) top = stickOffset + 147;
					$sticky.css({ position: 'fixed', top: top });
				} else {
					$sticky.css({position: 'absolute', top: 'auto'});
				}
			});
		
		}
	}
}

function areaFocus(){
	var area_focus = document.getElementById("area_goods_focus");
	var $sticky = $('.sticky');
	var $goodspace = $(".area-goods-space")
	if($sticky){
		var nav_height = $sticky.innerHeight();
	}
	if($goodspace){
		var good_height = $goodspace.innerHeight();
	}
	if(good_height < nav_height) $goodspace.css({ height: nav_height });
	
	if(area_focus){
		area_focus.scrollIntoView(true);
	}
}

function continentSelect(continent_idx){
	for(var i=1; i < 6; i++){
		if( i != continent_idx){
			$(".continent_"+i).hide();
		}
	}
	$(".continent_"+continent_idx).show();
}

/*
 * 상품 리뷰 삭제 
 */
function deleteComment(comment_idx) {
	if (comment_idx == '') {
		alert(W_TXT.SELECT_DEL_ARTICLE);
		return false;
	}
	if (!confirm(W_TXT.CONFIRM_ARTICLE_DEL)) {
		return false;
	}

	var params = {
		method_name: 'goodCommentDelete',
		good_comment_idx: comment_idx
	}
	$.ajax({
		url: '../inc/api.php',
		data: params,
		dataType: "json",
		type: "post",
		success: function (data) {
			if (data.result == false) {
				alert(data.msg);
				return false;
			}
			location.reload();
		}
	});
}

/* 마이페이지 티켓 사용 처리 */
function entryTicket(ticket_num) {
	var formdata = new FormData();
	formdata.append("method_name", "ticketUse");
	formdata.append("ticket_num", ticket_num);

	$.ajax({
		url: '../inc/api.php',
		data: formdata,
		dataType: "json",
		processData: false,
		contentType: false,
		type: "POST",
		success: function (data) {
			alert(data.msg);
			if (data.result == false) {
				return false;
			}
			location.reload();
		}
	});
}

/*
 * 				배송 정보 입력 시 우편번호 폼 호출
 * */
// 우편번호 찾기 화면을 넣을 element
var element_layer = document.getElementById('layer-zipcode');
// 우편번호 찾기 숨기기
function closeDaumPostcode() {
	// iframe을 넣은 element를 안보이게 한다.
	element_layer.style.display = 'none';

	$("#layer-zipcode").css("position", "fixed");
}
// 우편번호 찾기 실행
function execDaumPostcode() {
	new daum.Postcode({
		oncomplete: function (data) {
			// 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
			var fullAddr = data.address; // 최종 주소 변수
			var extraAddr = ''; // 조합형 주소 변수

			// 기본 주소가 도로명 타입일때 조합한다.
			if (data.addressType === 'R') {
				//법정동명이 있을 경우 추가한다.
				if (data.bname !== '') {
					extraAddr += data.bname;
				}
				// 건물명이 있을 경우 추가한다.
				if (data.buildingName !== '') {
					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
				fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.
			document.getElementById('find-zipcode1').value = data.zonecode; //5자리 새우편번호 사용
			document.getElementById('find-zipcode2').value = fullAddr;

			// iframe을 넣은 element를 안보이게 한다.
			// (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
			element_layer.style.display = 'none';

			$("#layer-zipcode").css("position", "fixed");
		},
		width: '100%',
		height: '100%'
	}).embed(element_layer);

	// iframe을 넣은 element를 보이게 한다.
	element_layer.style.display = 'block';

	// iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
	initLayerPosition();

	var zipcode_top = $("#layer-zipcode").offset().top;
	$("#layer-zipcode").css({
		"position": "absolute",
		"top": zipcode_top,
	});
}

// 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
// resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
// 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
function initLayerPosition() {
	var borderWidth = 5; //샘플에서 사용하는 border의 두께
	var width = 500; //우편번호서비스가 들어갈 element의 width
	var height = (window.innerHeight || document.documentElement.clientHeight) / 2; //우편번호서비스가 들어갈 element의 height

	// 위에서 선언한 값들을 실제 element에 넣는다.
	element_layer.style.width = width + 'px';
	element_layer.style.height = height + 'px';
	element_layer.style.border = borderWidth + 'px solid';
	// 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
	element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width) / 2 - borderWidth) + 'px';
	element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height) / 2 - borderWidth) + 'px';

}

/*
 * 말톡 와이파이 / 글로벌 와이파이
 * good/index에서 입력한 값을 order/info로 전달 
 */
function setWifiOrderValue() {
	if ($("#s_date").length > 0) {
		var s_date = $("#s_date").val();
	}
	if ($("#e_date").length > 0) {
		var e_date = $("#e_date").val();
	}
	if ($("#airp").length > 0) {
		var airp = $("#airp").val();
		airp = getAirportHangul(airp);
		if (airp == false) {
			return;
		}
	}

	// 참고. 필드 숫자로 판단하므로 필드가 변경되면 문제가 있을 수 있음. 관리자-상품관리-입력항목관리 참고
	// 포켓 와이파이 수령일
	if ($("input[name='1_info_133']").length > 0) {
		$("input[name='1_info_133']").val(s_date);
		$("input[name='1_info_133']").attr('readonly', true);
		$("input[name='1_info_133']").attr('class', 'widthauto');
	}
	// 포켓 와이파이 반납일
	if ($("input[name='1_info_121']").length > 0) {
		$("input[name='1_info_121']").val(e_date);
		$("input[name='1_info_121']").attr('readonly', true);
		$("input[name='1_info_121']").attr('class', 'widthauto');
	}
	// 포켓 와이파이 수령처

	if ($("select[name='1_info_161']").length > 0) {
		$("select[name='1_info_161']").append("<option value=" + airp + ">" + airp + "</option>");
		$("select[name='1_info_161']").val(airp);
		$("select[name='1_info_161'] option").not(":selected").attr("disabled", "true");
	} // 또 다른 수령처 필드. (161, 213은 포켓와이파이 수령처)
	if ($("select[name='1_info_213']").length > 0) {
		$("select[name='1_info_213']").append("<option value=" + airp + ">" + airp + "</option>");
		$("select[name='1_info_213']").val(airp);
		$("select[name='1_info_213'] option").not(":selected").attr("disabled", "true");
	}

}

function getAirportHangul(airp) {
	var result;
	switch (airp) {
		case 'icn':
			result = '인천공항';
			break;
		case 'icn1':
			result = "인천공항(제1터미널)";
			break;
		case 'icn2':
			result = "인천공항(제2터미널)";
			break;
		case 'gmp':
			result = '김포공항';
			break;
		case 'pus':
			result = '김해공항';
			break;
		case 'tae':
			result = '대구공항';
			break;
		case 'cju':
			result = '제주공항';
			break;
		default:
			result = false;
			break;
	}
	if (result != false) {
		return result;
	} else {
		return false;
	}

}

/*****************************************************************************************************************
 * 
 * 													스크롤 이벤트
 * 
 *************************************************************************************************************** */
$(document).scroll(function () {

	// 가격 및 예매 버튼 따라오기 & 멈추기
	if ($('#good-map').length) {
		var hr_padding = 32;
		var nav_margin = 0;
		var map_top = $('#good-map').offset().top - (hr_padding*2.5);// - 102; 
		var map_height = $('#good-map').height();
		var booking_height = $('.wrapper-booking').height();
		var scroll_y = $(this).scrollTop();
		if( is_ie() && $(".app-install").css("display") == "block" ) scroll_y += 147;
		if (scroll_y < hr_padding) {  // default
			$('#booking').css({
				"top": "0"
			});
		} else if (scroll_y + $('.wrapper-booking').height() >= map_top) { // facing map position
			$('#booking').css({
				"top": (map_top - booking_height - nav_margin) + "px"
			}); // 629
		} else { // scrolling
			$('#booking').css({
				"top": (scroll_y - nav_margin) + "px"
			});
		}
		
		if($('.datepicker-dropdown').css("display") == "block") {
			$('.datepicker-dropdown').remove();
			$('#good-map').attr("tabindex", -1).focus();
		}
	}
});

//faq-drop-down-menu

$(function(){
  $('#accordian h3').click(function(){
    $(this).parent().parent().find('ul').slideUp();
    if($(this).find('img').attr('src') == "/images/ic_arrow_top_pink.png"){
    	$("[src='/images/ic_arrow_top_pink.png']").attr("src", "/images/ic_arrow_bottom.png");
    	$('.activate').removeClass('activate');
    }
    else{
    	$("[src='/images/ic_arrow_top_pink.png']").attr("src", "/images/ic_arrow_bottom.png");
    	$(this).find('img').attr('src',"/images/ic_arrow_top_pink.png");
    	$('.activate').removeClass('activate');
    	$(this).addClass('activate');
    	
    	var params = {
				method_name : 'updateViewCount',
				class_name : 'faqLib',
				idx : $(this).data('idx')
		}
    	
    	$.ajax({
			url: '../inc/api.php',
			data: params,
			dataType: "json",
			type: "post",
			success: function(data) {
				
			}
		});
	}
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown();
    } 
  });
  
  //main_partner_hover
  $('.mt img').hover(function(){
  	    $(this).attr('src','../images/media/mt.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/mt_gray.png');
  	    }
      );
  $('.platum img').hover(function(){
  	    $(this).attr('src','../images/media/platum.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/platum_gray.png');
  	    }
      );
  $('.it-chosun img').hover(function(){
  	    $(this).attr('src','../images/media/it-chosun.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/it-chosun_gray.png');
  	    }
      );
  $('.et-news img').hover(function(){
  	    $(this).attr('src','../images/media/et-news.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/et-news_gray.png');
  	    }
      );
  $('.mk-news img').hover(function(){
  	    $(this).attr('src','../images/media/mk-news.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/mk-news_gray.png');
  	    }
      );
  $('.zdnetkorea img').hover(function(){
  	    $(this).attr('src','../images/media/zdnetkorea.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/zdnetkorea_gray.png');
  	    }
      );
  
//main_partner_hover
  $('.mt img').hover(function(){
  	    $(this).attr('src','../images/media/mt.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/mt_gray.png');
  	    }
      );
  $('.platum img').hover(function(){
  	    $(this).attr('src','../images/media/platum.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/platum_gray.png');
  	    }
      );
  $('.it-chosun img').hover(function(){
  	    $(this).attr('src','../images/media/it-chosun.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/it-chosun_gray.png');
  	    }
      );
  $('.et-news img').hover(function(){
  	    $(this).attr('src','../images/media/et-news.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/et-news_gray.png');
  	    }
      );
  $('.mk-news img').hover(function(){
  	    $(this).attr('src','../images/media/mk-news.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/mk-news_gray.png');
  	    }
      );
  $('.zdnetkorea img').hover(function(){
  	    $(this).attr('src','../images/media/zdnetkorea.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/media/zdnetkorea_gray.png');
  	    }
      );
  
  //waug_about us_hover
  $('.aboutus-first-1 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-1.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-1-gray.png');
  	    }
      );
  $('.aboutus-first-2 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-2.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-2-gray.png');
  	    }
      );
  $('.aboutus-first-3 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-3.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-3-gray.png');
  	    }
      );
  $('.aboutus-first-4 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-4.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-4-gray.png');
  	    }
      );
  $('.aboutus-first-5 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-5.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-5-gray.png');
  	    }
      );
  $('.aboutus-first-6 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-6.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-6-gray.png');
  	    }
      );
  $('.aboutus-first-7 img').hover(function(){
  	    $(this).attr('src','../images/page/aboutus-first-7.png');
  	    },
  		function(){
  	    $(this).attr('src','../images/page/aboutus-first-7-gray.png');
  	    }
      );
});

//fixed-nav
$(window).scroll(function(){
	var header_height = $(".headimage").height() || 100;
	header_height = header_height - 50;
	
    if ($(window).scrollTop() >= header_height) {
       $('nav').addClass('fixed-header');
       $('.navbar-right span').addClass('fixed-header-right');
       $('.header-logo').addClass('fixed-header-logo');          
       $('.navbar-brand img').attr('src','../images/waug_pinklogo.png');
       if( $(".navbar").hasClass("navbar-inverse") ) $(".navbar").addClass("main-scrolled");
    }
    else {
       $('nav').removeClass('fixed-header');
       $('.navbar-right span').removeClass('fixed-header-right');
       $('.header-logo').removeClass('fixed-header-logo');  
       $('.navbar-brand img').attr('src','../images/logo.png');
       if( $(".navbar").hasClass("navbar-inverse") ) $(".navbar").removeClass("main-scrolled");
    }
});
