function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#img_prev')
        .attr('src', e.target.result)
        .width(450)
        .height(200);
    };

    reader.readAsDataURL(input.files[0]);
  }
}


$(function(){
  $('body').on('change', '#project_image', function(){
    readURL(this);
    $('#prev-panel').css({ display: "block" });
  });
});

