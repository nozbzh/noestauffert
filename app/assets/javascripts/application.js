//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require jquery-readyselector
//= require redactor-rails
//= require redactor-rails/plugins
//= require projects
//= require redactor-rails/config

$(document).ready(function() {
  $(".redact img").addClass("img-responsive center-block");
  $(".redact a").attr('target', '_blank');
});

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
