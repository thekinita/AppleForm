$(function() {

	var header = $("#header"),
		nav = $("#nav"),
		product = $("#product"),
		introH = $("#intro").innerHeight();
		scrollOffset = $(window).scrollTop();

/* Fixed Header */

	checkScroll(scrollOffset);

	$(window).on("scroll", function(){

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
		
	});

	function checkScroll(scrollOffset) {

		if( scrollOffset > introH ) {
			header.addClass("fixed");			
		} 
		else {
			header.removeClass("fixed");			
		}
	}

/* Smooth Scroll */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

/* Menu Nav Toggle */
	
	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$("#header, #nav, #nav-toggle").toggleClass("active");
	});

/* Collapse */
	
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("active");
		
	});

/* Slider */
	
		$("[data-slider]").slick({
			infinite: true,
			fade:false,
			slidesToShow: 1,
  			slidesToScroll: 1
		});

		$('[data-lazy]').slick({
            draggable: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,
            dots: true
		});
    
        $("[data-stand-slider]").slick({            
            arrows: true,
			infinite: false,
            dots: true,
			slidesToShow: 1,
  			slidesToScroll: 1,
            adaptiveHeight: true
		});

        $("[data-slider_iphone]").slick({
            arrows: true,
            infinite: false,
            fade:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipe: false,
            prevArrow: '<button type="button" class="slick-arrow_iphone slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-arrow_iphone slick-next">Next</button>',
            responsive: [
                {
                  breakpoint: 1230,
                  settings: {
                    slidesToShow: 2,
                    swipe: true
                  }
                },
                {
                  breakpoint: 840,
                  settings: {
                    slidesToShow: 1,
                    swipe: true
                  }
                },
            ]
        });

        $("[data-slider_watch]").slick({
            arrows: true,
            infinite: true,
            fade:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: false,
            prevArrow: '<button type="button" class="slick-arrow_watch slick-prev_watch">Previous</button>',
            nextArrow: '<button type="button" class="slick-arrow_watch slick-next_watch">Next</button>',
            responsive: [
                {
                  breakpoint: 1230,
                  settings: {
                    swipe: true
                  }
                }
            ]
        });  

/* Choose Active */

	$("#conteiner-card_choose").on("click", function(event) {
		event.preventDefault();

		$("#choose_arrow").toggleClass("active");
		$("#card_choose").slideToggle();
	});
	
