jQuery_T4NT(document).ready(function($2){$2(document).on("variant:change",function(evt,variant){})});function show_form(){$("#shopify-section-template--16076995887336__16555273323fecbde1").css("display","block")}$("#maindiv").width($("#div1").width());
//# sourceMappingURL=/s/files/1/0637/4765/3864/t/15/assets/custom.js.map?v=1657339198


//Add to cart button and buy now buttons sticky
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".variations_button").addClass("sticky-button");
    } else {
        $(".variations_button").removeClass("sticky-button");
    }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
 