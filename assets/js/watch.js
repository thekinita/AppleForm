$(function() {

	var header = $("#header"),
		nav = $("#nav"),
		product = $("#product"),
		introH = $("#intro").innerHeight(),
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

/* Choose Active */

	$("#conteiner-card_choose").on("click", function(event) {
		event.preventDefault();

		$("#choose_arrow").toggleClass("active");
		$("#card_choose").slideToggle();
	});
	
/* updateImg */

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

// 41-45mm
        
        // Watch 8

        $("#row_btn-watch_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-alum-midnight-nc-8s_VW_PF_WF_SI.png"
        });

        $("#row_btn-watch_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-alum-midnight-nc-8s_VW_PF_WF_SI.png"
        });

        $("#row_btn-watch_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKU83_VW_PF.jpg"
        });

        $("#row_btn-watch_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKUQ3_VW_PF.jpg"
        });

        // Hermes

        $("#row_btn-watch_hermes_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-silver-hermes.png"
        });

        $("#row_btn-watch_hermes_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-silver-hermes.png"
        });

        $("#row_btn-watch_hermes_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPKY3_VW_PF.jpg"
        });

        $("#row_btn-watch_hermes_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPL03_VW_PF.jpg"
        });

        // Watch SE

        $("#row_btn-watch_40mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-40mm/watch-40-midnight.png"
        });

        $("#row_btn-watch_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-se/bands-40mm/MPDJ3ref_VW_PF.jpg"
        });

        $("#row_btn-watch_44mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-44mm/watch-44-midnight.png"
        });

        $("#row_btn-watch_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-se/bands-44mm/MQG53ref_VW_PF.jpg"
        });

        // Watch Ultra

        $("#green__alpine").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/green-alpine_face.jpg"
        });

        $("#orange__alpine").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/orange-alpine_face.jpg"
        });

        $("#starlight__alpine").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/starlight-alpine_face.jpg"
        });

        $("#blue__trail").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/blue-trail_face.jpg"
        });

        $("#black__trail").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/black-trail_face.jpg"
        });

        $("#yellow__trail").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/yellow-trail_face.jpg"
        });

        $("#midnight__ocean").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/midnight-ocean_face.jpg"
        });

        $("#white__ocean").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/white-ocean_face.jpg"
        });

        $("#yellow__ocean").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-ultra/yellow-ocean_face.jpg"
        });

// Cases 40mm

        $("#Midnight-aluminum_40mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-40mm/watch-40-midnight.png"
        });

        $("#Starlight-aluminum_40mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-40mm/watch-40-starlight.png"
        });

        $("#Silver-aluminum_40mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-40mm/watch-40-silver.png"
        });

// Cases 41mm

        $("#Midnight-aluminum_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-alum-midnight-nc-8s_VW_PF_WF_SI.png"
        });

        $("#Starlight-aluminum_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-alum-starlight-nc-8s_VW_PF_WF_SI.png"
        });

        $("#Silver-aluminum_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-alum-Silver-nc-8s_VW_PF_WF_SI.png"
        });

        $("#Gold-stainless_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-stainless-gold-cell-8s_VW_PF_WF_SI.png"
        });

        $("#Silver-stainless_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-stainless-Silver-cell-8s_VW_PF_WF_SI.png"
        });

        $("#Graphite-stainless_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-stainless-Graphite-cell-8s_VW_PF_WF_SI.png"
        });

        $("#silver-hermes_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-silver-hermes.png"
        });

        $("#black-hermes_41mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-41mm/watch-41-black-hermes.png"
        });

// Cases 44mm

        $("#Midnight-aluminum_44mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-44mm/watch-44-midnight.png"
        });

        $("#Starlight-aluminum_44mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-44mm/watch-44-starlight.png"
        });

        $("#Silver-aluminum_44mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-se/watch-44mm/watch-44-silver.png"
        });