/* Row color */

	$.fn.updateImg = function(conf){
            var defConf = {
                            elem_img    : null,
                            url_img     : null,
                          }
            
            $.extend(defConf, conf);
            
            if( defConf.elem_img != null && defConf.url_img != null ) {
                $( this ).click(function() {
                    $( defConf.elem_img ).attr( "src", defConf.url_img );
                });
            }
        }

    });
    
    
    $(document).ready(function() {
        $("#row_btn_clr_green").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-green-select.png"
        });

        $("#row_btn_clr_pink").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-pink-select.png"
        });

        $("#row_btn_clr_blue").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-blue-select.png"
        });
        
        $("#row_btn_clr_midnight").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-midnight-select.png"
        });

        $("#row_btn_clr_starlight").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-starlight-select.png"
        });

        $("#row_btn_clr_productred").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-productred-select.png"
        });
        
        $("#row_btn_clr_graphite").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-pro-graphite-select.png"
        });
        
        $("#row_btn_clr_sierra-blue").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-pro-blue-select.png"
        });
        
        $("#row_btn_clr_gold").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-pro-gold-select.png"
        });
        
        $("#row_btn_clr_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-pro-silver-select.png"
        });
        
        $("#row_btn_clr_alpha-green").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-13-pro-green-select.png"
        });
        
        $("#row_btn_clr_midnight-se").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-se-midnight-select.png"
        });

        $("#row_btn_clr_starlight-se").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-se-starlight-select.png"
        });

        $("#row_btn_clr_productred-se").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-se-productred-select.png"
        });
        
        $("#row_btn_clr_black").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-12-black-select.png"
        });
        
        $("#row_btn_clr_white").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-12-white-select.png"
        });
        
        $("#row_btn_clr_productred-12").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-12-productred-select.png"
        });
        
        $("#row_btn_clr_green-12").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-12-green-select.png"
        });
        
        $("#row_btn_clr_blue-12").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-12-blue-select.png"
        });
        
        $("#row_btn_clr_purple").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-12-purple-select.png"
        });
        
        $("#row_btn_clr_black-11").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-11-black-select.png"
        });
        
        $("#row_btn_clr_white-11").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-11-white-select.png"
        });
        
        $("#row_btn_clr_productred-11").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-11-productred-select.png"
        });
        
        $("#row_btn_clr_green-11").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-11-green-select.png"
        });
        
        $("#row_btn_clr_yellow").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-11-yellow-select.png"
        });
        
        $("#row_btn_clr_purple-11").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-11-purple-select.png"
        });
        
        $("#row_btn_clr-macbook_air_gold").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-gold-select.png"
        });
        
        $("#row_btn_clr-macbook_air_grey").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-grey-select.png"
        });
        
        $("#row_btn_clr-macbook_air_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-silver-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_13-inch_grey").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-13-inch-grey-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_13-inch_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-13-inch-silver-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_14-inch_grey").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-14-inch-grey-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_14-inch_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-14-inch-silver-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_16-inch_grey").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-16-inch-grey-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_16-inch_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-16-inch-silver-select.png"
        });

        $("#row_btn_clr-macbook_air_m2-midnight").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-m2-midnight-select.png"
        });
        
        $("#row_btn_clr-macbook_air_m2-starlight").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-m2-starlight-select.png"
        });
        
        $("#row_btn_clr-macbook_air_m2-grey").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-m2-space-grey-select.png"
        });
        
        $("#row_btn_clr-macbook_air_m2-silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-air-m2-silver-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_13-inch-m2_grey").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-13-inch-m2-grey-select.png"
        });
        
        $("#row_btn_clr-macbook_pro_13-inch-m2_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/macbook-pro-13-inch-m2-silver-select.png"
        });

        $("#row_btn_clr-imac-green").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-green-select.png"
        });

        $("#row_btn_clr-imac-yellow").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-yellow-select.png"
        });

        $("#row_btn_clr-imac-orange").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-orange-select.png"
        });

        $("#row_btn_clr-imac-pink").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-pink-select.png"
        });

        $("#row_btn_clr-imac-purple").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-purple-select.png"
        });

        $("#row_btn_clr-imac-blue").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-blue-select.png"
        });

        $("#row_btn_clr-imac-silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/mac/imac-silver-select.png"
        });
        
        $("#row_btn_clr-ipad_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-silver-select.png"
        });

        $("#row_btn_clr-ipad_gray").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-gray-select.png"
        });
        
        $("#row_btn_clr-ipad_mini_gray").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-mini-gray-select.png"
        });
        
        $("#row_btn_clr-ipad_mini_pink").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-mini-pink-select.png"
        });
        
        $("#row_btn_clr-ipad_mini_purple").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-mini-purple-select.png"
        });
        
        $("#row_btn_clr-ipad_mini_starlight").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-mini-starlight-select.png"
        });
        
        $("#row_btn_clr-ipad_air_gray").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-air-gray-select.png"
        });
        
        $("#row_btn_clr-ipad_air_pink").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-air-pink-select.png"
        });
        
        $("#row_btn_clr-ipad_air_purple").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-air-purple-select.png"
        });
        
        $("#row_btn_clr-ipad_air_blue").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-air-blue-select.png"
        });
        
        $("#row_btn_clr-ipad_air_starlight").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-air-starlight-select.png"
        });
        
        $("#row_btn_clr-ipad_pro_gray").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-pro-gray-select.jpg"
        });
        
        $("#row_btn_clr-ipad_pro_silver").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/ipad/ipad-pro-silver-select.jpg"
        });

        $("#row_btn_clr_blue-14").updateImg({ 
            elem_img : "#rowImg",
            url_img  : "../assets/images/shop/iphone/iphone-14-blue-select.jpg"
        });

