 //fukcja testowa połączenia
 (function connectionTest() {
  const url = 'http://localhost:3000/connectionTest';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ connectionTest })
  };

  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Otrzymany wynik z serwera
    console.log(data.wynik);
  })
  .catch(error => {
    // Obsługa błędów
    console.error(error);
  });
 })();





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