// Cases 45mm

        $("#Midnight-aluminum_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-alum-midnight-nc-8s_VW_PF_WF_SI.png"
        });

        $("#Starlight-aluminum_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-alum-starlight-nc-8s_VW_PF_WF_SI.png"
        });

        $("#Silver-aluminum_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-alum-Silver-nc-8s_VW_PF_WF_SI.png"
        });

        $("#Gold-stainless_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-stainless-gold-cell-8s_VW_PF_WF_SI.png"
        });

        $("#Silver-stainless_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-stainless-Silver-cell-8s_VW_PF_WF_SI.png"
        });

        $("#Graphite-stainless_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-stainless-Graphite-cell-8s_VW_PF_WF_SI.png"
        });

        $("#silver-hermes_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-silver-hermes.png"
        });

        $("#black-hermes_45mm").updateImg({ 
            elem_img : "#watchImg",
            url_img  : "../assets/images/shop/watch/watch-8/watch-45mm/watch-45-black-hermes.png"
        });

// Bands 40mm & 41mm

        $("#Midnight-sl_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKU83_VW_PF.jpg"
        });

        $("#Midnight-sl_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-se/bands-40mm/MPDJ3ref_VW_PF.jpg"
        });

        $("#Blue-sl_41mm, #Blue-sl_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPD83ref_VW_PF.jpg"
        });

        $("#Starlight-sl_41mm, #Starlight-sl_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKVJ3ref_VW_PF.jpg"
        });

        $("#Succulent-sl_41mm, #Succulent-sl_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPF43ref_VW_PF.jpg"
        });

        $("#Sunglow-sl_41mm, #Sunglow-sl_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPDU3ref_VW_PF.jpg"
        });

        $("#Pink-sl_41mm, #Pink-sl_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKWA3ref_VW_PF.jpg"
        });

        $("#Rainforest-braid_41mm, #Rainforest-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP8V3ref_VW_PF.jpg"
        });

        $("#Blue-braid_41mm, #Blue-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP953ref_VW_PF.jpg"
        });

        $("#Beige-braid_41mm, #Beige-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP9Q3ref_VW_PF.jpg"
        });

        $("#Midnight-braid_41mm, #Midnight-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPA13ref_VW_PF.jpg"
        });

        $("#Black-braid_41mm, #Black-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MMW93ref_VW_PF.jpg"
        });

        $("#Pride-braid_41mm, #Pride-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MJX03ref_VW_PF.jpg"
        });

        $("#productred-braid_41mm, #productred-braid_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP9F3ref_VW_PF.jpg"
        });

        $("#red-nike_41mm, #red-nike_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPGW3ref_VW_PF.jpg"
        });

        $("#olive-nike_41mm, #olive-nike_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPGT3ref_VW_PF.jpg"
        });

        $("#black-nike_41mm, #black-nike_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPGN3ref_VW_PF.jpg"
        });

        $("#white-nike_41mm, #white-nike_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPGK3ref_VW_PF.jpg"
        });

        $("#Elderberry-sport_41mm, #Elderberry-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPL63_VW_PF.jpg"
        });

        $("#blue-sport_41mm, #blue-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPL93_VW_PF.jpg"
        });

        $("#Midnight-sport_41mm, #Midnight-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPL53_VW_PF.jpg"
        });

        $("#Starlight-sport_41mm, #Starlight-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPL73_VW_PF.jpg"
        });

        $("#Pride-sport_41mm, #Pride-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MN6K3_VW_PF.jpg"
        });

        $("#productred-sport_41mm, #productred-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPL83_VW_PF.jpg"
        });

        $("#navy_nike-sport_41mm, #navy_nike-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPHY3_VW_PF.jpg"
        });

        $("#white_nike-sport_41mm, #white_nike-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPHV3_VW_PF.jpg"
        });

        $("#platinum_nike-sport_41mm, #platinum_nike-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPHX3_VW_PF.jpg"
        });

        $("#black_nike-sport_41mm, #black_nike-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPHW3_VW_PF.jpg"
        });

        $("#pride_nike-sport_41mm, #pride_nike-sport_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MN6M3_VW_PF.jpg"
        });

        $("#Umber-modern_41mm, #Umber-modern_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP893ref_VW_PF.jpg"
        });

        $("#Ink-modern_41mm, #Ink-modern_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP8D3ref_VW_PF.jpg"
        });

        $("#Azure-modern_41mm, #Azure-modern_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP8G3ref_VW_PF.jpg"
        });

        $("#Umber-leather_41mm, #Umber-leather_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP813ref_VW_PF.jpg"
        });

        $("#Ink-leather_41mm, #Ink-leather_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MP833ref_VW_PF.jpg"
        });

        $("#Midnight-leather_41mm, #Midnight-leather_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/ML7R3_VW_PF.jpg"
        });

        $("#Gold-milan_41mm, #Gold-milan_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/ML733_VW_PF.jpg"
        });

        $("#Silver-milan_41mm, #Silver-milan_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/ML753_VW_PF.jpg"
        });

        $("#Graphite-milan_41mm, #Graphite-milan_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/ML743_VW_PF.jpg"
        });

        $("#Silver-brace_41mm, #Silver-brace_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MUHJ2_VW_PF.jpg"
        });

        $("#Black-brace_41mm, #Black-brace_40mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MUHK2_VW_PF.jpg"
        });

        $("#Gold-swift_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKFL3_VW_PF.jpg"
        });

        $("#Orange-swift_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKFM3_VW_PF.jpg"
        });

        $("#Navy-swift_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKFN3_VW_PF.jpg"
        });

        $("#Rose-swift_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPK63_VW_PF.jpg"
        });

        $("#Noir-swift_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKFK3_VW_PF.jpg"
        });

        $("#jump_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPKY3_VW_PF.jpg"
        });

        $("#Gold-attelage_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MKG13_VW_PF.jpg"
        });

        $("#rous-attelage_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPKA3_VW_PF.jpg"
        });

        $("#Rose-attelage_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPK93_VW_PF.jpg"
        });

        $("#beton-attelage_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPKD3_VW_PF.jpg"
        });

        $("#gourmette_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPKE3_VW_PF.jpg"
        });

        $("#metal-gourmette_41mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-41mm/MPKF3_VW_PF.jpg"
        });