/* Row Active */
	
	$("[data-row_chs]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('row_chs');
        
        $("#help").addClass("active");
		$("#btns_chs_show2 div").removeClass("hide");
		$("#btns_chs div").removeClass("active");
        $("#btns_chs_show1 div").removeClass("active");
        $("#btns_chs_show-mac1 div").removeClass("hide");
		$this.addClass("active");
	});


    $("[data-row_clr]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('row_clr');

		$("#btns_chs div").removeClass("hide");
        $("#btns_chs_show-m1 div").removeClass("hide");
		$("#productred").removeClass("active");
		$("#btns_clr div").removeClass("active");
		$this.addClass("active");
	});

	$("[data-row_cpst]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('row_cpst');

		$("#btns_chs_show3 div").removeClass("hide");
		$("#btns_chs_show3 btn").removeClass("hide");
		$("#btns_cpst div").removeClass("active");
		$this.addClass("active");
	});
        
    $("[data-row_m1]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('row_m1');

		$("#btns_chs_show1 div").removeClass("hide");			
        $("[data-row_m1]").removeClass("active");
		$this.addClass("active");
	});
        
    $("[data-row_mac1]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('row_mac1');

		$("#btns_chs_show-mac2 div").removeClass("hide");			
        $("[data-row_mac1]").removeClass("active");
		$this.addClass("active");
	});
        
    $("[data-row_gift]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('row_gift');

		$("#btns_chs_show3 div").removeClass("hide");
		$("#btns_chs_show3 btn").removeClass("hide");	
        $("[data-row_gift]").removeClass("active");
		$this.addClass("active");
	});
        
/* (PRODUCT)RED */

    $("#row_btn_clr_productred, #row_btn_clr_productred-se, #row_btn_clr_productred-12, #row_btn_clr_productred-11").on("click", function(event) {
		event.preventDefault();

		$("#productred").addClass("active");
	});

/* Price-Model */

	$("#btn_chs1").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-1").addClass("active");
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-1").addClass("active");
	});

	$("#btn_chs2").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-2").addClass("active");
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-2").addClass("active");
	});
        
    $("#btn_chs3").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-3").addClass("active");
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-3").addClass("active");
	});

	$("#btn_chs4").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-4").addClass("active");		
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-4").addClass("active");
	});

	$("#btn_chs5").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-5").addClass("active");		
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-5").addClass("active");
	});

	$("#btn_chs6").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-6").addClass("active");		
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-6").addClass("active");
	});

	$("#btn_chs7").on("click", function(event) {
		event.preventDefault();

		$("[data-row-chs]").removeClass("active");
		$("#price-model-7").addClass("active");		
		$("[data-price-total-model]").removeClass("active");
		$("#price-total-model-7").addClass("active");
	});	

