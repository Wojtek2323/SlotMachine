 // toggling view
 
 // elements:
var element = document.getElementById("slot-machine");
var guestInfo = document.getElementsByClassName("guestInfo");
var casinoLogo = document.getElementById("casinoLogo");
var scannerForm = document.getElementById("reader");
var scoreDiv = document.getElementById("score-div");
var body = document.body;
function toggleHidden() {
      
      if (element.hasAttribute("hidden")) {
        element.removeAttribute("hidden");
		body.classList.toggle('new-body');
		scannerForm.style.display = "none";
		casinoLogo.style.display = "none"
		
      } else {
        element.hidden = true;

      }
    }