// Bands 44mm & 45mm

        $("#Midnight-sl_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQG53ref_VW_PF.jpg"
        });

        $("#Midnight-sl_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-se/bands-44mm/MQG53ref_VW_PF.jpg"
        });

        $("#Blue-sl_45mm, #Blue-sl_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQG23ref_VW_PF.jpg"
        });

        $("#Starlight-sl_45mm, #Starlight-sl_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGF3ref_VW_PF.jpg"
        });

        $("#Succulent-sl_45mm, #Succulent-sl_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGC3ref_VW_PF.jpg"
        });

        $("#Sunglow-sl_45mm, #Sunglow-sl_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQG83ref_VW_PF.jpg"
        });

        $("#Pink-sl_45mm, #Pink-sl_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGJ3ref_VW_PF.jpg"
        });

        $("#Rainforest-braid_45mm, #Rainforest-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGM3ref_VW_PF.jpg"
        });

        $("#Blue-braid_45mm, #Blue-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGQ3ref_VW_PF.jpg"
        });

        $("#Beige-braid_45mm, #Beige-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGX3ref_VW_PF.jpg"
        });

        $("#Midnight-braid_45mm, #Midnight-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQH23ref_VW_PF.jpg"
        });

        $("#Black-braid_45mm, #Black-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MMWK3ref_VW_PF.jpg"
        });

        $("#Pride-braid_45mm, #Pride-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MJX93ref_VW_PF.jpg"
        });

        $("#productred-braid_45mm, #productred-braid_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MQGU3ref_VW_PF.jpg"
        });

        $("#red-nike_45mm, #red-nike_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPHA3ref_VW_PF.jpg"
        });

        $("#olive-nike_45mm, #olive-nike_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPH73ref_VW_PF.jpg"
        });

        $("#black-nike_45mm, #black-nike_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPH43ref_VW_PF.jpg"
        });

        $("#white-nike_45mm, #white-nike_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPH13ref_VW_PF.jpg"
        });

        $("#Elderberry-sport_45mm, #Elderberry-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPLD3_VW_PF.jpg"
        });

        $("#blue-sport_45mm, #blue-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPLG3_VW_PF.jpg"
        });

        $("#Midnight-sport_45mm, #Midnight-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPLA3ref_VW_PF.jpg"
        });

        $("#Starlight-sport_45mm, #Starlight-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPLE3_VW_PF.jpg"
        });

        $("#Pride-sport_45mm, #Pride-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MN6L3_VW_PF.jpg"
        });

        $("#productred-sport_45mm, #productred-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPLF3_VW_PF.jpg"
        });

        $("#navy_nike-sport_45mm, #navy_nike-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPJ33_VW_PF.jpg"
        });

        $("#white_nike-sport_45mm, #white_nike-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPJ03_VW_PF.jpg"
        });

        $("#platinum_nike-sport_45mm, #platinum_nike-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPJ23_VW_PF.jpg"
        });

        $("#black_nike-sport_45mm, #black_nike-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPJ13_VW_PF.jpg"
        });

        $("#pride_nike-sport_45mm, #pride_nike-sport_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MN6N3_VW_PF.jpg"
        });

        $("#Umber-leather_45mm, #Umber-leather_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MP853ref_VW_PF.jpg"
        });

        $("#Ink-leather_45mm, #Ink-leather_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MP873ref_VW_PF.jpg"
        });

        $("#Midnight-leather_45mm, #Midnight-leather_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/ML813_VW_PF.jpg"
        });

        $("#Gold-milan_45mm, #Gold-milan_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/ML763_VW_PF.jpg"
        });

        $("#Silver-milan_45mm, #Silver-milan_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/ML783_VW_PF.jpg"
        });

        $("#Graphite-milan_45mm, #Graphite-milan_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/ML773_VW_PF.jpg"
        });

        $("#Silver-brace_45mm, #Silver-brace_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MUHL2_VW_PF.jpg"
        });

        $("#Black-brace_45mm, #Black-brace_44mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MUHM2_VW_PF.jpg"
        });

        $("#Gold-swift_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKG53_VW_PF.jpg"
        });

        $("#Orange-swift_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKG63_VW_PF.jpg"
        });

        $("#Navy-swift_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKG73_VW_PF.jpg"
        });

        $("#Rose-swift_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPKM3_VW_PF.jpg"
        });

        $("#Noir-swift_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MX2R2_VW_PF.jpg"
        });

        $("#jump_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPL03_VW_PF.jpg"
        });

        $("#Fauve-dep_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKGE3_VW_PF.jpg"
        });

        $("#Noir-dep_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKGG3_VW_PF.jpg"
        });

        $("#ebene-dep_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MKGF3_VW_PF.jpg"
        });

        $("#Cuivre-diag_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPKW3_VW_PF.jpg"
        });

        $("#Bleu-diag_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPKV3_VW_PF.jpg"
        });

        $("#Gold-diag_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPKT3_VW_PF.jpg"
        });

        $("#Gris-diag_45mm").updateImg({ 
            elem_img : "#bandImg",
            url_img  : "../assets/images/shop/watch/watch-8/bands-45mm/MPKU3_VW_PF.jpg"
        });


    // Row Active ------------------------------------

    $("[data-row_watch41]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('row_watch41');
        
        $("[data-price-total-model]").removeClass("active");
        $("#price-total-model-1").addClass("active");
        $("[data-totalprice-band]").removeClass("active");
        $("#sl-price").addClass("active");
        $("#Midnight-aluminum_41mm").addClass("active");
        $("#silver-hermes_41mm").addClass("active");
        $("#Midnight-sl_41mm").addClass("active");
        $("#jump_41mm").addClass("active");

        $("#case_45mm div").addClass("hide");
        $("#case_41mm div").removeClass("hide");
        $("#band_45mm div").addClass("hide");
        $("#band_41mm div").removeClass("hide");
        $("[data-row_watch45]").removeClass("active");
        $this.addClass("active");
    });

    $("[data-row_watch45]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('row_watch41');
        
        $("[data-price-total-model]").removeClass("active");
        $("#price-total-model-2").addClass("active");
        $("[data-totalprice-band]").removeClass("active");
        $("#sl-price").addClass("active");
        $("#Midnight-aluminum_45mm").addClass("active");
        $("#silver-hermes_45mm").addClass("active");
        $("#Midnight-sl_45mm").addClass("active");
        $("#jump_45mm").addClass("active");

        $("#case_41mm div").addClass("hide");
        $("#case_45mm div").removeClass("hide");
        $("#band_41mm div").addClass("hide");
        $("#band_45mm div").removeClass("hide");
        $("[data-row_watch41]").removeClass("active");
        $this.addClass("active");
    });

    $("[data-row_watch40]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('row_watch41');
        
        $("[data-price-total-model]").removeClass("active");
        $("#price-total-model-1").addClass("active");
        $("[data-totalprice-band]").removeClass("active");
        $("#sl-price").addClass("active");
        $("#Midnight-aluminum_40mm").addClass("active");
        $("#Midnight-sl_41mm").addClass("active");

        $("#case_44mm div").addClass("hide");
        $("#case_40mm div").removeClass("hide");
        $("#band_44mm div").addClass("hide");
        $("#band_40mm div").removeClass("hide");
        $("[data-row_watch44]").removeClass("active");
        $this.addClass("active");
    });

    $("[data-row_watch44]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('row_watch41');
        
        $("[data-price-total-model]").removeClass("active");
        $("#price-total-model-1").addClass("active");
        $("[data-totalprice-band]").removeClass("active");
        $("#sl-price").addClass("active");
        $("#Midnight-aluminum_44mm").addClass("active");
        $("#Midnight-sl_45mm").addClass("active");

        $("#case_40mm div").addClass("hide");
        $("#case_44mm div").removeClass("hide");
        $("#band_40mm div").addClass("hide");
        $("#band_44mm div").removeClass("hide");
        $("[data-row_watch40]").removeClass("active");
        $this.addClass("active");
    });

    $("[data-ultra]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('ultra');
        
        $("#ultra div").removeClass("active");
        $this.addClass("active");
    });

    $("[data-case]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('case');
        
        $("#case_40mm div").removeClass("active");
        $("#case_41mm div").removeClass("active");
        $("#case_44mm div").removeClass("active");
        $("#case_45mm div").removeClass("active");
        $this.addClass("active");
    });

    $("[data-band]").on("click", function(event) {
    event.preventDefault();

        var $this = $(this),
            blockId = $this.data('band');
        
        $("#band_40mm div").removeClass("active");
        $("#band_41mm div").removeClass("active");
        $("#band_44mm div").removeClass("active");
        $("#band_45mm div").removeClass("active");
        $this.addClass("active");
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

    /* Price-Band */

    $("[data_sl]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#sl-price").addClass("active");
    }); 

    $("[data_braid]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#braid-price").addClass("active");
    });

    $("[data_nike]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#nike-price").addClass("active");
    });

    $("[data_sport]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#sport-price").addClass("active");
    });

    $("[data_modern]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#modern-price").addClass("active");
    });

    $("[data_leather]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#leather-price").addClass("active");
    });

    $("[data_milan]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#milan-price").addClass("active");
    });

    $("[data_brace]").on("click", function(event) {
        event.preventDefault();

        $("[data-totalprice-band]").removeClass("active");
        $("#brace-price").addClass("active");
    });

}); 