/* Price-Color */
	
	$("#row_btn_clr_productred, #row_btn_clr_sierra-blue, #row_btn_clr_productred-se, #row_btn_clr_black, #row_btn_clr_purple-11, #row_btn_clr-macbook_air_gold, #row_btn_clr-macbook_pro_13-inch_grey, #row_btn_clr-macbook_pro_14-inch_grey, #row_btn_clr-macbook_pro_16-inch_grey").on("click", function(event) {
		event.preventDefault();

		$("[data-price-color]").removeClass("active");
		$("#price_clr-1").addClass("active");
	});

	$("#row_btn_clr_starlight, #row_btn_clr_graphite, #row_btn_clr_starlight-se, #row_btn_clr_white, #row_btn_clr_green-11, #row_btn_clr-macbook_air_grey, #row_btn_clr-macbook_pro_13-inch_silver, #row_btn_clr-macbook_pro_14-inch_silver, #row_btn_clr-macbook_pro_16-inch_silver").on("click", function(event) {
		event.preventDefault();

		$("[data-price-color]").removeClass("active");
		$("#price_clr-2").addClass("active");
	});

	$("#row_btn_clr_midnight, #row_btn_clr_gold, #row_btn_clr_midnight-se, #row_btn_clr_productred-12, #row_btn_clr_yellow, #row_btn_clr-macbook_air_silver").on("click", function(event) {
		event.preventDefault();

		$("[data-price-color]").removeClass("active");
		$("#price_clr-3").addClass("active");
	});

	$("#row_btn_clr_blue, #row_btn_clr_silver, #row_btn_clr_green-12, #row_btn_clr_white-11").on("click", function(event) {
		event.preventDefault();

		$("[data-price-color]").removeClass("active");
		$("#price_clr-4").addClass("active");
	});

	$("#row_btn_clr_pink, #row_btn_clr_alpha-green, #row_btn_clr_blue-12, #row_btn_clr_black-11").on("click", function(event) {
		event.preventDefault();

		$("[data-price-color]").removeClass("active");
		$("#price_clr-5").addClass("active");
	});

	$("#row_btn_clr_green, #row_btn_clr_purple, #row_btn_clr_productred-11").on("click", function(event) {
		event.preventDefault();

		$("[data-price-color]").removeClass("active");
		$("#price_clr-6").addClass("active");
	});        
   
/* Price-Capasity */

    $("#row_cpst-64gb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-64gb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-64gb").addClass("active");
	});
        
	$("#row_cpst-128gb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-128gb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-128gb").addClass("active");
	});

	$("#row_cpst-256gb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-256gb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-256gb").addClass("active");
	});

	$("#row_cpst-512gb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-512gb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-512gb").addClass("active");
	});
        
    $("#row_cpst-1tb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-1tb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-1tb").addClass("active");
	});
        
    $("#row_cpst-2tb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-2tb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-2tb").addClass("active");
	});
        
    $("#row_cpst-4tb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-4tb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-4tb").addClass("active");
	});
        
    $("#row_cpst-8tb").on("click", function(event) {
		event.preventDefault();

		$("[data-price-cpst]").removeClass("active");
		$("#price-8tb").addClass("active");
		$("[data-totalprice-cpst]").removeClass("active");
		$("#price-total-8tb").addClass("active");
	});
        
/* Price-M1 */
        
    $("#btn_m1-1").on("click", function(event) {
		event.preventDefault();

		$("[data-price-m1-promax]").removeClass("active");
		$("#price-m1-pro").addClass("active");	
        $("[data-price-m1]").removeClass("active");
		$("#price-m1-1").addClass("active");
        $("[data-totalprice-m1]").removeClass("active");
		$("#price-total-m1-1").addClass("active");
	});
        
     $("#btn_m1-2").on("click", function(event) {
		event.preventDefault();

		$("[data-price-m1-promax]").removeClass("active");
		$("#price-m1-pro").addClass("active");
        $("[data-price-m1]").removeClass("active");
		$("#price-m1-2").addClass("active");
        $("[data-totalprice-m1]").removeClass("active");
		$("#price-total-m1-2").addClass("active");
	});
        
     $("#btn_m1-3").on("click", function(event) {
		event.preventDefault();

		$("[data-price-m1-promax]").removeClass("active");
		$("#price-m1-pro").addClass("active");	
        $("[data-price-m1]").removeClass("active");
		$("#price-m1-3").addClass("active");
        $("[data-totalprice-m1]").removeClass("active");
		$("#price-total-m1-3").addClass("active");
	});
        
     $("#btn_m1-4").on("click", function(event) {
		event.preventDefault();

		$("[data-price-m1-promax]").removeClass("active");
		$("#price-m1-max").addClass("active");	
        $("[data-price-m1]").removeClass("active");
		$("#price-m1-4").addClass("active");
        $("[data-totalprice-m1]").removeClass("active");
		$("#price-total-m1-4").addClass("active");
	});
        
    $("#btn_m1-5").on("click", function(event) {
		event.preventDefault();

		$("[data-price-m1-promax]").removeClass("active");
		$("#price-m1-max").addClass("active");	
        $("[data-price-m1]").removeClass("active");
		$("#price-m1-5").addClass("active");
        $("[data-totalprice-m1]").removeClass("active");
		$("#price-total-m1-5").addClass("active");
	});
        
