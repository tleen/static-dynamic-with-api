(function($){
  $('.btn-time').click(function(){
    var btn = $(this);
    $.get('http://api.staticdynamic.com/time',function(data){
      $('#' + btn.attr('js-data-target')).text(data.time);
    })
      .fail(function(){
	console.log('failed');
      });
  });
})(jQuery);
