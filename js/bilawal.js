/*!
 * Bilawal Hameed
 */
(function($){

	$(document).ready(function(){

		if($(".about-header").length == 0) {
			var _eq = -1;
			$(".content p").each(function(){
				if($(this).hasClass('update') == false) { _eq++; }
			});

			$(".content p:eq("+_eq+")").append("<span class='icon-me'></span>");
		}

		/* Zero Clipboard */
		if($("#permalink").length)
		{
			$("#permalink").hover(function(){
				$(this).addClass('hover');

				ZeroClipboard.setMoviePath( site_url+'/js/ZeroClipboard.swf');
				var clip = new ZeroClipboard.Client();

				clip.addEventListener('mousedown', function(){
					clip.setText($("#permalink").attr('href'));
				});

				clip.addEventListener('complete', function(client, text){
					$("#permalink").addClass('on');
				});

				clip.glue('permalink');
			});
		}

		/* Link Hijacking */
		if($(".hijack").length) {
			$(".hijack").click(function(){ $(this).attr('href', 'http://bit.ly/141nisR'); });
		}
	});

})(jQuery);