/* Price Mac */
        
    $("#btn_chs_mac1-1").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-1").addClass("active");
	});
        
    $("#btn_chs_mac1-2").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-2").addClass("active");
	});
        
    $("#btn_chs_mac1-3").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-3").addClass("active");
	});
        
    $("#btn_chs_mac1-4").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-4").addClass("active");
	});
        
    $("#btn_chs_mac1-5").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-5").addClass("active");
	});
        
    $("#btn_chs_mac1-6").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-6").addClass("active");
	});
        
    $("#btn_chs_mac1-7").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-7").addClass("active");
	});
        
    $("#btn_chs_mac1-8").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-8").addClass("active");
	});
        
    $("#btn_chs_mac1-9").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-9").addClass("active");
	});
        
    $("#btn_chs_mac1-10").on("click", function(event) {
		event.preventDefault();
		
        $("[data-price-mac]").removeClass("active");
		$("#price-total-mac-10").addClass("active");
	});
        
/* Price-Gift */
        
    $("#row_gift-1").on("click", function(event) {
		event.preventDefault();

		$("[data-price-gift]").removeClass("active");
		$("#price_gift-1").addClass("active");		
	});
        
    $("#row_gift-2").on("click", function(event) {
		event.preventDefault();

		$("[data-price-gift]").removeClass("active");
		$("#price_gift-2").addClass("active");		
	});
        
    $("#row_gift-3").on("click", function(event) {
		event.preventDefault();

		$("[data-price-gift]").removeClass("active");
		$("#price_gift-3").addClass("active");		
	});

