function invisible(id) {
  $('#' + id).css({ display: 'none' });
  $('.' + id).css({ fontWeight: '400' });
}
function visible(id) {
  $('#' + id).css({ display: 'block' });
  $('.' + id).css({ fontWeight: '700' });
}

$(function () {
  $(window)
    .resize(function () {
      var width = window.innerWidth;
      if (width <= 767) {
        $('#mbtiimg').attr('src', './images/mbti-mobile.png');
      } 
      else {
        $('#mbtiimg').attr('src', './images/mbti.png');
        
      }
    })
    .resize();
});