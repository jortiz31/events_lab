console.log("Sanity Check: JS is working!");

$(document).ready(function() {

  $("span").on("click", function handleClick(event) {
    console.log("I clicked it!");
  });

});
