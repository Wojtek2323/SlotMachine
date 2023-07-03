
const scanner = new Html5QrcodeScanner('reader', {
qrbox:{
width:400,
height:400,
},
fps:10,


});

scanner.render(success, error);

function success(result){
console.log(result);
//scanner.pause(true)

 scanner.clear().then(_ => {
    // the UI should be cleared here      
  }).catch(error => {
    // Could not stop scanning for reasons specified in `error`.
    // This conditions should ideally not happen.
  });
}

function showGame(){

//code to change to game mode

}

function error(err){
//console.log(err);	
}