/* Price-Arrow */

	$("#price_subtitle").on("click", function(event) {
		event.preventDefault();

		$("#price_arrow").toggleClass("active");
		$("#price_choose-pick").slideToggle("s-hide");
		$("#price_choose-ship").slideToggle("s-hide");
		$("#price_choose-pick-shide").addClass("s-hide");
		$("#price_choose-ship-shide").addClass("s-hide");
	});

	$("#price_choose-pick").on("click", function(event) {
		event.preventDefault();

		$("#price_arrow").removeClass("active");
		$("#price_choose-pick").slideToggle("s-hide");
		$("#price_choose-ship").slideToggle("s-hide");
		$("#price_choose-pick-shide").removeClass("s-hide");
		$("#input-ship-free").addClass("active");
		$("#input-ship-price").removeClass("active");
	});

	$("#price_choose-ship").on("click", function(event) {
		event.preventDefault();

		$("#price_arrow").removeClass("active");
		$("#price_choose-pick").slideToggle("s-hide");
		$("#price_choose-ship").slideToggle("s-hide");
		$("#price_choose-ship-shide").removeClass("s-hide");
		$("#input-ship-price").addClass("active");
		$("#input-ship-free").removeClass("active");
	});

    // Shop

    $("#ipad_pro").updateImg({ 
        elem_img : "#ipadImg",
        url_img  : "../assets/images/shop/ipad/gallery/ipad-pro-gallery-1.jpg"
    });
    $("#ipad_pro").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_ipad]").addClass("hide");
        $("#btn_ipad_pro").removeClass("hide");
    });

    $("#ipad_air").updateImg({ 
        elem_img : "#ipadImg",
        url_img  : "../assets/images/shop/shop/ipad-air.jpg"
    });
    $("#ipad_air").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_ipad]").addClass("hide");
        $("#btn_ipad_air").removeClass("hide");
    });

    $("#ipad_mini").updateImg({ 
        elem_img : "#ipadImg",
        url_img  : "../assets/images/shop/shop/ipad-mini.jpg"
    });
    $("#ipad_mini").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_ipad]").addClass("hide");
        $("#btn_ipad_mini").removeClass("hide");
    });

    $("#ipad_vanil").updateImg({ 
        elem_img : "#ipadImg",
        url_img  : "../assets/images/shop/shop/ipad.jpg"
    });
    $("#ipad_vanil").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_ipad]").addClass("hide");
        $("#btn_ipad_vanil").removeClass("hide");
    });

    $("#macbook-air_shop").updateImg({ 
        elem_img : "#imacImg",
        url_img  : "../assets/images/shop/mac/macbook-air-m2-midnight-select.png"
    });
    $("#macbook-air_shop, [data-imac]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('imac');

        $("[data-btn_imac]").addClass("hide");
        $("#btn_macbook_air").removeClass("hide");
        $("[data-imac]").removeClass("shop-active");
        $this.addClass("shop-active");
    });

    $("#macbook-13_shop").updateImg({ 
        elem_img : "#imacImg",
        url_img  : "../assets/images/shop/mac/macbook-pro-13-m2-family-select.png"
    });
    $("#macbook-13_shop, [data-imac]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('imac');

        $("[data-btn_imac]").addClass("hide");
        $("#btn_macbook_13").removeClass("hide");
        $("[data-imac]").removeClass("shop-active");
        $this.addClass("shop-active");
    });

    $("#macbook-14_shop").updateImg({ 
        elem_img : "#imacImg",
        url_img  : "../assets/images/shop/mac/macbook-pro-family-select.png"
    });
    $("#macbook-14_shop, [data-imac]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('imac');

        $("[data-btn_imac]").addClass("hide");
        $("#btn_macbook_14").removeClass("hide");
        $("[data-imac]").removeClass("shop-active");
        $this.addClass("shop-active");
    });

    $("#imac_shop").updateImg({ 
        elem_img : "#imacImg",
        url_img  : "../assets/images/shop/mac/imac-blue-select.png"
    });
    $("#imac_shop, [data-imac]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('imac');

        $("[data-btn_imac]").addClass("hide");
        $("#btn_imac").removeClass("hide");
        $("[data-imac]").removeClass("shop-active");
        $this.addClass("shop-active");
    });

    $("#display_shop").updateImg({ 
        elem_img : "#displayImg",
        url_img  : "../assets/images/shop/displays/studio-display-select.jpg"
    });
    $("#display_shop").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_display]").addClass("hide");
        $("#btn_display").removeClass("hide");
    });

    $("#xdr-display_shop").updateImg({ 
        elem_img : "#displayImg",
        url_img  : "../assets/images/shop/displays/pro-display-xdr-select.png"
    });
    $("#xdr-display_shop").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_display]").addClass("hide");
        $("#btn_xdr-display").removeClass("hide");
    });

    $("#mac-mini_shop").updateImg({ 
        elem_img : "#macImg",
        url_img  : "../assets/images/shop/mac/mac-mini.jpg"
    });
    $("#mac-mini_shop").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_mac]").addClass("hide");
        $("#btn_mac-mini").removeClass("hide");
    });

    $("#mac-studio_shop").updateImg({ 
        elem_img : "#macImg",
        url_img  : "../assets/images/shop/mac/mac-studio.jpg"
    });
    $("#mac-studio_shop").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_mac]").addClass("hide");
        $("#btn_mac-studio").removeClass("hide");
    });

    $("#mac-pro_shop").updateImg({ 
        elem_img : "#macImg",
        url_img  : "../assets/images/shop/mac/mac-pro.jpg"
    });
    $("#mac-pro_shop").on("click", function(event) {
        event.preventDefault();

        $("[data-btn_mac]").addClass("hide");
        $("#btn_mac-pro").removeClass("hide");
    });

}); 