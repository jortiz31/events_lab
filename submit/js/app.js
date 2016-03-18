console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("#time").text(Date.now());

});


function rick(){
  $('div').append('<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" name="frame1" id="frame1"></iframe>');
}
